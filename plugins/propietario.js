require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const util = require('util')
const {fileURLToPath} = require('url') 
const { WaMessageStubType, WA_DEFAULT_EPHEMERAL, BufferJSON, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, getContentType,  relayMessage} = require('@whiskeysockets/baileys')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, buffer, getRandom } = require('../libs/fuctions.js'); 

async function owner(isCreator, m, command, conn, text, delay, fkontak, store, quoted, sender, mime, args) {
if (!isCreator) return m.reply(info.owner) 
if (global.db.data.users[m.sender].banned) return
let usuario = global.db.data.users[m.sender]
if (command == 'bcgc' || command == 'bcgroup') {
if (!text) return conn.sendMessage(m.chat, { text: `${lenguaje.owner.text}` }, { quoted: m }); 
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(lenguaje.owner.text1)
for (let i of anu) {
await delay(3 * 3000)
let txt = `${lenguaje.owner.text2}\n\n${text}`
conn.sendText(i, txt, fkontak)}
m.reply(`${lenguaje.owner.text3} ${anu.length} ${lenguaje.owner.text4} ${anu.length * 1.5} sᴇɢ`)}

if (command == 'bc' || command == 'broadcast' || command == 'bcall') {
if (!text) return conn.sendMessage(m.chat, { text: `*Ingrese el texto*` }, { quoted: m }); 
let anu = await store.chats.all().map(v => v.id)
m.reply(`${lenguaje.owner.text3} ${anu.length} ᴄʜᴀᴛs`)
for (let yoi of anu) {
//await sleep(1500)
await delay(3 * 3000)
let txt = `${lenguaje.owner.text2}\n\n${text}`
conn.sendText(yoi, txt, fkontak)}
m.reply(lenguaje.exito())}

if (command == 'block' || command == 'bloquear') {
m.reply(lenguaje.owner.text5)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block')}

if (command == 'unblock' || command == 'desbloquear') {
m.reply(lenguaje.owner.text6)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock')}

if (command == 'setcmd' || command == 'addcmd') {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) return m.reply(lenguaje.owner.text7)
if (!m.quoted.fileSha256) return m.reply(lenguaje.owner.text7)
if (!text) return m.reply(`${lenguaje.owner.text9}\n*${prefix + command} <#menu> <responder a sticker o imagen>*`) 
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) return m.reply(lenguaje.owner.text10)
sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false, }
m.reply(lenguaje.owner.text11)}

if (command == 'delcmd') {
let _sh = m.quoted.fileSha256.toString('base64')
if (!_sh) return m.reply(lenguaje.owner.text12)
if (global.db.data.sticker[_sh] && global.db.data.sticker[_sh].locked) return m.reply(lenguaje.owner.text13)   
delete global.db.data.sticker[_sh]
m.reply(lenguaje.exito())}

if (command == 'listcmd') {
let _teks = `${lenguaje.owner.text14}\n\n──────────────────\n${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
conn.sendText(m.chat, _teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })}

if (command == 'añadirdiamantes' || command == 'dardiamantes' || command == 'addlimit') {
const pajak = 0;
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return m.reply(lenguaje.owner.text15)   
const txt = text.replace('@' + who.split`@`[0], '').trim();
if (!txt) return m.reply(lenguaje.owner.text16)   
if (isNaN(txt)) return m.reply(lenguaje.owner.text17)   
const dmt = parseInt(txt);
let limit = dmt;
const pjk = Math.ceil(dmt * pajak);
limit += pjk;
if (limit < 1) return m.reply(lenguaje.owner.text18) 
const users = global.db.data.users;
users[who].limit += dmt;
m.reply(`≡ 💎 ${lenguaje.owner.text19}
┏╍╍╍╍╍╍╍╍╍╍╍╍╍
┃• *𝗍᥆𝗍ᥲᥣ:* ${dmt}
┃nota
┃si te pones mucha xp el bot se puede detener
┗╍╍╍╍╍╍╍╍╍╍╍╍╍`)}

if (command == 'añadirxp' || command == 'addexp' || command == 'addxp') {
const pajak = 0;
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return m.reply(lenguaje.owner.text15)   
const txt = text.replace('@' + who.split`@`[0], '').trim();
if (!txt) return m.reply(lenguaje.owner.text20) 
if (isNaN(txt)) return m.reply(lenguaje.owner.text17)   
const xp = parseInt(txt);
let exp = xp;
const pjk = Math.ceil(xp * pajak);
exp += pjk;
if (exp < 1) return m.reply(lenguaje.owner.text21) 
const users = global.db.data.users;
users[who].exp += xp;
m.reply(`≡ ᥊⍴ ${lenguaje.owner.text19}
┏╍╍╍╍╍╍╍╍╍╍╍╍╍
┃• *𝗍᥆𝗍ᥲᥣ:* ${dmt}
┃nota
┃si te pones mucha xp el bot se puede detener
┗╍╍╍╍╍╍╍╍╍╍╍╍╍`)}

if (command == 'fotobot' || command == 'nuevafoto' || command == 'seppbot') {
if (!quoted) return m.reply(`¿Donde esta la imagen?\n\nEnviar/responder a una imagen con : ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Enviar/responder imagen con : ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Enviar/responder imagen con : ${prefix + command}`)
var mediz = await conn.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [{tag: 'picture', attrs: { type: 'image' }, content: img }]})
fs.unlinkSync(mediz)
m.reply(`exito`)
} else {
var memeg = await conn.updateProfilePicture(numBot, { url: mediz })
fs.unlinkSync(mediz)
m.reply(`exito`)}}

if (command == 'botname' || command == 'nuevonombre' || command == 'namebot') {
if (!text) return m.reply(`Ej: ${prefix + command} ansí`)
await conn.updateProfileName(text)
m.reply(`Exito`)}

if (command == 'banuser') {
let who  
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) return m.reply(lenguaje.owner.text15) 
let users = global.db.data.users
users[who].banned = true
m.reply(lenguaje.owner.text22)}

if (command == 'unbanuser') {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) return m.reply(lenguaje.owner.text15) 
let users = global.db.data.users
users[who].banned = false
m.reply(lenguaje.owner.text23)}

if (command == 'backup' || command == 'respaldo' || command == 'copia') {
try {
let d = new Date
let date = d.toLocaleDateString('fr', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./database.json`)
let creds = await fs.readFileSync(`./sessions/creds.json`)
await m.reply(lenguaje.owner.text27)
await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)}}

if (command == 'fetch' || command == 'get') {
if (!/^https?:\/\//.test(text)) return m.reply('*Ej:* https://ingresa.link.aqui.com') 
const _url = new URL(text);
const url = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'APIKEY');
const res = await fetch(url); 
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) { 
throw `Content-Length: ${res.headers.get('content-length')}`;
} 
if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, 'file', text, m); 
let txt = await res.buffer();
try {
txt = format(JSON.parse(txt + '')); 
} catch (e) {
txt = txt + '';
} finally {
m.reply(txt.slice(0, 65536) + ''); 
}}}

module.exports = { owner }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})