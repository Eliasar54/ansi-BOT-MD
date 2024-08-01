require('../main.js') 
const fs = require("fs") 
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 

async function enable(m, command, isGroupAdmins, text, command, args, conn, isBotAdmins, isGroupAdmins, isCreator) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
//let user = global.db.data.users[m.sender]
const {welcome, antilink, antiFake, antiArabe, detect, autosticker, antiNsfw, game2, modeadmin, chatbot, audios, autolevelup, antitoxic, antiprivado, anticall, antilink2, AntiTiktok, AntiTelegram, viewonce, AntiFacebook, AntInstagram, AntiYoutube, AntiTwitter, autoread} = global.db.data.chats[m.chat];
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
  let isAll = false, isUser = false
  
if (command == 'enable' || command == 'configuracion' || command == 'configurar') {

let listSections = []    
listSections.push({
title: '『 FUNCIÓN PARA ADMINS 』',
rows: [{ header: `𝐖𝐄𝐋𝐂𝐎𝐌𝐄 ${welcome ? '✅' : '❌'}`, title: "", id: `.welcome on`, description: `ᵈᵃʳ ˡᵃ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒ ᵐᶦᵉᵐᵇʳᵒˢ\n` }, 
{ header: `𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 ${antilink ? '✅' : '❌'}`, title: "", id: `.antilink on`, description: `ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵃ ˡᶦⁿᵏˢ ᵈᵉ́ ᵒᵗʳᵒˢ ᵍʳᵘᵖᵒˢ\n` },
{ header: `𝐓𝐎𝐃𝐎𝐒 𝐋𝐎𝐒 𝐋𝐈𝐍𝐊 ${antilink2 ? '✅' : '❌'}`, title: "", id: `.antilink2 on`, description: `ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᶜᵘᵃˡᵠᵘᶦᵉʳ ˡᶦⁿᵏ ᵠᵘᵉ ᶜᵒⁿᵗᵉⁿᵍᵃⁿ https/\n` }, 
{ header: `𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄 𝐓𝐈𝐊𝐓𝐎𝐊 ${AntiTiktok ? '✅' : '❌'}`, title: "", id: `.AntiTiktok on`, description: `ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᵀᶦᵏᵀᵒᵏ\n` }, 
{ header: `𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄 𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 ${AntiTelegram ? '✅' : '❌'}`, title: "", id: `.AntiTelegram on`, description: `ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᵀᵉˡᵉᵍʳᵃᵐ\n` }, 
{ header: `𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 ${AntiFacebook ? '✅' : '❌'}`, title: "", id: `.AntiFacebook on`, description: `ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᶠᵃᶜᵉᵇᵒᵒᵏ\n` }, 
{ header: `𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 ${AntInstagram ? '✅' : '❌'}`, title: "", id: `.AntInstagram on`, description: `ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᴵⁿˢᵗᵃᵍʳᵃᵐ\n` }, 
{ header: `𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 ${AntiYoutube ? '✅' : '❌'}`, title: "", id: `.AntiYoutube on`, description: `ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ʸᵒᵘᵀᵘᵇᵉ\n` }, 
{ header: `𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄 𝐓𝐖𝐈𝐓𝐄𝐑 ${AntiTwitter ? '✅' : '❌'}`, title: "", id: `.AntiTwitter on`, description: `ᵉˣᵖᵘˡˢᵃ ᵃ ˡᵒˢ ᵠᵘᵉ ᵐᵃⁿᵈᵉ ᵃˡᵍᵘⁿ ˡᶦⁿᵏ ᵈᵉ ᵀʷᶦᵗᵉʳ\n` }, 
{ header: `𝐀𝐍𝐓𝐈𝐅𝐀𝐊𝐄 ${antiFake ? '✅' : '❌'}`, title: "", id: `.antiFake on`, description: `ᶦⁿᵍʳᵉˢᵒ ᵈᵉ ⁿᵘᵐᵉʳᵒ ᶠᵃᵏᵉ (ᵛᶦʳᵗᵘᵃˡᵉˢ), ˢᵉʳᵃⁿ ᵉˣᵖˡᵘˢᵃᵈᵒ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ ᵈᵉˡ ᴳʳᵘᵖᵒ...\n` }, 
{ header: `𝐀𝐍𝐓𝐈-𝐀𝐑𝐀𝐁𝐄 ${antiArabe ? '✅' : '❌'}`, title: "", id: `.antiArabe on`, description: `ᶦⁿᵍʳᵉˢᵒ ᵈᵉ ⁿᵘᵐᵉʳᵒ ᵃʳᵃᵇᵉ (+212, +91, +92, ᵉᵗᶜ), ˢᵉʳᵃⁿ ᵉˣᵖˡᵘˢᵃᵈᵒ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ ᵈᵉˡ ᴳʳᵘᵖᵒ...\n` }, 
{ header: `𝐀𝐍𝐓𝐈-𝐓𝐎𝐗𝐈𝐂 ${antitoxic ? '✅' : '❌'}`, title: "", id: `.antitoxic on`, description: `ᴰᵉᵗᵉᶜᵗᵃ ˡᵃ ᵐᵃˡᵃˢ ᵖᵃˡᵃᵇʳᵃˢ ʸ ᵃᵈᵛᶦᵉʳᵗᵉ ᵃˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ del ᵍʳᵘᵖᵒ, ᵃⁿᵗᵉˢ ᵈᵉ ˢᵉʳ ᵉˡᶦᵐᶦⁿᵃᵈᵒ\n` }, 
{ header: `𝐆𝐀𝐌𝐄 ${game2 ? '✅' : '❌'}`, title: "", id: `.game2 on`, description: `ᵃᶜᵗᶦᵛᵃʳ/ᵈᵉˢᵃᶜᵗᶦᵛᵃʳ ᵉˡ ʲᵘᵉᵍᵒ ᵈᵉ ˡᵃ ʳᵘˡᵉᵗᵃ ʳᵘˢᵃ\n` }, 
{ header: `𝐃𝐄𝐓𝐄𝐂𝐓𝐎 ${detect ? '✅' : '❌'}`, title: "", id: `.detect on`, description: `ᵈᵉᵗᵉᶜᵗᵃʳ ⁿᵒᵗᶦᶠᶦᶜᵃᶜᶦᵒⁿᵉˢ ᵈᵉ ᵃᵛᶦˢᵒ ᵉˡ ᵍʳᵘᵖᵒ.\n` }, 
{ header: `𝐀𝐔𝐓𝐎-𝐒𝐓𝐈𝐂𝐊𝐄𝐑 ${autosticker ? '✅' : '❌'}`, title: "", id: `.autosticker on`, description: `ᶜʳᵉᵃʳ ˢᵗᶦᶜᵏᵉʳˢ ᵈᵉ ᵐᵃⁿᵉʳᵃ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃ ˢᶦⁿ ᵖᵒⁿᵉʳ ⁿᶦⁿᵍᵘⁿ ᵖʳᵉᶠᶦʲᵒ ˢᵒˡᵒ ᵉⁿᵛᶦᵃʳ ˡᵃ ᶦᵐᵃᵍᵉⁿ/ᵛᶦᵈᵉᵒ.\n` }, 
{ header: `𝐌𝐎𝐃𝐎 +𝟏𝟖 ${antiNsfw ? '✅' : '❌'}`, title: "", id: `.antiNsfw on`, description: `ᵃᶜᵗᶦᵛᵃʳ ˡᵒˢ ᶜᵒⁿᵗᵉⁿᶦᵈᵒˢ +18\n` }, 
{ header: `𝐀𝐔𝐃𝐈𝐎𝐒 ${audios ? '✅' : '❌'}`, title: "", id: `.audios on`, description: `ᴬᶜᵗᶦᵛᵃʳ ˡᵒˢ ᵃᵘᵈᶦᵒˢ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵒ..\n` }, 
{ header: `𝐀𝐔𝐓𝐎-𝐋𝐄𝐕𝐄𝐋𝐔𝐏 ${autolevelup ? '✅' : '❌'}`, title: "", id: `.autolevelup on`, description: `ᵃᶜᵗᶦᵛᵃʳ ᵖᵃʳᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦᵛᵉˡ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ.\n` }, 
{ header: `𝐂𝐇𝐀𝐓𝐁𝐎𝐓 ${chatbot ? '✅' : '❌'}`, title: "", id: `.chatbot on`, description: `ᴱˡ ᵇᵒᵗ ᵉᵐᵖᵉᶻᵃʳ ᵃ ʰᵃᵇˡᵃʳ ᶜᵒⁿ ᵗᵒᵈᵒˢ ᵉˡ ᵍʳᵘᵖᵒ. \n` }, 
{ header: `𝐀𝐍𝐓𝐈-𝐕𝐈𝐄𝐖𝐎𝐍𝐂𝐄 ${viewonce ? '✅' : '❌'}`, title: "", id: `.viewonce on`, description: `ᵃᶜᵗᶦᵛᵃʳ/ᵈᵉˢᵃᶜᵗᶦᵛᵃʳ ᵖᵃʳᵃ ᵠᵘᵉ ˡᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ⁿᵒ ᵒᶜᵘˡᵗᵃʳ ᶦᵐᵃᵍᵉⁿ/ᵛᶦ́ᵈᵉᵒ ᵉⁿ ᵛᶦᵉʷᵒⁿᶜᵉ\n` }, 
{ header: `𝐌𝐎𝐃𝐎𝐀𝐃𝐌𝐈𝐍𝐒 ${modeadmin ? '✅' : '❌'}`, title: "", id: `.modeadmin on`, description: `ᵉˡ ᵇᵒᵗ ˢᵒˡᵒ ᶠᵘⁿᶜᶦᵒⁿᵃ ᵖᵃʳᵃ ˡᵒˢ ᵃᵈᵐᶦⁿˢ ᵈᵉˡ ᴳʳᵘᵖᵒ\n` }, 
{ header: `『 FUNCIÓN SOLO PARA OWNER 』\n`, title: `𝐀𝐍𝐓𝐈-𝐏𝐑𝐈𝐕𝐀𝐃𝐎 ${antiprivado ? '✅' : '❌'}`, id: `.antiprivado on`, description: `ᴱˡ ᵇᵒᵗ ᵇˡᵒᵠᵘᵉʳᵃ́ ᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵠᵘᵉ ᵘˢᵉⁿ ᶜᵒᵐᵃⁿᵈᵒ ᵉˡ ᵖʳᶦᵛᵃᵈᵒ\n` }, 
{ header: `𝐀𝐍𝐓𝐈-𝐋𝐋𝐀𝐌𝐀𝐃𝐀 ${anticall ? '✅' : '❌'}`, title: "", id: `.anticall on`, description: `ᴱˡ ᴮᵒᵗ ᵇˡᵒᵠᵘᵉʳᵃ́ ᵃ ˡᵃˢ ᵖᵉʳˢᵒⁿᵃˢ ᵠᵘᵉ ˡˡᵃᵐᵉⁿ ᵃˡ ᴮᵒᵗ.\n` }, 
{ header: `𝐀𝐔𝐓𝐎𝐑𝐄𝐀𝐃 ${autoread ? '✅' : '❌'}`, title: "", id: `.autoread on`, description: `ᴹᵃʳᶜᵃ ᶜᵒᵐᵒ ˡᵉᶦᵈᵒ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ʸ ˡᵒˢ ᵉˢᵗᵃᵈᵒˢ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ.\n` }
            ]
        });

conn.sendList(m.chat, `━━━━▣━━◤ANSI◢━━▣━━━━━
║◤━━━━━ ◑ω◐ ━━━━━◥
║aqui tiene las lista para activa y desactivar
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ Ejemplo de usó:
║❍ _#welcome on_
║❍ _#welcome off_
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚━━━━▣━━◤ANSI◢━━▣━━━━━

`, "Preciona aquí", `sᴇʟᴇᴄᴄɪᴏɴᴇs ᴀǫᴜɪ`, listSections, m)
}

