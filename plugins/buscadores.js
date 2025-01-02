require('../main.js')
const fs = require("fs")
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom
} = require('../libs/fuctions.js');
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone')
const gradient = require('gradient-string')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const {
    googleImage,
    pinterest
} = require('@bochilteam/scraper')
const Jimp = require('jimp')
const FormData = require("form-data")
const os = require('os')
let user = global.db.data.users[m.sender]
async function buscadores(m, command, conn, text, budy, from, fkontak, prefix, args, q, quoted, lang, lolkeysapi) {
    if (!global.db.data.users[m.sender].registered) return m.reply(info.registra);
    if (global.db.data.users[m.sender].banned) return;
    
    if (command === 'yts' || command === 'ytsearch') {
        if (global.db.data.users[m.sender].level < 2) {
            return m.reply(`${lenguaje['nivel']()} 2 ${lenguaje['nivel2']()} ${prefix}nivel`);
        }
        if (!text) {
            return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} anime`);
        const yts = require("youtube-yts");
        const search = await yts(text);
        const {
            key
        } = await conn.sendMessage(from, {
            text: info.wait
        }, {
            quoted: fkontak
        })
        await conn.sendMessage(from, {
            text: info.waitt,
            edit: key
        }, {
            quoted: fkontak
        })
        await conn.sendMessage(from, {
            text: info.waittt,
            edit: key
        }, {
            quoted: fkontak
        })
        await conn.sendMessage(from, {
            text: info.waitttt,
            edit: key
        }, {
            quoted: fkontak
        })
        let teks = `💫 ${lenguaje['result']()} ` + text + '\n\n';
        let no = 1;
        let themeemoji = "🔍"
        for (let i of search.all) {
            teks += `${themeemoji} ${lenguaje.lengua.opcion} ${no++}\n${themeemoji} ${lenguaje.lengua.tipo} ${i.type}\n${themeemoji} ${lenguaje.lengua.id} ${i.videoId}\n${themeemoji} ${lenguaje.lengua.titulo} ${i.title}\n${themeemoji} ${lenguaje.lengua.vista} ${i.views}\n${themeemoji} ${lenguaje.lengua.dura} ${i.timestamp}\n${themeemoji} ${lenguaje.lengua.subidos} ${i.ago}\n${themeemoji} URL: ${i.url}\n\n━═━═━═━═━═━══━═━═━═━\n\n`;
        }
        await conn.sendMessage(from, {
            image: {
                url: search.all[0].thumbnail
            },
            caption: teks
        }, {
            quoted: fkontak
        });
        await conn.sendMessage(from, {
            text: info.result,
            edit: key
        }, {
            quoted: fkontak,
            ephemeralExpiration: 24 * 60 * 100,
            disappearingMessagesInChat: 24 * 60 * 100
        })
        m.react('💫')
    }
}
    if (command == 'acortar') {
        if (global.db.data.users[m.sender].level < 2) return m.reply(`${lenguaje['nivel']()} 2 ${lenguaje['nivel2']()} ${prefix}nivel`)
        if (!text) return m.reply(`${lenguaje.lengua.text}`)
        let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
        if (!shortUrl1) return m.reply(`${lenguaje['error']()}`)
        m.reply(`${shortUrl1}`)
    }


if (command == 'google') {
    if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} gatito`);

    const query = encodeURIComponent(text);
    const googleUrl = `https://www.google.com/search?q=${query}`;
    const apiUrl = `https://eliasar-yt-api.vercel.app/api/google?query=${query}`;
    const screenshotUrl = `https://eliasar-yt-api.vercel.app/api/ssweb?url=${googleUrl}`;

    let response = await axios.get(apiUrl);
    if (response.data.status) {
        let teks = `💫  ${lenguaje['result']()} ${text}\n\n`;
        for (let g of response.data.results) {
            teks += `🔍 ${lenguaje.lengua.titulo} ${g.title}\n`;
            teks += `🔍 *LINK* : ${g.link}\n\n★━━━━━━✩━━━━━━★\n\n`;
        }
        conn.sendFile(m.chat, screenshotUrl, 'screenshot.png', teks.trim(), m);
    } else {
        m.reply('Error en la búsqueda.');
    }
}


    if (command == 'imagen') {
        const {
            googleImage
        } = require('@bochilteam/scraper');

        if (
            budy.toLowerCase().includes('gore') || budy.toLowerCase().includes('cp') || budy.toLowerCase().includes('porno') || budy.toLowerCase().includes('hentai') ||
            budy.toLowerCase().includes('xxx') || budy.toLowerCase().includes('nsfw') || budy.toLowerCase().includes('erotic') || budy.toLowerCase().includes('adult') ||
            budy.toLowerCase().includes('mature') || budy.toLowerCase().includes('lewd') || budy.toLowerCase().includes('uncensored') || budy.toLowerCase().includes('sexvideo') ||
            budy.toLowerCase().includes('nudity') || budy.toLowerCase().includes('sexy') || budy.toLowerCase().includes('eroticart') || budy.toLowerCase().includes('eroticcomic') ||
            budy.toLowerCase().includes('eroticmanga') || budy.toLowerCase().includes('eroticcosplay') || budy.toLowerCase().includes('sexyanimation') || budy.toLowerCase().includes('sexymanga') ||
            budy.toLowerCase().includes('sexycartoon') || budy.toLowerCase().includes('sexycomic') || budy.toLowerCase().includes('sexycosplay') || budy.toLowerCase().includes('sexyanime') ||
            budy.toLowerCase().includes('sexymeme') || budy.toLowerCase().includes('xxxpic') || budy.toLowerCase().includes('xxxgif') || budy.toLowerCase().includes('sextoys') ||
            budy.toLowerCase().includes('fetish') || budy.toLowerCase().includes('bondage') || budy.toLowerCase().includes('footfetish') || budy.toLowerCase().includes('pee') ||
            budy.toLowerCase().includes('scat') || budy.toLowerCase().includes('incest') || budy.toLowerCase().includes('lolicon') || budy.toLowerCase().includes('yaoi') ||
            budy.toLowerCase().includes('yuri') || budy.toLowerCase().includes('furry') || budy.toLowerCase().includes('futanari') || budy.toLowerCase().includes('sexslave') ||
            budy.toLowerCase().includes('orgasm') || budy.toLowerCase().includes('squirting') || budy.toLowerCase().includes('prostitute') || budy.toLowerCase().includes('stripper') ||
            budy.toLowerCase().includes('escort') || budy.toLowerCase().includes('eroticmodel') || budy.toLowerCase().includes('sexygirl') || budy.toLowerCase().includes('sexyboy') ||
            budy.toLowerCase().includes('sexdoll') || budy.toLowerCase().includes('sexmachine') || budy.toLowerCase().includes('camgirl') || budy.toLowerCase().includes('camboy') ||
            budy.toLowerCase().includes('sexchat') || budy.toLowerCase().includes('boobs') || budy.toLowerCase().includes('tits') || budy.toLowerCase().includes('pussy') ||
            budy.toLowerCase().includes('cock') || budy.toLowerCase().includes('dick') || budy.toLowerCase().includes('horny') || budy.toLowerCase().includes('adultcontent') ||
            budy.toLowerCase().includes('pornographic') || budy.toLowerCase().includes('eroticvideo') || budy.toLowerCase().includes('eroticmovie') || budy.toLowerCase().includes('sexgame') ||
            budy.toLowerCase().includes('sexygame') || budy.toLowerCase().includes('pornstream') || budy.toLowerCase().includes('adultstreamer') || budy.toLowerCase().includes('pornstar') ||
            budy.toLowerCase().includes('sexystripper') || budy.toLowerCase().includes('eroticmassage') || budy.toLowerCase().includes('sexylingerie') || budy.toLowerCase().includes('sexycostume')
        ) {
            return m.reply('😐');
        }

        if (!text) return m.reply(`${lenguaje.lengua.ejemplo}\n${prefix + command} gatito`)
        try {
            image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
            n = image.result
            images = n[Math.floor(Math.random() * n.length)]
            conn.sendMessage(m.chat, {
                image: {
                    url: images
                },
                caption: `✨ ${lenguaje['result']()} ${text}`
            }, {
                quoted: m,
                ephemeralExpiration: 24 * 60 * 100,
                disappearingMessagesInChat: 24 * 60 * 100
            })
        } catch {
            try {
                const res = await googleImage(text);
                const image = res[Math.floor(Math.random() * res.length)]
                const link = image;
                conn.sendMessage(m.chat, {
                    image: {
                        url: link
                    },
                    caption: `💫 ${lenguaje['result']()} : ${text}`
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                })
            } catch (e) {
                console.log(e)
            }
        }
    }

    if (command == 'traducir' || command == 'translate') {
        const translate = require('@vitalets/google-translate-api')
        if (!args || !args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} es hello`)
        let lang = args[0];
        let text = args.slice(1).join(' ');
        const defaultLang = 'es';
        if ((args[0] || '').length !== 2) {
            lang = defaultLang;
            text = args.join(' ');
        }
        if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
        try {
            const result = await translate(`${text}`, {
                to: lang,
                autoCorrect: true
            });
            await m.reply(`${lenguaje.lengua.trad} : ` + result.text);
        } catch {
            try {
                const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
                const loll = await lol.json();
                const result2 = loll.result.translated;
                await m.reply(`${lenguaje.lengua.trad} : ` + result2);
            } catch {
                await m.reply(info.error)
            }
        }
    }

    if (command == 'tts') {
        if (!text) return m.reply(`${lenguaje.lengua.text2}`)
        await conn.sendPresenceUpdate('recording', m.chat)
        let texttosay = text ?
            text :
            m.quoted && m.quoted.text ?
            m.quoted.text :
            m.text;
        const SpeakEngine = require("google-tts-api");
        const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {
            lang: "es",
            slow: false,
            host: "https://translate.google.com",
        });
        conn.sendMessage(m.chat, {
            audio: {
                url: texttospeechurl
            },
            contextInfo: {
                "externalAdReply": {
                    "title": botname,
                    "body": ``,
                    "previewType": "PHOTO",
                    "thumbnailUrl": null,
                    "thumbnail": imagen1,
                    "sourceUrl": md,
                    "showAdAttribution": true
                }
            },
            seconds: '4556',
            ptt: true,
            mimetype: 'audio/mpeg',
            fileName: `error.mp3`
        }, {
            quoted: m,
            ephemeralExpiration: 24 * 60 * 100,
            disappearingMessagesInChat: 24 * 60 * 100
        })
        m.react('🗣️')
    }

if (command == 'chatgpt' || command == 'ia') {
    const {
        Configuration,
        OpenAIApi
    } = require('openai');

    const configuration = new Configuration({
        organization: global.openai_org_id,
        apiKey: global.openai_key
    });

    const openaiii = new OpenAIApi(configuration);

    if (prefix == 'a' || prefix == 'A') return;
    if (!text) return m.reply(`${lenguaje.lengua.ia} ${prefix + command} Recomienda un top 10 de películas de acción`);

    try {
        conn.sendPresenceUpdate('composing', m.chat);
        const sistema1 = `Actuarás como Ansibot, un bot de WhatsApp agradable y tu creador es Eliasar54 (EliasarYT)`;

        try {
            const apiURL1 = `https://api.ryzendesu.vip/api/ai/chatgpt?text=${encodeURIComponent(text)}&prompt=${encodeURIComponent(sistema1)}`;
            const response1 = await fetch(apiURL1);
            const result1 = await response1.json();

            if (result1.success && result1.response) {
                m.react('💬');
                return m.reply(result1.response.trim());
            } else {
                throw new Error();
            }
        } catch (error1) {}

        try {
            const apiURL2 = `https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(sistema1)}&content=${encodeURIComponent(text)}`;
            const response2 = await fetch(apiURL2);
            const result2 = await response2.json();

            if (result2.status && result2.data) {
                m.react('💬');
                return m.reply(result2.data.trim());
            } else {
                throw new Error();
            }
        } catch (error2) {
            m.reply("Ocurrió un error al procesar la solicitud con ambas APIs.");
        }
    } catch (error) {
        m.reply("Ocurrió un error al procesar la solicitud.");
    }
}


    if (command === 'gpt4o' || command === 'gpt') {
        const translate = require('@vitalets/google-translate-api')
        const {
            Configuration,
            OpenAIApi
        } = require('openai')
        const configuration = new Configuration({
            organization: global.openai_org_id,
            apiKey: global.openai_key
        })
        const openaiii = new OpenAIApi(configuration)

        if (prefix === 'a' || prefix === 'A') return
        if (!text) return m.reply(`${lenguaje.lengua.ia} ${prefix + command} Recomienda un top 10 de películas de acción`)

        try {
            conn.sendPresenceUpdate('composing', m.chat)

            const apiURL = `https://api.agatz.xyz/api/gpt4o?message=${encodeURIComponent(text)}`
            const response = await fetch(apiURL)
            const result = await response.json()

            try {
                m.react('💬')
            } catch (error) {
                console.error("Ocurrió un error al reaccionar:", error)
            }

            if (result.status === 200 && result.data && result.data.result) {
                m.reply(result.data.result.trim())
            } else {
                throw new Error('Error en la respuesta de la API')
            }
        } catch (error) {
            console.error("Ocurrió un error:", error)
            m.reply("Ocurrió un error al procesar la solicitud.")
        }
    }

    if (command === 'ip') {
        const fetch = require('node-fetch')

        if (!text) return m.reply("Por favor proporciona una IP. Ejemplo: .ip 8.8.8.8")

        const apiURL = `https://api.ryzendesu.vip/api/tool/iplocation?ip=${encodeURIComponent(text)}`

        try {
            conn.sendPresenceUpdate('composing', m.chat)

            const response = await fetch(apiURL)
            const result = await response.json()

            if (result.ipInfo) {
                const ipInfo = result.ipInfo
                const message = `
🌐 *Información de la IP*: ${ipInfo.ip}

📍 Ubicación: ${ipInfo.city}, ${ipInfo.region}, ${ipInfo.country_name}
🗺️ Coordenadas: Latitud ${ipInfo.latitude}, Longitud ${ipInfo.longitude}
🌐 Continente: ${ipInfo.continent_code}
🕓 Zona Horaria: ${ipInfo.timezone} (UTC${ipInfo.utc_offset})
📞 Código de País: ${ipInfo.country_calling_code}
💵 Moneda: ${ipInfo.currency} (${ipInfo.currency_name})
📡 Red: ASN ${ipInfo.asn}, Organización: ${ipInfo.org}, Rango de Red: ${ipInfo.network}
`
                m.reply(message.trim())
            } else {
                m.reply("Error en la respuesta de la API")
            }
        } catch (error) {
            m.reply("Ocurrió un error al procesar la solicitud.")
        }
    }

