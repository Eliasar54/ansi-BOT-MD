// Este código fue desarrollado originalmente por:
// @gata_dios  
// @Skidy89  
// @elrebelde21
// Posteriormente, ha sido mejorado y modificado por Eliasar54 (EliasarYT).
// Cualquier actualización, ajuste o mejora adicional en este código ha sido realizada por Eliasar54 (EliasarYT).
// Los componentes y bases del código fueron inicialmente creados por:
// @gata_dios  
// @Skidy89  
// @elrebelde21
// © Eliasar54 (EliasarYT) 2024
// GitHub: github.com/Eliasar54
// 
// Este mensaje de créditos debe mantenerse en todas las modificaciones de este código. La distribución y modificación 
// de este código están permitidas, siempre que se respeten los créditos de los autores originales y del editor, 
// ya que se han añadido funcionalidades adicionales que no estaban presentes en la versión inicial.
//--------------------[ IMPORTACIONES ]-----------------------          
const baileys = require('@whiskeysockets/baileys'); // trabajar a través de descargas por Whatsapp 
const {
WaMessageStubType,
WA_DEFAULT_EPHEMERAL,
BufferJSON,
areJidsSameUser,
downloadContentFromMessage,
generateWAMessageContent,
generateWAMessageFromContent,
generateWAMessage,
prepareWAMessageMedia,
getContentType,
relayMessage
} = require('@whiskeysockets/baileys'); // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'       
const {
default: makeWASocket,
proto
} = require("@whiskeysockets/baileys")
const moment = require('moment-timezone') // Trabajar con fechas y horas en diferentes zonas horarias
const gradient = require('gradient-string') // Aplicar gradientes de color al texto    
const enviar = (texto) => {
sock.sendMessage(from, {
text: texto
}, {
quoted: info
})
}
const {
exec,
spawn,
execSync
} = require("child_process") // Función 'execSync' del módulo 'child_process' para ejecutar comandos en el sistema operativo 
const chalk = require('chalk') // Estilizar el texto en la consola  
const os = require('os') // Proporciona información del sistema operativo 
const fs = require('fs') // Trabajar con el sistema de archivos    
const fetch = require('node-fetch')
const axios = require('axios')
const {
fileURLToPath
} = require('url')
const cheerio = require('cheerio')
const yts = require('yt-search')
const gpt = require('api-dylux')
const util = require('util')
const createHash = require('crypto')
const mimetype = require("mime-types")
const ws = require('ws')
const JavaScriptObfuscator = require('javascript-obfuscator')
const webp = require("node-webpmux")
const Jimp = require('jimp')
const {
File
} = require("megajs")
const speed = require("performance-now")
const ffmpeg = require("fluent-ffmpeg")
const similarity = require('similarity')
const translate = require('@vitalets/google-translate-api')
const {
canLevelUp,
xpRange
} = require('./libs/levelling.js')
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
getRandom,
msToTime,
downloadMediaMessage,
convertirMsADiasHorasMinutosSegundos,
pickRandom,
getUserBio,
asyncgetUserProfilePic
} = require('./libs/fuctions')
const {
jadibot,
listJadibot,
killJadibot
} = require('./plugins/serbot.js')
const {
menu
} = require('./plugins/menu.js')
const {
info
} = require('./plugins/info.js')
const {
reg,
rpg
} = require('./plugins/rpg.js')
const {
game,
game2,
game3
} = require('./plugins/juegos.js')
const {
buscadores
} = require('./plugins/buscadores.js')
const {
efec,
efect2,
convertidores
} = require('./plugins/convertidores.js')
const {
grupo
} = require('./plugins/grupos.js')
const {
nsfw
} = require('./plugins/nsfw.js')
/*const {
randow,
randow2
} = require('./plugins/randow.js')*/
const {
descarga,
descarga2
} = require('./plugins/descargas.js')
const {
stickers
} = require('./plugins/stickers.js')
const {
owner
} = require('./plugins/propietario.js')
const {
enable
} = require('./plugins/enable.js')
//global.db.data.sticker = global.db.data.sticker || {} 
let user = global.db.data.users[m.sender]
let tebaklagu = global.db.data.game.tebaklagu = []
let kuismath = global.db.data.game.math = []
let tekateki = global.db.data.game.tekateki = []
const msgs = (message) => {
if (message.length >= 10) {
return `${message.substr(0, 500)}`
} else {
return `${message}`
}
}

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

module.exports = conn = async (conn, m, chatUpdate, mek, store) => {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//----------------------[ ATRIBUTOS ]-------------------------
if (m.key.id.startsWith("BAE5")) return    
var budy = (typeof m.text == 'string' ? m.text : '')   
var prefix = body.match(/^[^\w\s]/gi)?.[0] || "";
//var prefix = body.match(/^[/.*#]/)   
const isCmd = body.startsWith(prefix)  
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const args = body.trim().split(/ +/).slice(1) 
const from = m.chat  
const msg = JSON.parse(JSON.stringify(m, undefined, 2)) 
const content = JSON.stringify(m.message) 
const type = m.mtype 
let t = m.messageTimestamp 
const pushname = m.pushName || "Sin nombre" 
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"  
const _isBot = conn.user.jid

m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 
const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid  
const isCreator = [conn.decodeJid(conn.user.id), ...global.owner.map(([numero]) => numero)].map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isOwner = isCreator || m.fromMe;
const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isPrems = isOwner || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) 
//const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) 
const itsMe = m.sender == conn.user.id ? true : false 
const text = args.join(" ") 
const q = args.join(" ") 
const quoted = m.quoted ? m.quoted : m 
const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const mime = (quoted.msg || quoted).mimetype || ''  
const isMedia = /image|video|sticker|audio/.test(mime)
const mentions = []  
if (m.message[type].contextInfo) {   
if (m.message[type].contextInfo.mentionedJid) {  
const msd = m.message[type].contextInfo.mentionedJid  
for (let i = 0; i < msd.length; i++) {  
mentions.push(msd[i])}}}  

/*
if (m.key.id.startsWith("BAE5")) return;

var body = (typeof m.text == 'string' ? m.text : '');
var budy = body;

const allowedPrefixes = /^[./*#!]/;
const isCmd = allowedPrefixes.test(body) || true;
const command = isCmd 
? body.replace(allowedPrefixes, '').trim().split(/ +/).shift().toLocaleLowerCase() 
: body.trim().split(/ +/).shift().toLocaleLowerCase();

const args = body.trim().split(/ +/).slice(isCmd ? 1 : 0);
const from = m.chat;
const msg = JSON.parse(JSON.stringify(m, undefined, 2));
const content = JSON.stringify(m.message);
const type = m.mtype;
let t = m.messageTimestamp;
const pushname = m.pushName || "Sin nombre";
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net";
const _isBot = conn.user.jid;
const userSender = m.key.fromMe
? botnm
: m.isGroup && m.key.participant.includes(":")
? m.key.participant.split(":")[0] + "@s.whatsapp.net"
: m.key.remoteJid.includes(":")
? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net"
: m.key.fromMe
? botnm
: m.isGroup
? m.key.participant
: m.key.remoteJid;

const isCreator = [
conn.decodeJid(conn.user.id),
...global.owner.map(([numero]) => numero),
]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(m.sender);

const isOwner = isCreator || m.fromMe;
const isMods =
isOwner ||
global.mods
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(m.sender);
const isPrems =
isOwner ||
global.premium
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(m.sender);

const itsMe = m.sender == conn.user.id;
const text = args.join(" ");
const q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const mime = (quoted.msg || quoted).mimetype || '';
const isMedia = /image|video|sticker|audio/.test(mime);
const mentions = [];

if (m.message[type].contextInfo) {
if (m.message[type].contextInfo.mentionedJid) {
const msd = m.message[type].contextInfo.mentionedJid;
for (let i = 0; i < msd.length; i++) {
mentions.push(msd[i]);
}
}
}
*/
//----------------------[ FUNCION/GRUPO ]-------------------------
const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botnm) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false
const isBaneed = m.isGroup ? blockList.includes(userSender) : false
const isPremium = m.isGroup ? premium.includes(userSender) : false
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
const thumb = fs.readFileSync("./media/menu2.jpg")
const fkontak = {
  "key": {
    "participants": "50582340051@s.whatsapp.net",
    "remoteJid": "status@broadcast",
    "fromMe": false,
    "id": "Halo"
  },
  "message": {
    "contactMessage": {
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:EliadarYT;;;\nFN:EliadarYT\nitem1.TEL;waid=50582340051:50582340051\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
    }
  },
  "participant": "50582340051@s.whatsapp.net"
};
const ftroli = {
key: {
fromMe: false,
"participant": "0@s.whatsapp.net",
"remoteJid": "status@broadcast"
},
"message": {
orderMessage: {
itemCount: 2022,
status: 200,
thumbnail: thumb,
surface: 200,
message: "ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ",
orderTitle: "sᴜᴘᴇʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ",
sellerJid: '0@s.whatsapp.net'
}
},
contextInfo: {
"forwardingScore": 999,
"isForwarded": true
},
sendEphemeral: true
}
const fdoc = {
key: {
participant: '0@s.whatsapp.net',
...(from ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: botname,
jpegThumbnail: null
}
}
}
const kick = function(from, orangnya) {
for (let i of orangnya) {
conn.groupParticipantsUpdate(m.chat, [i], "remove")
}
}
const time = moment(Number(msg.messageTimestamp + "000")).locale("es-mx").tz("America/Asuncion").format('MMMM Do YYYY, h:mm:ss a')

/*const reply = (text) => {  
m.reply(text)}*/
let canalId = [
"120363296103096943@newsletter",
"120363296103096943@newsletter"
];
let canalNombre = [
"✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨",
"✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨"
];

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalId.length);
let id = canalId[randomIndex];
let nombre = canalNombre[randomIndex];
return {
id,
nombre
};
}

async function sendMessage(conn, chat, text, m) {
const {
id,
nombre
} = await getRandomChannel();

conn.sendMessage(chat, {
text: text,
contextInfo: {
forwardedNewsletterMessageInfo: {
newsletterJid: id,
serverMessageId: '',
newsletterName: nombre
},
forwardingScore: 9999999,
isForwarded: true
}
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 60 * 1000,
disappearingMessagesInChat: 24 * 60 * 60 * 1000 // Ajustado a milisegundos
})
}
m.reply = (text) => {
sendMessage(conn, m.chat, text, m)
}
const sendAdMessage = (text, title, body, image, url) => {
conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: title,
body: body,
mediaUrl: url,
sourceUrl: url,
previewType: 'PHOTO',
showAdAttribution: true,
thumbnail: image,
sourceUrl: url
}
}
}, {})
}
const sendImage = (image, caption) => {
conn.sendMessage(m.chat, {
image: image,
caption: caption
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
}
const sendImageAsUrl = (url, caption) => {
conn.sendMessage(m.chat, {
image: {
url: url
},
caption: caption
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
}

//-------------[ TIPOS DE MENSAJES Y CITADOS ]----------------
const isAudio = type == 'audioMessage' // Mensaje de Audio  
const isSticker = type == 'stickerMessage' // Mensaje de Sticker  
const isContact = type == 'contactMessage' // Mensaje de Contacto  
const isLocation = type == 'locationMessage' // Mensaje de Localización   
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message') // Mensaje citado de cualquier tipo  
const isViewOnce = (type === 'viewOnceMessage') // Verifica si el tipo de mensaje es (mensaje de vista única)  

// Responder cmd con medios
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let {
text,
mentionedJid
} = hash
let messages = await generateWAMessage(m.chat, {
text: text,
mentions: mentionedJid
}, {
userJid: conn.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}

//--------------------[ INFO CONSOLE ]-----------------------
//© ESTE INFO CONSOLE ESTA ECHO POR ELIASAR54 (ELIASARYT)
if (m.message) {
let groupLink = '';
if (m.isGroup) {
try {
const inviteCode = await conn.groupInviteCode(m.chat);
groupLink = `https://chat.whatsapp.com/${inviteCode}`;
} catch {
groupLink = 'El bot no es admin';
}
}
console.log(chalk.bold.hex('#FFB6C1')(`━━━━━━━━━━ ❀~❀ ━━━━━━━━━━\n│❁ ${conn.user.jid.split`@`[0]} ➥ ${botname} ${conn.user.id == global.numBot2 ? '' : '(sub-bot)'} ${vs}`) + chalk.bold.hex('#DA70D6')(`\n│──────────────\n│⏰ ${lenguaje.consola.text} `) + chalk.hex('#FF69B4')(new Date().toLocaleString('es-ES', {
timeZone: 'America/Argentina/Buenos_Aires'
})) + chalk.bold.hex('#FF1493')(`\n️│🏷️ ${lenguaje.consola.text1} `) + chalk.bold.hex('#FFFAFA')(`[${conn.public ? 'Público' : 'Privado'}]`) + chalk.bold.hex('#FFD700')(`\n│📑 ${lenguaje.consola.text2} `) + chalk.hex('#FFDAB9')(`${type}`) + (m.isGroup ? chalk.bold.hex('#98FB98')(`\n│🌸 ${lenguaje.consola.text4} `) + chalk.hex('#ADFF2F')(groupName) + ' ➜ ' + gradient.pastel(from) + `\n│🔗 Enlace del grupo: ${groupLink}` : chalk.bold.hex('#98FB98')(`\n│💌 ${lenguaje.consola.text5} `) + chalk.hex('#ADFF2F')(userSender)) + chalk.bold.hex('#BA55D3')(`\n│✨ ${lenguaje.consola.text3} `) + chalk.hex('#9370DB')(pushname) + ' ➜ ' + gradient.pastel(userSender) + chalk.bold.hex('#FFF5EE')(`\n│💬 ${lenguaje.consola.text6}`) + chalk.hex('#FFFAFA')(`\n━━━━━━━━━━❦✿❦━━━━━━━━━━━\n${msgs(m.text)}\n`));
}

//--------------------[ AUTOBIO ]----------------------- 
/*if (global.db.data.settings[numBot].autobio) { 
let setting = global.db.data.settings[numBot]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
var timestamp = speed();   
var latensi = speed() - timestamp 
let text = [`${lenguaje.Bio.text} ${Object.keys(global.db.data.users).length} ${lenguaje.Bio.text2} ${latensi.toFixed(4)} 🚀`, `${lenguaje.Bio.text3} ${runtime(process.uptime())}\n\n${lenguaje.Bio.text4}`, `${lenguaje.Bio.text5}`, `✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨ uso: ${conn.public ? 'Publico' : 'Privado'} | ${lenguaje.Bio.text6} ${runtime(process.uptime())} | ${lenguaje.Bio.text7} ${Object.keys(global.db.data.users).length} crador Eliasar YT`]
let bio = text[Math.floor(Math.random() * text.length)]
try {
await conn.updateProfileStatus(bio)
//await delay(3 * 3000) 
//await conn.updateProfilePicture(numBot, { url: "https://telegra.ph/file/84b0bad9adbbd5ed2b95e.jpg" })
setting.status = new Date() * 1 
} catch {
console.log(`[𝚄𝙿𝙳𝙰𝚃𝙴]\n𝙿𝚒𝚗𝚐: ${latensi.toFixed(4)}`) 
}}}*/

//--------------------[ AUTOREAD ]-----------------------
if (!conn.autoread && m.message && prefix) {
//await delay(1 * 1000) 
await conn.sendPresenceUpdate('composing', m.chat)
conn.readMessages([m.key])
}

//--------------------[ ANTIFAKES ]-----------------------
if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {
const forbidPrefixes = ["1", "994", "48", "43", "40", "41", "49"];
const senderNumber = m.sender.split('@')[0];
for (const prefix of forbidPrefixes) {
if (senderNumber.startsWith(prefix)) {
m.reply(lenguaje['smsAntiFake']());
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
break;
}
}
}

if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {
const forbidPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];
const senderNumber = m.sender.split('@')[0];
for (const prefix of forbidPrefixes) {
if (senderNumber.startsWith(prefix)) {
m.reply(lenguaje['smsAntiArabe']());
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
break;
}
}
}

//--------------------[ viewOnceMessage ]-----------------------
if (m.mtype == 'viewOnceMessageV2') {
//if (global.db.data.chats[m.chat].viewonce) return
teks = `\`${lenguaje['viewOnce']()}\``
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption} ${teks}`, m)
} else if (/image/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption} ${teks}`, m)
}
}

//--------------------[ ANTILINK ]-----------------------
if (global.db.data.chats[m.chat].antilink) {
let linkRegex = /\b(?:https?:\/\/|www\.|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})(?:\/[^\s]*)?\b/gi;

if (m.text.match(linkRegex)) {
let senderId = m.key.participant;
let messageId = m.key.id;

if (!isBotAdmins) return;

let groupLink = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`;
if (m.text.includes(groupLink)) return;
if (isGroupAdmins) return;

await conn.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: messageId,
participant: senderId
}
});

await conn.groupParticipantsUpdate(m.chat, [senderId], 'remove');
}
}
//--------------------[ ANTITOXIC ]-----------------------
if (global.db.data.chats[m.chat].antitoxic && !isCreator) {
if (budy.match(`g0re|g0r3|g.o.r.e|sap0|sap4|malparido|malparida|malparidos|malparidas|m4lp4rid0|m4lp4rido|m4lparido|malp4rido|m4lparid0|malp4rid0|chocha|chup4la|chup4l4|chupalo|chup4lo|chup4l0|chupal0|chupon|chupameesta|sabandija|hijodelagranputa|hijodeputa|hijadeputa|hijadelagranputa|kbron|kbrona|cajetuda|laconchadedios|putita|putito|put1t4|putit4|putit0|put1to|put1ta|pr0stitut4s|pr0stitutas|pr05titutas|pr0stitut45|prostitut45|prostituta5|pr0stitut45|fanax|f4nax|drogas|droga|dr0g4|nepe|p3ne|p3n3|pen3|p.e.n.e|pvt0|puto|pvto|put0|hijodelagransetentamilparesdeputa|Chingadamadre|coño|c0ño|coñ0|c0ñ0|afeminado|drog4|cocaína|marihuana|chocho|chocha|cagon|pedorro|agrandado|agrandada|pedorra|sape|nmms|mamar|chigadamadre|hijueputa|chupa|kaka|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cp|cepe|sepe|sepesito|cepecito|cepesito|hldv|ptm|baboso|babosa|babosos|babosas|feo|fea|feos|feas|webo|webos|mamawebos|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|joden|jodemos|dumb|fuck|shit|bullshit|cunt|cum|semen|bitch|motherfucker|foker|fucking`)) {
if (m.isBaileys && m.fromMe) {
return !0
}
if (!m.isGroup) {
return !1
}
if (isGroupAdmins) return
const user = global.db.data.users[m.sender];
const chat = global.db.data.chats[m.chat];
const bot = global.db.data.settings[conn.user.jid] || {};
const isToxic = budy.match;
user.warn += 1;
if (!(user.warn >= 4)) await conn.sendMessage(m.chat, {
text: `${lenguaje['AntiToxic'](m, isToxic)}\n⚠️ *${user.warn}/4*\n\n${botname}`,
mentions: [m.sender]
}, {
quoted: m
})
if (user.warn >= 4) {
user.warn = 0;
await conn.sendMessage(m.chat, {
text: `*@${m.sender.split('@')[0]} ${lenguaje['AntiToxic2']()}*`,
mentions: [m.sender]
}, {
quoted: m
})
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
return !1;
}
}

//-------[ MODO PUBLIC/PRIVADO ]-----------
if (!conn.public && !isCreator) {
if (!m.key.fromMe) return
}

//--------------------[ BANCHAT ]---------------------
if (global.db.data.chats[m.chat].isBanned && !isCreator) {
return
}

//----------------[ MODOADMINS ]------------------
if (global.db.data.chats[m.chat].modeadmin && !isGroupAdmins) {
return
}

//----------------[ AUTOSTICKERS]--------------------
if (global.db.data.chats[m.chat].autosticker) {
await conn.sendPresenceUpdate('composing', m.chat)
if (/image/.test(mime) && !/webp/.test(mime)) {
//m.reply(`_Calma crack estoy haciendo tu sticker 👏_\n\n_*Autosticker esta activado*_`)   
let media = await quoted.download()
await conn.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author,
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: botname,
body: `h`,
mediaType: 2,
sourceUrl: nn6,
thumbnail: imagen1
}
}
}, {
quoted: m
})
console.log(`Auto sticker detected`)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return reply(lenguaje['smsAutoSicker']())
let media = await quoted.download()
await conn.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: goblal.author,
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: wm,
mediaType: 2,
sourceUrl: nn6,
thumbnail: imagen1
}
}
}, {
quoted: m
})
}
}

//----------------[ AUTOLEVELUP/AUTONIVEL ]-------------------
function pickRandom(...items) {
const flatItems = items.flat();
return flatItems[Math.floor(Math.random() * flatItems.length)];
}

if (global.db.data.chats[m.chat].autolevelup) {
let user = global.db.data.users[m.sender];
if (!user.autolevelup) return true;

let before = user.level * 1;
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;

if (before !== user.level) {
let ppuser;
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image');
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
}

const imageUrl = `https://eliasar-yt-api.vercel.app/api/levelup?avatar=${encodeURIComponent(ppuser)}`;
let text = [
`🎉 ¡Felicidades! @${m.sender.split`@`[0]} ha subido de nivel.\n⬅️ Nivel anterior: ${before}\n➡️ Nuevo nivel: ${user.level}\n🌟 Rol actual: ${user.role}\n📅 Fecha: ${new Date().toLocaleString('id-ID')}\n✨ ¡Sigue así!`,
`🌟 @${m.sender.split`@`[0]} ha alcanzado un nuevo nivel.\n🔙 Anterior: ${before}\n🔜 Nuevo: ${user.level}\n👑 Rol: ${user.role}\n📅 Fecha: ${new Date().toLocaleString('id-ID')}\n> mira tu nivel aquí https://whatsapp.com/channel/0029Vb1f29nIt5rnxPslac3q`
];
let str = text[Math.floor(Math.random() * text.length)];

conn.sendMessage(m.chat, {
image: { url: imageUrl },
caption: str,
contextInfo: { mentionedJid: [m.sender] }
}, {
quoted: fkontak,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
});

let notificationId = '120363386885800287@newsletter';

try {
const response = await axios.get(ppuser, { responseType: 'arraybuffer' });
const thumbnailBuffer = Buffer.from(response.data, 'binary');

let niv = `*${m.pushName || 'Anónimo'}* Obtiene un nuevo nivel 🥳\n\n*• Nivel anterior:* ${before}\n*• Nivel actual:* ${user.level}\n*• Rol:* ${user.role}\n*• Bot:* ${wm}`;
let nivell = `*${m.pushName || 'Anónimo'} Haz subido un nuevo nivel 🥳*\n\n> _*• NIVEL:* ${before} ⟿ ${user.level}_`;
let nivelll = `🥳 ${m.pushName || 'Anónimo'} Que pro Acaba de alcanzar un nuevo nivel 🥳\n\n*• Nivel:* ${before} ⟿ ${user.level}\n*• Rango:* ${user.role}\n*• Bot:* ${wm}`;
let messageToSend = pickRandom(niv, nivelll);

await conn.sendMessage(notificationId, {
text: messageToSend,
contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '¡Haz subido de nivel 🥳!',
thumbnail: thumbnailBuffer,
sourceUrl: pickRandom(nna, nna2, nn, md, yt, tiktok),
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}
}
}, { quoted: null });
} catch (err) {
console.error("Error al enviar el mensaje al grupo:", err);
}
}
}


