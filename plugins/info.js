const baileys = require('@whiskeysockets/baileys')
 const moment = require('moment-timezone') 
 const gradient = require('gradient-string') 
 const fetch = require('node-fetch') 
 const axios = require('axios')
 const cheerio = require('cheerio')
 const Jimp = require('jimp')
 const os = require('os')
 const chalk = require('chalk')
 const fs = require("fs")
 const ws = require('ws')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js')
let panel = "https://www.cafirexos.com"
let panel2 = "https://host.panel-infinitywa.store"
let cafi = "https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q"
let cafi2 = "https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ"

async function info(command, conn, m, speed, sender, fkontak, pickRandom, pushname, from, msg, text) {
if (global.db.data.users[m.sender].registered < true) return  conn.sendMessage(m.chat, {video: {url: verificar}, caption: info.registra}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (global.db.data.users[m.sender].banned) return
if (command == 'estado' || command == 'infobot') {
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
var timestamp = speed();  
var latensi = speed() - timestamp  
const user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let stateRun = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *${lenguaje.info.text}*
┊┃━━━━━━━━━━━━━━•
┊┃ ✨ ${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 
┊┃
┊┃ ${lenguaje.info.text2} ${usedMemory} GB / ${totalMemory} GB
┊┃ ${lenguaje.info.text3} ${os.platform()}
┊┃ ${lenguaje.info.text4} ${os.hostname()}
┊┃ ${lenguaje.info.text5} ${cpuUsage.toFixed(2)}%
┊┃ ${lenguaje.info.text6} ${totalMemory} GB
┊┃━━━━━━━━━━━━━━•
┊┃ ${lenguaje.info.text7} ${Object.keys(global.db.data.users).length}
┊┃➢ 𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
┊┃➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
┊┃ ${lenguaje.info.text8} ${runtime(process.uptime())} 
┊┃ ${lenguaje.info.text9} ${conn.public ? 'Público' : `Privado`}
┊┃ ${lenguaje.info.text10} ${user.length}
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩ ${conn.user.id == global.numBot2 ? '' : `\n\n${lenguaje.info.text11} wa.me/${global.numBot.split`@`[0]}`}`.trim() //`
let ments = [me]      
conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, contextInfo:{ mentionedJid:[sender]}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'owner' || command == 'creador' || command == 'contacto') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:; Eliasar YT👑;;;\nFN: Eliasar YT\nORG: Eliasar YT👑\nTITLE:\nitem1.TEL;waid=50582340051:+50582340051\nitem1.X-ABLabel:Propietario 👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:Owner 👑\nEND:VCARD`
let a = await conn.sendMessage(m.chat, { contacts: { displayName: 'ansi 👑', contacts: [{ vcard }] }}, {quoted: m})
await conn.sendMessage(m.chat, { text : `${lenguaje['smsWel']()} @${sender.split("@")[0]}, ${lenguaje.info.text12}\n\n${fb}`, mentions: [sender]}, { quoted: a, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'grupos' || command == 'grupoficiales') {
//const grupp = Math.floor(Math.random() * 70);
conn.sendMessage(m.chat, { text: `${wm}

━━━━━ • ஜ • ❈ • ஜ • ━━━━━

◈ 𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 :
1) ${nn2}

━━━━━ • ஜ • ❈ • ஜ • ━━━━━

◈ 𝙲𝙰𝙽𝙰𝙻 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 :
${n2}`, contextInfo:{mentions: [sender], forwardingScore: 9999999, isForwarded: false, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen2, sourceUrl: nn2}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'instalarbot' || command == 'crearbot') {
conn.sendMessage(m.chat, { text: lenguaje.info.text20(fb, md),
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' },
mentions: [sender], 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": wm,
"body": pushname,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'ping') {
  const { execSync } = require('child_process');
  
  var timestamp = speed();  
  var latensi = speed() - timestamp;
  var platform = os.platform();
  var cpuModel = os.cpus()[0].model;
  var cpuCores = os.cpus().length;
  var systemArch = os.arch();
  var systemVersion = os.release();
  var freeMem = (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB';
  var totalMem = (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB';
  var usedMem = (totalMem - freeMem).toFixed(2) + ' GB';
  var ramPercentageUsed = ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2) + '%';
  var uptime = os.uptime();
  var uptimeDays = Math.floor(uptime / (60 * 60 * 24));
  var uptimeHours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
  var uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
  
  var diskSpace = 'No disponible';
  try {
    diskSpace = execSync('df -h /').toString().split('\n')[1].replace(/\s+/g, ' ').split(' ');
    diskSpace = `${diskSpace[3]} libre de ${diskSpace[1]}`;
  } catch (error) {
    diskSpace = 'No disponible';
  }

  var loadAverage = os.loadavg().map(num => num.toFixed(2)).join(', ');

  var cpuUsage = os.cpus().map((core, index) => `- Núcleo ${index + 1}: ${(core.times.user / 100).toFixed(2)}%`).join('\n');

  var userHome = os.homedir() || 'No disponible';

  conn.sendMessage(from, {
    text: `🏓 *PONG:* ${latensi.toFixed(4)} ms\n
    🖥️ *PLATAFORMA:* ${platform}\n
    🔢 *NUCLEOS DE CPU:* ${cpuCores}\n
    📡 *MODELO DE CPU:* ${cpuModel}\n
    🏗️ *ARQUITECTURA DEL SISTEMA:* ${systemArch}\n
    🔢 *VERSION DEL SISTEMA:* ${systemVersion}\n
    💾 *RAM USADA:* ${usedMem} / ${totalMem}\n
    📊 *PORCENTAJE DE RAM USADA:* ${ramPercentageUsed}\n
    💾 *RAM LIBRE:* ${freeMem}\n
    📦 *ESPACIO TOTAL EN DISCO:* ${diskSpace}\n
    ⏳ *UPTIME:* ${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m\n
    📈 *CARGA PROMEDIO :* ${loadAverage}\n
    ⚙️ *DETALLES DE CPU POR NÚCLEO:*\n${cpuUsage}\n
    📂 *Ruta:* ${userHome}`,
  }, { quoted: msg, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60 });
}

if (command == 'report') {
if (!text) return m.reply(`${lenguaje.info.text21}\n${prefix + command} sticker no funciona`)
conn.sendMessage(`50582340051@s.whatsapp.net`, {text: `╭━━〔 *𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃* 〕━━⬣\n┃\n┃✿ *𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ *𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })
m.reply(`${lenguaje.info.text22}`)
}

