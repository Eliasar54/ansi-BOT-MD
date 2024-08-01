require('../main.js') 
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const {googleImage, pinterest} = require('@bochilteam/scraper') 
const Jimp = require('jimp')
const FormData = require("form-data") 
const os = require('os')

async function buscadores(m, command, conn, text, budy, from, fkontak, prefix, args, q, quoted, lang, lolkeysapi) {
if (global.db.data.users[m.sender].registered < true) return  conn.sendMessage(m.chat, {video: {url: verificar}, caption: info.registra}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (global.db.data.users[m.sender].banned) return
if (command == 'yts' || command == 'ytsearch') {
if (global.db.data.users[m.sender].level < 2) return m.reply(`${lenguaje['nivel']()} 2 ${lenguaje['nivel2']()} ${prefix}nivel`) 
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} anime`)
const yts = require("youtube-yts");
const search = await yts(text);
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
let teks = `💫 ${lenguaje['result']()} ` + text + '\n\n';
let no = 1;
let themeemoji = "🔶"
for (let i of search.all) {
  teks += `${themeemoji} ${lenguaje.lengua.opcion} ${no++}\n${themeemoji} ${lenguaje.lengua.tipo} ${i.type}\n${themeemoji} ${lenguaje.lengua.id} ${i.videoId}\n${themeemoji} ${lenguaje.lengua.titulo} ${i.title}\n${themeemoji} ${lenguaje.lengua.vista} ${i.views}\n${themeemoji} ${lenguaje.lengua.dura} ${i.timestamp}\n${themeemoji} ${lenguaje.lengua.subidos} ${i.ago}\n${themeemoji} URL: ${i.url}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`;
}
await conn.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react('💫') 
}

if (command == 'acortar') {
if (global.db.data.users[m.sender].level < 2) return m.reply(`${lenguaje['nivel']()} 2 ${lenguaje['nivel2']()} ${prefix}nivel`) 
 if (!text) return m.reply(`${lenguaje.lengua.text}`)
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) return m.reply(`${lenguaje['error']()}`)
m.reply(`${shortUrl1}`)
}

if (command == 'google') {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} gatito`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `💫  ${lenguaje['result']()} ${text}\n\n`
for (let g of res) {
teks += `🔶 ${lenguaje.lengua.titulo} ${g.title}\n`
teks += `🔶 ${lenguaje.lengua.desc} ${g.snippet}\n`
teks += `🔶 *LINK* : ${g.link}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`
} 
m.reply(teks)})
}


if (command == 'imagen') {
const { googleImage } = require('@bochilteam/scraper');

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
conn.sendMessage(m.chat, { image: { url: images}, caption: `💫 ${lenguaje['result']()} ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch {
try {  
const res = await googleImage(text);
const image = res[Math.floor(Math.random() * res.length)]
const link = image;
conn.sendMessage(m.chat, { image: { url: link}, caption: `💫 ${lenguaje['result']()} : ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)
}}}

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
const result = await translate(`${text}`, {to: lang, autoCorrect: true});
await m.reply(`${lenguaje.lengua.trad} : ` + result.text);
} catch {
try {
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
const loll = await lol.json();
const result2 = loll.result.translated;
await m.reply(`${lenguaje.lengua.trad} : ` + result2);
} catch {
await m.reply(info.error)
}}}

