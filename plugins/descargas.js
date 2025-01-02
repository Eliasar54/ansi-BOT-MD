require('../main.js')
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const fg = require('api-dylux')
const {
    savefrom,
    lyrics,
    lyricsv2,
    youtubedl,
    youtubedlv2
} = require('@bochilteam/scraper')
const {
    smsg,
    fetchBuffer,
    getBuffer,
    buffergif,
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
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getFile,
    getRandom,
    msToTime,
    downloadMediaMessage
} = require('../libs/fuctions')
const {
    ytmp4,
    ytmp3,
    ytplay,
    ytplayvid
} = require('../libs/youtube')
const {
    sizeFormatter
} = require('human-readable')
const formatSize = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`
});
let user = global.db.data.users[m.sender]
let limit = 320

async function descarga(m, command, conn, text, command, args, fkontak, from, buffer, getFile, q, includes, lolkeysapi) {
    if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
    if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
    if (global.db.data.users[m.sender].banned) return


/*if (command === 'play' || command === 'musica') {
    if (!text) return m.reply(`*¿Qué está buscando? 🎶*\nEjemplo: *${prefix + command}* ozuna`);

    const startTime = Date.now();

    conn.fakeReply(
        m.chat,
        `*ᴇsᴘᴇʀᴀ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 🔈.*\n\n> No hagas spam de comandos`,
        '0@s.whatsapp.net',
        '𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐚𝐮𝐝𝐢𝐨 𝐞𝐬𝐩𝐞𝐫𝐚'
    );

    m.react(rwait);

    const yt_play = await search(args.join(' '));
    if (!yt_play || yt_play.length === 0) {
        return m.reply("⚠️ No se encontró ninguna canción.");
    }

    const videoInfo = yt_play[0];
    const texto1 = `*🎵 Canción Encontrada ✅*\n📌 *Título:* ${videoInfo.title}\n🕒 *Publicado:* ${videoInfo.ago}\n⏱️ *Duración:* ${secondString(videoInfo.duration.seconds)}\n👀 *Vistas:* ${MilesNumber(videoInfo.views)}\n✍️ *Autor:* ${videoInfo.author.name}\n🔗 *Link:* ${videoInfo.url}\n\n✨ *Recuerda seguir mi canal, me apoyarías mucho* 🙏: https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36`;

    await conn.sendMessage(m.chat, {
        image: { url: videoInfo.thumbnail },
        caption: texto1
    }, { quoted: m });

    const apiUrl = `https://api.nyxs.pw/dl/yt-direct?url=${encodeURIComponent(videoInfo.url)}`;

    try {
        const response = await axios.get(apiUrl);
        if (response.data.status) {
            const audioUrl = response.data.result.urlAudio;
            const audioCaption = `Listo, aquí está ${videoInfo.title}`;

            await conn.sendMessage(m.chat, {
                document: { url: audioUrl },
                mimetype: 'audio/mpeg',
                fileName: `${videoInfo.title}.mp3`,
                caption: audioCaption,
                thumbnail: videoInfo.thumbnail
            }, { quoted: m });

            const endTime = Date.now();
            const totalTime = ((endTime - startTime) / 1000).toFixed(2);
            m.react(done);
            m.reply(`✅ ¡Audio enviado! Tiempo total de envío: ${totalTime} segundos.`);
        } else {
            throw new Error('No se pudo obtener el audio');
        }
    } catch (e) {
        const fallbackAudioUrl = `https://api.dorratz.com/v2/yt-mp3?url=${encodeURIComponent(videoInfo.url)}`;
        try {
            const audioCaption = `Listo, aquí está ${videoInfo.title}`;

            await conn.sendMessage(m.chat, {
                document: { url: fallbackAudioUrl },
                mimetype: 'audio/mpeg',
                fileName: `${videoInfo.title}.mp3`,
                caption: audioCaption,
                thumbnail: videoInfo.thumbnail
            }, { quoted: m });

            const endTime = Date.now();
            const totalTime = ((endTime - startTime) / 1000).toFixed(2);
            m.react(done);
            m.reply(`✅ ¡Audio enviado! Tiempo total de envio: ${totalTime} segundos.`);
        } catch (error) {
            m.react(error);
            m.reply(`Ocurrió un error inesperado - ${error.message}`);
        }
    }
}*/