if (command == 'welcome' || command == 'bienvenida') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].welcome = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
//m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].welcome = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)
//m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)
}}

if (command == 'antilink' || command == 'antienlace') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
// m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antilink = true
m.reply(lenguaje.enable.text3)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antilink = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antilink2') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiLink2 = true
m.reply(lenguaje.enable.text3)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiLink2 = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antitwiter' || command == 'AntiTwiter') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTwitter = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTwitter = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antitiktok' || command == 'AntiTikTok') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTiktok = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTiktok = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antitelegram' || command == 'AntiTelegram') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTelegram = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTelegram = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antifacebook' || command == 'AntiFacebook' || command == 'AntiFb') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiFacebook = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiFacebook = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antinstagram' || command == 'AntInstagram' || command == 'AntiIg') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntInstagram = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntInstagram = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antiyoutube' || command == 'AntiYoutube') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiYoutube = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiYoutube = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antifake' || command == 'antiFake') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiFake = true
conn.sendButton(m.chat, `*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero fake (virtuales), seran explusado automáticamente del Grupo...*`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
//m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero fake (virtuales), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiFake = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antiarabe' || command == 'antiArabe') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiArabe = true
conn.sendButton(m.chat, `*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero arabe (+212, +91, +92, etc), seran explusado automáticamente del Grupo...*\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
//m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero arabe (+212, +91, +92, etc), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiArabe = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antiviewonce') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].viewonce = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].viewonce = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antitoxic') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antitoxic = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antitoxic = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'autodetect' || command == 'detect') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].detect = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].detect = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'audios') {
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].audios = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].audios = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'autosticker' || command == 'stickers') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].autosticker = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autosticker = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'modocaliente' || command == 'antinsfw') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiNsfw = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiNsfw = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'game2') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].game2 = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].game2 = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'modoadmin' || command == 'soloadmin' || command == 'modoadmins') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") { 
global.db.data.chats[m.chat].modeadmin = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n\n${lenguaje.enable.text4}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].modeadmin = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n\n${lenguaje.enable.text5}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antiprivado') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.settings[numBot].antiprivado = true
//conn.antiprivado = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.settings[numBot].antiprivado = false
//conn.antiprivado = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antipv') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.settings[numBot].antipv = true
//conn.antiprivado = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.settings[numBot].antipv = false
//conn.antiprivado = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}
       
if (command == 'anticall' || command == 'antillamada') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.settings[numBot].anticall = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.settings[numBot].anticall = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'modojadibot' || command == 'jadibot') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].jadibot = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].jadibot = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autoread' || command == 'autovisto') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.settings[conn.user.jid].autoread = false
//conn.autoread = false
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.settings[conn.user.jid].autoread = true
//conn.autoread = true
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'antispam') {
if (!isCreator) return m.reply(info.owner)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].antispam = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antispam = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'chatbot' || command == 'simsimi') {
//if (!m.isGroup) return m.reply(info.group)
//if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].simi = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].simi = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}

if (command == 'autolevelup' || command == 'autonivel') {
if (!m.isGroup) return m.reply(info.group)
if (!text) return conn.sendButton(m.chat, `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
if (args[0] === "on") {
global.db.data.chats[m.chat].autolevelup = true
conn.sendButton(m.chat, `✅ *${command}* ${lenguaje.enable.text1}\n`, botname, null, [['❌ Desactivar', `${prefix + command} off`], ['🔰Menu', `.menu`]], null, null, m)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autolevelup = false
conn.sendButton(m.chat, `🟢 *${command}* ${lenguaje.enable.text2}\n`, botname, null, [['✅ Activar', `${prefix + command} on`], ['🔰Menu', `.menu`]], null, null, m)}}}

module.exports = { enable }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