//----------------[ CHATBOT/AUTOMATICO ]-------------------
if (global.db.data.chats[m.chat].simi) {
let textodem = budy
try {
await conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/simi?text=${encodeURIComponent(textodem)}`)
let res = await gpt.json()
await delay(1 * 1000)
await m.reply(res.data.message)
} catch {
//🟢 [ES] SI DA ERROR USARA ESTA OTRA OPCION DE API DE IA QUE RECUERDA EL NOMBRE DE LA PERSONA
//🟢 [EN] IF IT ERROR, IT WILL USE THIS OTHER AI API OPTION THAT REMEMBER THE NAME OF THE PERSON 
if (textodem.includes('Hola')) textodem = textodem.replace('Hola', 'Hello')
if (textodem.includes('hola')) textodem = textodem.replace('hola', 'hello')
if (textodem.includes('HOLA')) textodem = textodem.replace('HOLA', 'HELLO')
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + textodem)
const resu = await reis.json()
const nama = m.pushName || '1'
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0])
const res = await api.json()
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt)
const resu2 = await reis2.json()
await delay(3 * 3000)
await m.reply(resu2[0][0][0])
}
}

//---------------------[ ANTIPRIVADO ]------------------------
if (!m.isGroup && !isCreator) {
const allowedCommands = [
'.serbot', '.ansisub --code', '.creador', '.jadibot', '.infohost',
'/serbot', '/ansisub --code', '/creador', '/jadibot', '/infohost',
'#serbot', '#ansisub --code', '#creador', '#jadibot', '#infohost',
'CODE 🔢', 'QR 🫧'
];

const isAllowedCommand = allowedCommands.some(command => m.text.includes(command));

if (!isAllowedCommand && global.db.data.settings[numBot].antiprivado) {
conn.sendMessage(m.chat, {
text: `*${lenguaje['smsWel']()}* @${sender.split`@`[0]}, ${lenguaje['smsAntiPv']()}\n${nn2}`,
mentions: [m.sender]
}, {
quoted: m
});
await delay(2 * 2000);
await conn.updateBlockStatus(m.chat, 'block');
return;
}
}

/*if (msg.text.toLowerCase().includes('serbot') || msg.text.toLowerCase().includes('jadibot') || msg.text.toLowerCase().includes('estado') || msg.text.toLowerCase().includes('owner') || msg.text.toLowerCase().includes('infohost') || msg.text.toLowerCase().includes('grupos') || msg.text.toLowerCase().includes('stop')) {
} else if (global.db.data.settings[numBot].antipv && !m.isGroup && !isCreator) {
return;
}*/

//---------------------[ MULTILENGUAJE ]------------------------
//ESTA FINCION A SIDO ELIMINADA POR ELIASAR54 (ELIASARYT)
const {
en,
es,
ar,
id,
pt,
rs
} = require('./libs/idiomas/total-idiomas.js')
let user = global.db.data.users[m.sender]
if (user.Language == 'es') {
global.lenguaje = es
} else if (user.Language == 'en') {
global.lenguaje = en
} else if (user.Language == 'ar') {
global.lenguaje = ar
} else if (user.Language == 'id') {
global.lenguaje = id
} else if (user.Language == 'pt') {
global.lenguaje = pt
} else if (user.Language == 'rs') {
global.lenguaje = rs
} else {
global.lenguaje = es
}

//---------------------[ ANTISPAM ]------------------------
if (global.db.data.chats[m.chat].antispam && prefix) {
let user = global.db.data.users[m.sender]
let str = [nna, md, yt, tiktok, fb]
let info = str[Math.floor(Math.random() * str.length)]
const date = global.db.data.users[m.sender].spam + 3000; //600000 
if (new Date - global.db.data.users[m.sender].spam < 3000) return console.log(`[ SPAM ] ➢ ${command} [${args.length}]`)
global.db.data.users[m.sender].spam = new Date * 1;
}

//---------------------[ TicTacToe ]------------------------
let winScore = 4999
let playScore = 99
this.game = this.game ? this.game : {}
let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
if (room13) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
//reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room13.game.currentTurn) {
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'El juego ha terminado',
'-2': 'Inválido',
'-1': 'Posición inválida',
0: 'Posición inválida',
} [ok])
return !0
}
if (m.sender === room13.game.winner) isWin = true
else if (room13.game.board === 511) isTie = true
let arr = room13.game.render().map(v => {
return {
X: '❎',
O: '❌',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
} [v]
})
if (isSurrender) {
room13.game._currentTurn = m.sender === room13.game.playerX
isWin = true
}
let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
let str = `${lenguaje.game.text1}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')} 
${arr.slice(6).join('')}

❎ = @${room13.game.playerX.split('@')[0]}
❌ = @${room13.game.playerO.split('@')[0]}

${isWin ? `@${winner.split('@')[0]} ${lenguaje.game.text2} ${winScore} XP` : isTie ? `${lenguaje.game.text3}` : `${lenguaje.game.text4}

${['❎', '❌'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}` //`
let users = global.db.data.users
if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room13.x !== room13.o) await conn.sendText(room13.x, str, m, {
mentions: parseMention(str)
})
await conn.sendText(room13.o, str, m, {
mentions: parseMention(str)
})

if (isTie || isWin) {
users[room13.game.playerX].exp += playScore
users[room13.game.playerO].exp += playScore
delete this.game[room13.id]
if (isWin)
users[winner].exp += winScore - playScore
}
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
const exp = Math.floor(Math.random() * 600)
global.db.data.users[m.sender].exp += exp;
await m.reply(`${lenguaje.game.text5} ${exp} Exp`)
m.react(`✅`)
delete kuismath[m.sender.split('@')[0]]
} else m.react(`❌`)
}

this.confirm = this.confirm ? this.confirm : {}
if (this.confirm[m.sender.split('@')[0]]) {
let {
timeout,
sender,
message,
to,
type,
count
} = this.confirm[m.sender.split('@')[0]]
let user = global.db.data.users[sender]
let _user = global.db.data.users[to]
if (/^No|no$/i.test(body)) {
clearTimeout(timeout)
delete this.confirm[m.sender.split('@')[0]]
return this.sendTextWithMentions(m.chat, `${lenguaje.transfer.text1}.`, m)
}

if (/^Si|si$/i.test(body)) {
let previous = user[type] * 1
let _previous = _user[type] * 1
user[type] -= count * 1
_user[type] += count * 1
if (previous > user[type] * 1 && _previous < _user[type] * 1) {
conn.sendMessage(m.chat, {
text: `*${lenguaje.transfer.text2} ${count} ${type} a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`,
mentions: [to]
}, {
quoted: m
});
} else {
user[type] = previous;
_user[type] = _previous;
conn.sendMessage(m.chat, {
text: `*[ ⚠️ ] ${lenguaje.transfer.text3} ${count} ${type} a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`,
mentions: [to]
}, {
quoted: m
})
}
clearTimeout(timeout);
delete this.confirm[sender];
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`${lenguaje.rpg.text}\n\n${reason ? `🔸️${user.Language === 'es' ? ' *𝚁𝙰𝚉𝙾𝙽*' : user.Language === 'en' ? '*REASON:*' : user.Language === 'ar' ? '*سبب:*' : user.Language === 'pt' ? '*RAZÃO:*' : user.Language === 'id' ? '*ALASAN:*' : user.Language === 'rs' ? '*ПРИЧИНА:*' : user.Language} : ` + reason : `🔸️ ${user.Language === 'es' ? ' *𝚁𝙰𝚉𝙾𝙽*: 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗' : user.Language === 'en' ? '*REASON:* No reason' : user.Language === 'ar' ? '*السبب:* لا يوجد سبب' : user.Language === 'pt' ? '*MOTIVO:* Sem motivo' : user.Language === 'id' ? '*ALASAN:* Tidak ada alasan' : user.Language === 'rs' ? '*ПРИЧИНА:* Нет причин' : user.Language}`}\n🔸️ ${lenguaje.rpg.text1} ${clockString(new Date - afkTime)}`.trim())
} //`
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`${lenguaje.rpg.text2}\n${user.afkReason ? '\n*𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n${lenguaje.rpg.text1} ${clockString(new Date - user.afkTime)}`.trim())
user.afkTime = -1
user.afkReason = ''
}

if (m.mtype === 'interactiveResponseMessage') {
let msg = m.message[m.mtype] || m.msg
if (msg.nativeFlowResponseMessage && !m.isBot) {
let {
id
} = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}
if (id) {
let emit = {
key: {
...m.key
},
message: {
extendedTextMessage: {
text: id
}
},
pushName: m.pushName,
messageTimestamp: m.messageTimestamp || 754785898978
}
return conn.ev.emit('messages.upsert', {
messages: [emit],
type: 'notify'
})
}
}
}

//características totales
const mariafeature = () => {
var mytext = fs.readFileSync("./main.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length
return numUpper
}
const path = './conversationHistory.json';
if (!fs.existsSync(path)) {
fs.writeFileSync(path, JSON.stringify({}));
}

if (!isCmd && body && sender !== botNumber && !m.key.remoteJid.endsWith('@g.us')) {
let conversationHistory = JSON.parse(fs.readFileSync(path, 'utf8'));

if (!conversationHistory[sender]) {
conversationHistory[sender] = [
{ role: 'system', content: `Actúa como un bot de soporte amigable creado por EliasarYT, ayudando a los usuarios con problemas o dudas. Debes dar soporte a ansi-BOT-MD (WhatsApp) y Alfa TG (Telegram). Utiliza un enfoque claro, útil y amigable, basado en el modelo de IA Gemini, mi nombre es ${pushname}.` }
];
}

conversationHistory[sender].push({ role: 'user', content: body });

let conversationText = '';
conversationHistory[sender].forEach((msg) => {
if (msg.role === 'system') {
conversationText += `Sistema: ${msg.content}\n\n`;
} else if (msg.role === 'user') {
conversationText += `Usuario: ${msg.content}\n\n`;
} else if (msg.role === 'assistant') {
conversationText += `Soporte: ${msg.content}\n\n`;
}
});
conversationText += 'Soporte:';

const data = JSON.stringify({
contents: [{ parts: [{ text: conversationText }] }]
});

const options = {
hostname: 'generativelanguage.googleapis.com',
path: '/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDvz3ugbxACZzEi2dELUYJnLznMNVtmHgY',
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Content-Length': Buffer.byteLength(data)
}
};

const req = https.request(options, (res) => {
let responseData = '';

res.on('data', (chunk) => {
responseData += chunk;
});

res.on('end', () => {
try {
const responseJson = JSON.parse(responseData);
const replyText = responseJson?.candidates?.[0]?.content?.parts?.[0]?.text;

if (replyText) {
conversationHistory[sender].push({ role: 'assistant', content: replyText });
fs.writeFileSync(path, JSON.stringify(conversationHistory, null, 2));
client.sendMessage(m.chat, { text: replyText }, { quoted: m });
} else {
console.error("La IA no devolvió una respuesta válida.");
m.reply("La IA no envió una respuesta válida.");
}
} catch (error) {
console.error('Error al procesar la respuesta de la IA:', error);
m.reply(`Error al procesar la respuesta: ${error.message}`);
}
});
});

req.on('error', (error) => {
console.error('Error en la solicitud HTTPS:', error);
m.reply(`Error de conexión con la IA: ${error.message}`);
});

req.write(data);
req.end();
return;
}
//ARRANCA LA DIVERSIÓN   
switch (prefix && command) {
case 'test': {
const test = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: 'gey'
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ""
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "",
subtitle: "",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "single_select",
"buttonParamsJson": `{"title":"Click", "sections":[{"title":"", "highlight_label": "", "rows":[ {"header":"", "title":"Velocidad", "description":"", "id":".ping"}, {"header":"", "title":"Estado", "description":"", "id":".estado"}, {"header":"", "title":"Menu", "description":"", "id":".menu"}]}]}`
}]
}),
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363296103096943@newsletter',
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨',
serverMessageId: ''
}
}
})
}
}
}, {})
const testI = generateWAMessageFromContent(m.key.remoteJid, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: 'NovaBot'
}),
header: proto.Message.InteractiveMessage.Header.create({
title: 'Nova',
subtitle: 'MarioJs',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Menu","id":".menu"}`
}, {
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Ping","id":".ping"}`
}],
})
})
}
}
}, {})
//conn.relayMessage(test.key.remoteJid, test.message, { messageId: test.key.id }, {quoted: m})
conn.relayMessage(testI.key.remoteJid, testI.message, {
messageId: testI.key.id
}, {
quoted: m
})
}
break



case 'yts':
case 'playlist':
case 'ytsearch':
case 'acortar':
case 'google':
case 'imagen':
case 'traducir':
case 'translate':
case "tts":
case 'ia':
case 'chatgpt':
case 'dalle':
case 'ia2':
case 'aimg':
case 'imagine':
case 'dall-e':
case 'ss':
case 'ssweb':
case 'wallpaper':
case 'hd':
case 'horario':
case 'bard':
case 'wikipedia':
case 'wiki':
case 'pinterest':
case 'style':
case 'styletext':
case 'npmsearch':
case 'gpt4o':
case 'gpt':
case 'ip':
await buscadores(m, command, conn, text, budy, from, fkontak, prefix, args, quoted, lolkeysapi)
break