if (command == 'tts') {
if (!text) return m.reply(`${lenguaje.lengua.text2}`)
await conn.sendPresenceUpdate('recording', m.chat)
let texttosay = text
? text
: m.quoted && m.quoted.text
? m.quoted.text
: m.text;
const SpeakEngine = require("google-tts-api"); 
const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "es", slow: false, host: "https://translate.google.com",});
conn.sendMessage(m.chat, { audio: { url: texttospeechurl }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react('🗣️')}

if (command == 'chatgpt' || command == 'ia') {
const translate = require('@vitalets/google-translate-api') 
const {Configuration, OpenAIApi} = require('openai') 
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key})
const openaiii = new OpenAIApi(configuration)
if (prefix == 'a' || prefix == 'A') return
if (!text) return m.reply(`${lenguaje.lengua.ia} ${prefix + command} Recomienda un top 10 de películas de acción`) 
try {
conn.sendPresenceUpdate('composing', m.chat);
let sistema1 = `𝐴𝐶𝑇𝑈𝐴𝑅𝐴𝑆 𝐶𝑂𝑀𝑂 𝑈𝑁 𝐵𝑂𝑇 𝐷𝐸 𝑊𝐻𝐴𝑇𝑆𝐴𝑃𝑃 𝐶𝑅𝐸𝐴𝐷𝑂 𝑃𝑂𝑅 𝐸𝐿𝐼𝐴𝑆𝐴𝑅 𝑌𝑇 𝑇𝑈 𝑆𝐸𝑅𝐴𝑆
✨ 𝐚𝐧𝐬𝑖-𝐁𝐎𝐓 ✨`;
async function getOpenAIChatCompletion(texto) {
const openaiAPIKey = global.openai_key;
let chgptdb = global.chatgpt.data.users[m.sender];
chgptdb.push({ role: 'user', content: texto });
const url = "https://api.openai.com/v1/chat/completions";
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]};
const response = await fetch(url, {method: "POST", headers: headers, body: JSON.stringify(data)});
const result = await response.json();
const finalResponse = result.choices[0].message.content;
return finalResponse;
};try {
    m.react('💬')
} catch (error) {
    console.error("Ocurrió un error al reaccionar:", error);
}
let respuesta = await getOpenAIChatCompletion(text);
if (respuesta == 'error' || respuesta == '' || !respuesta) return XD; // causar error undefined para usar otra api
m.reply(`${respuesta}`.trim());
} catch {
try {
const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
m.reply(botIA222.data.choices[0].text.trim());
} catch {
try {
const syms1 = `𝐴𝐶𝑇𝑈𝐴𝑅𝐴𝑆 𝐶𝑂𝑀𝑂 𝑈𝑁 𝐵𝑂𝑇 𝐷𝐸 𝑊𝐻𝐴𝑇𝑆𝐴𝑃𝑃 𝐶𝑅𝐸𝐴𝐷𝑂 𝑃𝑂𝑅 𝐸𝐿𝐼𝐴𝑆𝐴𝑅 𝑌𝑇 𝑇𝑈 𝑆𝐸𝑅𝐴𝑆
✨ 𝐚𝐧𝐬𝑖-𝐁𝐎𝐓 ✨`
const Empireapi1 = await fetch(`https://api.cafirexos.com/api/chatgpt?text=${text}&name=${m.name}&prompt=${syms1}`);
const empireApijson1 = await Empireapi1.json();
if (empireApijson1.resultado == 'error' || empireApijson1.resultado == '' || !empireApijson1.resultado) return XD; // causar error undefined para lanzar msg de error
m.reply(`${empireApijson1.resultado}`.trim());
} catch {
return m.reply(info.error)}}}}

if (command == 'dalle' || command == 'aimg' || command == 'imagine' || command == 'dall-e') {
if (!text) return m.reply(`${lenguaje.lengua.ia2} ${prefix + command} gatitos llorando`) 
m.reply(`${lenguaje.lengua.espere}`) 
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {  
console.log(`${info.error + e}`);  
try {
const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
console.log(`${e}`) 
try {
const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
 const json3 = await tiores3.json();
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(info.error) 
console.log(e);}}}}}

if (command == 'ss' || command == 'ssweb') {
const scp1 = require('../libs/scraper') 
if (!text) return m.reply(`${lenguaje.lengua.ejem} ${prefix+command} link`)
m.react("🔍") 
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
let krt = await scp1.ssweb(q)
conn.sendMessage(m.chat, {image:krt.result, caption: info.result}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

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
const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
const $ = cheerio.load(link.data)
let wik = $('#firstHeading').text().trim()
let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
m.reply(`‣ ${lenguaje['result']()}\n\n${resulw}`)
} catch (e) {
return m.reply(info.error) 
console.log(e)}}

if (command == 'wallpaper') {
if (global.db.data.users[m.sender].level < 3) return m.reply(`${lenguaje['nivel']()} 3 ${lenguaje['nivel2']()} ${prefix}nivel`) 
if (!text) return m.reply(`${lenguaje.lengua.ejem} ${prefix + command} anime*`) 
m.react("🔍") 
let { wallpaper, wallpaperv2 } = require('@bochilteam/scraper')
let _res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text) 
let _img = _res[Math.floor(Math.random() * _res.length)]
conn.sendMessage(m.chat, { image: { url: _img }, caption: `_${lenguaje['result']()} ${text}_`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'hd') {
const FormData = require("form-data") 
const Jimp =  require("jimp") 
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime) return m.reply(`${lenguaje.lengua.responde} ${prefix + command}*`) 
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`${lenguaje.lengua.incorrecto}`) 
m.reply(`${lenguaje.lengua.aguarde}`) 
try {
let img = await q.download?.();
let pr = await remini(img, "enhance");
conn.sendMessage(m.chat, {image: pr, caption: `${lenguaje.lengua.hd}`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(info.error) 
console.log(e) 
}}

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
  await conn.sendMessage(m.chat, {text: `┏╼┅┅⪻ \`\`\`ZONA-HORARIA 🗺️\`\`\` ⪼┅┅┅┓
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
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┉┛`}, {quoted: m})
}}

module.exports = {buscadores}

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
formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
function (err, res) {
if (err) reject(err);
const chunks = [];
res.on("data", function (chunk) {chunks.push(chunk)});
res.on("end", function () {resolve(Buffer.concat(chunks))});
res.on("error", function (err) {
reject(err);
})},)})}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})