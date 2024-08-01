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
const {savefrom, lyrics, lyricsv2, youtubedl, youtubedlv2} = require('@bochilteam/scraper') 
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getFile, getRandom, msToTime, downloadMediaMessage} = require('../libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('../libs/youtube') 
const {sizeFormatter} = require('human-readable') 
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});
let user = global.db.data.users[m.sender]
let limit = 320

async function descarga(m, command, conn, text, command, args, fkontak, from, buffer, getFile, q, includes, lolkeysapi) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (global.db.data.users[m.sender].banned) return

if (command == 'play' || command == 'play2') {
    if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`);

    const yt_play = await search(args.join(' '));
    const texto1 = `
┏━━━༺❖༻━━━┓
┃ ⌈ ${lenguaje.descargar.title}: ${yt_play[0].title} ⌋
┃ ➤ ${lenguaje.descargar.ago}: ${yt_play[0].ago}
┃ ➤ ${lenguaje.descargar.duracion}: ${secondString(yt_play[0].duration.seconds)}
┃ ➤ ${lenguaje.descargar.views}: ${MilesNumber(yt_play[0].views)}
┃ ➤ ${lenguaje.descargar.autor}: ${yt_play[0].author.name}
┃ ➤ 🔗 Link: ${yt_play[0].url}
┗━━━༺❖༻━━━┛
➤ Gracias por usar nuestro servicio.
`.trim();

    let listSections = [];
    listSections.push({
        title: yt_play[0].title,
        rows: [
            { header: "Audio (opción 1)", title: "Descargar como Audio", id: `${prefix}musica ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
            { header: "Audio Doc (Opción 2)", title: "Descargar como Documento de Audio", id: `${prefix}ytmp3doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
            { header: "Video (Opción 1)", title: "Descargar como Video", id: `${prefix}video ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
            { header: "Video Doc (Opción 2)", title: "Descargar como Documento de Video", id: `${prefix}ytmp4doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
            { header: "Rehacer la búsqueda", title: "Buscar de nuevo", id: `${prefix}play ${text}`, description: `${yt_play[0].title}\n` },
            { header: "Más Resultados", title: "Ver más resultados", id: `${prefix}yts ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }
        ]
    });

    await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [
        ['Audio', `.musica ${text}`],
        ['Video', `.video ${text}`],
        ['Más resultados', `.yts ${text}`],
        ['Menu', `.menu`],
        ['Creador', `.creador`]
    ], null, null, m);

    await conn.sendList(m.chat, `*𝐸𝑆𝐶𝑂𝐺𝐸 𝐸𝐿 𝐹𝑂𝑅𝑀𝐴𝑇𝑂 𝐷𝐸* ${yt_play[0].title}`, wm, `Click Aquí`, listSections, m);
}


if (command == 'play3' || command == 'play4') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 

const yt_play = await search(args.join(' '))
const texto1 = `${lenguaje.descargar.text2}\n\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}

◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}

◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}

◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}

◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}

◉ Link: ${yt_play[0].url}`.trim()

await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `.ytmp3 ${text}`], ['Video', `.ytmp4 ${text}`], ['Mas resultados', `.yts ${text}`]], null, null, m)}