//jadibot/serbot  
case 'serbot':
case 'jadibot':
case 'qr':
jadibot(conn, m, command, text, args, sender)
break
case 'deljadibot':
case 'stop':
killJadibot(conn, m, prefix, command, sender)
break
case 'bots':
case 'listbots':
const user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const message = user.map((v, index) => `[${index + 1}] ${v.user.name || '•'}\nwa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${prefix}ep`).join('\n\n');
const replyMessage = message.length === 0 ? '' : message;
const totalUsers = user.length;
const responseMessage = `${lenguaje.jadibot.text18} ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await conn.sendMessage(m.chat, {
text: responseMessage,
mentions: conn.parseMention(responseMessage)
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
});
break

//Info  
case 'help':
case 'menucompleto':
case 'allmenu':
case 'menu2':
case 'audio':
case 'nuevo':
case 'extreno':
case 'reglas':
case 'menu1':
case 'menu3':
case 'menu4':
case 'menu5':
case 'menu6':
case 'menu7':
case 'menu8':
case 'menu9':
case 'menu10':
case 'menu11':
case 'menu18':
case 'descarga':
case 'menugrupos':
case 'menubuscadores':
case 'menujuegos':
case 'menuefecto':
case 'menuconvertidores':
case 'Menuhony':
case 'menurandow':
case 'menuRPG':
case 'menuSticker':
case 'menuOwner':
case 'bug':
case 'bug1':
menu(m, command, conn, prefix, pushname, sender, pickRandom, fkontak)
break
case 'estado':
case 'infobot':
case 'owner':
case 'creador':
case 'contacto':
case 'grupos':
case 'grupoficiales':
case 'instalarbot':
case 'crearbot':
case '5492266613038':
case '593980586516':
case '595975740803':
case 'report':
case 'sc':
case 'donar':
case 'solicitud':
case 'cuenta':
case 'cuentas':
case 'cuentaoficiales':
case 'cuentaofc':
case 'cafirexos':
case 'Cafirexos':
case 'velocidad':
case 'status':
case 'speedtest':
case 'speed':
case 'infohost':
case 'host':
info(command, conn, m, speed, sender, fkontak, pickRandom, pushname, from, msg, text)
break

//activar/desactivar  
case 'welcome':
case 'bienvenida':
case 'antilink':
case 'antienlace':
case 'antifake':
case 'antiFake':
case 'antiarabe':
case 'antiArabe':
case 'autodetect':
case 'detect':
case 'audios':
case 'autosticker':
case 'stickers':
case 'modocaliente':
case 'antinsfw':
case 'modoadmin':
case 'modoadmins':
case 'soloadmin':
case 'antiprivado':
case 'antipv':
case 'anticall':
case 'antillamada':
case 'modojadibot':
case 'jadibot':
case 'autoread':
case 'autovisto':
case 'antispam':
case 'chatbot':
case 'simsimi':
case 'autolevelup':
case 'autonivel':
case 'antitoxic':
case 'antilink2':
case 'AntiTwiter':
case 'antitwiter':
case 'antitiktok':
case 'AntiTikTok':
case 'antitelegram':
case 'AntiTelegram':
case 'antifacebook':
case 'AntiFb':
case 'AntiFacebook':
case 'antinstagram':
case 'AntInstagram':
case 'antiyoutube':
case 'AntiYoutube':
case 'AntiIg':
case 'enable':
case 'configuracion':
case 'configurar':
case 'antiviewonce':
case 'game2':
enable(m, command, isGroupAdmins, text, command, args, conn, isBotAdmins, isGroupAdmins, isCreator, conn)
break

//Grupos    
case 'grupo':
case 'delete':
case 'del':
case 'join':
case 'unete':
case 'hidetag':
case 'notificar':
case 'tag':
case 'setppgroup':
case 'setpp':
case 'setppname':
case 'nuevonombre':
case 'newnombre':
case 'setdesc':
case 'descripción':
case 'anularlink':
case 'resetlink':
case 'revoke':
case 'add':
case 'agregar':
case 'invitar':
case 'kick':
case 'echar':
case 'sacar':
case 'promote':
case 'darpoder':
case 'demote':
case 'quitarpoder':
case 'link':
case 'linkgc':
case 'banchat':
case 'tagall':
case 'invocar':
case 'todos':
case 'admins':
case 'administradores':
case 'infogrupo':
case 'groupinfo':
case 'warn':
case 'advertencia':
case 'unwarn':
case 'quitardvertencia':
case 'listwarn':
case 'enline':
case 'online':
case 'listonine':
case 'listaenlinea':
case 'enlinea':
case 'listonline':
case 'setrules':
case 'addrules':
case 'addrule':
case 'rules':
case 'grouplist':
case 'listgc':
case 'fantasmas':
grupo(m, command, isGroupAdmins, text, conn, participants, isBotAdmins, args, isCreator, delay, sender, quoted, mime, from, isCreator, groupMetadata, fkontak, delay)
break

case 'kickfantasmas':
case 'kickfantasma': {
const {
areJidsSameUser
} = require('@whiskeysockets/baileys');
if (!m.isGroup) return m.reply(info.group);
if (!isBotAdmins) return m.reply(info.botAdmin);
if (!isGroupAdmins) return m.reply(info.admin)
const member = participants.map((u) => u.id);
if (!text) {
var sum = member.length;
} else {
var sum = text;
}
let total = 0;
const sider = [];
for (let i = 0; i < sum; i++) {
const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
if (typeof global.db.data.users[member[i]] !== 'undefined') {
if (global.db.data.users[member[i]].whitelist == false) {
total++;
sider.push(member[i]);
}
} else {
total++;
sider.push(member[i]);
}
}
}
if (total == 0) {
return m.reply(`*⚠️ 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎 𝐄𝐒 𝐀𝐂𝐓𝐈𝐕𝐎, 𝐍𝐎 𝐓𝐈𝐄𝐍𝐄 𝐅𝐀𝐍𝐓𝐀𝐒𝐌𝐀𝐒 :D*`);
}
conn.sendTextWithMentions(m.chat, `*[ ⚠️ 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙲𝙸𝙾𝙽 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾𝚂 ⚠️ ]*\n\n*ɢʀᴜᴘᴏ:* ${groupMetadata.subject}\n*ᴍɪᴇᴍʙʀᴏs:* ${sum}\n\n*[ 👻 𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 👻 ]*\n${sider.map((v) => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*𝙴𝙻 𝙱𝙾𝚃 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝙰 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰𝙳𝙰, 𝙴𝙼𝙿𝙴𝚉𝙰𝙳𝙾 𝙴𝙻 𝟷𝟶 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂, 𝚈 𝙲𝙰𝙳𝙰 𝟻 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝙰́ 𝚄𝙽 𝙽𝚄𝙼𝙴𝚁𝙾`, m);
// Espera 5 segundos antes de comenzar a eliminar
await delay(5 * 1000);
// Función para eliminar usuarios inactivos
for (const user of sider) {
await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
// Espera 5 segundos antes de eliminar el siguiente usuario
await delay(5 * 1000);
}
}
break;

//juegos  
case 'simi':
case 'bot':
case 'pregunta':
case 'preg':
case 'gay':
case 'pareja':
case 'formarpareja':
case 'follar':
case 'violar':
case 'coger':
case 'doxear':
case 'doxxeo':
case 'personalidad':
case 'top':
case 'topgays':
case 'topotakus':
case 'racista':
case 'love':
case 'ship':
case 'formartrio':
case 'formapareja5':
case 'ruletas':
case 'ruleta':
case 'suerte':
game(m, budy, command, text, pickRandom, pushname, conn, participants, sender, who, body, sendImageAsUrl)
break
case 'verdad':
case 'reto':
case 'piropo':
game2(m, command, sendImageAsUrl, pickRandom)
break
case 'slot':
case 'apuesta':
case 'fake':
case 'ppt':
case 'suit':
game3(m, command, conn, args, prefix, msToTime, text, body, from, sender, quoted, pushname)
break

case 'math':
case 'matematicas': {
let user = global.db.data.users[m.sender]
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`${lenguaje.game.text6}`)
let {
genMath,
modes
} = require('./libs/math')
if (!text) return m.reply(`${lenguaje.game.text7}\n\n${Object.keys(modes).join(' | ')}\n• *Ejemplo de uso:* ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
conn.sendText(m.chat, `╔═≪ \`${lenguaje.game.text8}\` ≫═•
║ *${lenguaje.game.text9} ${result.soal.toLowerCase()}?*
║━━━━━━━━━━━━━━━━
║🕕 ${lenguaje.game.text10} ${(result.waktu / 1000).toFixed(2)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘
║━━━━━━━━━━━━━━━━
║ ${lenguaje.game.text11}
╚════ ≪ •❈• ≫ ═════•`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
m.reply(`${lenguaje.game.text12}` + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break

case 'ttc':
case 'ttt':
case 'tictactoe': {
let user = global.db.data.users[m.sender]
let TicTacToe = require("./libs/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return m.reply(`${lenguaje.game.text13}`)
let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
if (room13) {
room13.o = m.chat
room13.game.playerO = m.sender
room13.state = 'PLAYING'
let arr = room13.game.render().map(v => {
return {
X: '❎',
O: '❌',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
} [v]
})
let str = `${lenguaje.game.text14} @${room13.game.currentTurn.split('@')[0]} ${lenguaje.game.text15}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ ${lenguaje.game.text16} ${room13.id}

▢ ${lenguaje.game.text17}`
if (room13.x !== room13.o) await conn.sendText(room13.x, str, m, {
mentions: parseMention(str)
})
await conn.sendText(room13.o, str, m, {
mentions: parseMention(str)
})
} else {
room13 = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room13.name = text
m.reply(`${lenguaje.game.text18}` + (text ? ` ${lenguaje.game.text19} ${prefix + command} ${text}\n\n🎁 ${lenguaje.game.text20} *4999 XP*` : ''))
this.game[room13.id] = room13
}
}
break

case 'delttc':
case 'delttt': {
let user = global.db.data.users[m.sender]
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
conn.sendText(m.chat, `${lenguaje.game.text21}`, m)
} else if (!this.game) {
m.reply(`${lenguaje.game.text22}`)
} else throw '?'
} catch (e) {}
}
break

//convertidores
case 'bass':
case 'blown':
case 'deep':
case 'earrape':
case 'fast':
case 'fat':
case 'nightcore':
case 'reverse':
case 'robot':
case 'slow':
case 'smooth':
case 'squirrel':
efec(conn, command, mime, quoted, exec, prefix, m, from)
break
case 'toaudio':
case 'tomp3':
case 'toimg':
case 'toimagen':
case 'tourl':
case 'toanime':
case 'txt':
convertidores(conn, command, mime, quoted, util, m, exec, lolkeysapi, text)
break

//nsfw
case 'hentai':
case 'nsfwloli':
case 'lewd':
case 'feed':
case 'gasm':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'holoero':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'wallpaper':
case 'hentai2':
case 'porno':
case 'pack':
case 'pack2':
case 'pack3':
case 'videoxxx':
case 'vídeoxxx':
case 'videoxxxlesbi':
case 'videolesbixxx':
case 'pornolesbivid':
case 'pornolesbianavid':
case 'pornolesbiv':
case 'pornolesbianav':
case 'tetas':
case 'pechos':
nsfw(m, sender, command, pickRandom, conn, sendImageAsUrl)
break

//Efecto
case 'logololi':
case 'neon':
case 'devil':
case 'transformer':
case 'thunder':
case 'graffiti':
case 'bpink':
case 'joker':
case 'matrix':
case 'wolf':
case 'phlogo':
case 'ballon':
case 'dmd':
case 'lightglow':
case 'american':
case 'halloween':
case 'green':
case 'glitch':
case 'paper':
case 'marvel':
case 'ninja':
case 'future':
case '3dbox':
case 'graffiti2':
case 'logos':
efect2(m, text, prefix, command, conn)
break

/*randow  
case 'memes':
case 'loli':
case 'lolivid':
case 'neko':
case 'akira':
case 'akiyama':
case 'anna':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'erza':
case 'elaina':
case 'eba':
case 'emilia':
case 'hestia':
case 'hinata':
case 'inori':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kaga':
case 'kagura':
case 'kaori':
case 'keneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'naruto':
case 'nezuko':
case 'sagiri':
case 'sasuke':
case 'sakura':
case 'cosplay':
case 'blackpink':
case 'navidad':
case 'china':
randow(m, sender, command, sendImageAsUrl, pickRandom, conn)
break
case 'horny':
case 'simp':
case 'lolice':
case 'comentar':
case 'comment':
randow2(conn, m, command, text, sender, pushname)
break*/

//descargas 
case 'play2':
case 'play2test':
case 'videotest':
case 'bilibili':
case 'play3':
case 'playdoc':
case 'playaudiodoc':
case 'ytmp3doc':
case 'play4':
case 'playdoc2':
case 'playvideodoc':
case 'ytmp4doc':
case "ytmp3":
case "ytaudio":
case 'ytmp4':
case 'ytvideo':
case 'music':
case 'spotify':
case 'gitclone':
case 'tiktok':
case 'tt':
case 'lyrics':
case 'letra':
case 'mediafire':
case 'tiktokimg':
case 'tik2':
case 'ttimg':
case 'play.1':
case 'play.2':
descarga(m, command, conn, text, command, args, fkontak, from, lolkeysapi)
break
case 'facebook':
case 'fb':
case 'instagram':
case 'ig':
case 'igstalk':
case 'tiktokstalk':
case 'apk':
case 'modoapk':
case 'gdrive':
case 'tw':
case 'twitter':
descarga2(m, command, text, args, conn, lolkeysapi, isCreator)
break

//rpg  
case 'reg':
case 'verificar':
case 'unreg':
case 'myns':
await reg(command, conn, m, sender, text, budy, fkontak, delay, args)
break
case 'lb':
case 'leaderboard':
case 'millonarios':
case 'topmillonarios':
case 'afk':
case 'rob':
case 'robar':
case 'buy':
case 'buyall':
case 'bal':
case 'balance':
case 'diamond':
case 'perro':
case 'minar':
case 'mine':
case 'trabajar':
case 'work':
case 'w':
case 'claim':
case 'daily':
case 'batalla2':
case 'batalla':
case 'levelup':
case 'nivel':
case 'cofre':
case 'minar2':
case 'mine2':
case 'crime':
case 'Crime':
case 'dep':
case 'depositar':
case 'retirar':
case 'toremove':
case 'castillo':
case 'fuente':
case 'autobus':
case 'helicóptero':
case 'helicoptero':
case 'ovni':
case 'cohete':
case 'avión':
case 'avion':
case 'ambulancia':
case 'vehículo':
case 'vehiculo':
case 'moto':
case 'motor':
case 'auto':
case 'autor':
case 'impresora':
case 'television':
case 'daga':
case 'reloj':
case 'camara':
case 'tridente':
case 'lobos':
case 'perro':
case 'monos':
case 'gato':
rpg(m, command, participants, args, sender, pushname, text, conn, fkontak, who)
break

case 'transferir':
case 'transfer':
case 'regalar': {
let items = ['money', 'exp', 'limit']
this.confirm = this.confirm ? this.confirm : {}
if (this.confirm[m.sender]) return conn.sendText(m.chat, `*⚠️ estas haciendo una transferencia*`, m)
let user = global.db.data.users[m.sender]
let item = items.filter((v) => v in user && typeof user[v] == 'number')
let lol = `*⚠️ Uso correcto del comando :*\n*${prefix + command}* [tipo] [cantidad] [@user]\n\n> *Ejemplo :*
• ${prefix + command} exp 100 @0\n\n📍 Artículos transferibles\n╔═════ೋೋ═════╗\n● *limit* = Diamante\n● *exp* = Experiencia\n● *money* = coins\n╚════ ≪ •❈• ≫ ════╝`
let type = (args[0] || '').toLowerCase()
if (!item.includes(type)) return conn.sendTextWithMentions(m.chat, lol, m)
let count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
if (!who) return conn.sendMessage(m.chat, {
text: '*⚠️ Etiquetas al usuario que desea hacer la transferencia.*',
mentions: [m.sender]
}, {
quoted: m
});
if (!(who in global.db.data.users)) return m.reply('*❌ El Usuario no está en mi base de datos*')
if (user[type] * 1 < count) return m.reply(`*⚠️ No tienes suficientes ${type} para transferir*`)
let confirm = `¿ESTA SEGURO QUE DESEA TRANSFERIR ${count} ${type} a @${(who || '').replace(/@s\.whatsapp\.net/g, '')}?\n\n> *Tienes 60 segundos para confirmar*\n\n*• Escriba:*\n* si = *para acertar*\n* no = *para cancelar*`
await conn.sendTextWithMentions(m.chat, confirm, m)
this.confirm[m.sender.split('@')[0]] = {
sender: m.sender,
to: who,
message: m,
type,
count,
timeout: setTimeout(() => (m.reply(`*⚠️ Se acabó el tiempo, no se obtuvo respuesta. Transferencia cancelada.*`), delete this.confirm[m.sender.split('@')[0]]), 60 * 1000)
}
}
break

case 'transferir':
case 'transfer':
case 'regalar': {
let items = ['money', 'exp', 'limit']
this.confirm = this.confirm ? this.confirm : {}
if (this.confirm[m.sender]) return conn.sendText(m.chat, `*${lenguaje.transfer.text4}`, m)
let user = global.db.data.users[m.sender]
let item = items.filter((v) => v in user && typeof user[v] == 'number')
let lol = `${lenguaje.transfer.text5(prefix, command)}`
let type = (args[0] || '').toLowerCase()
if (!item.includes(type)) return conn.sendTextWithMentions(m.chat, lol, m)
let count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
if (!who) return conn.sendMessage(m.chat, {
text: `${lenguaje.transfer.text6}`,
mentions: [m.sender]
}, {
quoted: m
});
if (!(who in global.db.data.users)) return m.reply(`${lenguaje.transfer.text7}`)
if (user[type] * 1 < count) return m.reply(`${lenguaje.transfer.text8(type)}`) //`
let confirm = `${lenguaje.transfer.text9} ${count} ${type} a @${(who || '').replace(/@s\.whatsapp\.net/g, '')}?\n\n>${lenguaje.transfer.text10}`
await conn.sendTextWithMentions(m.chat, confirm, m)
this.confirm[m.sender.split('@')[0]] = {
sender: m.sender,
to: who,
message: m,
type,
count,
timeout: setTimeout(() => (m.reply(`${lenguaje.transfer.text11}`), delete this.confirm[m.sender.split('@')[0]]), 60 * 1000)
}
}
break

case 'rmararabes': {
if (!m.isGroup) return m.reply('Este comando solo puede usarse en grupos.');
if (!isGroupAdmins) return m.reply('Necesitas ser administrador para usar este comando.');
if (!isBotAdmins) return m.reply('El bot necesita ser administrador para ejecutar esta acción.');

let arabPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];
let arabNumbers = participants.filter(p => 
arabPrefixes.some(prefix => p.id.startsWith(prefix)) && 
!p.admin
).map(p => p.id);

if (arabNumbers.length === 0) return m.reply('No se encontraron números árabes en este grupo.');

for (let num of arabNumbers) {
await conn.groupParticipantsUpdate(m.chat, [num], 'remove');
await delay(2000);
}

m.reply(`Se eliminaron ${arabNumbers.length} números árabes del grupo.`);
}
break;

case 'anime': {
const apiUrl = `https://eliasar-yt-api.vercel.app/api/anime/`;

try {
m.reply('⏳ Obteniendo una imagen de anime, por favor espera...');
const res = await fetch(apiUrl);
const json = await res.json();
if (!json.status || !json.image) {
m.reply('❌ Hubo un problema al obtener la imagen de anime.');
return;
}

const imageUrl = json.image;
await conn.sendMessage(m.chat, {
image: { url: imageUrl },
caption: '🇯🇵'
}, { quoted: m });

} catch (error) {
console.error(error);
m.reply('❌ Ocurrió un error al obtener la imagen de anime. Inténtalo de nuevo más tarde.');
}
break;
}

case 'elpepe': {
m.react('✨') 
const platform = os.platform();
const uptime = os.uptime();
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const formatUptime = (uptime) => {
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
return `${hours}h ${minutes}m`;
};
const ramUsage = (usedMem / (1024 * 1024)).toFixed(2);
const totalRam = (totalMem / (1024 * 1024)).toFixed(2);
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
let menu = `
> 𖦼 𝙲𝚛𝚎𝚊𝚍𝚘𝚛 ${creador} ↲  
> 𖦼 Menú [ ${prefix} ] ↲  
> 𖦼 Fecha: ${date} ↲  
> 𖦼 Hora: ${time} ↲  
> 𖦼 Versión: ${vs} ↲  
> 𖦼 Usuarios registrados: ${Object.keys(global.db.data.users).length} ↲  
> 𖦼 Tiempo activo: ${runtime(process.uptime())} ↲  
> 𖦼 Modo: ${conn.public ? 'Público' : 'Privado'} ↲  
> 𖦼 Plataforma: ${platform} ↲  
> 𖦼 RAM usada: ${ramUsage} MB de ${totalRam} MB ↲  
> 𖦼 CPU: ${os.cpus().length} núcleos ↲  
> 𖦼 Bot: ${conn.user.id == global.numBot2 ? 'Principal' : `Secundario de  @${global.numBot.split`@`[0]}`} ↲ 
*𖨠𖨠⌎API⌏𖨠𖨠*
_「eliasaryt.short.gy/api 」_
COMANDOS PARA USTED 🌠
> 𖦼 ${prefix}allmenu 𖧹 menucompleto ↲  
> 𖦼 ${prefix}menu1 𖧹 descarga ↲  
> 𖦼 ${prefix}menu2 𖧹 audio ↲  
> 𖦼 ${prefix}menu3 𖧹 menugrupos ↲  
> 𖦼 ${prefix}menu4 𖧹 menubuscadores ↲  
> 𖦼 ${prefix}menu5 𖧹 menujuegos ↲  
> 𖦼 ${prefix}menu6 𖧹 menuefecto ↲  
> 𖦼 ${prefix}menu7 𖧹 menuconvertidores ↲  
> 𖦼 ${prefix}menu8 𖧹 menurandom ↲  
> 𖦼 ${prefix}menu9 𖧹 menuRPG ↲  
> 𖦼 ${prefix}menu10 𖧹 menuSticker ↲  
> 𖦼 ${prefix}menu11 𖧹 menuOwner ↲  
> 𖦼 ${prefix}menu18 𖧹 menuhorny ↲  
> 𖦼 ${prefix}logos ↲  

> 𖦼 ${prefix}estado ↲  
> 𖦼 ${prefix}nuevo ↲  
> 𖦼 ${prefix}reglas ↲  
> 𖦼 ${prefix}ping ↲  
> 𖦼 ${prefix}velocidad ↲  
> 𖦼 ${prefix}grupos ↲  
> 𖦼 ${prefix}join ↲  
> 𖦼 ${prefix}owner ↲  
> 𖦼 ${prefix}creador ↲  
> 𖦼 ${prefix}instalarbot ↲  
> 𖦼 ${prefix}solicitud ↲  
> 𖦼 ${prefix}cuenta ↲  
> 𖦼 ${prefix}cuentaoficiales ↲  
> 𖦼 ${prefix}status ↲  
> 𖦼 ${prefix}enable ↲  
> 𖦼 ${prefix}configurar ↲  
> 𖦼 ${prefix}report ↲
`
conn.sendMessage(m.chat,
{
product: {
productImage: { url: `https://i.ibb.co/ccm5zLLF/9a94e27e0367.jpg` },
productImageCount: 1,
title: "ᴀɴsɪ-ʙᴏᴛ/ɴᴏᴄᴛᴜʀɴᴇ",
description: "kontol woi",
priceAmount1000: 99999999 * 1000,
currencyCode: "NIO",
retailerId: "100000",
url: `https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36`,            
},
businessOwnerJid: m.sender,
caption: "halloww", 
title: "title nya",
footer: menu, 
media: true,
viewOnce: true, 
shop: "WA",
id: "D5AF8EE6BA12D89F26A198255855ADDC",
}, { quoted: m });
break
}           
case 'menu': {
m.react('✨') 
const platform = os.platform();
const uptime = os.uptime();
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const formatUptime = (uptime) => {
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
return `${hours}h ${minutes}m`;
};
const ramUsage = (usedMem / (1024 * 1024)).toFixed(2);
const totalRam = (totalMem / (1024 * 1024)).toFixed(2);
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
let img = ["https://i.ibb.co/ccm5zLLF/9a94e27e0367.jpg", "https://i.ibb.co/vCGDxQvd/ef24ae34d0d3.jpg", "https://i.ibb.co/prrdDRjq/c352e0cd4f02.jpg", "https://i.ibb.co/hFSf2nKD/743508fd2f8b.jpg"][Math.floor(Math.random() * 4)];
let emoji = ["🌠", "✨", "🌟", "💫", "🌌", "🌙", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔"][Math.floor(Math.random() * 14)];
let menu = `
> 𖦼 𝙲𝚛𝚎𝚊𝚍𝚘𝚛 ${creador} ↲  
> 𖦼 Menú [ ${prefix} ] ↲  
> 𖦼 Fecha: ${date} ↲  
> 𖦼 Hora: ${time} ↲  
> 𖦼 Versión: ${vs} ↲  
> 𖦼 Usuarios registrados: ${Object.keys(global.db.data.users).length} ↲  
> 𖦼 Tiempo activo: ${runtime(process.uptime())} ↲  
> 𖦼 Modo: ${conn.public ? 'Público' : 'Privado'} ↲  
> 𖦼 Plataforma: ${platform} ↲  
> 𖦼 RAM usada: ${ramUsage} MB de ${totalRam} MB ↲  
> 𖦼 CPU: ${os.cpus().length} núcleos ↲  
> 𖦼 Bot: ${conn.user.id == global.numBot2 ? 'Principal' : `Secundario de  @${global.numBot.split`@`[0]}`} ↲ 
> *𖨠𖨠⌎API⌏𖨠𖨠*
> _「eliasaryt.short.gy/api 」_
> COMANDOS PARA USTED ${emoji}
> 𖦼 ${prefix}allmenu 𖧹 menucompleto ↲  
> 𖦼 ${prefix}menu1 𖧹 descarga ↲  
> 𖦼 ${prefix}menu2 𖧹 audio ↲  
> 𖦼 ${prefix}menu3 𖧹 menugrupos ↲  
> 𖦼 ${prefix}menu4 𖧹 menubuscadores ↲  
> 𖦼 ${prefix}menu5 𖧹 menujuegos ↲  
> 𖦼 ${prefix}menu6 𖧹 menuefecto ↲  
> 𖦼 ${prefix}menu7 𖧹 menuconvertidores ↲  
> 𖦼 ${prefix}menu8 𖧹 menurandom ↲  
> 𖦼 ${prefix}menu9 𖧹 menuRPG ↲  
> 𖦼 ${prefix}menu10 𖧹 menuSticker ↲  
> 𖦼 ${prefix}menu11 𖧹 menuOwner ↲  
> 𖦼 ${prefix}menu18 𖧹 menuhorny ↲  
> 𖦼 ${prefix}logos ↲  

> 𖦼 ${prefix}estado ↲  
> 𖦼 ${prefix}nuevo ↲  
> 𖦼 ${prefix}reglas ↲  
> 𖦼 ${prefix}ping ↲  
> 𖦼 ${prefix}velocidad ↲  
> 𖦼 ${prefix}grupos ↲  
> 𖦼 ${prefix}join ↲  
> 𖦼 ${prefix}owner ↲  
> 𖦼 ${prefix}creador ↲  
> 𖦼 ${prefix}instalarbot ↲  
> 𖦼 ${prefix}solicitud ↲  
> 𖦼 ${prefix}cuenta ↲  
> 𖦼 ${prefix}cuentaoficiales ↲  
> 𖦼 ${prefix}status ↲  
> 𖦼 ${prefix}enable ↲  
> 𖦼 ${prefix}configurar ↲  
> 𖦼 ${prefix}report ↲
`
conn.sendMessage(m.chat, {
    text: menu,
    linkPreview: true,
    contextInfo: {
        mentionedJid: [],
        forwardingScore: 0,
        isForwarded: false,
        remoteJid: null,
        externalAdReply: {
            title: `ᴀɴsɪ-ʙᴏᴛ/ɴᴏᴄᴛᴜʀɴᴇ ${emoji}`,
            body: null,
            mediaType: 1,
            previewType: 0,
            showAdAttribution: false,
            renderLargerThumbnail: true,
            thumbnailUrl: img,
        }
    }
}, { quoted: m });
break;
}            

case 'cosplay': {
const apiUrl = `https://eliasar-yt-api.vercel.app/api/anime-cosplay`;

try {
m.reply('⏳ Obteniendo una imagen de anime cosplay, por favor espera...');
const res = await fetch(apiUrl);
const json = await res.json();
if (!json.status || !json.image) {
m.reply('❌ Hubo un problema al obtener la imagen de anime cosplay.');
return;
}

const imageUrl = json.image;
await conn.sendMessage(m.chat, {
image: { url: imageUrl },
caption: '🥵'
}, { quoted: m });

} catch (error) {
console.error(error);
m.reply('❌ Ocurrió un error al obtener la imagen de anime cosplay. Inténtalo de nuevo más tarde.');
}
break;
}          
case 'gemini': {
if (!text) {
m.reply('Por favor, proporciona una pregunta o frase para enviar a la IA.');
return;
}

const apiUrl = `https://eliasar-yt-api.vercel.app/api/ia/gemini?prompt=${encodeURIComponent(text)}`;

try {
m.reply('⏳ Obteniendo respuesta de la IA, por favor espera...');
const res = await fetch(apiUrl);
const json = await res.json();
if (!json.status || !json.content) {
m.reply('❌ Hubo un problema al obtener la respuesta de la IA.');
return;
}

const iaResponse = json.content;
const imageUrl = 'https://cdn-wp.bulksignature.com/wp-content/uploads/2024/02/Frame-876-768x427.png';

await conn.sendMessage(m.chat, {
image: { url: imageUrl },
caption: `${iaResponse}`
}, { quoted: m });

} catch (error) {
console.error(error);
m.reply('❌ Ocurrió un error al obtener la respuesta de la IA. Inténtalo de nuevo más tarde.');
}
break;
}

case 'idch':
case 'inspectchannel': {
if (!text) return m.reply(`*⚠️ Proporcione un enlace válido de un canal de WhatsApp.*`);

const channelUrl = text.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:channel\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1];
if (!channelUrl) return m.reply(`*⚠️ El enlace proporcionado no parece ser un enlace válido de canal.*`);

const formatDate = (timestamp) => {
const date = new Date(timestamp);
const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
return date.toLocaleDateString('es-ES', options);
};

try {
const channelInfo = await conn.newsletterMetadata("invite", channelUrl);
if (!channelInfo) return m.reply(`*⚠️ No se pudo recuperar la información del canal. Verifique que el enlace sea correcto.*`);

const id = channelInfo.id || "No disponible";
const name = channelInfo.name || "Nombre no disponible";
const description = channelInfo.description || "Descripción no disponible";
const subscribers = channelInfo.subscribers ? channelInfo.subscribers.toLocaleString() : "No disponible";
const state = channelInfo.state === "ACTIVE" ? "Activo" : "Inactivo";
const createdAt = channelInfo.creation_time ? formatDate(channelInfo.creation_time * 1000) : "Fecha no disponible";
const nameTime = channelInfo.nameTime ? formatDate(channelInfo.nameTime) : "No disponible";
const descriptionTime = channelInfo.descriptionTime ? formatDate(channelInfo.descriptionTime) : "No disponible";
const invite = channelInfo.invite || "No disponible";
const handle = channelInfo.handle || "Alias no disponible";
const preview = channelInfo.preview ? `https://mmg.whatsapp.net${channelInfo.preview}` : "No disponible";
const reactionCodes = channelInfo.reaction_codes ? 
(channelInfo.reaction_codes === "ALL" ? "Todas las reacciones permitidas" : 
channelInfo.reaction_codes === "BASIC" ? "Reacciones básicas permitidas" : 
"No se permiten reacciones") : "Desconocido";
const verification = channelInfo.verification === "VERIFIED" ? "Verificado" : "No verificado";
const viewerMetadata = channelInfo.viewer_metadata || "No disponible";

let caption = `*📢 Información Completa del Canal*\n\n`;
caption += `🆔 *ID del Canal:* ${id}\n`;
caption += `🏷️ *Nombre:* ${name}\n`;
caption += `📝 *Descripción:* ${description}\n`;
caption += `👥 *Suscriptores:* ${subscribers}\n`;
caption += `📅 *Creado el:* ${createdAt}\n`;
caption += `🕒 *Nombre actualizado el:* ${nameTime}\n`;
caption += `🕒 *Descripción actualizada el:* ${descriptionTime}\n`;
caption += `📌 *Estado:* ${state}\n`;
caption += `🔗 *Enlace de Invitación:* ${invite}\n`;
caption += `👤 *Alias:* ${handle}\n`;
caption += `🖼️ *Previsualización:* ${preview}\n`;
caption += `😃 *Reacciones permitidas:* ${reactionCodes}\n`;
caption += `✅ *Verificación:* ${verification}\n`;
caption += `👁️ *Metadatos del espectador:* ${viewerMetadata}\n`;

await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: "『 𝙄𝙉𝙁𝙊 𝘾𝘼𝙉𝘼𝙇 📢 』",
body: "Detalles completos del canal.",
thumbnail: { url: preview },
sourceUrl: text,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}
}
}, { quoted: m });
m.reply(`${id}`);
} catch (e) {
console.error(e);
m.reply(`*⚠️ Ocurrió un error al recuperar la información del canal.*`);
}
break;
}