if (command == 'donar') {
conn.sendMessage(m.chat, { text: lenguaje.info.text23(paypal) + `\n\n${lenguaje.info.text24}`, contextInfo:{ forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "body": `Ayuda a mantener el bot activo`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'solicitud') {
conn.sendMessage(m.chat, { text: lenguaje.grupos.text8(md, yt, nn7, fb), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": wm, "body": vs, "previewType": "VIDEO", thumbnail: imagen1, sourceUrl: pickRandom([nna, nn, md, yt])}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'cuenta' || command == 'cuentaofc' || command == 'cuentaoficiales' || command == 'cuentas') {
conn.sendMessage(m.chat, { text: `*🔰 ${lenguaje['smsWel']()}* @${sender.split("@")[0]} ${lenguaje['cuenta'](nna, md, yt, tiktok, fb)}`, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, mentionedJid:[sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'infohost' || command == 'host') {
conn.sendMessage(m.chat, { text: lenguaje.info.text27(nna, host, paypal, fb),
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' },
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘𝐖𝐀-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
"sourceUrl": pickRandom([nna, panel2, host, md])}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'cafirexos' || command == 'Cafirexos') {
conn.sendMessage(m.chat, { text: lenguaje.info.text26,
contextInfo:{
forwardedNewsletterMessageInfo: {
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '',  
newsletterName: 'INFINITY-WA 💫' },
mentions: [sender], 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔵 C A F I R E X O S 🔵`, 
body: `✅ Hosting de Calidad`, 
"previewType": "PHOTO",
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png', 
"sourceUrl": pickRandom([nna, panel, cafi, cafi2, md, yt])}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == '5492266613038' || command == '593980586516' || command == '595975740803') {
if (!args.join(" ")) return m.reply(lenguaje.info.text25)
teks = `*|  |*`
teks1 = `\n\n`
teks2 = `\n\n`
for (let i of owner) {
conn.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
conn.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}

if (command == 'sc') {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
let res = await fetch('https://api.github.com/repos/Eliasar54/ansi-BOT-MD')
let json = await res.json()
let txt = `			 *乂 B O T  -  S C R I P T 乂*\n\n`
txt += `◦ *Nombre :* ${json.name}\n`
txt += `◦ *Visitantes :* ${json.watchers_count}\n`
txt += `◦ *Tamaños :* ${(json.size / 1024).toFixed(2)} MB\n`
txt += `◦  *Tamaños :* ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
txt += `◦  *Url* : ${json.html_url}\n\n`
txt += `${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n`
txt += res
await conn.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'INR', amount1000: '1000000000000', requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: txt, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true }}}}}}, {})}

if (command == 'status' || command == 'velocidad') {
const { performance } = require('perf_hooks') 
const osu = require('node-os-utils') 
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]                
let respon = `      \`⧼⧼⧼ 🚀 ＶＥＬＯＣＩＤＡＤ ⧽⧽⧽\`
> ${latensi.toFixed(4)} Seg
> ${oldd - neww} _milisegundos_
                
\`✅ INFORMACIÓN DEL BOT\`               
➢ 𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳: ${runtime(process.uptime())}
➢ 𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂: ${Object.keys(global.db.data.users).length}

\`💻 INFO DE SERVIDOR\`
➢ RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
➢ 𝙿𝙻𝙰𝚃𝙰𝙵𝙾𝚁𝙼𝙰: ${os.platform()}
${lenguaje.info.text4} ${os.hostname()}
${lenguaje.info.text5} ${cpuUsage.toFixed(2)}%
${lenguaje.info.text6} ${totalMemory} GB

\`❐ Uso de memoria de NodeJS\`
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `\`❐ Uso total de CPU\`
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Uso de núcleo(s) de CPU (${cpus.length} CPU central)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
conn.sendFile(m.chat, imagen1, 'lp.jpg', respon, m, false, { contextInfo: { externalAdReply: {title: "𝘐𝘔𝘍𝘖𝘙𝘔𝘈𝘊𝘐𝘖𝘕 𝘈𝘊𝘌𝘙𝘊𝘈 𝘋𝘌𝘓 𝘉𝘖𝘛", body: "Click para entrar", sourceUrl: md, thumbnail: imagen3 }}})}//`

if (command == 'speedtest' || command == 'speed') {
const cp = require('child_process') 
const {promisify} = require('util') 
const exec = promisify(cp.exec).bind(cp);
let o;
conn.fakeReply(m.chat, `🚀 Prueba de velocidad`, '0@s.whatsapp.net', 'test')
try {
o = await exec('python3 speed.py --secure --share');
} catch (e) {
o = e;
} finally {
const {stdout, stderr} = o;
if (stdout.trim()) m.reply(stdout);
if (stderr.trim()) m.reply(stderr)
console.log(stderr) 
}}}

module.exports = { info }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