if (command == 'play2test' || command == 'videotest') {
if (!text) return m.reply(`*🤔Que está buscando? 🤔*\n*Ingrese el nombre de la canción*\n\n*Ejemplo:*\n#play emilia 420`) 
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', `${yt_play[0].title}
*⇄ㅤ     ◁   ㅤ  ❚❚ㅤ     ▷ㅤ     ↻*

*⏰ Duración:* ${secondString(yt_play[0].duration.seconds)}
*👉🏻Aguarde un momento en lo que envío su video*`, m, null,);
try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) return m.react("❌");
const downloadUrl = delius.data.download.url;
const fileSize = await getFileSize(downloadUrl);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
}} catch (e1) {
try {    
let qu = args[1] || '360'
let q = qu + 'p'
const yt = await youtubedl(yt_play[0].url).catch(async _ => await youtubedlv2(yt_play[0].url))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `🔰 𝘼𝙦𝙪𝙞 𝙚𝙨𝙩𝙖 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 \n🔥 𝙏𝙞𝙩𝙪𝙡𝙤: ${ttl}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch (e2) {
try {    
const downloadUrl = await fetch9Convert(yt_play[0].url); 
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
} catch (e3) {
try {
const downloadUrl = await fetchY2mate(yt_play[0].url);
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
} catch (e4) {
try {
const videoInfo = await fetchInvidious(yt_play[0].url)
const downloadUrl = videoInfo.videoFormats.find(format => format.mimeType === "audio/mp4").url;
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
} catch (e5) {
try {
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
} catch (e6) {
try {
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp4);
const fileSize = await getFileSize(dp.result.media.mp4);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
}} catch (e) {    
await m.react('❌');
console.log(e);
}}}}}}}}