case 'logo': {
if (!text) {
m.reply('Por favor, proporciona el texto para el logo.');
return;
}

let profilePicture;
try {
const sender = m.isGroup ? m.sender : m.chat;
profilePicture = await conn.profilePictureUrl(sender, 'image');
} catch {
profilePicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
}

const apiUrl = `https://eliasar-yt-api.vercel.app/api/canvas/logo?texto=${encodeURIComponent(text)}&url=${encodeURIComponent(profilePicture)}`;

try {
m.reply('⏳ Generando tu logo personalizado, por favor espera...');
await conn.sendMessage(m.chat, {
image: { url: apiUrl },
caption: `✨ Aquí tienes tu logo con el texto: *${text}*`
}, { quoted: m });
} catch {
m.reply('❌ Ocurrió un error al generar tu logo. Inténtalo de nuevo más tarde.');
}
break;
}
case 'togif': {
if (!m.quoted) throw `*⚠️ 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫 𝐞𝐧 𝐠𝐢𝐟 𝐜𝐨𝐧 𝐚𝐮𝐝𝐢𝐨*`;
const q = m.quoted || m;
const mime = (q.msg || q).mimetype || '';
if (!/(mp4)/.test(mime)) throw `*⚠️ 𝐄𝐥 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 ${mime} 𝐧𝐨 𝐞𝐬 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨, 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐬𝐞 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫 𝐞𝐧 𝐠𝐢𝐟 𝐜𝐨𝐧 𝐚𝐮𝐝𝐢𝐨*`;
m.reply(global.wait);
const media = await q.download();
conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*ᴀϙᴜɪ ᴇsᴛᴀ sᴜ ɢɪғ ᴄᴏɴ ᴀᴜᴅɪᴏ*'}, {quoted: m});
break;
}            
case 'ffrandom': {
const apiUrl = `https://eliasar-yt-api.vercel.app/api/freefire/random`;
try {
m.reply('⏳ Obteniendo un personaje aleatorio de Free Fire, por favor espera...');
const res = await fetch(apiUrl);
const json = await res.json();
if (!json.status || !json.personaje) {
m.reply('❌ No se pudo obtener información. Inténtalo de nuevo más tarde.');
return;
}

const personaje = json.personaje;
await conn.sendMessage(m.chat, {
image: { url: personaje.imagen },
caption: `🎮 *Nombre:* ${personaje.nombre}\n🛡️ *Habilidad:* ${personaje.habilidad}\n💎 *Precio:* ${personaje.precio}\n📜 *Descripción:* ${personaje.descripcion}`
}, { quoted: m });

} catch (error) {
console.error(error);
m.reply('❌ Ocurrió un error al obtener el personaje. Inténtalo de nuevo más tarde.');
}
break;
}  

case 'get2': {
if (args.length < 2) {
return m.reply(`> 𖦼 *Uso incorrecto*\n> *Ejemplo:* _get2 --html https://example.com_`);
}

let tipo = args[0].toLowerCase();
let url = args[1];

if (!url.startsWith('http')) {
return m.reply(`> 𖦼 *URL incorrecta*\n> _Asegúrate de incluir_ *http://* o *https://*`);
}

try {
let headers = {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
'Accept-Language': 'es-ES,es;q=0.9',
'Referer': url
};

let res = await axios.get(url, { headers });
let $ = cheerio.load(res.data);
let contenido = '';

switch (tipo) {
case '--html':
contenido = $.html();
break;
case '--js':
contenido = $('script').map((i, el) => $(el).html()).get().join('\n');
break;
case '--css':
contenido = $('style').map((i, el) => $(el).html()).get().join('\n');
break;
default:
return m.reply(`> 𖦼 *Tipo no válido*\n> _Usa:_ *--html*, *--js* o *--css*`);
}

let fileName = `codigo_${tipo.replace('--', '')}.txt`;
fs.writeFileSync(fileName, contenido);

await conn.sendMessage(m.chat, {
document: fs.readFileSync(fileName),
fileName: fileName,
mimetype: 'text/plain'
}, { quoted: m });

fs.unlinkSync(fileName);

m.reply(`> ✅ *Código extraído con éxito*\n> _Archivo enviado:_ *${fileName}*`);

} catch (error) {
console.error(error);
m.reply(`> 𖦼 *Error al obtener la página*\n> _Puede estar protegida o no ser accesible_`);
}
break;            
}           case 'ffpersonaje': {
if (!text) {
m.reply('Por favor, proporciona el nombre de un personaje de Free Fire.');
return;
}
const apiUrl = `https://eliasar-yt-api.vercel.app/api/frefire/personaje?name=${encodeURIComponent(text)}`;
try {
m.reply('⏳ Buscando información del personaje, por favor espera...');
const res = await fetch(apiUrl);
const json = await res.json();
if (!json.status || !json.personaje) {
m.reply('❌ No se encontró información sobre ese personaje. Verifica el nombre y vuelve a intentarlo.');
return;
}

const personaje = json.personaje;
await conn.sendMessage(m.chat, {
image: { url: personaje.imagen },
caption: `🎮 *Nombre:* ${personaje.nombre}\n🛡️ *Habilidad:* ${personaje.habilidad}\n💎 *Precio:* ${personaje.precio}\n📜 *Descripción:* ${personaje.descripcion}`
}, { quoted: m });

} catch (error) {
console.error(error);
m.reply('❌ Ocurrió un error al obtener la información del personaje. Inténtalo de nuevo más tarde.');
}
break;
}

case 'meme': {
const apiUrl = `https://eliasar-yt-api.vercel.app/api/random/meme`;
try {
m.reply('⏳ Buscando un meme, por favor espera...');
const res = await fetch(apiUrl);
const json = await res.json();
if (json.status !== "success") {
m.reply('❌ No se pudo obtener el meme. Inténtalo de nuevo más tarde.');
return;
}

const meme = json.data;
await conn.sendMessage(m.chat, {
image: { url: meme.image },
caption: `🖼️ *Título:* ${meme.title}`
}, { quoted: m });

} catch (error) {
console.error(error);
m.reply('❌ Ocurrió un error al obtener el meme. Inténtalo de nuevo más tarde.');
}
break;
} 

case 'yts2': {
if (!text) {
m.reply('Por favor, proporciona un término de búsqueda válido.');
return;
}
const apiUrl = `https://eliasar-yt-api.vercel.app/api/oficial/youtube?query=${encodeURIComponent(text)}`;
try {
m.reply('⏳ Buscando videos en YouTube, por favor espera...');
const res = await fetch(apiUrl);
const json = await res.json();
if (!json.status || !json.results.length) {
m.reply('❌ No se encontraron resultados. Intenta con otro término de búsqueda.');
return;
}

const videos = json.results.slice(0, 10);
let message = '*🔍 Resultados de búsqueda:*\n\n';

for (const video of videos) {
const snippet = video.snippet;
const stats = video.statistics || {};
message += `🎥 *Título:* ${snippet.title}\n`;
message += `📜 *Descripción:* ${snippet.description || 'No disponible'}\n`;
message += `📺 *Canal:* ${snippet.channelTitle}\n`;
message += `⏰ *Publicado:* ${new Date(snippet.publishedAt).toLocaleString()}\n`;
message += `👁️ *Vistas:* ${stats.viewCount || 'N/A'}\n`;
message += `👍 *Likes:* ${stats.likeCount || 'N/A'}\n`;
message += `💬 *Comentarios:* ${stats.commentCount || 'N/A'}\n`;
message += `🔗 *Link:* https://www.youtube.com/watch?v=${video.id}\n\n`;
}

await conn.sendMessage(m.chat, {
image: { url: videos[0].snippet.thumbnails.high.url },
caption: message.trim()
}, { quoted: m });

} catch (error) {
console.error(error);
m.reply('❌ Ocurrió un error al buscar los videos. Inténtalo de nuevo más tarde.');
}
break;
}

case 'off': {
if (!isOwner) return m.reply('⚠️ Este comando solo puede ser ejecutado por el creador del bot.');

m.reply('El bot se apagará ahora...');
process.exit(0);
break;
}

case 'cambiodesc': {
if (!m.isGroup) return m.reply('Este comando solo se puede usar en grupos.');

const isBotAdmin = groupAdmins.includes(botnm);
const isGroupAdmin = groupAdmins.includes(m.sender);
const isCreator = [conn.decodeJid(conn.user.id), ...global.owner.map(([numero]) => numero)]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(m.sender);

if (!isBotAdmin) return m.reply('⚠️ El bot debe ser admin para cambiar la descripción.');
if (!isGroupAdmin && !isCreator) return m.reply('⚠️ Solo los administradores o el creador del grupo pueden cambiar la descripción.');

const nuevaDescripcion = args.join(' ');
if (!nuevaDescripcion) return m.reply('⚠️ Por favor, ingresa una nueva descripción.');

await conn.groupUpdateDescription(m.chat, nuevaDescripcion);
m.reply(`✅ La descripción del grupo ha sido cambiada a: *${nuevaDescripcion}*`);
break;
}

case 'xnxxdl': {
if (!text) {
m.reply('Por favor, proporciona un enlace válido de xnxx.');
return;
}

if (!global.db.data.chats[m.chat].antiNsfw) {
m.reply('❌ Los comandos NSFW están desactivados. Si eres administrador, utiliza #modocaliente on para activarlos.');
return;
}

const apiUrl = `https://eliasar-yt-api.vercel.app/api/download/xnxx?URL=${text}`;
try {
m.reply('⏳ Procesando tu solicitud, por favor espera...');
const res = await fetch(apiUrl);
const json = await res.json();
if (!json.status || json.datos.estado !== 200) {
m.reply('❌ Hubo un error al obtener los datos. Por favor verifica el enlace.');
return;
}
const videoData = json.datos.datos;
await conn.sendMessage(m.chat, {
image: { url: videoData.imagen },
caption: `🎥 *Título*: ${videoData.titulo}\n📄 *Descripción*: ${videoData.descripcion}\n⏱️ *Duración*: ${videoData.duracion}\n👁️‍🗨️ *Vistas*: ${videoData.vistas}`
}, { quoted: m });
await conn.sendMessage(m.chat, {
video: { url: videoData.urlVideo },
caption: `🎥 *Título*: ${videoData.titulo}`
}, { quoted: m });
} catch (error) {
m.reply('❌ Ocurrió un error al procesar tu solicitud. Inténtalo de nuevo más tarde.');
}
break;
}

case 'ds': {
if (!isOwner) return m.reply('🚫 Solo el propietario puede usar este comando.');
const pathToDirectory = './sessions';
const fs = require('fs');
const path = require('path');

fs.readdir(pathToDirectory, (err, files) => {
if (err) return m.reply(`❌ Error leyendo la carpeta: ${err.message}`);

files.forEach(file => {
if (file !== 'creds.json') {
const filePath = path.join(pathToDirectory, file);
fs.unlink(filePath, err => {
if (err) {
console.error(`Error eliminando archivo ${file}: ${err.message}`);
} else {
console.log(`Archivo ${file} eliminado correctamente.`);
}
});
}
});

m.reply('✅ Archivos eliminados, excepto el importante `creds.json`. 🗑️');
setTimeout(() => {
m.reply('👋 ¿Hola? ¿Puedes verme?');
}, 1000);
});
break;
}

case 'botones': {
conn.sendMessage(m.chat, { text: "ANSI-BOT", caption: "ANSIBOT", footer: "EliasarYT", buttons: [
{
buttonId: ".menu", 
buttonText: { 
displayText: 'menu' 
}
}, {
buttonId: ".test", 
buttonText: {
displayText: "test"
}
}
],
viewOnce: true,
headerType: 1,
}, { quoted: m })
break;
}


