import axios from 'axios';
import cheerio from 'cheerio';

class X extends Error {
    constructor(msg) {
        super(msg);
        this.name = "X";
    }
}

class Y {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    hdrs(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'user-agent': 'Mozilla/5.0 (compatible; scraper/1.0)',
            ...custom
        };
    }

    hndErr(e, c) {
        const errs = e.response ? JSON.stringify(e.response.data || e.message) : e.message;
        console.error(`[${c}] Error:`, errs);
        throw new X(errs);
    }

    ep(name) {
        return this[name];
    }
}

class Z extends Y {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async pfx() {
        try {
            const res = await axios.get(this.ep('b'));
            return this.scrpPfx(res.data);
        } catch (e) {
            this.hndErr(e, 'Pfx');
        }
    }

    scrpPfx(html) {
        const $ = cheerio.load(html);
        return $('#aio-search-box input[name="prefix"]').val();
    }

    async fch(id) {
        try {
            const pfx = await this.pfx();
            const res = await axios.post(this.ep('a'), `prefix=${encodeURIComponent(pfx)}&vid=${encodeURIComponent(id)}`, { headers: this.hdrs() });
            return this.prsHtml(res.data);
        } catch (e) {
            this.hndErr(e, 'Fch');
        }
    }

    prsHtml(html) {
        const $ = cheerio.load(html);
        const r = { t: '', d: '', v: [], a: [] };

        $('.col').each((_, el) => {
            const title = $(el).find('#text-786685718 strong').first();
            r.t = title.text().replace('Title：', '').trim() || r.t;

            const desc = $(el).find('.description').text();
            r.d = desc.trim() || '';

            $(el).find('a.button.primary').each((_, linkEl) => {
                const linkUrl = $(linkEl).attr('href');
                const quality = $(linkEl).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        r.a.push({ q: quality, url: linkUrl });
                    } else {
                        r.v.push({ q: quality, url: linkUrl });
                    }
                }
            });
        });

        return r;
    }

    async scrp(link) {
        try {
            return await this.fch(link);
        } catch (e) {
            console.error(`Error: ${e.message}`);
            throw e;
        }
    }
}

const tolsvideo = async (url) => {
    const z = new Z();
    return await z.scrp(url);
};

module.exports = tolsvideo;