/*if (command === 'video' || command === 'play2') {
    if (!text) return m.reply(`*¿Qué video está buscando? 🎥*\nEjemplo: *${prefix + command}* ozuna`);

    const startTime = Date.now();

    conn.fakeReply(
        m.chat,
        `*ᴇsᴘᴇʀᴀ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 🎥.*\n\n> No hagas spam de comandos`,
        '13135550002@s.whatsapp.net',
        '𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐯𝐢𝐝𝐞𝐨 𝐞𝐬𝐩𝐞𝐫𝐚'
    );

    m.react(rwait);

    const yt_play = await search(args.join(' '));
    if (!yt_play || yt_play.length === 0) {
        return m.reply("⚠️ No se encontró ningún video.");
    }

    const texto1 = `*🎬 Video Encontrado ✅*\n📌 *Título:* ${yt_play[0].title}\n🕒 *Publicado:* ${yt_play[0].ago}\n⏱️ *Duración:* ${secondString(yt_play[0].duration.seconds)}\n👀 *Vistas:* ${MilesNumber(yt_play[0].views)}\n✍️ *Autor:* ${yt_play[0].author.name}\n🔗 *Link:* ${yt_play[0].url}\n\n✨ *Recuerda seguir mi canal, me apoyarías mucho* 🙏: https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36`;

    await conn.sendMessage(m.chat, {
        image: { url: yt_play[0].thumbnail },
        caption: texto1
    }, { quoted: m });

    const apiUrl = `https://api.ryzendesu.vip/api/downloader/ytdl?url=${encodeURIComponent(yt_play[0].url)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const videoInfo = data.resultUrl.video.find(v => v.quality === '360p');

        if (!videoInfo) throw new Error('No se encontró video en 360p');

        await conn.sendMessage(m.chat, {
            video: { url: videoInfo.download },
            fileName: `${data.result.title}.mp4`,
            mimetype: 'video/mp4',
            caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${data.result.title}`
        }, { quoted: m });

        const endTime = Date.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(2);
        m.react(done);
        m.reply(`✅ ¡Video enviado! Tiempo total de envío: ${totalTime} segundos.`);
    } catch (e) {
        const apiUrlFallback = `https://api.nyxs.pw/dl/yt-direct?url=${encodeURIComponent(yt_play[0].url)}`;
        try {
            const response = await axios.get(apiUrlFallback);
            if (response.data.status) {
                const videoUrl = response.data.result.urlVideo;
                await conn.sendMessage(m.chat, {
                    video: { url: videoUrl },
                    fileName: `${response.data.result.title}.mp4`,
                    mimetype: 'video/mp4',
                    caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${response.data.result.title}`
                }, { quoted: m });

                const endTime = Date.now();
                const totalTime = ((endTime - startTime) / 1000).toFixed(2);
                m.react(done);
                m.reply(`✅ ¡Video enviado! Tiempo total de envio: ${totalTime} segundos.`);
            } else {
                throw new Error('No se pudo obtener el video de la segunda API');
            }
        } catch (error) {
            m.react(error);
            return m.reply(`Ocurrió un error inesperado - ${error.message}`);
        }
    }
}*/

    if (command === 'bilibili') {
        if (!text) return m.reply(`Por favor proporciona un enlace de Bilibili usando el comando de esta forma: *${prefix + command} <URL del video>*`);

        conn.fakeReply(m.chat, `*ᴇsᴘᴇʀᴀ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 🎥.*\n\n> No hagas spam de comandos`, '0@s.whatsapp.net', '𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐯𝐢𝐝𝐞𝐨 𝐞𝐬𝐩𝐞𝐫𝐚');

        m.react(rwait);

        try {
            const apiUrl = `https://api.ryzendesu.vip/api/downloader/bilibili?url=${encodeURIComponent(text)}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (!data.status) throw new Error('Error al obtener el video de la API');

            const title = data.data.title;
            const views = data.data.views;
            const likes = data.data.like;
            const cover = data.data.cover;
            const infoMessage = `🎬 *Título:* ${title}\n👀 *Vistas:* ${views}\n❤️ *Likes:* ${likes}\n📸 *Portada:* ${cover}`;

            await conn.sendMessage(m.chat, {
                image: {
                    url: cover
                },
                caption: infoMessage
            }, {
                quoted: m
            });

            const videoUrl = data.data.mediaList.videoList[0].url;
            const fileName = data.data.mediaList.videoList[0].filename;

            await conn.sendMessage(m.chat, {
                video: {
                    url: videoUrl
                },
                fileName: `${fileName}`,
                mimetype: 'video/mp4',
                caption: `🔰 Aquí tienes el video: ${title}`
            }, {
                quoted: m
            });

            m.react(done);
        } catch (error) {
            m.react(error);
            return m.reply(`Ocurrió un error inesperado: ${error.message}`);
        }
    }

    if (command == 'music' || command == 'spotify') {
        if (!text) return m.reply("Por favor, ingresa el nombre de la canción o el enlace de Spotify.");
        try {
            m.react("⏳");

            const res = await fetch(`https://api.nyxs.pw/dl/spotify-direct?title=${text}`);
            const data = await res.json();

            if (!data.status) throw new Error("Error al obtener datos de Spotify.");

            const {
                urlSpotify,
                title,
                artists,
                album,
                thumbnail,
                url,
                releaseDate
            } = data.result;

            let spotifyInfo = `🎶 *Título:* ${title}\n🎤 *Artista(s):* ${artists}\n💽 *Álbum:* ${album}\n📅 *Fecha de lanzamiento:* ${releaseDate}\n\n🔗 *Enlace de Spotify:* ${urlSpotify}`;

            await conn.sendMessage(m.chat, {
                text: spotifyInfo.trim(),
                contextInfo: {
                    forwardingScore: 9999999,
                    isForwarded: false,
                    externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        renderLargerThumbnail: true,
                        title: title,
                        mediaType: 1,
                        thumbnail: await (await fetch(thumbnail)).buffer(),
                        mediaUrl: urlSpotify,
                        sourceUrl: urlSpotify
                    }
                }
            }, {
                quoted: m
            });

            await conn.sendMessage(m.chat, {
                audio: {
                    url: url
                },
                fileName: `${title}.mp3`,
                mimetype: 'audio/mpeg'
            }, {
                quoted: m
            });

            m.react("✅");
        } catch (error) {
            m.react("❌");
            console.error(error);
            return m.reply("Ocurrió un error al procesar tu solicitud.");
        }
    }

    if (command == 'gitclone') {
        if (!args[0]) return m.reply(lenguaje.descargar.text9 + `\n${prefix + command} ${md}`)
        if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalido!!`)
        m.react('🕔')
        m.reply(lenguaje.descargar.text10)
        try {
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            let [, user, repo] = args[0].match(regex1) || []
            repo = repo.replace(/.git$/, '')
            let url = `https://api.github.com/repos/${user}/${repo}/zipball`
            let filename = (await fetch(url, {
                method: 'HEAD'
            })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
            conn.sendMessage(m.chat, {
                document: {
                    url: url
                },
                fileName: filename + '.zip',
                mimetype: 'application/zip'
            }, {
                quoted: m,
                ephemeralExpiration: 24 * 60 * 100,
                disappearingMessagesInChat: 24 * 60 * 100
            }).catch((err) => m.reply(info.error))
            db.data.users[m.sender].limit -= 1
            m.reply('1 ' + info.limit)
            m.react(done)
        } catch {
            m.react(error)
            m.reply(info.error)
        }
    }

