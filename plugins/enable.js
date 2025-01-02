require('../main.js') 
const fs = require("fs") 
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 

async function enable(m, command, isGroupAdmins, text, command, args, conn, isBotAdmins, isGroupAdmins, isCreator) {
//if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
//let user = global.db.data.users[m.sender]
const {welcome, antiFake, antiArabe, detect, autosticker, antiNsfw, game2, modeadmin, chatbot, audios, autolevelup, antitoxic, antiprivado, anticall, antilink2, AntiTiktok, AntiTelegram, viewonce, AntiFacebook, AntInstagram, AntiYoutube, AntiTwitter, autoread} = global.db.data.chats[m.chat];
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
  let isAll = false, isUser = false
  
if (command == 'enable' || command == 'configuracion' || command == 'configurar') {
m.reply(`─━━━━━━━━⊱✿⊰━━━━━━━━─
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃_𝗮𝗾𝘂𝗶 𝘁𝗶𝗲𝗻𝗲 𝗹𝗮𝘀 𝗹𝗶𝘀𝘁𝗮 𝗽𝗮𝗿𝗮 𝗮𝗰𝘁𝗶𝘃𝗮 𝘆 𝗱𝗲𝘀𝗮𝗰𝘁𝗶𝘃𝗮𝗿_
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃ッ _#𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙤𝙣_
┃ッ _#𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙤𝙛𝙛_
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━🇳🇮 GRUPOS 🇳🇮━━━━━
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃➜ _${prefix}welcome on/off_
┃➜ _${prefix}antilink on/off_
┃➜ _${prefix}antilink2 on/off_
┃➜ _${prefix}AntiTiktok on/off_
┃➜ _${prefix}AntiTelegram on/off_
┃➜ _${prefix}AntiFacebook on/off_
┃➜ _${prefix}AntiYoutube on/off_
┃➜ _${prefix}AntiTwitter on/off_
┃➜ _${prefix}antiFake on/off_
┃➜ _${prefix}antiArabe on/off_
┃➜ _${prefix}game2 on/off_
┃➜ _${prefix}antitoxic on/off_
┃➜ _${prefix}autolevelup on/off_
┃➜ _${prefix}antiNsfw on/off_
┃➜ _${prefix}autolevelup on/off_
┃➜ _${prefix}detect on/off_
┃➜ _${prefix}modoadmin on/off_
┃➜ _${prefix}audios on/off_
┃➜ _${prefix}autosticker on/off_
┃➜ _${prefix}reaccion on/off_
┃➜ _${prefix}viewonce on/off_
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃ *⚠️ OPCIONES DE PROPIETARIO*
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃➜ _${prefix}modojadibot on/off_
┃➜ _${prefix}antiprivado on/off_
┃➜ _${prefix}autoread on/off_
┃➜ _${prefix}anticall on/off_
┃➜ _${prefix}autoread on/off_
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┗━━━━ ≪ •❈• ≫ ━━━━┛`) 
}

if (command == 'welcome' || command == 'bienvenida') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`) 
//if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].welcome = true
//conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].welcome = false
//conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antilink' || command == 'antienlace') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`) 
// m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antilink = true
m.reply(lenguaje.enable.text3)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antilink = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antifake' || command == 'antiFake') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiFake = true
//conn.sendButton(m.chat, `*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero fake (virtuales), seran explusado automáticamente del Grupo...*`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero fake (virtuales), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiFake = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antiarabe' || command == 'antiArabe') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiArabe = true
//conn.sendButton(m.chat, `*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero arabe (+212, +91, +92, etc), seran explusado automáticamente del Grupo...*\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero arabe (+212, +91, +92, etc), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiArabe = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antiviewonce') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].viewonce = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].viewonce = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antitoxic') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antitoxic = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antitoxic = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'autodetect' || command == 'detect') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].detect = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].detect = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'audios') {
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].audios = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].audios = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'autosticker' || command == 'stickers') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].autosticker = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autosticker = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'modocaliente' || command == 'antinsfw') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiNsfw = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiNsfw = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'game2') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].game2 = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].game2 = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'modoadmin' || command == 'soloadmin' || command == 'modoadmins') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") { 
global.db.data.chats[m.chat].modeadmin = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].modeadmin = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antiprivado') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.settings[numBot].antiprivado = true
//conn.antiprivado = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].antiprivado = false
//conn.antiprivado = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antipv') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.settings[numBot].antipv = true
//conn.antiprivado = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].antipv = false
//conn.antiprivado = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}
       
if (command == 'anticall' || command == 'antillamada') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.settings[numBot].anticall = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].anticall = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'modojadibot' || command == 'jadibot') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].jadibot = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].jadibot = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autoread' || command == 'autovisto') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.settings[conn.user.jid].autoread = false
//conn.autoread = false
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.settings[conn.user.jid].autoread = true
//conn.autoread = true
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antispam') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antispam = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antispam = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'chatbot' || command == 'simsimi') {
//if (!m.isGroup) return m.reply(info.group)
//if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].simi = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].simi = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'reaccion' || command == 'reacciónes' || command == 'desactivar' || command == 'antireaciones' || command == 'antireac') {
//if (!m.isGroup) return m.reply(info.group)
//if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].reaccion = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].reaccion = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'autolevelup' || command == 'autonivel') {
if (!m.isGroup) return m.reply(info.group)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].autolevelup = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autolevelup = false
m.reply(`❌ *${command}* ${lenguaje.enable.text2}`)
}}}

module.exports = { enable }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