case 'getchid': {
if (!m.quoted) return m.reply('🎋 Menciona un mensaje que haya sido reenviado desde un canal para obtener el ID de dicho canal.');
try {
const res = await store.loadMessage(m.chat, m.quoted.id);
if (!res) return m.reply('🎋 No fue posible obtener el ID. Por favor, reenvía nuevamente el mensaje del canal y haz la prueba otra vez.');

const type = Object.keys(res.message);
let data;

if (type[0] === 'viewOnceMessage') {
data = res.message.viewOnceMessage?.message?.interactiveMessage?.contextInfo?.forwardedNewsletterMessageInfo;
} else {
data = res.message[type[0]]?.contextInfo?.forwardedNewsletterMessageInfo;
}

if (!data) return m.reply('🎋 No fue posible obtener el ID. Por favor, reenvía nuevamente el mensaje del canal y haz la prueba otra vez.');
m.reply(data.newsletterJid);
} catch (e) {
console.log(e);
m.reply(`Error: ${e.message}`);
}
break;
}

case 'foto': {
let number = text.replace(/\D/g, '');
if (!text && !m.quoted) return m.reply('Etiqueta/responde al chat del usuario o escribe su número.', m);
if (isNaN(number)) return m.reply('No es un número válido.', m);
if (number.length > 15) return m.reply('Formato no válido.', m);

try {
let member;
if (text) {
member = number + '@s.whatsapp.net';
} else if (m.quoted?.sender) {
member = m.quoted.sender;
} else if (m.mentionedJid?.length > 0) {
member = m.mentionedJid[0];
}

let onWhatsapp = await conn.onWhatsApp(member);
if (!onWhatsapp.length) return m.reply('El número no está registrado en WhatsApp.', m);

let pic;
try {
pic = await conn.profilePictureUrl(member, 'image');
} catch {}

if (!pic) return m.reply('Él/Ella no tiene foto de perfil o la tiene privada.', m);

await conn.sendMessage(m.chat, {
image: { url: pic },
caption: 'Aquí está la foto de perfil solicitada.'
}, { quoted: m });
} catch {
m.reply('Hubo un error al obtener la foto de perfil.', m);
}
break;
}

case 'infohost': {
conn.sendMessage(m.chat, { text: lenguaje.info.text27(nna, host, dash, paypal, fb),
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363301598733462@newsletter', 
serverMessageId: '', 
newsletterName: 'Sky-Ultra-Plus ☁️' },
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐒𝐊𝐘𝐏𝐋𝐔𝐒-𝐇𝐎𝐒𝐓 🤖`,
body: `¡El plus que necesitas!`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/wXciz.jpg', 
"sourceUrl": dash}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
break


case 'dlestado': {
if (!isOwner) {
return m.reply(m.from, `🚩 Comando solo disponible para el dueño del SubBot.`, m);
}
if (!m.quoted) {
return m.reply(m.from, '🚩 Debes mencionar el estado del usuario que deseas obtener, para descargarlo.', m);
}
if (!/status@broadcast/.test(m.quoted.from)) {
return m.reply(m.from, '🚩 Debes mencionar un estado.', m);
}
conn.sendMessage(m.from, { react: { text: "📥", key: m.key } });
if (/(extendedTextMessage|conversation)/.test(m.quoted.type)) {
m.reply(m.from, m.quoted.msg.text);
} else if (/(image|video)Message?/.test(m.quoted.type)) {
let media = await m.quoted.download();
let caption = m.quoted && m.quoted.caption;
conn.sendFile(m.from, media, '', caption || '', m);
} else if (/(audio)Message?/.test(m.quoted.type)) {
let media = await m.quoted.download();
conn.sendMessage(
m.from, 
{ audio: media, ptt: true, fileName: 'audio.mp3', mimetype: 'audio/ogg; codecs=opus' }, 
{ quoted: m }
);
}
}
break;

case 'perfil': {
const user = global.db.data.users[m.sender];

if (!user) {
return m.reply('No se ha encontrado el perfil del usuario.');
}

let pic;
try {
pic = await conn.profilePictureUrl(m.sender, 'image');
} catch {}

const profileText = `
*Perfil de ${m.pushName}*:

🆔 *ID de usuario:* ${m.sender}
🌟 *Nivel:* ${user.level}
💎 *Exp:* ${user.exp}
🛡️ *Rol:* ${user.role}
💰 *Dinero:* ${user.money}
🏦 *Banco:* ${user.banco}
💎 *Diamantes:* ${user.diamonds}
🕰️ *Registrado desde:* ${new Date(user.regTime).toLocaleString()}
👥 *Unido al grupo:* ${user.joincount}
🌍 *Idioma:* ${user.Language === 0 ? 'Español' : 'Inglés'}
`;

const profilePicUrl = pic || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';

await conn.sendMessage(m.chat, {
image: { url: profilePicUrl },
caption: profileText
}, { quoted: m });

break;
}

case 'carousel': {
const sections = [
{
title: "Categoría 1",
rows: [
{
title: "Opción 1",
description: "Descripción de la opción 1",
rowId: "opcion1"
},
{
title: "Opción 2",
description: "Descripción de la opción 2",
rowId: "opcion2"
}
]
},
{
title: "Categoría 2",
rows: [
{
title: "Opción 3",
description: "Descripción de la opción 3",
rowId: "opcion3"
}
]
}
];

const listMessage = {
text: "Elige una opción del menú:",
footer: "Este es un ejemplo de carrusel.",
title: "Título del mensaje",
buttonText: "Abrir menú",
sections
};

conn.sendMessage(m.chat, listMessage, { quoted: m });
}
break;

case 'testcmd': {
if (!isOwner) return;
const texto = args.join(' ');
try {
const resultado = eval(texto);
m.reply(`${resultado}`);
} catch (error) {
m.reply(`Error: ${error.message}`);
}
break;
}

case 'infomsg': {
if (!isOwner) return m.reply('⚠️ Este comando solo puede ser ejecutado por el owner.');

if (m.quoted) {
m.reply(JSON.stringify(m.quoted, null, 2));
} else {
m.reply('Por favor, responde a un mensaje para obtener su información.');
}
break;
}

case 'tourl2': {
if (!isMedia && !isQuotedImage) return m.reply('Por favor, responde o envía una imagen para convertirla a URL.');
const { uploadImage } = require('./libs/tourl2.js');
const media = await quoted.download();
const tempFilePath = `./tmp/${Math.random().toString(36).substring(7)}.jpg`;
fs.writeFileSync(tempFilePath, media);
try {
const url = await uploadImage(tempFilePath);
fs.unlinkSync(tempFilePath);
m.reply(`Imagen subida con éxito: ${url}`);
} catch (error) {
fs.unlinkSync(tempFilePath);
m.reply('Error al subir la imagen. Intenta nuevamente.');
}
break;
}


case 'quemusica':
case 'quemusicaes':
case 'whatmusic': {
const acrcloud = require('acrcloud');
const fs = require('fs');
const yts = require('yt-search');
const acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';

if (/audio|video/.test(mime)) {
if ((q.msg || q).seconds > 20) {
m.reply('⚠️ El archivo que carga es demasiado grande. Le sugerimos que lo corte a 10-20 segundos para identificarlo correctamente.');
break;
}

const media = await q.download();
const ext = mime.split('/')[1];
const tempFilePath = `./tmp/${m.sender}.${ext}`;
fs.writeFileSync(tempFilePath, media);

try {
const res = await acr.identify(fs.readFileSync(tempFilePath));
const { code, msg } = res.status;

if (code !== 0) {
throw msg;
}

const { title, artists, album, genres, release_date } = res.metadata.music[0];
const txt = `
𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 𝐃𝐄 𝐋𝐀 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀

• 📌 𝐓𝐢𝐭𝐮𝐥𝐨: ${title}
• 👨‍🎤 𝐀𝐫𝐭𝐢𝐬𝐭𝐚: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'}
• 💾 𝐀𝐥𝐛𝐮𝐦: ${album.name || 'No encontrado'}
• 🌐 𝐆𝐞𝐧𝐞𝐫𝐨: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado'}
• 📆 𝐅𝐞𝐜𝐡𝐚 𝐝𝐞 𝐥𝐚𝐧𝐳𝐚𝐦𝐢𝐞𝐧𝐭𝐨: ${release_date || 'No encontrado'}
`.trim();

const search = await yts(title);
const video = search.videos.length > 0 ? search.videos[0] : null;

if (!video) {
m.reply('⚠️ No se encontró ningún video relacionado en YouTube.');
return;
}

await conn.sendMessage(m.chat, {
image: { url: video.thumbnail },
caption: txt,
footer: "EliasarYT",
buttons: [
{
buttonId: `.musica ${video.url}`,
buttonText: {
displayText: "Descargar Música",
},
type: 1,
},
],
viewOnce: true,
headerType: 4,
mentions: [m.sender],
}, { quoted: m });

} catch (error) {
m.reply(`*⚠️ Error al identificar la música:* ${error}`);
} finally {
fs.unlinkSync(tempFilePath);
}
} else {
m.reply('*⚠️ Responde a un audio o video para identificar la música.*');
}
break;
}

/*case 'quemusica':
case 'quemusicaes':
case 'whatmusic': {
const acrcloud = require('acrcloud');
const fs = require('fs');
const acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';

if (/audio|video/.test(mime)) {
if ((q.msg || q).seconds > 20) {
m.reply('⚠️ El archivo que carga es demasiado grande. Le sugerimos que lo corte a 10-20 segundos para identificarlo correctamente.');
break;
}

const media = await q.download();
const ext = mime.split('/')[1];
const tempFilePath = `./tmp/${m.sender}.${ext}`;
fs.writeFileSync(tempFilePath, media);

try {
const res = await acr.identify(fs.readFileSync(tempFilePath));
const { code, msg } = res.status;

if (code !== 0) {
throw msg;
}

const { title, artists, album, genres, release_date } = res.metadata.music[0];
const txt = `
𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 𝐃𝐄 𝐋𝐀 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀

• 📌 𝐓𝐢𝐭𝐮𝐥𝐨: ${title}
• 👨‍🎤 𝐀𝐫𝐭𝐢𝐬𝐭𝐚: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'}
• 💾 𝐀𝐥𝐛𝐮𝐦: ${album.name || 'No encontrado'}
• 🌐 𝐆𝐞𝐧𝐞𝐫𝐨: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado'}
• 📆 𝐅𝐞𝐜𝐡𝐚 𝐝𝐞 𝐥𝐚𝐧𝐳𝐚𝐦𝐢𝐞𝐧𝐭𝐨: ${release_date || 'No encontrado'}
`.trim();

await conn.sendMessage(m.chat, {
image: { url: 'https://tinyurl.com/2ba3hubq' },
caption: txt,
footer: "EliasarYT",
buttons: [
{
buttonId: `.play ${title}`,
buttonText: {
displayText: "Descargar",
},
type: 1,
},
],
viewOnce: true,
headerType: 4,
mentions: [m.sender],
}, { quoted: m });

} catch (error) {
m.reply(`*⚠️ Error al identificar la música:* ${error}`);
} finally {
fs.unlinkSync(tempFilePath);
}
} else {
m.reply('*⚠️ Responde a un audio o video para identificar la música.*');
}
break;
}*/

case 'inspectchannel':
case 'channelinfo': {
if (!text) return m.reply(`*⚠️ Proporcione un enlace válido de un canal de WhatsApp.*`);

const channelUrl = text.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:channel\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1];
if (!channelUrl) return m.reply(`*⚠️ El enlace proporcionado no parece ser un enlace válido de canal.*`);

const formatDate = (timestamp) => {
const date = new Date(timestamp);
const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
return date.toLocaleDateString('es-ES', options);
};

try {
const channelInfo = await conn.newsletterMetadata("invite", channelUrl);
if (!channelInfo) return m.reply(`*⚠️ No se pudo recuperar la información del canal. Verifique que el enlace sea correcto.*`);

const name = channelInfo.name || "Nombre no disponible";
const description = channelInfo.description || "Descripción no disponible";
const subscribers = channelInfo.subscribers ? channelInfo.subscribers.toLocaleString() : "No disponible";
const state = channelInfo.state === "ACTIVE" ? "Activo" : "Inactivo";
const createdAt = channelInfo.creation_time ? formatDate(channelInfo.creation_time * 1000) : "Fecha no disponible";
const picture = channelInfo.picture ? await getUrlFromDirectPath(channelInfo.picture) : null;
const handle = channelInfo.handle || "Alias no disponible";
const verification = channelInfo.verification === "VERIFIED" ? "Verificado" : "No verificado";
const reactionCodes = channelInfo.reaction_codes ? 
(channelInfo.reaction_codes === "ALL" ? "Todas las reacciones permitidas" : 
channelInfo.reaction_codes === "BASIC" ? "Reacciones básicas permitidas" : 
"No se permiten reacciones") : "Desconocido";
const newsletterId = channelInfo.id || "No disponible";

let caption = `*📢 Información del Canal*\n\n`;
caption += `🆔 *ID del Canal:* ${newsletterId}\n`;
caption += `🏷️ *Nombre:* ${name}\n`;
caption += `📝 *Descripción:* ${description}\n`;
caption += `👥 *Suscriptores:* ${subscribers}\n`;
caption += `📅 *Creado el:* ${createdAt}\n`;
caption += `📌 *Estado:* ${state}\n`;
caption += `✅ *Verificación:* ${verification}\n`;
caption += `👤 *Alias:* ${handle}\n`;
caption += `😃 *Reacciones permitidas:* ${reactionCodes}\n`;

if (picture) {
await conn.sendMessage(m.chat, {
image: { url: picture },
caption: caption
}, { quoted: m });
} else {
await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
}
} catch (e) {
console.error(e);
m.reply(`*⚠️ Ocurrió un error al recuperar la información del canal.*`);
}
break;
}

case 'dltt': {
const fs = require('fs');
const path = require('path');
const axios = require('axios');

if (!text) {
conn.sendMessage(from, {
text: '🌸 Por favor, proporciona un enlace válido para descargar el archivo ✨.'
}, { quoted: msg });
return;
}

try {
const tmpDir = path.join(__dirname, 'tmp');
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

const fileName = `archivo_${Date.now()}`;
const filePath = path.join(tmpDir, fileName);

const response = await axios({
url: text,
method: 'GET',
responseType: 'stream'
});

const contentType = response.headers['content-type'];
const fileExtension = contentType.split('/')[1] || 'bin';
const fullFilePath = `${filePath}.${fileExtension}`;

const writer = fs.createWriteStream(fullFilePath);
response.data.pipe(writer);

writer.on('finish', async () => {
const caption = contentType.startsWith('video/') 
? '🎥 Aquí tienes tu video descargado desde TikTok ✨' 
: null;

const messageOptions = {
document: { url: fullFilePath },
mimetype: contentType,
fileName: `descarga.${fileExtension}`
};

if (caption) messageOptions.caption = caption;

await conn.sendMessage(from, messageOptions, { quoted: msg });
fs.unlinkSync(fullFilePath);
});

writer.on('error', () => {
conn.sendMessage(from, {
text: '💔 Ocurrió un error al descargar el archivo. Verifica el enlace e inténtalo nuevamente 🌺.'
}, { quoted: msg });
});
} catch (error) {
conn.sendMessage(from, {
text: '💔 Ocurrió un error inesperado. Verifica el enlace e inténtalo nuevamente 🌺.'
}, { quoted: msg });
}
break;
}


case 'play2':
case 'play': {
const yts = require('yt-search'); 

if (!text || text.trim() === '') {
return m.reply('> 𖦼 *Por favor, ingrese el nombre de una canción o un enlace de YouTube.*');
}

const query = args.join(' ');
const yt_play = await yts(query);

if (!yt_play || yt_play.all.length === 0) return m.reply('> 𖦼 No se encontraron resultados para tu búsqueda.');

const firstResult = yt_play.all[0];
const video = {
url: firstResult.url,
title: firstResult.title,
thumbnail: firstResult.thumbnail || 'default-thumbnail.jpg',
timestamp: firstResult.timestamp,
views: firstResult.views || 'N/A' 
};

await conn.sendMessage(m.chat, {
image: { url: video.thumbnail },
caption: `> 𖦼 *TÍTULO:* ${video.title}  
> 𖦼 *LINK:* ${video.url}  
> 𖦼 *DURACIÓN:* ${video.timestamp}  
> 𖦼 *VISTAS:* ${video.views}  

> 𖦼 📥 *Seleccione una opción para continuar...*  
> 𖦼 ⇄ㅤ   ◁ㅤ  ❚❚ㅤ   ▷ㅤ   ↻  

> 𖦼 *Sígueme papu 🧑‍💻*  
👉 https://tinyurl.com/25xfelmv`,
footer: "> 𖦼 𝐛𝐲 𝐄𝐥𝐢𝐚𝐬𝐚𝐫𝐘𝐓 ッ",
buttons: [
{
buttonId: `.video ${video.url}`, 
buttonText: { 
displayText: '⇣ 𝗩𝗜𝗗𝗘𝗢 ⇣' 
}
}, {
buttonId: `.musica ${video.url}`, 
buttonText: {
displayText: "⇣ 𝗔𝗨𝗗𝗜𝗢 ⇣"
}
}
],
viewOnce: true,
headerType: 1,
mentions: [m.sender],
}, { quoted: m });
    break;
}

case 'video': { 
    const fetch = require('node-fetch');

    if (!text) return m.reply('Proporciona un enlace de YouTube válido.');
    const url = args[0];

    if (!url.includes('youtu')) return m.reply('Proporciona un enlace válido de YouTube.');

    m.reply('🔄 Obteniendo información del video...');

    try {
        const infoResponse = await fetch(`https://ytdownloader.nvlgroup.my.id/info?url=${url}`);
        const info = await infoResponse.json();

        if (!info.resolutions || info.resolutions.length === 0) {
            return m.reply('❌ No se encontraron resoluciones disponibles.');
        }

        const randomResolution = info.resolutions[Math.floor(Math.random() * info.resolutions.length)];
        const selectedHeight = randomResolution.height;

        m.reply(`🔄 Descargando el video en ${selectedHeight}p, espera...`);

        const videoUrl = `https://ytdownloader.nvlgroup.my.id/download?url=${url}&resolution=${selectedHeight}`;

        await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: `✅ Aquí está tu video en ${selectedHeight}p.`,
        }, { quoted: m });
    } catch (e) {
        m.reply(`❌ Error: ${e.stack}\n\nNo se pudo obtener información del video.`);
    }
    break;
}
    
/*case 'video': {
if (!text) return m.reply('Por favor, proporciona un enlace de YouTube válido.');
const url = args[0];

if (!url.includes('youtu')) return m.reply('Por favor, proporciona un enlace válido de YouTube.');

m.reply('🔄 Descargando el video, por favor espera...');

try {
const api = `https://api.siputzx.my.id/api/d/ytmp4?url=${url}`;
const res = await fetch(api);
const json = await res.json();

if (json.status) {
const videoUrl = json.data.dl;

await conn.sendMessage(m.chat, {
video: { url: videoUrl },
caption: '✅ Aquí está tu video.',
}, { quoted: m });
} else {
m.reply('❌ Error al descargar el video.');
}
} catch (e) {
m.reply('❌ Hubo un problema al procesar tu solicitud.');
}
}
break;*/