if (command == 'tiktok' || command == 'tt') {
    if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`);
    if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`¡Link inválido!`);
    conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam');

    try {
        const url = args[0];

        const apiUrl = `https://eliasar-yt-api.vercel.app/api/search/tiktok?query=${url}`;
        const apiResponse = await axios.get(apiUrl);
        const { status, results } = apiResponse.data;

        let videoUrl, caption = "No se pudo obtener la información del video.";

        if (status && results) {
            videoUrl = results.nowm;
            caption = `Título: ${results.title}\nAutor: ${results.author}`;
        } else {
            throw new Error('Error al obtener datos de la nueva API');
        }

        if (!videoUrl) {
            const backupApiUrl = `https://api.dorratz.com/v2/tiktok-dl?url=${url}`;
            const backupResponse = await axios.get(backupApiUrl);
            const { data } = backupResponse.data;

            if (data && data.media && data.media.org) {
                videoUrl = data.media.org;
            } else {
                throw new Error('Error al procesar el video en la API de respaldo.');
            }
        }

        await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: caption
        }, { quoted: m });
    } catch (e) {
        m.reply(info.error);
    }
}

    if (command == 'tik2') {
        if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
        if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
        conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
        try {
            require('../libs/tiktok').Tiktok(args).then(data => {
                conn.sendMessage(m.chat, {
                    audio: {
                        url: data.audio
                    },
                    mimetype: 'audio/mp4'
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                })
            })
            db.data.users[m.sender].limit -= 1
            m.reply('1 ' + info.limit)
        } catch {
            m.reply(info.error)
        }
    }

    if (command == 'tiktokimg' || command == 'ttimg') {
        if (!text) return m.reply(`${lenguaje.lengua.espere}\n${prefix + command} https://vm.tiktok.com/ZMjnPvJuF/`)
        m.react("📥")
        let imagesSent
        if (imagesSent) return;
        imagesSent = true
        try {
            conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
            let tioShadow = await ttimg(text);
            let result = tioShadow?.data;
            for (let d of result) {
                await conn.sendMessage(m.chat, {
                    image: {
                        url: d
                    }
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                })
            };
            imagesSent = false
        } catch (e) {
            imagesSent = false
            return m.reply(`${info.error}\n\n${e}`)
        }
    }

    if (command == 'lyrics' || command == 'letra') {
        const {
            lyrics,
            lyricsv2
        } = require('@bochilteam/scraper')
        if (!text) return m.reply(lenguaje.descargar.text11 + `\n${prefix + command} ozuna`)
        m.react('🕔')
        try {
            const result = await lyricsv2(text).catch(async _ => await lyrics(text))
            conn.editMessage(m.chat, `${lenguaje.lengua.espere}`, `❏ ${lenguaje.descargar.title} ${result.title}\n❏ ${lenguaje.descargar.autor}  ${result.author}\n*❏ Url :* ${result.link}\n\n❏ ${lenguaje.descargar.letra} ${result.lyrics}`, 3, fkontak)
            db.data.users[m.sender].limit -= 1
            m.reply('1 ' + info.limit)
            m.react(done)
        } catch (e) {
            m.react(error)
            console.log(e)
        }
    }

    if (command == 'mediafire') {
        const {
            mediafireDl
        } = require('../libs/mediafire.js')
        if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`)
        m.react("📥")
        const baby1 = await mediafireDl(text)
        if (baby1[0].size.split('MB')[0] >= 1500) return reply(lenguaje.descargar.text15 + util.format(baby1))
        const result4 = `╭━─━─━─≪💎≫─━─━─━╮
┆      *MEDIAFIRE* 
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text12} ${baby1[0].nama} 
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text13} ${baby1[0].size} 
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text14} ${baby1[0].mime}
╰━─━─━─≪💎≫─━─━─━╯\n\n${lenguaje.descargar.descargado}`
        m.reply(`${result4}`)
        conn.sendMessage(m.chat, {
            document: {
                url: baby1[0].link
            },
            fileName: baby1[0].nama,
            mimetype: baby1[0].mime,
            quoted: m,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: "💫",
                    showAdAttribution: true,
                    mediaType: 2,
                    thumbnail: fs.readFileSync(`./media/menu.jpg`),
                    mediaUrl: md,
                    sourceUrl: md
                }
            }
        }, {
            quoted: m,
            ephemeralExpiration: 24 * 60 * 100,
            disappearingMessagesInChat: 24 * 60 * 100
        })
        db.data.users[m.sender].limit -= 2
        m.reply('2 ' + info.limit)
    }
}

async function descarga2(m, command, text, args, conn, lolkeysapi, isCreator) {
   // if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
    //if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
    if (global.db.data.users[m.sender].banned) return
if (command == 'facebook' || command == 'fb') {
    const igeh = require(`../libs/scraper.js`)
    if (!args[0] || !text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
    if (!args[0].match(/www.facebook.com|fb.watch/g)) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
    m.react("📥")
    conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
    try {
        const eliasarResponse = await fetch(`https://eliasar-yt-api.vercel.app/api/facebookdl?link=${args[0]}`)
        const eliasarData = await eliasarResponse.json()
        if (eliasarData.status && eliasarData.data.length > 0) {
            const videoUrl = eliasarData.data[0].url
            conn.sendFile(m.chat, videoUrl, 'video.mp4', `${lenguaje.descargar.text16}`, m)
        } else {
            throw new Error('Error en EliasarYT')
        }
    } catch (err1) {
        try {
            const dorratzResponse = await fetch(`https://api.dorratz.com/fbvideo?url=${args[0]}`)
            const dorratzData = await dorratzResponse.json()
            if (dorratzData.result) {
                const videoUrl = dorratzData.result.hd || dorratzData.result.sd
                conn.sendFile(m.chat, videoUrl, 'video.mp4', `${lenguaje.descargar.text16}`, m)
            } else {
                throw new Error('Error en Dorratz')
            }
        } catch (err2) {
            try {
                const req = await igeh(args[0])
                conn.sendMessage(m.chat, {
                    video: {
                        url: req.url_list
                    }
                }, m)
            } catch (err3) {
                try {
                    const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
                    const Jjson = await Rres.json()
                    let VIDEO = Jjson.result[0]
                    if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1]
                    conn.sendFile(m.chat, VIDEO, 'video.mp4', `${lenguaje.descargar.text16}`, m)
                } catch (err4) {
                    try {
                        const ress = await fg.fbdl(args[0])
                        const urll = await ress.data[0].url
                        await conn.sendFile(m.chat, urll, 'video.mp4', `${lenguaje.descargar.text16}`, m)
                    } catch (err5) {
                        try {
                            const res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q=${args[0]}`)
                            const json = await res3.json()
                            const url3 = await json.video
                            await conn.sendFile(m.chat, url3, 'video.mp4', `${lenguaje.descargar.text16}`, m)
                        } catch (err6) {
                            m.reply(info.error)
                            console.log(err6)
                        }
                    }
                }
            }
        }
    }
}


    if (command == 'instagram' || command == 'ig') {
        if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=`)
        m.react("📥")
        conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
        try {
            const dorratzResponse = await fetch(`https://api.dorratz.com/igdl?url=${text}`)
            const dorratzData = await dorratzResponse.json()
            if (dorratzData.media && dorratzData.media.length > 0) {
                const videoUrl = dorratzData.media[0]
                const shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
                conn.sendMessage(m.chat, {
                    video: {
                        url: videoUrl
                    },
                    caption: `🔗 *Url:* ${shortUrl}`
                }, {
                    quoted: m
                })
            } else {
                throw new Error('No se encontró un enlace de video en la respuesta de la API principal')
            }
        } catch (err) {
            try {
                let res = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
                let json = await res.json()
                const shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
                conn.sendMessage(m.chat, {
                    video: {
                        url: json.data.data[0].url
                    },
                    caption: `🔗 *Url:* ${shortUrl}`
                }, {
                    quoted: m
                })
            } catch (error) {
                m.reply(info.error)
                console.error(error)
            }
        }
        db.data.users[m.sender].limit -= 1
        m.reply('1 ' + info.limit)
    }

    if (command == 'igstalk') {
        if (!args[0]) return m.reply(lenguaje.descargar.text17 + ` ${prefix + command} Emilia`)
        m.react("📥")
        try {
            let res = await fg.igStalk(args[0])
            let te = `┏━━≪ *STALKING* ≫━•
┃🔸🔖 ${lenguaje.descargar.text12} ${res.name} 
┃🔸🔖 ${lenguaje.descargar.text19} ${res.username} 
┃🔸👥 ${lenguaje.descargar.text20} ${res.followersH}
┃🔸🫂 ${lenguaje.descargar.text21} ${res.followingH}
┃🔸📌 ${lenguaje.descargar.text22} ${res.description}
┃🔸🏝️ ${lenguaje.descargar.text23} ${res.postsH}
┃━━━━━━━━━━━━━━
┃🔸 *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
┗━━━━━━━━━━━━━•`
            await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
        } catch (e) {
            m.reply(info.error)
            console.log(e)
        }
    }

    if (command == 'tiktokstalk') {
        if (!args[0]) return m.reply(lenguaje.descargar.text17 + ` ${prefix + command} EmiliaMermes`)
        try {
            let res = await fg.ttStalk(args[0])
            let txt = `┏━━≪ *TIKTOK STALK* ≫━•
┃🔖 ${lenguaje.descargar.text12} ${res.name}
┃🔖 ${lenguaje.descargar.text19} ${res.username}
┃👥 ${lenguaje.descargar.text20} ${res.followers}
┃🫂 ${lenguaje.descargar.text21} ${res.following}
┃📌 ${lenguaje.descargar.text22} ${res.desc}
┃━━━━━━━━━━━━━━
┃ *🔗 Link* : https://tiktok.com/${res.username}
┗━━━━━━━━━━━━━•`
            await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
        } catch (e) {
            m.reply(info.error)
            console.log(e)
        }
    }

    if (command == 'apk' || command == 'modoapk') {
        let {
            search,
            download
        } = require('aptoide-scraper')
        if (!text) return m.reply(lenguaje.descargar.text24)
        try {
            const dorratzResponse = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${text}`)
            const dorratzData = await dorratzResponse.json()
            if (dorratzData.name && dorratzData.dllink) {
                const response = `╭━─━─━─≪≫─━─━─━╮\n│ ≡ ${lenguaje.descargar.text25} ≡\n│——————«•»——————\n│🔸📌 ${lenguaje.descargar.text12} ${dorratzData.name}\n│🔸📦 *Package:* ${dorratzData.package}\n│🔸🕒 ${lenguaje.descargar.text26} ${dorratzData.lastUpdate}\n│🔸📥 ${lenguaje.descargar.text27} ${dorratzData.size}\n╰━─━─━─≪≫─━─━─━╯`
                await conn.sendMessage(m.chat, {
                    image: {
                        url: dorratzData.icon
                    },
                    caption: response
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                })
                if (dorratzData.size.includes('GB') || parseFloat(dorratzData.size.replace(' MB', '')) > 999) {
                    return await m.reply(lenguaje.descargar.text28)
                }
                await conn.sendMessage(m.chat, {
                    document: {
                        url: dorratzData.dllink
                    },
                    mimetype: 'application/vnd.android.package-archive',
                    fileName: dorratzData.name + '.apk',
                    caption: null
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                })
            } else {
                throw new Error('No se encontraron datos válidos en la API principal')
            }
        } catch {
            try {
                let searchA = await search(text)
                let data5 = await download(searchA[0].id)
                let response = `╭━─━─━─≪≫─━─━─━╮\n│ ≡ ${lenguaje.descargar.text25} ≡\n│——————«•»——————\n│🔸📌 ${lenguaje.descargar.text12} ${data5.name}\n│🔸📦 *Package:* ${data5.package}\n│🔸🕒 ${lenguaje.descargar.text26} ${data5.lastup}\n│🔸📥 ${lenguaje.descargar.text27} ${data5.size}\n╰━─━─━─≪≫─━─━─━╯`
                await conn.sendMessage(m.chat, {
                    image: {
                        url: data5.icon
                    },
                    caption: response
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                })
                if (data5.size.includes('GB') || parseFloat(data5.size.replace(' MB', '')) > 999) {
                    return await m.reply(lenguaje.descargar.text28)
                }
                await conn.sendMessage(m.chat, {
                    document: {
                        url: data5.dllink
                    },
                    mimetype: 'application/vnd.android.package-archive',
                    fileName: data5.name + '.apk',
                    caption: null
                }, {
                    quoted: m,
                    ephemeralExpiration: 24 * 60 * 100,
                    disappearingMessagesInChat: 24 * 60 * 100
                })
            } catch (error) {
                m.reply(info.error)
                console.error(error)
            }
        }
        db.data.users[m.sender].limit -= 3
        m.reply('3 ' + info.limit)
    }

    if (command == 'gdrive') {
        const axios = require('axios');
        if (!args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view`);

        try {
            m.react("📥");
            let response = await axios.get(`https://api.ryzendesu.vip/api/downloader/gdrive?url=${args[0]}`);
            let res = response.data;

            await m.reply(`Descargando archivo:\n• Nombre: ${res.fileName}\n• Tamaño: ${res.fileSize}`);
            conn.sendMessage(m.chat, {
                document: {
                    url: res.downloadUrl
                },
                fileName: res.fileName,
                mimetype: res.mimetype
            }, {
                quoted: m
            });

            db.data.users[m.sender].limit -= 3;
            m.reply('3 ' + info.limit);
        } catch (e) {
            m.reply(info.error);
            console.log(e);
        }
    }

    if (command == 'twitter' || command == 'tw' || command == 'x') {
        if (!args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
        m.react(rwait)
        try {
            let {
                SD,
                HD,
                desc,
                thumb,
                audio
            } = await fg.twitter(args[0])
            conn.sendFile(m.chat, HD, 'twitter.mp4', `•─≪ *TWITTER DL* ≫─•\n\n${desc}`, m)
            m.react(done)
            db.data.users[m.sender].limit -= 2
            m.reply('2 ' + info.limit)
        } catch (e) {
            m.reply(info.error)
            console.log(e)
        }
    }
}

async function search(query, options = {}) {
    const search = await yts.search({
        query,
        hl: "es",
        gl: "ES",
        ...options
    });
    return search.videos
};

function MilesNumber(number) {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = "$1.";
    let arr = number.toString().split(".");
    arr[0] = arr[0].replace(exp, rep);
    return arr[1] ? arr.join(".") : arr[0]
};

function secondString(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay
};

function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)
    })
};