if (command == 'musica') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `${lenguaje.descargar.text2}\n\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n\n${lenguaje.descargar.music}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
try {
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg' }, { quoted: m})
m.react(done) 
} catch {
try {
let chat = global.db.data.chats[m.chat]
let res = await yts(text)
//let vid = res.all.find(video => video.seconds < 3600)
let vid = res.videos[0]
if (!vid) return `⚠️ Audio no encontrado`
let isVideo = /vid$/.test(command)
let q = isVideo ? '360p' : '128kbps' 
let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
let { title, dl_url, quality, size, sizeB } = yt
let isLimit = limit * 1024 < sizeB 
if (!isLimit) conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', asDocument: chat.useDocument }, { quoted: m})
m.react(done)
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, mimetype: 'audio/mpeg' }, { quoted: m})
m.react(done) 
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg' }, { quoted: m})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}

if (command == 'video') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `${lenguaje.descargar.text3}\n\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n\n${lenguaje.descargar.vid}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
try { 
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${ttl}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
let chat = global.db.data.chats[m.chat]
let res = await yts(text)
//let vid = res.all.find(video => video.seconds < 3600)
let vid = res.videos[0]
if (!vid) return `⚠️ Vídeo no encontrado`
let isVideo = /vid$/.test(command)
let q = isVideo ? '360p' : '128kbps' 
let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
let { title, dl_url, quality, size, sizeB } = yt
let isLimit = limit * 1024 < sizeB 
if (!isLimit) conn.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', asDocument: chat.useDocument }, { quoted: m})
m.react(done)
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {video: {url: dl_url}, caption: wm, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${n}`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}

if (command == 'ytmp3' || command == 'ytmp3doc') {
if (!text) return m.reply(lenguaje.descargar.text1 + `\n• *${prefix + command}* ozuna\n• ${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `${lenguaje.descargar.text5}\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n◉ *Link:* ${yt_play[0].url}\n\n${lenguaje.descargar.text6}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}

if (command == 'playdoc2' || command == 'playvideodoc' || command == 'ytmp4doc' || command == 'ytmp4') {
if (!text) return m.reply(lenguaje.descargar.text1 + `\n• *${prefix + command}* ozuna\n• ${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `${lenguaje.descargar.text3}\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n◉ *Link:* ${yt_play[0].url}\n\n${lenguaje.descargar.text7}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
 let q = args[1] || '360p'
try {  
const yt = await fg.ytv(args[0], q)
let { title, dl_url, quality, size, sizeB } = yt
 conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${title}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
let yt = await fg.ytmp4(args[0], q)
let { title, size, sizeB, dl_url, quality } = yt
conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${title}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done)	
} catch {
try {		
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${ttl}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸 ${lenguaje.lengua.titulo} ${n}\n┆🔸️${lenguaje.lengua.Peso} ${n3}\n╰─────────────────`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}}

if (command == 'play.1' || command == 'play.2') {
let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let enviando = false;
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
if (enviando) return;
enviando = true
m.react(rwait) 
try {
const apiUrls = [`https://api.cafirexos.com/api/ytplay?text=${text}`, `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}` ];
for (const url of apiUrls) {
try {
const res = await fetch(url);
data = await res.json();
if (data.resultado && data.resultado.url) {
break;
}} catch {}
}
if (!data.resultado || !data.resultado.url) {
enviando = false;
} else {
try {
if (command == 'play.1') {
m.reply(lenguaje.descargar.audio) 
apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp3?url=${data.resultado.url}`;
mimeType = 'audio/mpeg';
fileName = 'error.mp3';
buff = await conn.getFile(apiUrl);
m.react(done) 
} else if (command == 'play.2' || command == 'video') {
m.reply(lenguaje.descargar.video) 
apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp4?url=${data.resultado.url}`;
mimeType = 'video/mp4';
fileName = 'error.mp4';
buff = await conn.getFile(apiUrl);
m.react(done) 
}} catch {
try {
if (command == 'play.1') {
apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${data.resultado.url}`;
mimeType = 'audio/mpeg';
fileName = 'error.mp3';
buff = await conn.getFile(apiUrl);
m.react(done) 
} else if (command == 'play.2' || command == 'video') {
apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp4?url=${data.resultado.url}`;
mimeType = 'video/mp4';
fileName = 'error.mp4';
buff = await conn.getFile(apiUrl);
m.react(done) 
}} catch {
enviando = false;
m.reply(info.error)
m.react(error) 
}}}

if (buff) {
await conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data, mimetype: mimeType, fileName: fileName}, {quoted: m});
enviando = false;
} else {
enviando = false;
}} catch (error) {
enviando = false;
m.react(error) 
m.reply(info.error)
}}

if (command == 'music' || command == 'spotify') {
if (!text) return m.reply(lenguaje.descargar.text8) 
try {
m.react(rwait) 
m.reply(lenguaje.descargar.espere) 
const res = await fetch(global.API('CFROSAPI', '/api/spotifysearch?text=' + text))
const data = await res.json()
const linkDL = data.spty.resultado[0].link;
const musics = await fetch(global.API('CFROSAPI', '/api/spotifydl?text=' + linkDL))
const music = await conn.getFile(musics.url)
const infos = await fetch(global.API('CFROSAPI', '/api/spotifyinfo?text=' + linkDL))
const info = await infos.json()
const spty = info.spty.resultado
const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
let spotifyi = `◦  ${lenguaje.lengua.titulo} ${spty.title}\n`
spotifyi += `◦  ${lenguaje.lengua.artista} ${spty.artist}\n`
spotifyi += `◦  ${lenguaje.lengua.album} ${spty.album}\n`
spotifyi += `◦  ${lenguaje.lengua.publi} ${spty.year}\n\n`   
spotifyi += `${lenguaje.descargar.music}`
await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: false, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
m.react(done) 
} catch (error) {
m.react(error) 
console.error(error);
return m.reply(info.error)}}

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
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}).catch((err) => m.reply(info.error))
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
m.react(done) 
} catch {
m.react(error) 
m.reply(info.error)}}


if (command == 'tiktok' || command == 'tt') {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
try {
require('../libs/tiktok').Tiktok(args).then( data => {
conn.sendButton(m.chat, `*🔥 AQUI ESTA TU VIDEO DEL TIKTOK*\n_*• Titulo:*_ ${result.title}`, 'Server proveido por ✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨', data.nowm, [['Descargar audio', `.tik2 ${text}`]], null, null, m)}) 
/*conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})})*/
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
} catch {
m.reply(info.error)}}

if (command == 'tik2') {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
try {
require('../libs/tiktok').Tiktok(args).then( data => {
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
} catch {
m.reply(info.error)}}

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
await conn.sendMessage(m.chat, {image: {url: d}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})};
imagesSent = false
} catch (e) {
imagesSent = false    
return m.reply(`${info.error}\n\n${e}`)}}

if (command == 'lyrics' || command == 'letra') {
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
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
}}