case 'musica': {
  const fs = require('fs');
  const path = require('path');
  const fetch = require('node-fetch');
  const ytdl = require('./libs/ytdl');
  const yts = require('yt-search');
  const botNumber = '50582340051@s.whatsapp.net';

  if (!args.length || !/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)/.test(args[0])) {
    return m.reply('Por favor, ingresa un enlace de YouTube válido.');
  }

  m.reply('🔄 Descargando el audio, por favor espera...');
  const videoUrl = args[0];

  try {
    const searchResult = await yts({ videoId: videoUrl.split('v=')[1] || videoUrl.split('/').pop() });
    if (!searchResult || !searchResult.title || !searchResult.thumbnail) {
      throw new Error('No se pudo obtener la información del video.');
    }

    const videoInfo = {
      title: searchResult.title,
      thumbnail: await (await fetch(searchResult.thumbnail)).buffer()
    };

    const ytdlResult = await ytdl(videoUrl);
    if (ytdlResult.status !== 'success' || !ytdlResult.dl) {
      throw new Error('No se pudo obtener el enlace de descarga.');
    }

    const tmpDir = path.join(__dirname, 'tmp');
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

    const filePath = path.join(tmpDir, `${Date.now()}.mp3`);
    const response = await fetch(ytdlResult.dl);
    const buffer = await response.buffer();
    fs.writeFileSync(filePath, buffer);

    const audioCaption = `🎵 *Título:* ${videoInfo.title}\n🔗 *Enlace:* ${videoUrl}`;

    await conn.sendMessage(m.chat, {
      audio: fs.readFileSync(filePath),
      mimetype: 'audio/mpeg',
      fileName: `${videoInfo.title}.mp3`,
      caption: audioCaption,
      thumbnail: videoInfo.thumbnail,
      contextInfo: {
        externalAdReply: {
          containsAutoReply: true,
          mediaType: 1,
          mediaUrl: videoUrl,
          renderLargerThumbnail: false,
          showAdAttribution: true,
          sourceUrl: videoUrl,
          thumbnailUrl: searchResult.thumbnail,
          title: videoInfo.title,
          body: 'ᴀɴsɪ-ʙᴏᴛ/ɴᴏᴄᴛᴜʀɴᴇ'
        },
        forwardingScore: 9999999,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
          businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363296103096943@newsletter',
          serverMessageId: null,
          newsletterName: '𝒂𝒏𝒔𝒊-𝑩𝑶𝑻-𝑴𝑫'
        }
      }
    }, { quoted: m });

    fs.unlinkSync(filePath);
  } catch (error) {
    await m.reply('Ocurrió un error al intentar descargar el audio.');
  }
  break;
}

/*case 'musica': {
const fetch = require('node-fetch');

if (!args.length || !/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)/.test(args[0])) {
return m.reply('Por favor, ingresa un enlace de YouTube válido.');
}
m.reply('🔄 Descargando el audio, por favor espera...');
const videoUrl = args[0];

try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.status) throw new Error();
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const yt = await ytdl(videoUrl);
const dl_url = yt.audio['128kbps']?.download();
if (!dl_url) throw new Error();
await conn.sendFile(m.chat, dl_url, `${videoUrl.split('v=')[1]}.mp3`, null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const axeelUrl = `https://axeel.my.id/api/download/audio?url=${encodeURIComponent(videoUrl)}`;
const axeelResponse = await fetch(axeelUrl);
const axeelData = await axeelResponse.json();
if (!axeelData || !axeelData.downloads?.url) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: axeelData.downloads.url }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const siputzxUrl = `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(videoUrl)}`;
const siputzxResponse = await fetch(siputzxUrl);
const siputzxData = await siputzxResponse.json();
if (!siputzxData.status || !siputzxData.data?.dl) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: siputzxData.data.dl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const ryzenUrl = `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`;
const ryzenResponse = await fetch(ryzenUrl);
const ryzenData = await ryzenResponse.json();
if (ryzenData.status === 'tunnel' && ryzenData.url) {
const downloadUrl = ryzenData.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} else {
throw new Error();
}
} catch {
try {
const dorratzUrl = `https://api.dorratz.com/v2/yt-mp3?url=${encodeURIComponent(videoUrl)}`;
await conn.sendMessage(m.chat, { audio: { url: dorratzUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const downloadUrl = await fetch9Convert(videoUrl);
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const downloadUrl = await fetchY2mate(videoUrl);
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${videoUrl}`);
const audioData = await res.json();
if (!audioData.status || !audioData.result?.downloadUrl) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${videoUrl}`);
const dp = await d2.json();
const audiop = dp.result.media.mp3;
const fileSize = dp.result.media.mp3_size;
if (!audiop) throw new Error();
if (fileSize > LimitAud) {
await conn.sendMessage(m.chat, { document: { url: audiop }, mimetype: 'audio/mp3', fileName: `${videoUrl.split('v=')[1]}.mp3` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { audio: { url: audiop }, mimetype: 'audio/mpeg' }, { quoted: m });
}
} catch {
await m.reply('Todas las APIs fallaron. No se pudo procesar tu solicitud.');
}
}
}
}
}
}
}
}
}
}
break;
}
*/
/*case 'musica': {
const fetch = require('node-fetch');

if (!args.length || !/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)/.test(args[0])) {
return m.reply('Por favor, ingresa un enlace de YouTube válido.');
}
m.reply('🔄 Descargando el audio, por favor espera...');
const videoUrl = args[0];

try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.status) throw new Error();
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const yt = await ytdl(videoUrl);
const dl_url = yt.audio['128kbps']?.download();
if (!dl_url) throw new Error();
await conn.sendFile(m.chat, dl_url, `${videoUrl.split('v=')[1]}.mp3`, null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const siputzxUrl = `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(videoUrl)}`;
const siputzxResponse = await fetch(siputzxUrl);
const siputzxData = await siputzxResponse.json();
if (!siputzxData.status || !siputzxData.data?.dl) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: siputzxData.data.dl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const ryzenUrl = `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`;
const ryzenResponse = await fetch(ryzenUrl);
const ryzenData = await ryzenResponse.json();
if (ryzenData.status === 'tunnel' && ryzenData.url) {
const downloadUrl = ryzenData.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} else {
throw new Error();
}
} catch {
try {
const dorratzUrl = `https://api.dorratz.com/v2/yt-mp3?url=${encodeURIComponent(videoUrl)}`;
await conn.sendMessage(m.chat, { audio: { url: dorratzUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const downloadUrl = await fetch9Convert(videoUrl);
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const downloadUrl = await fetchY2mate(videoUrl);
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${videoUrl}`);
const audioData = await res.json();
if (!audioData.status || !audioData.result?.downloadUrl) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${videoUrl}`);
const dp = await d2.json();
const audiop = dp.result.media.mp3;
const fileSize = dp.result.media.mp3_size;
if (!audiop) throw new Error();
if (fileSize > LimitAud) {
await conn.sendMessage(m.chat, { document: { url: audiop }, mimetype: 'audio/mp3', fileName: `${videoUrl.split('v=')[1]}.mp3` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { audio: { url: audiop }, mimetype: 'audio/mpeg' }, { quoted: m });
}
} catch {
await m.reply('Todas las APIs fallaron. No se pudo procesar tu solicitud.');
}
}
}
}
}
}
}
}
}
break;
}*/

case 'tiktokserch': {
const axios = require('axios');
if (!text) {
conn.sendMessage(from, {
text: '🌸 Por favor, ingresa el nombre de una película o término para buscar ✨.'
}, { quoted: msg });
return;
}
const url = `https://restapi.apibotwa.biz.id/api/search-tiktok?message=${encodeURIComponent(text)}`;
try {
const response = await axios.get(url);
const data = response.data;

if (data.status !== 200 || !data.data || !data.data.response) {
conn.sendMessage(from, {
text: `😿 No se encontraron resultados para: *${text}*. ¡Inténtalo con otro término! 💕`
}, { quoted: msg });
} else {
const result = data.data.response;

const shortNoWatermark = result.no_watermark ? await axios.get(`https://tinyurl.com/api-create.php?url=${result.no_watermark}`) : { data: 'No disponible' };
const shortWatermark = result.watermark ? await axios.get(`https://tinyurl.com/api-create.php?url=${result.watermark}`) : { data: 'No disponible' };
const shortMusic = result.music ? await axios.get(`https://tinyurl.com/api-create.php?url=${result.music}`) : { data: 'No disponible' };

const message = `
🌟 *¡Encontré algo lindo para ti!* 🌟
💖 *Título:* ${result.title}

🎵 *Música:* ${shortMusic.data}
📥 *Descarga sin marca de agua:* ${shortNoWatermark.data}
📥 *Descarga con marca de agua:* ${shortWatermark.data}

✨ ¡Espero que te guste! 🌸
> para descargar usa dltt link 😺
`.trim();

conn.sendMessage(from, {
image: { url: result.cover },
caption: message
}, { quoted: msg });
}
} catch (error) {
conn.sendMessage(from, {
text: `💔 Ocurrió un error al realizar la búsqueda. Detalles del error:\n\n${error.stack}`
}, { quoted: msg });
}
break;
}    


case 'server':
case 'p': {
const os = require('os');
const si = require('systeminformation');
const { execSync } = require('child_process');
const { performance } = require('perf_hooks');

async function getSystemInfo() {
const disk = await si.fsSize();
const memInfo = await si.mem();
const load = await si.currentLoad();
const cpus = os.cpus();
const networkStats = await si.networkStats();
const battery = await si.battery();
const cpuTemp = await si.cpuTemperature();

let timestamp = performance.now();
let latensi = performance.now() - timestamp;

const networkInterfaces = os.networkInterfaces();
let ipAddress = '';
for (const iface of Object.values(networkInterfaces)) {
for (const ifaceDetails of iface) {
if (ifaceDetails.family === 'IPv4' && !ifaceDetails.internal) {
ipAddress = ifaceDetails.address;
break;
}
}
if (ipAddress) break;
}

const currentPath = process.cwd();
const nodeVersion = process.version;

let latestConsoleMessage = '';
try {
latestConsoleMessage = execSync('tail -n 1 /var/log/syslog').toString().trim();
} catch (error) {
latestConsoleMessage = '*No disponible*';
}

const isPterodactyl = currentPath === '/home/container';

const data = {
latencia: `${latensi.toFixed(4)} ms`,
plataforma: os.platform(),
núcleosCPU: cpus.length,
modeloCPU: cpus[0]?.model || '*No disponible*',
arquitecturaSistema: os.arch(),
versiónSistema: os.release(),
procesosActivos: os.loadavg()[0].toFixed(2),
porcentajeCPUUsada: load.currentLoad.toFixed(2) + '%',
ramUsada: `${(memInfo.used / (1024 ** 3)).toFixed(2)} GB`,
ramTotal: `${(memInfo.total / (1024 ** 3)).toFixed(2)} GB`,
ramLibre: `${(memInfo.free / (1024 ** 3)).toFixed(2)} GB`,
porcentajeRAMUsada: `${((memInfo.used / memInfo.total) * 100).toFixed(2)}%`,
espacioTotalDisco: `${(disk[0]?.size / (1024 ** 3)).toFixed(2)} GB`,
espacioLibreDisco: `${(disk[0]?.available / (1024 ** 3)).toFixed(2)} GB`,
uptime: `${Math.floor(os.uptime() / (60 * 60 * 24))}d ${Math.floor((os.uptime() % (60 * 60 * 24)) / (60 * 60))}h ${Math.floor((os.uptime() % (60 * 60)) / 60)}m`,
cargaPromedio: os.loadavg().map((avg, index) => `${index + 1} min: ${avg.toFixed(2)}`).join(', '),
temperaturaCPU: cpuTemp.main ? `${cpuTemp.main} °C` : '*No disponible*',
horaActual: new Date().toLocaleString(),
detallesCPUNúcleo: cpus.map((cpu, i) => `Núcleo ${i + 1}: ${(load.cpus[i]?.load || 0).toFixed(2)}%`).join('\n'),
gruposBaneados: Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length,
usuariosBaneados: Object.entries(global.db.data.users).filter(user => user[1].banned).length,
usuariosTotales: Object.keys(global.db.data.users).length,
ipAddress: ipAddress,
rutaActual: currentPath,
esPterodactyl: isPterodactyl ? 'Sí' : 'No',
versiónNode: nodeVersion,
mensajeConsolaReciente: latestConsoleMessage,
velocidadRed: networkStats[0] ? 
`${(networkStats[0].rx_sec / 1024).toFixed(2)} KB/s de descarga, ${(networkStats[0].tx_sec / 1024).toFixed(2)} KB/s de subida` : '*No disponible*',
estadoRed: networkStats[0]?.operstate || 'Desconocido',
nivelBatería: battery.hasbattery ? `${battery.percent}%` : 'Sin batería',
cargando: battery.ischarging ? 'Sí' : 'No'
};

return data;
}

getSystemInfo().then((data) => {
const responseMessage = `
🏓 *ᵖᵒᶰᵍ:* ${data.latencia}
🖥️ *ᴘʟᴀᴛᴀғᴏʀᴍᴀ:* ${data.plataforma}
🔢 *ᴄᴘᴜ ɴᴜᴄʟᴇᴏs:* ${data.núcleosCPU}
📡 *ᴄᴘᴜ ᴍᴏᴅᴇʟᴏ:* ${data.modeloCPU}
🏗️ *ᴀʀǫᴜɪᴛᴇᴄᴛᴜʀᴀ:* ${data.arquitecturaSistema}
🔢 *ᴠᴇʀsɪᴏɴ sɪsᴛᴇᴍᴀ:* ${data.versiónSistema}
📊 *ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴄᴘᴜ:* ${data.porcentajeCPUUsada}
💾 *ʀᴀᴍ:* ${data.ramUsada} / ${data.ramTotal} (${data.porcentajeRAMUsada})
💾 *ᴅɪsᴄᴏ:* ${data.espacioLibreDisco} de ${data.espacioTotalDisco}
⏳ *ᴜᴘᴛɪᴍᴇ:* ${data.uptime}
📈 *ᴄᴀʀɢᴀ:* ${data.cargaPromedio}
🌡️ *ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴀ ᴄᴘᴜ:* ${data.temperaturaCPU}
⚙️ *ᴄᴘᴜ ᴘᴏʀ ɴᴜᴄʟᴇᴏ:*\n${data.detallesCPUNúcleo}
📡 *ᴇsᴛᴀᴅᴏ ʀᴇᴅ:* ${data.estadoRed}
📶 *ᴠᴇʟᴏᴄɪᴅᴀᴅ ʀᴇᴅ:* ${data.velocidadRed}
🔋 *ɴɪᴠᴇʟ ʙᴀᴛᴇʀíᴀ:* ${data.nivelBatería}
🔌 *ᴄᴀʀɢᴀɴᴅᴏ:* ${data.cargando}
📂 *ʀᴜᴛᴀ:* ${data.rutaActual}
🚫 *ɢʀᴜᴘᴏs ʙᴀɴᴇᴀᴅᴏs:* ${data.gruposBaneados}
🚫 *ᴜsᴜᴀʀɪᴏs ʙᴀɴᴇᴀᴅᴏs:* ${data.usuariosBaneados}
👥 *ᴜsᴜᴀʀɪᴏs ᴛᴏᴛᴀʟᴇs:* ${data.usuariosTotales}
📌 *ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ:* ${data.esPterodactyl}
🛠️ *ɴᴏᴅᴇ.js:* ${data.versiónNode}
📝 *ᴄᴏɴsᴏʟᴀ:* ${data.mensajeConsolaReciente}
`.trim();

conn.sendMessage(from, { image: { url: "https://i.ibb.co/9gXhQFV/58a304e5d673a6422263d1bc2bc49cad.jpg" }, caption: responseMessage }, { quoted: msg, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 });
});
break;
}

case 'testp': {
const os = require('os');
const si = require('systeminformation');
const { execSync } = require('child_process');
const { performance } = require('perf_hooks');

async function getSystemInfo() {
const disk = await si.fsSize();
const memInfo = await si.mem();
const load = await si.currentLoad();
const cpus = os.cpus();
const networkStats = await si.networkStats();
const battery = await si.battery();
const cpuTemp = await si.cpuTemperature();

let timestamp = performance.now();
let latensi = performance.now() - timestamp;

const networkInterfaces = os.networkInterfaces();
let ipAddress = '';
for (const iface of Object.values(networkInterfaces)) {
for (const ifaceDetails of iface) {
if (ifaceDetails.family === 'IPv4' && !ifaceDetails.internal) {
ipAddress = ifaceDetails.address;
break;
}
}
if (ipAddress) break;
}

const currentPath = process.cwd();
const nodeVersion = process.version;

let latestConsoleMessage = '';
try {
latestConsoleMessage = execSync('tail -n 1 /var/log/syslog').toString().trim();
} catch (error) {
latestConsoleMessage = '*No disponible*';
}

const isPterodactyl = currentPath === '/home/container';

const data = {
latencia: `${latensi.toFixed(4)} ms`,
plataforma: os.platform(),
núcleosCPU: cpus.length,
modeloCPU: cpus[0]?.model || '*No disponible*',
arquitecturaSistema: os.arch(),
versiónSistema: os.release(),
procesosActivos: os.loadavg()[0].toFixed(2),
porcentajeCPUUsada: load.currentLoad.toFixed(2) + '%',
ramUsada: `${(memInfo.used / (1024 ** 3)).toFixed(2)} GB`,
ramTotal: `${(memInfo.total / (1024 ** 3)).toFixed(2)} GB`,
ramLibre: `${(memInfo.free / (1024 ** 3)).toFixed(2)} GB`,
porcentajeRAMUsada: `${((memInfo.used / memInfo.total) * 100).toFixed(2)}%`,
espacioTotalDisco: `${(disk[0]?.size / (1024 ** 3)).toFixed(2)} GB`,
espacioLibreDisco: `${(disk[0]?.available / (1024 ** 3)).toFixed(2)} GB`,
uptime: `${Math.floor(os.uptime() / (60 * 60 * 24))}d ${Math.floor((os.uptime() % (60 * 60 * 24)) / (60 * 60))}h ${Math.floor((os.uptime() % (60 * 60)) / 60)}m`,
cargaPromedio: os.loadavg().map((avg, index) => `${index + 1} min: ${avg.toFixed(2)}`).join(', '),
temperaturaCPU: cpuTemp.main ? `${cpuTemp.main} °C` : '*No disponible*',
horaActual: new Date().toLocaleString(),
detallesCPUNúcleo: cpus.map((cpu, i) => `Núcleo ${i + 1}: ${(load.cpus[i]?.load || 0).toFixed(2)}%`).join('\n'),
gruposBaneados: Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length,
usuariosBaneados: Object.entries(global.db.data.users).filter(user => user[1].banned).length,
usuariosTotales: Object.keys(global.db.data.users).length,
ipAddress: ipAddress,
rutaActual: currentPath,
esPterodactyl: isPterodactyl ? 'Sí' : 'No',
versiónNode: nodeVersion,
mensajeConsolaReciente: latestConsoleMessage,
velocidadRed: networkStats[0] ? 
`${(networkStats[0].rx_sec / 1024).toFixed(2)} KB/s de descarga, ${(networkStats[0].tx_sec / 1024).toFixed(2)} KB/s de subida` : '*No disponible*',
estadoRed: networkStats[0]?.operstate || 'Desconocido',
nivelBatería: battery.hasbattery ? `${battery.percent}%` : 'Sin batería',
cargando: battery.ischarging ? 'Sí' : 'No'
};

return data;
}

getSystemInfo().then((data) => {
const responseMessage = `
🏓 *ᵖᵒᶰᵍ:* ${data.latencia}
🖥️ *ᴘʟᴀᴛᴀғᴏʀᴍᴀ:* ${data.plataforma}
🔢 *ᴄᴘᴜ ɴᴜᴄʟᴇᴏs:* ${data.núcleosCPU}
📡 *ᴄᴘᴜ ᴍᴏᴅᴇʟᴏ:* ${data.modeloCPU}
🏗️ *ᴀʀǫᴜɪᴛᴇᴄᴛᴜʀᴀ:* ${data.arquitecturaSistema}
🔢 *ᴠᴇʀsɪᴏɴ sɪsᴛᴇᴍᴀ:* ${data.versiónSistema}
📊 *ᴘᴏʀᴄᴇɴᴛᴀᴊᴇ ᴅᴇ ᴄᴘᴜ:* ${data.porcentajeCPUUsada}
💾 *ʀᴀᴍ:* ${data.ramUsada} / ${data.ramTotal} (${data.porcentajeRAMUsada})
💾 *ᴅɪsᴄᴏ:* ${data.espacioLibreDisco} de ${data.espacioTotalDisco}
⏳ *ᴜᴘᴛɪᴍᴇ:* ${data.uptime}
📈 *ᴄᴀʀɢᴀ:* ${data.cargaPromedio}
🌡️ *ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴀ ᴄᴘᴜ:* ${data.temperaturaCPU}
⚙️ *ᴄᴘᴜ ᴘᴏʀ ɴᴜᴄʟᴇᴏ:*\n${data.detallesCPUNúcleo}
📡 *ᴇsᴛᴀᴅᴏ ʀᴇᴅ:* ${data.estadoRed}
📶 *ᴠᴇʟᴏᴄɪᴅᴀᴅ ʀᴇᴅ:* ${data.velocidadRed}
🔋 *ɴɪᴠᴇʟ ʙᴀᴛᴇʀíᴀ:* ${data.nivelBatería}
🔌 *ᴄᴀʀɢᴀɴᴅᴏ:* ${data.cargando}
📂 *ʀᴜᴛᴀ:* ${data.rutaActual}
🚫 *ɢʀᴜᴘᴏs ʙᴀɴᴇᴀᴅᴏs:* ${data.gruposBaneados}
🚫 *ᴜsᴜᴀʀɪᴏs ʙᴀɴᴇᴀᴅᴏs:* ${data.usuariosBaneados}
👥 *ᴜsᴜᴀʀɪᴏs ᴛᴏᴛᴀʟᴇs:* ${data.usuariosTotales}
📌 *ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ:* ${data.esPterodactyl}
🛠️ *ɴᴏᴅᴇ.js:* ${data.versiónNode}
📝 *ᴄᴏɴsᴏʟᴀ:* ${data.mensajeConsolaReciente}
`.trim();

conn.sendMessage('120363386885800287@newsletter', { image: { url: "https://i.ibb.co/9gXhQFV/58a304e5d673a6422263d1bc2bc49cad.jpg" }, caption: responseMessage }, { quoted: msg, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 });
});
break;
}