async function ytMp3(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url).then(async (getUrl) => {
            let result = [];
            for (let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
                    let {
                        contentLength
                    } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        size: bytes
                    }
                }
            };
            let resultFix = result.filter(x => x.audio != undefined && x.size != undefined)
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                result2: resultFix,
                thumb
            })
        }).catch(reject)
    })
};

async function ytMp4(url) {
    return new Promise(async (resolve, reject) => {
        ytdl.getInfo(url).then(async (getUrl) => {
            let result = [];
            for (let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let {
                        qualityLabel,
                        contentLength
                    } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes
                    }
                }
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined)
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                rersult2: resultFix[0].video,
                thumb
            })
        }).catch(reject)
    })
};

async function ytPlay(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async (getData) => {
            let result = getData.videos.slice(0, 5);
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url)
            }
            let random = url[0];
            let getAudio = await ytMp3(random);
            resolve(getAudio)
        }).catch(reject)
    })
};

async function ytPlayVid(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async (getData) => {
            let result = getData.videos.slice(0, 5);
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url)
            }
            let random = url[0];
            let getVideo = await ytMp4(random);
            resolve(getVideo)
        }).catch(reject)
    })
};

async function GDriveDl(url) {
    let id;
    if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL';
    id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
    if (!id) throw 'ID Not Found';
    const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
        method: 'post',
        headers: {
            'accept-encoding': 'gzip, deflate, br',
            'content-length': 0,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'origin': 'https://drive.google.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
            'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
            'x-drive-first-party': 'DriveWebUi',
            'x-json-requested': 'true'
        }
    });
    const {
        fileName,
        sizeBytes,
        downloadUrl
    } = JSON.parse((await res.text()).slice(4));
    if (!downloadUrl) throw 'Link Download Limit!';
    const data = await fetch(downloadUrl);
    if (data.status !== 200) throw data.statusText;
    return {
        downloadUrl,
        fileName,
        fileSize: formatSize(sizeBytes),
        mimetype: data.headers.get('content-type')
    };
}

async function ttimg(link) {
    try {
        let url = `https://dlpanda.com/es?url=${link}&token=G7eRpMaa`;
        let response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        let imgSrc = [];
        $('div.col-md-12 > img').each((index, element) => {
            imgSrc.push($(element).attr('src'));
        });
        if (imgSrc.length === 0) {
            return {
                data: '*[ ⚠️ ] No se encontraron imágenes en el enlace proporcionado.*'
            };
        }
        return {
            data: imgSrc
        };
    } catch (error) {
        console.lo(error);
        return {
            data: '*[ ⚠️ ] No se obtuvo respuesta de la página, intente más tarde.*'
        };
    };
};

module.exports = {
    descarga,
    descarga2
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