if (command == 'dalle' || command == 'aimg' || command == 'imagine' || command == 'dall-e') {
    if (!text) return m.reply(`${lenguaje.lengua.ia2} ${prefix + command} gatitos llorando`);
    m.reply(`${lenguaje.lengua.espere}`);

    try {
        const apiURL1 = `https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${encodeURIComponent(text)}`;
        await conn.sendMessage(m.chat, {
            image: { url: apiURL1 }
        }, {
            quoted: m,
            ephemeralExpiration: 24 * 60 * 100,
            disappearingMessagesInChat: 24 * 60 * 100
        });
    } catch (e1) {
        console.log(`${info.error + e1}`);

        try {
            const apiURL2 = `https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=${encodeURIComponent(text)}`;
            await conn.sendMessage(m.chat, {
                image: { url: apiURL2 }
            }, {
                quoted: m,
                ephemeralExpiration: 24 * 60 * 100,
                disappearingMessagesInChat: 24 * 60 * 100
            });
        } catch (e2) {
            console.log(`${info.error + e2}`);

            try {
                const apiURL3 = `https://api.dorratz.com/v2/image-ai?prompt=${encodeURIComponent(text)}`;
                await conn.sendMessage(m.chat, {
                    image: { url: apiURL3 }
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                });
            } catch (e3) {
                console.log(`${info.error + e3}`);

                try {
                    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
                    const json1 = await tiores1.json();
                    await conn.sendMessage(m.chat, {
                        image: { url: json1.data }
                    }, {
                        quoted: m,
                        ephemeralExpiration: 24 * 60 * 100,
                        disappearingMessagesInChat: 24 * 60 * 100
                    });
                } catch (e4) {
                    console.log(`${info.error + e4}`);

                    try {
                        const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
                        await conn.sendMessage(m.chat, {
                            image: { url: tiores2.data }
                        }, {
                            quoted: m,
                            ephemeralExpiration: 24 * 60 * 100,
                            disappearingMessagesInChat: 24 * 60 * 100
                        });
                    } catch (e5) {
                        console.log(`${info.error + e5}`);

                        try {
                            const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
                            const json3 = await tiores3.json();
                            await conn.sendMessage(m.chat, {
                                image: { url: json3.data[0].images[0].url }
                            }, {
                                quoted: m,
                                ephemeralExpiration: 24 * 60 * 100,
                                disappearingMessagesInChat: 24 * 60 * 100
                            });
                        } catch (e6) {
                            console.log(`${info.error + e6}`);

                            try {
                                const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
                                await conn.sendMessage(m.chat, {
                                    image: { url: tiores4.data }
                                }, {
                                    quoted: m,
                                    ephemeralExpiration: 24 * 60 * 100,
                                    disappearingMessagesInChat: 24 * 60 * 100
                                });
                            } catch (e7) {
                                console.log(`${info.error + e7}`);
                                return m.reply(info.error);
                            }
                        }
                    }
                }
            }
        }
    }
}

    if (command == 'ss' || command == 'ssweb') {
        if (!text) return m.reply(`${lenguaje.lengua.ejem} ${prefix + command} link`)
        m.react("🔍")
        conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')

        try {
            const response = await fetch(`https://api.dorratz.com/ssweb?url=${text}`)
            const data = await response.json()
            if (data.result) {
                await conn.sendMessage(m.chat, {
                    image: {
                        url: data.result
                    },
                    caption: `Aquí tienes la captura de ${text}`
                }, {
                    quoted: m
                })
            } else {
                throw new Error('No se pudo obtener la captura de pantalla')
            }
        } catch (error) {
            m.reply('Ocurrió un error al obtener la captura de pantalla.')
        }
    }

    if (command == 'pinterest') {
        if (global.db.data.users[m.sender].level < 2) return m.reply(`${lenguaje['nivel']()} 2 ${lenguaje['nivel2']()} ${prefix}nivel`)
        if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} Gatos`)
        m.react("🔍")
        const json = await pinterest(text)
        conn.sendFile(m.chat, pickRandom(json), 'pinterest.jpg', `${lenguaje['result']()} ${text}`.trim(), m)
    }

    if (command == 'wikipedia' || command == 'wiki') {
        if (global.db.data.users[m.sender].level < 3) return m.reply(`${lenguaje['nivel']()} 3 ${lenguaje['nivel2']()} ${prefix}nivel`)
        if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} quien es Colón?`)
        m.react("🔍")
        try {
            const link = await axios.get(`https://es.wikipedia.org/wiki/${text}`)
            const $ = cheerio.load(link.data)
            let wik = $('#firstHeading').text().trim()
            let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
            m.reply(`‣ ${lenguaje['result']()}\n\n${resulw}`)
        } catch (e) {
            return m.reply(info.error)
            console.log(e)
        }
    }

    if (command == 'wallpaper') {
        if (global.db.data.users[m.sender].level < 3) return m.reply(`${lenguaje['nivel']()} 3 ${lenguaje['nivel2']()} ${prefix}nivel`)
        if (!text) return m.reply(`${lenguaje.lengua.ejem} ${prefix + command} anime*`)
        m.react("🔍")
        let {
            wallpaper,
            wallpaperv2
        } = require('@bochilteam/scraper')
        let _res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
        let _img = _res[Math.floor(Math.random() * _res.length)]
        conn.sendMessage(m.chat, {
            image: {
                url: _img
            },
            caption: `_${lenguaje['result']()} ${text}_`
        }, {
            quoted: m,
            ephemeralExpiration: 24 * 60 * 100,
            disappearingMessagesInChat: 24 * 60 * 100
        })
    }

    if (command == 'hd') {
        const FormData = require("form-data")
        const Jimp = require("jimp")
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || q.mediaType || "";
        if (!mime) return m.reply(`${lenguaje.lengua.responde} ${prefix + command}*`)
        if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`${lenguaje.lengua.incorrecto}`)
        m.reply(`${lenguaje.lengua.aguarde}`)
        try {
            let img = await q.download?.();
            let pr = await remini(img, "enhance");
            conn.sendMessage(m.chat, {
                image: pr,
                caption: `${lenguaje.lengua.hd}`
            }, {
                quoted: m,
                ephemeralExpiration: 24 * 60 * 100,
                disappearingMessagesInChat: 24 * 60 * 100
            });
        } catch (e) {
            return m.reply(info.error)
            console.log(e)
        }
    }

    if (command == 'horario') {
        const moment = require('moment-timezone')
        const tzPE = moment().tz('America/Lima').format('DD/MM HH:mm');
        const tzMX = moment().tz('America/Mexico_City').format('DD/MM HH:mm');
        const tzBO = moment().tz('America/La_Paz').format('DD/MM HH:mm');
        const tzCL = moment().tz('America/Santiago').format('DD/MM HH:mm');
        const tzAR = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm');
        const tzCO = moment().tz('America/Bogota').format('DD/MM HH:mm');
        const tzEC = moment().tz('America/Guayaquil').format('DD/MM HH:mm');
        const tzCR = moment().tz('America/Costa_Rica').format('DD/MM HH:mm');
        const tzCU = moment().tz('America/Havana').format('DD/MM HH:mm');
        const tzGT = moment().tz('America/Guatemala').format('DD/MM HH:mm');
        const tzHN = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm');
        const tzNI = moment().tz('America/Managua').format('DD/MM HH:mm');
        const tzPA = moment().tz('America/Panama').format('DD/MM HH:mm');
        const tzUY = moment().tz('America/Montevideo').format('DD/MM HH:mm');
        const tzVE = moment().tz('America/Caracas').format('DD/MM HH:mm');
        const tzPY = moment().tz('America/Asuncion').format('DD/MM HH:mm');
        const tzNY = moment().tz('America/New_York').format('DD/MM HH:mm');
        const tzBR = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm');
        const tzAS = moment().tz('Asia/Jakarta').format('DD/MM HH:mm');
        const tzAF = moment().tz('Africa/Malabo').format('DD/MM HH:mm');
        await conn.sendMessage(m.chat, {
            text: `┏╼┅┅⪻ \`\`\`ZONA-HORARIA 🗺️\`\`\` ⪼┅┅┅┓
┋• Perú       : ${tzPE}
┋• México     : ${tzMX}
┋• Bolivia    : ${tzBO}
┋• Chile      : ${tzCL}
┋• Argentina  : ${tzAR}
┋• Colombia   : ${tzCO}
┋• Ecuador    : ${tzEC}
┋• Costa Rica : ${tzCR}
┋• Cuba       : ${tzCU}
┋• Guatemala  : ${tzGT}
┋• Honduras   : ${tzHN}
┋• Nicaragua  : ${tzNI}
┋• Panamá     : ${tzPA}
┋• Uruguay    : ${tzUY}
┋• Venezuela  : ${tzVE}
┋• Paraguay   : ${tzPY}
┋• New York   : ${tzNY}
┋• Brasil     : ${tzBR}
┋• Asia       : ${tzAS}
┋• África     : ${tzAF}
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┋${String.fromCharCode(8206).repeat(850)} 💻 *ᴢᴏɴᴀ ʜᴏʀᴀʀɪᴀ ᴅᴇʟ sᴇʀᴠɪᴅᴏʀ ᴀᴄᴛᴜᴀʟ:*
┋ *[ ${Intl.DateTimeFormat().resolvedOptions().timeZone} ]*
┋ *${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY HH:mm:ss')}*
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┉┛`
        }, {
            quoted: m
        })
    }
}