/*case 'test3': {
conn.sendMessage(m.chat, {
image: { url: 'https://qu.ax/MFOVJ.jpg' },
caption: `You like me?`, 
footer: "Sock",
buttons: [
{
buttonId: ".gay",
buttonText: {
displayText: "Yes",
},
type: 1,
},
{
buttonId: ".play2 felices los 4",
buttonText: {
displayText: "No",
},
type: 1,
},
],
viewOnce: true,
headerType: 4,
mentions: [m.sender],
}, { quoted: m });
break
}*/
case 'ping': {
const os = require('os');
const si = require('systeminformation');
const { performance } = require('perf_hooks');

async function getSystemInfo() {
const start = performance.now();
const disk = await si.fsSize();
const memInfo = await si.mem();
const load = await si.currentLoad();
const cpus = os.cpus();
const latensi = performance.now() - start;

const ipAddress = Object.values(os.networkInterfaces())
.flat()
.find(iface => iface.family === 'IPv4' && !iface.internal)?.address || '*No disponible*';

return {
latencia: `${latensi.toFixed(4)} ms`,
plataforma: os.platform(),
núcleosCPU: cpus.length,
modeloCPU: cpus[0]?.model || '*No disponible*',
arquitecturaSistema: os.arch(),
versiónSistema: os.release(),
porcentajeCPUUsada: load.currentLoad.toFixed(2) + '%',
ramUsada: `${(memInfo.used / (1024 ** 3)).toFixed(2)} GB`,
ramTotal: `${(memInfo.total / (1024 ** 3)).toFixed(2)} GB`,
porcentajeRAMUsada: `${((memInfo.used / memInfo.total) * 100).toFixed(2)}%`,
espacioTotalDisco: `${(disk[0]?.size / (1024 ** 3)).toFixed(2)} GB`,
espacioLibreDisco: `${(disk[0]?.available / (1024 ** 3)).toFixed(2)} GB`,
uptime: `${Math.floor(os.uptime() / (60 * 60 * 24))}d ${Math.floor((os.uptime() % (60 * 60 * 24)) / (60 * 60))}h ${Math.floor((os.uptime() % (60 * 60)) / 60)}m`,
ipAddress
};
}

(async () => {
const data = await getSystemInfo();

const responseMessage = `
🏓 *Latencia:* ${data.latencia}
🖥️ *Plataforma:* ${data.plataforma}
🔢 *Núcleos CPU:* ${data.núcleosCPU}
📡 *Modelo CPU:* ${data.modeloCPU}
🏗️ *Arquitectura:* ${data.arquitecturaSistema}
🔢 *Versión Sistema:* ${data.versiónSistema}
📊 *Porcentaje de CPU:* ${data.porcentajeCPUUsada}
💾 *RAM:* ${data.ramUsada} / ${data.ramTotal} (${data.porcentajeRAMUsada})
💾 *Disco:* ${data.espacioLibreDisco} de ${data.espacioTotalDisco}
⏳ *Uptime:* ${data.uptime}
`.trim();

const imageUrl = 'https://i.ibb.co/RPdgM66/d5546e272a8d.jpg';

await conn.sendMessage(
m.chat, 
{ 
image: { url: imageUrl }, 
caption: responseMessage 
}, 
{ quoted: m }
);
})();
break;
}


case 'gnula': {
const axios = require('axios');

async function buscarPelicula(nombre) {
try {
const url = `https://eliasar-yt-api.vercel.app/api/search/gnula?name=${encodeURIComponent(nombre)}`;
const response = await axios.get(url);
const data = response.data;

if (!data.status || !data.movies || data.movies.length === 0) {
conn.sendMessage(from, {
text: `No se encontraron resultados para: ${nombre}`
}, { quoted: msg });
return;
}

const pelicula = data.movies[0];
const mensaje = `
🎬 Título: ${pelicula.titulo || 'Desconocido'}
📅 Publicado: ${pelicula.fechaPublicacion || 'Desconocido'}
🖋️ Autor: ${pelicula.autor || 'No disponible'}
📖 Sinopsis: ${pelicula.sinopsis || pelicula.descripcion || 'No disponible'}
🔗 Enlace: ${pelicula.enlace || 'No disponible'}
🎞️ Idioma: ${pelicula.idioma || 'No disponible'}
📺 Calidad: ${pelicula.calidad || 'No disponible'}
⬇️ Descargar: ${pelicula.enlaceDescarga || 'No disponible'}
`.trim();

conn.sendMessage(from, {
image: { url: pelicula.imagen },
caption: mensaje
}, {
quoted: msg,
ephemeralExpiration: 24 * 60 * 1000
});
} catch (error) {
conn.sendMessage(from, {
text: `Error al buscar la película: ${error.message}`
}, { quoted: msg });
}
}

if (!text) {
conn.sendMessage(from, {
text: 'Por favor, proporciona el nombre de una película para buscar.'
}, { quoted: msg });
} else {
buscarPelicula(text);
}

break;
}

case 'rm': {
if (!isCreator) {
return conn.sendMessage(from, {
text: '❌ Solo el creador puede usar este comando.'
}, { quoted: msg });
}

const nombreComando = args[0]?.toLowerCase();

if (!nombreComando) {
return conn.sendMessage(from, {
text: '❌ Por favor, proporciona el nombre del comando a eliminar. Ejemplo: rm simple'
}, { quoted: msg });
}

const fs = require('fs');
const rutaArchivo = './main.js';

fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
if (err) {
return conn.sendMessage(from, {
text: `❌ Error al leer el archivo: ${err.message}`
}, { quoted: msg });
}

const regex = new RegExp(`case '${nombreComando}': \\{[\\s\\S]*?break;\\n\\}`, 'g');

if (!regex.test(data)) {
return conn.sendMessage(from, {
text: `❌ No se encontró el comando '${nombreComando}' en el archivo.`
}, { quoted: msg });
}

const nuevaData = data.replace(regex, '');

fs.writeFile(rutaArchivo, nuevaData, (err) => {
if (err) {
return conn.sendMessage(from, {
text: `❌ Error al eliminar el comando: ${err.message}`
}, { quoted: msg });
}

conn.sendMessage(from, {
text: `✅ Comando '${nombreComando}' eliminado exitosamente.`
}, { quoted: msg });
});
});
break;
}

case 'stickeremoji':
if (!args[0] || !args[1]) return m.reply('Proporciona dos emojis. Ejemplo: .stickeremoji ❤️‍🔥 😊');

const emoji1 = encodeURIComponent(args[0]);
const emoji2 = encodeURIComponent(args[1]);
const apiUrl = `https://emojik.vercel.app/s/${emoji1}_${emoji2}?size=128`;

try {
const axios = require('axios');

const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

const contentType = response.headers['content-type'];
if (!contentType || !contentType.startsWith('image/')) {
throw new Error('La respuesta no es una imagen válida.');
}

const buffer = Buffer.from(response.data);

const media = await conn.sendImageAsSticker(m.chat, buffer, m, { 
packname: global.packname, 
author: global.author 
});

await fs.unlinkSync(media);
} catch (error) {
console.error('Error al procesar el comando stickeremoji:', error);
m.reply(`Ocurrió un error: ${error.message}`);
}
break;

case 'nsfwimage': {
try {
const axios = require('axios');
const response = await axios.get('https://eliasar-yt-api.vercel.app/api/nsfw/photos');
const data = response.data;

if (!data.status) return m.reply('Error al obtener las imágenes.');

const randomImage = data.data[Math.floor(Math.random() * data.data.length)];
const { url, title } = randomImage;

await conn.sendMessage(m.chat, {
image: { url },
caption: `${title}\n🥵`
}, { quoted: m });
} catch (err) {
m.reply('Hubo un error al obtener la imagen.');
}
}
break;

case 'bug': {
m.react('💀');
let botones = [];
for (let i = 1; i <= 1000; i++) {
botones.push([`bug 💀 ${i}`, `.bug${i}`]);
}
conn.sendButton(m.chat, "‏‎ ‎‏‎ ‎‎‏‎ ‎‏‎ ‎‏‎ ‎‏‎ ‎‎‏‎ ‎‏‎ ‎‏‎‏‎ ‎‏‎ ‎‎‏‎ ‎‏‎ ‎‏‎ ‎‏‎ ‎‎‏‎ ‎‏‎ ‎‏‎‏‎ ‎‏‎ ‎‎‏‎ ‎‏‎ ‎‏‎ ‎‏‎ ‎‎‏‎ ‎‏‎ ‎‏‎‏‎ ‎‏‎ ‎‎‏‎ ‎‏‎ ‎‏‎ ‎‏‎ ‎‎‏‎ ‎‏‎ ‎‏‎", "valiste madres 💀", null, botones, null, null, m);
}

//comandos guardados aquí..



/*case 'guar': {
if (!isCreator) {
return conn.sendMessage(from, {
text: '❌ Solo el creador puede usar este comando.'
}, { quoted: msg });
}

const codigo = body.slice(body.indexOf(' ') + 1);

if (!codigo) {
return conn.sendMessage(from, {
text: '❌ Por favor, proporciona el código que deseas guardar.'
}, { quoted: msg });
}

let errorDeSintaxis = false;

try {
new Function(codigo);
} catch (err) {
if (err.message.includes("Unexpected token 'case'")) {
errorDeSintaxis = true;
} else {
return conn.sendMessage(from, {
text: `❌ Error de sintaxis en el código proporcionado: ${err.message}`
}, { quoted: msg });
}
}

const fs = require('fs');
const rutaArchivo = './main.js';

fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
if (err) {
return conn.sendMessage(from, {
text: `❌ Error al leer el archivo: ${err.message}`
}, { quoted: msg });
}

if (!data.includes('//comandos guardados aquí..')) {
return conn.sendMessage(from, {
text: '❌ No se encontró el marcador "//comandos guardados aquí.." en el archivo.'
}, { quoted: msg });
}

if (data.includes(codigo)) {
return conn.sendMessage(from, {
text: '❌ Este código ya está presente en el archivo.'
}, { quoted: msg });
}

const nuevaData = data.replace('//comandos guardados aquí..', `//comandos guardados aquí..\n${codigo}\n`);

fs.writeFile(rutaArchivo, nuevaData, (err) => {
if (err) {
return conn.sendMessage(from, {
text: `❌ Error al guardar el código: ${err.message}`
}, { quoted: msg });
}

const mensajeExito = errorDeSintaxis
? '✅ Código guardado exitosamente con advertencia: Error de sintaxis relacionado con "case" ignorado.'
: '✅ Código guardado exitosamente después del comentario "//comandos guardados aquí..".';

conn.sendMessage(from, {
text: mensajeExito
}, { quoted: msg });
});
});
break;
}*/

case 'guar': {
if (!isCreator) {
return conn.sendMessage(from, {
text: '❌ Solo el creador puede usar este comando.'
}, { quoted: msg });
}

const codigo = body.slice(body.indexOf(' ') + 1);

if (!codigo) {
return conn.sendMessage(from, {
text: '❌ Por favor, proporciona el código que deseas guardar.'
}, { quoted: msg });
}

const fs = require('fs');
const rutaArchivo = './main.js';

fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
if (err) {
return conn.sendMessage(from, {
text: `❌ Error al leer el archivo: ${err.message}`
}, { quoted: msg });
}

if (data.includes(codigo.trim())) {
return conn.sendMessage(from, {
text: '❌ El código ya existe en el archivo.'
}, { quoted: msg });
}

const nuevaData = data.replace(/(\/\/comandos guardados aquí\.\.\.\s*)/, `$1\n${codigo}\n`);

fs.writeFile(rutaArchivo, nuevaData, (err) => {
if (err) {
return conn.sendMessage(from, {
text: `❌ Error al guardar el código: ${err.message}`
}, { quoted: msg });
}

conn.sendMessage(from, {
text: '✅ Código guardado exitosamente.'
}, { quoted: msg });
});
});
break;
}


/*case 'play':
case 'ytmp3':
const yts = require('yt-search'), youtubedl = require('youtubedl-core'), ytdl = require('ytdl-core'), fetch = require('node-fetch');
if (!text || text.trim() === '') text = 'Empire';
const query = args.length ? args.join(' ') : text;
let videoUrl = '', video = {};
if (/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)/.test(query)) {
videoUrl = query;
try {
const videoInfo = await ytdl.getInfo(videoUrl);
video = { url: videoUrl, title: videoInfo.videoDetails.title, thumbnail: videoInfo.videoDetails.thumbnails[0].url, timestamp: videoInfo.videoDetails.lengthSeconds };
} catch {
return m.reply('No se pudo procesar el enlace proporcionado.');
}
} else {
const yt_play = await yts(query);
if (!yt_play || yt_play.all.length === 0) return m.reply('No se encontraron resultados para tu búsqueda.');
video = yt_play.all[0]; videoUrl = video.url;
}
await conn.sendFile(m.chat, video.thumbnail, 'thumbnail.jpg', `╭──❰ *🎶 ESPERA*... ❱──\n│\n├ 📌 *Título:* ${video.title}\n├ ⏱️ *Duración:* ${video.timestamp}\n│\n╰──────────────\n\n📥 *Por favor, espere mientras se genera el audio...*\n\n⇄ㅤ   ◁ㅤ  ❚❚ㅤ   ▷ㅤ   ↻\nsɪɢᴜᴇᴍᴇ ᴘᴀᴘᴜ 🧑‍💻\n👉 https://tinyurl.com/25xfelmv`, m, null, {});
try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`, apiResponse = await fetch(apiUrl), delius = await apiResponse.json();
if (!delius || !delius.status) throw new Error();
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const yt = await youtubedl(videoUrl).catch(async () => await ytdl(videoUrl)), dl_url = yt.audio['128kbps']?.download();
if (!dl_url) throw new Error();
await conn.sendFile(m.chat, dl_url, `${video.title}.mp3`, null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const siputzxUrl = `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(videoUrl)}`, siputzxResponse = await fetch(siputzxUrl), siputzxData = await siputzxResponse.json();
if (!siputzxData.status || !siputzxData.data?.dl) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: siputzxData.data.dl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const ryzenUrl = `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`, ryzenResponse = await fetch(ryzenUrl), ryzenData = await ryzenResponse.json();
if (ryzenData.status === 'tunnel' && ryzenData.url) {
const downloadUrl = ryzenData.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} else {
throw new Error();
}
} catch {
try {
const dorratzUrl = `https://api.dorratz.com/v2/yt-mp3?url=${encodeURIComponent(videoUrl)}`;
await conn.sendMessage(m.chat, { audio: { url: dorratzUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const downloadUrl = await fetch9Convert(videoUrl);
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const downloadUrl = await fetchY2mate(videoUrl);
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' });
} catch {
try {
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${videoUrl}`), audioData = await res.json();
if (!audioData.status || !audioData.result?.downloadUrl) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${videoUrl}`), dp = await d2.json(), audiop = dp.result.media.mp3, fileSize = dp.result.media.mp3_size;
if (!audiop) throw new Error();
if (fileSize > LimitAud) {
await conn.sendMessage(m.chat, { document: { url: audiop }, mimetype: 'audio/mp3', fileName: `${video.title}.mp3` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { audio: { url: audiop }, mimetype: 'audio/mpeg' }, { quoted: m });
}
} catch {
await m.reply('Todas las APIs fallaron. No se pudo procesar tu solicitud.');
}
}
}
}
}
}
}
}
}
break;
*/

case 'cuevana': {
const axios = require('axios');
const cheerio = require('cheerio');

async function buscarPelicula(nombre) {
try {
const url = `https://eliasar-yt-api.vercel.app/api/search/cuevana?name=${encodeURIComponent(nombre)}`;
const response = await axios.get(url);
const data = response.data;

if (!data.status || !data.movie) {
conn.sendMessage(from, { text: `No se encontraron resultados para: ${nombre}` }, { quoted: msg });
return;
}

const pelicula = data.movie;
let imagen;

try {
const googleResponse = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(pelicula.title)}&tbm=isch`, {
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
}
});

const $ = cheerio.load(googleResponse.data);
imagen = $('img').first().attr('src');
} catch (err) {
imagen = null;
}

const mensaje = `
🎬 Título: ${pelicula.title || 'Desconocido'}
📅 Año: ${pelicula.year || 'Desconocido'}
⭐ Calificación: ${pelicula.rating || 'No disponible'}
📖 Sinopsis: ${pelicula.description || 'No disponible'}
🎞️ Género: ${pelicula.genre || 'No disponible'}
👤 Director: ${pelicula.director || 'No disponible'}
📺 Calidad: ${pelicula.quality || 'No disponible'}
`.trim();

if (imagen) {
conn.sendMessage(from, { image: { url: imagen }, caption: mensaje }, { quoted: msg, ephemeralExpiration: 24 * 60 * 1000 });
} else {
conn.sendMessage(from, { text: mensaje }, { quoted: msg });
}
} catch (error) {
conn.sendMessage(from, { text: `Error al buscar la película: ${error.message}` }, { quoted: msg });
}
}

if (!text) {
conn.sendMessage(from, { text: 'Por favor, proporciona el nombre de una película para buscar.' }, { quoted: msg });
} else {
buscarPelicula(text);
}

break;
}

case 'get2': {
if (!isOwner) return;
const url = args[0];
const numSolicitudes = parseInt(args[1], 10);

if (!url || isNaN(numSolicitudes)) {
return m.reply("Uso incorrecto. El comando debe tener el formato: get2 <URL> <Número de solicitudes>");
}

try {
for (let i = 0; i < numSolicitudes; i++) {
await fetch(url)
.then(response => response.text())
.then(body => console.log(`Solicitud ${i + 1} completada.`))
.catch(error => console.error(`Error en la solicitud ${i + 1}:`, error));
}
m.reply(`${numSolicitudes} solicitudes realizadas correctamente a ${url}`);
} catch (error) {
m.reply(`Hubo un error al realizar las solicitudes: ${error.message}`);
}
break;
}

case 'reenviar':
case 'forward': {
if (!m.quoted) return m.reply('Responde al mensaje que deseas reenviar.');
try {
const messageContent = m.quoted.message;
const options = { quoted: m };
await conn.sendMessage(m.chat, messageContent, options);
} catch (error) {
m.reply('Hubo un error al intentar reenviar el mensaje.');
console.error(error);
}
break;
}

//stickers   
case 's':
case 'sticker':
case 'wm':
case 'take':
case 'attp':
case 'dado':
case 'qc':
stickers(m, command, conn, mime, quoted, args, text, lolkeysapi, fkontak)
break

case 'alguien': {
let vid = 'https://telegra.ph/file/c3a28b6aeb99383c68847.mp4'
conn.sendMessage(m.chat, {
video: {
url: vid
},
caption: ``
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
}
break

case 'naturaleza': {
let vid = 'https://telegra.ph/file/a571af10458cb8eff9e0e.mp4'
conn.sendMessage(m.chat, {
video: {
url: vid
},
caption: ``
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
}
break

case 'coco': {
let vid = 'https://telegra.ph/file/c6a0c80f45b148f725d54.mp4'
conn.sendMessage(m.chat, {
video: {
url: vid
},
caption: ``
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
}
break

case 'webadas': {
let vid = 'https://telegra.ph/file/e84ee5546903a1b472626.mp4'
conn.sendMessage(m.chat, {
video: {
url: vid
},
caption: ``
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
}
break

case 'rie': {
let vid = 'https://telegra.ph/file/22f7b8d9472becee6a169.mp4'
conn.sendMessage(m.chat, {
video: {
url: vid
},
caption: ``
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
}
break

case 'bin': {
if (!isPrems) return m.reply(info.premium)
if (!text) return m.reply(`⚠️Ingrese el número BIN\n*🔐 Algunos bin disponible :*\n• ${prefix + command} 539083\n• ${prefix + command} 464622\n• ${prefix + command} 464625\n• ${prefix + command} 464627`);

axios.get(`https://venomweb.site/apisfree/tipo/bin?query=${text}`).then(response => {
const data = response.data.data;
const bin = `🔐 Bin: ${data.bin}\n• País: ${data.pais}\n• Tipo: ${data.tipo}\n• Nivel: ${data.nivel}\n• Banco: ${data.banco}\n• tarjeta: ${data.bandeira}\n• Temporal: ${data.tempo_resposta}\n> ${data.code}`;
m.reply(bin);
}).catch(error => {
console.log(error);
m.reply('Ocurrió un error al consultar la API');
})
}
break;
case 'addowner': {
if (!isCreator) return reply(info.owner)
const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
if (!who) return conn.sendTextWithMentions(m.chat, `⚠️ Uso incorrecto del comando.*\n\n*❥ Ejemplo:* ${prefix + command} @0`);
const nuevoNumero = who;
global.owner.push([nuevoNumero]);
await m.reply('⚠️ *Nuevo número agregado con éxito a la lista de owners.*')
}
break;