if (command == 'mediafire') {
const { mediafireDl } = require('../libs/mediafire.js') 
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
conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : m, contextInfo: { externalAdReply:{ 
   title: botname, 
   body:"💫", 
   showAdAttribution: true, 
   mediaType:2, 
   thumbnail: fs.readFileSync(`./media/menu.jpg`) , 
   mediaUrl: md,  
 sourceUrl: md }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
 db.data.users[m.sender].limit -= 2
m.reply('2 ' + info.limit)}}

async function descarga2(m, command, text, args, conn, lolkeysapi, isCreator) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (global.db.data.users[m.sender].banned) return
if (command == 'facebook' || command == 'fb') { 
const igeh = require(`../libs/scraper.js`) 
if (!args[0] || !text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
m.react("📥") 
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
try {
const d2ata = await facebook.v1(args[0]);
let r2es = '';
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`;
}
conn.sendFile(m.chat, r2es, 'error.mp4', `${lenguaje.descargar.text16}`, m);
} catch (err1) {
try {
const req = await igeh(args[0]);
conn.sendMessage(m.chat, {video: {url: req.url_list}}, m);
} catch (err1_2) {
try {
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
const Jjson = await Rres.json();
let VIDEO = Jjson.result[0];
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
conn.sendFile(m.chat, VIDEO, 'error.mp4', `${lenguaje.descargar.text16}`, m);
} catch (err2) {
try {
const ress = await fg.fbdl(args[0]);
const urll = await ress.data[0].url;
await conn.sendFile(m.chat, urll, 'error.mp4', `${lenguaje.descargar.text16}`, m);
} catch (err3) {
try {            
const res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q=${args[0]}`);
const json = await res3.json();
const url3 = await json.video;
await conn.sendFile(m.chat, url3, 'error.mp4', `${lenguaje.descargar.text16}`, m);
} catch (err6) {
m.reply(info.error)
console.log(e)
}}}}}}
  
if (command == 'instagram' || command == 'ig') {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=`)
m.react("📥") 
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
let res = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
let json = await res.json()
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
conn.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: `🔗 *Url:* ${shortUrl1}`}, {quoted: m})
.catch(console.error)
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
console.log(e)}}

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
console.log(e)}}

if (command == 'apk' || command == 'modoapk') {
let { search, download } = require('aptoide-scraper')
if (!text) return m.reply(lenguaje.descargar.text24)
try {     
let searchA = await search(text); 
let data5 = await download(searchA[0].id); 
let response = `╭━─━─━─≪≫─━─━─━╮\n│ ≡ ${lenguaje.descargar.text25} ≡\n│——————«•»——————\n│🔸📌 ${lenguaje.descargar.text12} ${data5.name}\n│🔸📦 *Package:* ${data5.package}\n│🔸🕒 ${lenguaje.descargar.text26} ${data5.lastup}\n│🔸📥 ${lenguaje.descargar.text27} ${data5.size}\n╰━─━─━─≪≫─━─━─━╯` 
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
return await m.reply(lenguaje.descargar.text28)}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch { 
return m.reply(info.error)}}

if (command == 'gdrive') {
const fg = require('api-dylux') 
let free = 300 // limite de descarga
let prem = 650
if (!args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*`)
try {
m.react("📥") 
let res = await fg.GDriveDl(args[0])
let limit = user.premium || isCreator ? user.premium : free
 let isLimit = limit * 1024 < res.fileSizeB
await m.reply(isLimit ? `${lenguaje.descargar.text10}` : `\n• 𝐄𝐥 𝐀𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐨 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭 𝐝𝐞 *+${free} 𝐌𝐁* 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐝𝐞 𝐦𝐚𝐬 𝐝𝐞 : *${prem} 𝐌𝐁* 𝐏𝐚𝐬𝐚𝐫𝐭𝐞 𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐩𝐨𝐧 : #premium`)
if (!isLimit) conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch (e) {
m.reply(info.error) 
console.log(e)}}

if (command == 'twitter' || command == 'tw' || command == 'x') {
if (!args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`) 
m.react(rwait)          
try {
let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
conn.sendFile(m.chat, HD, 'twitter.mp4', `•─≪ *TWITTER DL* ≫─•\n\n${desc}`, m)
m.react(done)
db.data.users[m.sender].limit -= 2
m.reply('2 ' + info.limit)
} catch (e) {
m.reply(info.error) 
console.log(e)}}}

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

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
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};

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
      'x-json-requested': 'true'}});
  const {fileName, sizeBytes, downloadUrl} = JSON.parse((await res.text()).slice(4));
  if (!downloadUrl) throw 'Link Download Limit!';
  const data = await fetch(downloadUrl);
  if (data.status !== 200) throw data.statusText;
  return {downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')};
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
            return { data: '*[ ⚠️ ] No se encontraron imágenes en el enlace proporcionado.*' };
        }
        return { data: imgSrc }; 
    } catch (error) {
        console.lo (error);
        return { data: '*[ ⚠️ ] No se obtuvo respuesta de la página, intente más tarde.*'};
    };
};

module.exports = { descarga, descarga2}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