module.exports = {
    buscadores
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

//función pickrandow
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

async function remini(imageData, operation) {
    return new Promise(async (resolve, reject) => {
        const availableOperations = ["enhance", "recolor", "dehaze"];
        if (availableOperations.includes(operation)) {
            operation = operation;
        } else {
            operation = availableOperations[0];
        }
        const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
        const formData = new FormData();
        formData.append("image", Buffer.from(imageData), {
            filename: "enhance_image_body.jpg",
            contentType: "image/jpeg"
        });
        formData.append("model_version", 1, {
            "Content-Transfer-Encoding": "binary",
            contentType: "multipart/form-data; charset=utf-8"
        });
        formData.submit({
                url: baseUrl,
                host: "inferenceengine.vyro.ai",
                path: "/" + operation,
                protocol: "https:",
                headers: {
                    "User-Agent": "okhttp/4.9.3",
                    Connection: "Keep-Alive",
                    "Accept-Encoding": "gzip"
                }
            },
            function(err, res) {
                if (err) reject(err);
                const chunks = [];
                res.on("data", function(chunk) {
                    chunks.push(chunk)
                });
                res.on("end", function() {
                    resolve(Buffer.concat(chunks))
                });
                res.on("error", function(err) {
                    reject(err);
                })
            }, )
    })
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})