case 'delowner': {
if (!isCreator) return reply(info.owner)
const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
const numeroAEliminar = who;
const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
if (index !== -1) {
global.owner.splice(index, 1);
await m.reply('*[❗] El número fue eliminado con éxito de la lista de owners.*');
} else {
await m.reply('*[❗] El número ingresado no existe en la lista de owners.*');
}
}
break;

//idiomas 
case 'idioma':
case 'Language':
case 'idiomas': {
let user = global.db.data.users[m.sender];
if (!text) {
return conn.sendButton(
m.chat,
lenguaje.AvisoMG(),
lenguaje.idioma(prefix),
null,
[
['𝐄𝐒𝐏𝐀𝐍̃𝐎𝐋', '.idioma1']
],
null,
null,
m
);
}

try {
if (budy.includes(`1`)) {
idioma = 'es';
idiomas = 'español';
} else {
// Si el input no es `1`, puedes manejar el caso en el que se devuelve un mensaje de error o una advertencia.
m.reply('Por el momento solo contamos con español');
return;
}

user.Language = idioma;
m.reply(lenguaje.idioma2() + idiomas);
} catch (e) {
m.reply(lenguaje.AvisoMG() + lenguaje.idioma(prefix));
}
}
break;

case 'nowa': {
let regex = /x/g
if (!text) m.reply(`*Ejemplo de uso:* ${prefix + command} 12568795xxx.`)
//if (!text.match(regex)) m.reply(`*Ejemplo de uso: ${prefix + command} 521999340434x*`) 
let random = text.match(regex).length,
total = Math.pow(10, random),
array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch(_ => {})
array.push({
exists: true,
jid: result,
...info
})
} else {
array.push({
exists: false,
jid: result
})
}
}
let txt = '*[ ＲＥＧＩＳＴＲＡＤＯＳ ]*\n\n' + array.filter(v => v.exists).map(v => `• *Número:* wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'Sin descripcion'}\n*• Fecha:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*[ ＮＯ ＲＥＧＩＳＴＲＡＤＯＳ ]*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
m.reply(txt)

function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
timeZone: 'Asia/Jakarta'
})
}
}
break

case 'addprem': {
if (!isCreator) return reply(info.owner)
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) return m.reply(`⚠️ Etiqueta al usuario\n\n*• Ejemplo:*\n${prefix + command} @tag`)
if (global.premium.includes(who.split`@` [0])) return m.reply('⚠️ El usuario Mensionado Ya es premium')
global.premium.push(`${who.split`@`[0]}`)

conn.sendTextWithMentions(m.chat, `[ ✅ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ✅ ]

@${who.split`@`[0]} ahora te conviertes en un usuario premium`)
}
break

case 'delprem': {
if (!isCreator) return reply(info.owner)
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
let user = global.db.data.users[who]
if (!who) return m.reply(`⚠️ Etiqueta al usuario\n\n*• Ejemplo:*\n${prefix + command} @tag`)
if (!global.premium.includes(who.split`@` [0])) return m.reply('✳️ El usuario no es Premium')
let index = global.premium.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.premium.splice(index, 1)
conn.sendTextWithMentions(m.chat, `@${who.split('@')[0]} Dejarte de ser un usuarios premium`, m)
}
break

case 'listprem': {
if (!isCreator) return reply(info.owner)
let prem = global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
let teks = `*[ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ]*\n─────────────\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
conn.sendTextWithMentions(m.chat, teks)
}
break

//propietario/owner
case 'bcgc':
case 'bcgroup':
case 'bc':
case 'broadcast':
case 'bcall':
case 'block':
case 'bloquear':
case 'unblock':
case 'desbloquear':
case 'setcmd':
case 'addcmd':
case 'delcmd':
case 'listcmd':
case 'añadirdiamantes':
case 'dardiamantes':
case 'addlimit':
case 'añadirxp':
case 'addexp':
case 'addxp':
case 'fetch':
case 'get':
case 'fotobot':
case 'nuevafoto':
case 'seppbot':
case 'botname':
case 'nuevonombre':
case 'namebot':
case 'banuser':
case 'unbanuser':
case 'backup':
case 'respaldo':
case 'copia':
owner(isCreator, m, command, conn, text, delay, fkontak, store, quoted, sender, mime, args)
break
case 'id': {
m.reply(from)
}
break
case 'getcase':
if (!isCreator) return reply(info.owner)
if (!text) return m.reply(`*Que comando esta buscando o que?*`)
try {
bbreak = 'break'
reply('case ' + `'${args[0]}'` + fs.readFileSync('./main.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak)
} catch (err) {
console.error(err)
reply(`Error, tal vez no existe el comando`)
}
break
case 'public':
case 'publico': {
if (!isCreator) return reply(info.owner)
conn.public = true
m.reply(lenguaje.owner.text24)
}
break
case 'self':
case 'privado': {
if (!isCreator) return reply(info.owner)
conn.public = false
m.reply(lenguaje.owner.text25)
}
break
case 'autoadmin':
case 'tenerpoder': {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isCreator) return reply(info.owner)
reply(`${pickRandom(['Ya eres admin mi jefe 😎', '*LISTO YA ERES ADMIN MI PROPIETARIO/DESARROLLADO 😎*'])}`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
break
case 'leave': {
if (!isCreator) return reply(info.owner)
reply(lenguaje.owner.text26)
await delay(3 * 3000)
await conn.groupLeave(m.chat)
}
break
case 'update':
if (!isCreator) return reply(info.owner)
try {
let stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))
await m.reply(stdout.toString())
} catch {
let updatee = execSync('git remote set-url origin https://github.com/Eliasar54/ansi-BOT-MD && git pull')
await m.reply(updatee.toString())
}
break
case 'reiniciar':
case 'restart':
if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
if (!isPrems) return m.reply(info.premium)
m.reply(lenguaje.owner.text28)
sleep(5000)
process.send('reset')
break
/////////////////////////////////   

//--------------------[ FUNCIONES ]-----------------------  
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

function isNumber(x) {
return !isNaN(x)
}

//-------------------[ AUDIO/TEXTOS ]----------------------
default:
if (/^Buenos Dias|buenos dias|Bueno dias|Buenos dias$/i.test(budy)) {
conn.sendPresenceUpdate('composing', m.chat)
const vn = 'https://qu.ax/VrnK.mp3';
let or = ['texto', 'audio'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'texto')
m.reply(`${pickRandom(['Buenos Dias trolos de mierda', '*Buen dias mi amor 😘*', '*Buenos Dias hermosa mañana verdad 🥰*'])}`)
if (media === 'audio')
conn.sendAudio(m.chat, vn, m)
}
if (budy.includes(`Autodestruction`)) {
//let e = fs.readFileSync('./src/autodestruction.webp')
let e = 'https://qu.ax/gCQo.webp'
let or = ['texto', 'sticker'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'texto')
m.reply('*Mi jefe no me quiere 😢*')
if (media === 'sticker')
conn.sendFile(m.chat, e, 'sticker.webp', '', m, true, {
contextInfo: {
forwardedNewsletterMessageInfo: {
newsletterJid: '120363296103096943@newsletter',
serverMessageId: '',
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨'
},
forwardingScore: 9999999,
isForwarded: true,
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: 'ᶜ ᴬᵘᵗᵒᵈᵉˢᶜʳᵘʸᵉ',
mediaType: 2,
sourceUrl: nna,
thumbnail: imagen1
}
}
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
}
if (/^Hola|Bien|Chido|Genial|Amigo|Gracias|Ok|Nosvemos|Todobien|Aca|Mañana|Listo|Dale|Perfecto|Tranquilo|Vamos|Súper|Jajaja|Wey|Venga|Avisame|Meavisas|Quéhaces|Reenvía|Estábien|Cualquiera|Telamo|Yotecuento|Estacool|Sí|No|Cuéntame|Claro|Dime|Llamame|Avísame|Teespero|Nosvemosluego|Teaviso|Ahorita|Luego|Ahoray|Pronto|Chévere|Tome|Vale|Bacán|Mande|Pásame|Metele|Dame|Aventamos|Llevo|Déjale|Éxito|Sigue|Muevelo|Póntelo|Dámelo|Tomalo|Ya|Ahí|Okidoki|Mevoy|Tú|Yo|Vamosallá|Vamosadelante|Dímelo|Nohayproblema|Estábien|Esto|Yame|Vas|Quéopinas|Listo|Órale|Chequea|Tecuento|Decime|Miércoles|Viernes|Domingo|Lunes|Sábado|Martes|Bienvenido|Pasala|Mándame|Revisa|Juega|Ven|Estaba|Túme|Vamo|Llamame|Teinvito|Viendo|Dimeya|Mueve|Seguro|Confirmo|Ala|Arriba|Bajo|Tevendo|Vistes|Cuentameya|Loquiero|Vamos|Lohablamos|Xd|Jaja|Jsjsjs|Tqm|Teamo|Tirate|Chingón|Pinche|Puto|Pendejo|Cabrón|Jodido|Hijo de puta|Mierda|Vergas|Culo|Joder|Cojon|Bitch|Perra$/i.test(budy)) {
if (!global.db.data.chats[m.chat].reaccion) return
m.react(`${pickRandom(["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶‍🌫️", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🫢", "🫡", "🤫", "🫠", "🤥", "😶", "🫥", "😐", "🫤", "😑", "🫨", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮‍💨", "😵", "😵‍💫", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👺", "🤡", "💩", "👻", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🫶", "👍", "✌️", "🙏", "🫵", "🤏", "🤌", "☝️", "🖕", "🙏", "🫵", "🫂", "🐱", "🤹‍♀️", "🤹‍♂️", "🗿", "✨", "⚡", "🔥", "🌈", "🩷", "❤️", "🧡", "💛", "💚", "🩵", "💙", "💜", "🖤", "🩶", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "🏳️‍🌈", "👊", "👀", "💋", "🫰", "💅", "👑", "🐣", "🐤", "🐈"])}`)
}
if (budy.includes(`Avisos`) || budy.includes(`Atencion`)) {
m.react(`${pickRandom(['📢', '👀', '⚠️'])}`)
}
/* if (budy.includes(`Bot`) || budy.includes(`simi`)) {
game(m, budy, command, text, pickRandom, pushname, conn, participants, sender, who, body, sendImageAsUrl)
}

if (m.mentionedJid.includes(conn.user.jid) || (m.quoted && m.quoted.sender === conn.user.jid)) {
await conn.sendPresenceUpdate('composing', m.chat)

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error('Error al obtener:', error);
}
}


let query = m.text;
let username = `${m.pushName}`;
let syms1 = await fetch('https://raw.githubusercontent.com/Eliasar54/ansi-BOT-MD/refs/heads/main/src/text-chatgpt.txt').then(v => v.text());

let result = await luminsesi(query, username, syms1)
if (result && result.trim().length > 0) {
await conn.sendTextWithMentions(m.chat, result, m)
}
}
if (m.mentionedJid.includes(conn.user.jid)) {
let noetiqueta = 'https://qu.ax/lqFC.webp'
let or = ['texto', 'sticker']; 
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker')     
conn.sendFile(m.chat, noetiqueta, 'sticker.webp', '',m, true, { contextInfo: { forwardedNewsletterMessageInfo: { newsletterJid: '120363296103096943@newsletter', serverMessageId: '', newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, forwardingScore: 9999999, isForwarded: true, 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'Yo que?', mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto')
await conn.sendMessage(m.chat, {text: `${pickRandom(['*QUE YO QUE?*', 'Que?'])}`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}*/

if (budy.includes(`Yaoi`)) {
m.react(`${pickRandom(['😐', '👀', '😹'])}`)
m.reply(`${pickRandom(['Que mamada? vete a estudiar mejor', 'Soy un bot hetero, no pida mamada (︶｡︶)zzZ '])}`)
}
if (budy.startsWith(`a`)) {
if (!global.db.data.chats[m.chat].audios) return
let vn = './media/a.mp3'
await conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {
audio: {
url: vn
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
}
if (budy.startsWith(`hola`) || budy.startsWith(`hello`)) {
let vn = 'https://qu.ax/eGdW.mp3'
let stic = 'https://qu.ax/LTVf.webp'
let stic2 = 'https://qu.ax/QftU.webp'
let or = ['sticker', 'audio'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') conn.sendFile(m.chat, pickRandom([stic, stic2]), 'sticker.webp', '', m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `Hola ${pushname}`,
mediaType: 2,
sourceUrl: nna,
thumbnail: imagen1
}
}
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
if (media === 'audio') conn.sendAudio(m.chat, vn, m)
}
if (/^Fino señores|fino señores|Fino senores|fino senores|Fino🧐|🧐🍷|🧐🍷$/i.test(budy)) {
let s = 'https://qu.ax/DbMX.webp'
let s2 = 'https://qu.ax/zXa.webp'
let vn = 'https://qu.ax/hapR.mp3'
let or = ['sticker', 'audio'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') conn.sendFile(m.chat, pickRandom([s, s2]), 'sticker.webp', '', m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: wm,
mediaType: 2,
sourceUrl: nna,
thumbnail: imagen1
}
}
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
if (media === 'audio') conn.sendAudio(m.chat, vn, m)
}
if (/^anadieleimporta|a nadie le importa|y que|no importa|literal$/i.test(budy)) {
let s = 'https://qu.ax/SHgM.webp'
let s2 = 'https://qu.ax/glpp.webp'
let vn = 'https://qu.ax/JocM.mp3'
let or = ['sticker', 'audio'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') conn.sendFile(m.chat, pickRandom([s, s2]), 'sticker.webp', '', m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: wm,
mediaType: 2,
sourceUrl: nna,
thumbnail: imagen1
}
}
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
if (media === 'audio') conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Feliz cumpleaños`)) {
const vn = 'https://qu.ax/UtmZ.mp3'
conn.sendAudio(m.chat, vn, m)
m.react(`${pickRandom(['🥳', '💫', '🎊'])}`)
}
if (budy.startsWith(`Feliz navidad`) || budy.startsWith(`Merry Christmas`) || budy.startsWith(`feliz navidad`)) {
const vn = 'https://qu.ax/XYyY.m4a'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Vete a la verga`)) {
const vn = 'https://qu.ax/pXts.mp3';
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Uwu`)) {
const vn = 'https://qu.ax/lOCR.mp3';
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Siuuu`)) {
const vn = 'https://qu.ax/bfC.mp3';
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Pasa pack`)) {
const vn = 'https://qu.ax/KjHR.mp3';
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Audio hentai`)) {
const vn = 'https://qu.ax/GSUY.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Pasen porno`)) {
const vn = 'https://qu.ax/JDZB.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`VAMOOO`)) {
const vn = 'https://qu.ax/XGAp.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Hora del sexito`)) {
const vn = 'https://qu.ax/Jpjm.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Cuentate un chiste`)) {
const vn = 'https://qu.ax/MSiQ.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Admin party`)) {
const vn = 'https://qu.ax/MpnG.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Fiesta del admin`)) {
const vn = 'https://qu.ax/jDVi.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Viernes`)) {
const vn = 'https://qu.ax/wqXs.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`:v`)) {
const vn = 'https://qu.ax/cxDg.mp3'
const stic = 'https://qu.ax/ahLV.webp'
let or = ['sticker', 'audio'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') conn.sendFile(m.chat, stic, 'sticker.webp', '', m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `${pushname}`,
mediaType: 2,
sourceUrl: md,
thumbnail: imagen1
}
}
}, {
quoted: m,
ephemeralExpiration: 24 * 60 * 100,
disappearingMessagesInChat: 24 * 60 * 100
})
if (media === 'audio') conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`La toca 7w7`)) {
const vn = 'https://qu.ax/Payh.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Quien es tu sempai botsito`)) {
const vn = 'https://qu.ax/likr.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Me gimes 7u7`)) {
const vn = 'https://qu.ax/kebK.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Te amo botsito uwu`)) {
const vn = 'https://qu.ax/tEpE.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Onichan`)) {
const vn = 'https://qu.ax/oZj.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Pasen sexo`)) {
const vn = 'https://qu.ax/xJMQ.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Paraguayo`)) {
const vn = 'https://qu.ax/wTxz.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Venezolano`)) {
const vn = 'https://qu.ax/hXh.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Gaspi corte`)) {
const vn = 'https://qu.ax/vYSf.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Gaspi buenos dias`)) {
const vn = 'https://qu.ax/kEsc.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Enano`)) {
const vn = 'https://qu.ax/XRgo.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Buenas noches`)) {
const vn = 'https://qu.ax/GSuP.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Peruano`)) {
const vn = 'https://qu.ax/avLe.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Alto temazo`)) {
const vn = 'https://qu.ax/SWYV.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`GOOOOD`)) {
const vn = 'https://qu.ax/wlJD.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Ya me voy a dormir`)) {
const vn = 'https://qu.ax/jeKb.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Calefon`)) {
const vn = 'https://qu.ax/UeXx.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Bot de mierda`)) {
const vn = 'https://qu.ax/oZfD.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Apurate bot`)) {
const vn = 'https://qu.ax/slhL.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Un chino`)) {
const vn = 'https://qu.ax/zfBR.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`No funciona`)) {
const vn = 'https://qu.ax/BEnA.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Boliviano`)) {
const vn = 'https://qu.ax/KsCp.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Corte`)) {
const vn = 'https://qu.ax/glrC.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Gaspi me saludas`)) {
const vn = 'https://qu.ax/xZRW.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Gaspi y las minitas`)) {
const vn = 'https://qu.ax/wYil.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Gaspi todo bien`)) {
const vn = 'https://qu.ax/MSpr.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Me quiero suicidar`)) {
const vn = 'https://qu.ax/ksFd.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Gaspi ya no aguanto`)) {
const vn = 'https://qu.ax/gNwU.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Contate algo bot`)) {
const vn = 'https://qu.ax/cFnb.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Sexo`)) {
const vn = 'https://qu.ax/VZYF.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Pongan cuties`)) {
const vn = 'https://qu.ax/cDFj.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Momento epico`)) {
const vn = 'https://qu.ax/pDNC.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`El bot del orto no funciona`)) {
const vn = 'https://qu.ax/STib.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Epicardo`)) {
const vn = 'https://qu.ax/FTaB.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Insta de la minita`)) {
const vn = 'https://qu.ax/JYh.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Una mierda de bot`)) {
const vn = 'https://qu.ax/keKg.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Ultimo momento`)) {
const vn = 'https://qu.ax/tleA.mp3'
conn.sendAudio(m.chat, vn, m)
}
if (budy.startsWith(`Nefasto`)) {
const vn = 'https://qu.ax/MaJu.mp3'
conn.sendAudio(m.chat, vn, m)
}


//--------------------[ OWNER ]-----------------------     
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(info.owner)
try {
return m.reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
} catch (e) {
e = String(e)
m.reply(e)
}
}
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
return m.reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))
} catch (e) {
e = String(e)
m.reply(e)
}
}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply(info.owner)
try {
return m.reply(String(execSync(budy.slice(2), {
encoding: 'utf-8'
})))
} catch (err) {
console.log(util.format(err))

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}

//--------------------[ REPORTE/ERRORS ]-----------------------     
let e = String(err)
conn.sendMessage("50582382653@s.whatsapp.net", {
text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲\n\n" + util.format(e),
contextInfo: {
forwardingScore: 9999999,
isForwarded: false
}
})
process.on('uncaughtException', function(err) {
console.log('Caught exception: ', err)
})
}
}
}
}

//--------------------[ UPDATE/CONSOLA ]-----------------------     

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
