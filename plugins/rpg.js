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
const Jimp = require('jimp')
const os = require('os')
const PhoneNumber = require('awesome-phonenumber') 
const {createHash} = require('crypto') 
const { canLevelUp, xpRange } = require('../libs/levelling.js')
let minar = `${pickRandom([
    '¡Eres una diosa de la minería! 👸⛏️✨ ¡Has minado una gran cantidad!', 
    '¡🌟✨ Maravillosa! Obtienes mucho 💎 por tu excelente minería', 
    '¡Qué increíble! 😍⛏️ Eres la reina de las minas y obtuviste', 
    '👑⛏️ ¡Lo lograste! Has minado con estilo y ahora tienes', 
    '😲 ¡Guau! Lograste minar la cantidad de', 
    '⚡💥 Tus habilidades de minería son legendarias, ahora tienes', 
    '⛏️💫 ¡Mina como una campeona! Has obtenido', 
    '✨🌈 ¡Sigue brillando! Ahora tienes', 
    '😻 ¡La suerte está de tu lado, minera estrella! 🌟 Obtienes', 
    '🌟🎉 ¡Has hecho un trabajo increíble minando y te llevas', 
    '⚒️✨ La minería está en tu sangre 💪. Obtienes', 
    '🌸⛏️ ¡Qué gran esfuerzo! Has encontrado un tesoro y obtienes', 
    '👑⛏️ ¡La reina de las minas vuelve a triunfar! Ahora tienes', 
    '🌟🛣️ Tu camino como minera es brillante, has minado y obtuviste', 
    '🌈 ¡La fortuna te sonríe mientras minas! Ahora tienes', 
    '🌸💪 Eres imparable, ¡obtienes una gran recompensa por tu minería!', 
    '🌟🌟 ¡Has demostrado ser la mejor en las minas! Obtienes', 
    '💖⛏️ ¡Qué estilo! Minaste como nadie y obtuviste', 
    '⛏️💎 ¡El poder de la minería está contigo! Obtienes', 
    '💫⚒️ ¡Cada golpe de tu pico trae fortuna! ¡Ahora tienes!'
])}`

let robar = `${pickRandom([
    '👑💰 ¡Eres la reina del robo! Robaste un banco y obtuviste', 
    '💎✨ ¡Maestra del crimen! Lograste negociar con la mafia y obtuviste', 
    '😎💵 ¡Wow! Casi te atrapan, pero tu astucia te hizo escapar con 💰. Obtienes:', 
    '💰🎩 ¡Los mafiosos están impresionados por tu estilo! Te pagaron', 
    '💼👸 ¡Eres increíble! Lograste robar al administrador del grupo y obtuviste', 
    '💄💸 Robaste a una celebridad con elegancia y conseguiste', 
    '🎨💰 Entraste sigilosamente al museo y robaste una obra maestra de valor incalculable. Obtienes:', 
    '💍🕵️ ¡Te infiltraste en la joyería y conseguiste un botín impresionante! Ahora tienes', 
    '🚨👑 ¡Nadie puede contigo! Robaste un camión lleno de tesoros y obtuviste', 
    '💸😎 ¡Te convertiste en la ladrona más buscada, pero el botín es enorme! Ahora tienes', 
    '🎩🎁 ¡Qué elegancia! Robaste una mansión de lujo y obtuviste', 
    '👜💎 Te hiciste pasar por una millonaria y robaste una joya única. ¡Increíble!', 
    '🎭💰 ¡Qué audaz! Entraste a un evento de alta sociedad y saliste con una fortuna', 
    '👗💍 ¡El arte del engaño es lo tuyo! Lograste robar una fortuna y obtienes', 
    '🚁🤑 ¡Asaltaste un helicóptero lleno de joyas y obtuviste!', 
    '🎯💸 ¡Robaste con precisión de experta! Ahora tienes en tus manos', 
    '🎩✨ Te infiltraste en un casino y ganaste más de lo que robaste. ¡Obtienes!', 
    '🎀💰 ¡Qué golpe maestro! Lograste robar y obtuviste'
])}`

let robmal = `${pickRandom([
    '🙀👮‍♂️ ¡LA POLICÍA TE ATRAPÓ! PERDISTE', 
    '🏦🚨 Fuiste a robar un banco, pero te traicionaron y la policía te capturó. ¡Perdiste!', 
    '🚔🤡 ¡No pudiste escapar de la policía! ¡Perdiste!', 
    '🎰 ¡Intentaste robar un casino, pero te descubrieron! Perdiste:', 
    '🛑💼 ¡Te atraparon tratando de robar una tienda! Perdiste:', 
    '🚨🔔 ¡La alarma sonó y fuiste capturada tratando de robar un almacén! ¡Perdiste!', 
    '🏠👀 El dueño del lugar te sorprendió robando. ¡Perdiste!', 
    '💻🔒 ¡Intentaste hackear una cuenta bancaria, pero te rastrearon! ¡Perdiste!', 
    '👮‍♀️💼 Intentaste sobornar a un oficial, pero te descubrieron. ¡Perdiste!', 
    '😱💰 ¡Tu plan para chantajear a un empresario salió mal y perdiste todo!', 
    '🚔💸 ¡Fuiste atrapada en el acto! Perdiste todo lo robado.', 
    '🎭❌ ¡Tu máscara cayó en pleno robo y fuiste identificada! Perdiste:', 
    '🚨👮‍♀️ ¡Te atraparon justo antes de escapar! ¡Perdiste tu botín.'
])}`

let verificados2 = 'https://i.ibb.co/LJdWZ4x/20241019-084424.jpg';
let verificadosError = 'https://i.ibb.co/YL9ykFr/20241104-172510.jpg';
global.ch = { ch1: '120363386885800287@newsletter' };
/*async function reg(command, conn, m, sender, text, budy, fkontak, delay, args) {
if (global.db.data.users[m.sender].banned) return
if (command == 'reg' || command == 'verificar') {
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let user = global.db.data.users[m.sender]
let codigosIdiomas = ['es', 'en']
let nombresIdiomas = {'es': 'Español', 'en': 'English' }
if (user.registered === true) return m.reply(lenguaje.smsReg()) 
if (!Reg.test(text)) return m.reply(lenguaje.smsReg1(prefix)) 
let [_, name, splitter, age] = text.match(Reg)
if (!name) return m.reply(lenguaje.smsReg2()) 
if (!age) return m.reply(lenguaje.smsReg3()) 
age = parseInt(age)
if (age > 100) return m.reply(lenguaje.smsReg4()) 
if (age < 6) return m.reply(lenguaje.smsReg5()) 
if (name.length >= 45) return m.reply(lenguaje.smsReg6()) 
user.name = name + 'ͧͧͧͦꙶͣͤ✓'.trim()
user.age = age
user.regTime = + new Date
user.registered = true
const sn = createHash('md5').update(m.sender).digest('hex');
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
//let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => "") 
let api = await axios.get(`${apis}/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido'
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 200
conn.sendMessage(m.chat, { text: lenguaje.smsReg7(name, user, age, time, date, sender, sn, prefix, rtotalreg),
contextInfo:{
mentionedJid:[name],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${botname}`,
"body": `${name}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
//conn.sendButton(m.chat, lenguaje.smsReg7(name, user, age, time, date, sender, sn, prefix, rtotalreg), 'Seleccióna tu idioma', null, [['𝐄𝐒𝐏𝐀𝐍̃𝐎𝐋', `.idioma 1`], ['𝐈𝐍𝐆𝐋𝐄𝐒', `.idioma 2`], ['𝐀𝐑𝐀𝐁𝐄', `.idioma 3`], ['𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀', `.idioma 4`], ['𝐏𝐎𝐑𝐓𝐔𝐆𝐔𝐄𝐒', `.idioma 5`], ['𝐑𝐔𝐒𝐎', `.idioma 6`]], null, [['𝐂𝐚𝐧𝐚𝐥', nna]], {quoted: fkontak})
await delay(1000)
m.reply(sn) 
await delay(1000)
m.reply(lenguaje.smsReg8()) 
await conn.sendMessage("120363365700004535@newsletter", { text: `◉ *Usuarios:* ${m.pushName || 'Anónimo'}
◉ *País:* ${userNationality}
◉ *Verificación:* ${user.name}
◉ *Edad:* ${age} años
◉ *Fecha:* ${date}
◉ *Bot:* ${wm}
◉ *Número de serie:*
⤷ ${sn}`, contextInfo: {
externalAdReply: {
title: "『 𝙉𝙊𝙏𝙄𝙁𝙄𝘾𝘼𝘾𝙄𝙊́𝙉 📢 』",
body: "Nuevo usuario registrado 🥳",
thumbnail: imagen1, 
sourceUrl: pickRandom(nna, nna2, nn, md, yt, tiktok),
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}*/
async function reg(command, conn, m, sender, text, budy, fkontak, delay, args) {
    if (global.db.data.users[m.sender].banned) return;
    if (command == 'reg' || command == 'verificar' || command == 'Registrar') {
        let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
        let user = global.db.data.users[m.sender];
        if (user.registered === true) return m.reply('✨ *Ya estás registrado* 🧐');
        if (!Reg.test(text)) {
            return conn.sendMessage(m.chat, {
                image: { url: verificadosError },
                caption: `⚠️ *Formato incorrecto* ⚠️\n\n💡 Usa: *${prefix}reg nombre.edad*\n📝 Ejemplo: *${prefix}reg Juan.25*`
            }, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 });
        }
        let [_, name, splitter, age] = text.match(Reg);
        if (!name) return m.reply('❌ *El nombre no puede estar vacío*');
        if (!age) return m.reply('❌ *La edad no puede estar vacía (solo números)*');
        age = parseInt(age);
        if (age > 100) return m.reply('😅 *Parece que eres demasiado mayor para esto...*');
        if (age < 3) return m.reply('👶 *¡Vaya! Un bebé sabe escribir. Impresionante.*');
        if (name.length >= 99) return m.reply('😹 *Tu nombre es demasiado largo. Intenta con algo más corto.*');
        user.name = name + ' ✓';
        user.age = age;
        user.regTime = +new Date();
        user.registered = true;
        let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6);
        let who = m.sender;
    let profilePicture;
    try {
        const sender = m.isGroup ? m.sender : m.chat;
        profilePicture = await conn.profilePictureUrl(sender, 'image');
    } catch {
        profilePicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
    }
 const response = await axios.get(profilePicture, { responseType: 'arraybuffer' });
            const thumbnailBuffer = Buffer.from(response.data, 'binary');
        let api = await axios.get(`${apis}/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`);
        let userNationalityData = api.data.result;
        let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido';
        const date = moment.tz('America/Bogota').format('DD/MM/YYYY');
        const time = moment.tz('America/Argentina/Buenos_Aires').format('LT');
        let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered === true).length;
        global.db.data.users[m.sender].limit += 5;
        global.db.data.users[m.sender].exp += 600;        
        const apiUrl = `https://eliasar-yt-api.vercel.app/api/canvas/reg?url=${encodeURIComponent(profilePicture)}&key=EliasarYT`;
        conn.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `
✅ *¡REGISTRO EXITOSO!* ✅

🌟 *Datos del usuario:* 🌟
👤 *Nombre:* ${name}
🎂 *Edad:* ${age} años
⏰ *Hora:* ${time}
🏙️ *País:* ${userNationality}
📅 *Fecha:* ${date}
📞 *Número:* wa.me/${who.split("@")[0]}
🔑 *ID de serie:* ${sn}
🎁 *Recompensa obtenida:* 🎁
💎 2 Diamantes
✨ 200 puntos de experiencia
👥 *Usuarios registrados hasta ahora:* ${rtotalreg}
⚡ *Usa:* ${prefix}menu *para ver más comandos.
> mira tu registro aquí https://whatsapp.com/channel/0029Vb1f29nIt5rnxPslac3q`
        }, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 });
        await delay(2000);
        conn.sendMessage(m.chat, {
            text: `🎉 *¡Bienvenido a la comunidad!* 🥳\n\n🌺 *Disfruta de las funciones y comandos disponibles.* 🌟`,
            contextInfo: { forwardingScore: 9999999, isForwarded: false }
        }, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 });
        await conn.sendMessage("120363386885800287@newsletter", {
            text: `◉ *Usuario:* ${m.pushName || 'Anónimo'}
◉ *País:* ${userNationality}
◉ *Verificación:* ${user.name}
◉ *Edad:* ${age} años
◉ *Fecha:* ${date}
◉ *Bot:* ${wm}
◉ *Número de serie:*
⤷ ${sn}`,
            contextInfo: {
                externalAdReply: {
                    title: "『 𝙉𝙊𝙏𝙄𝙁𝘼𝘾𝘼𝙄𝙊́𝙉 📢 』",
                    body: "Nuevo usuario registrado 🥳",
                    thumbnail: thumbnailBuffer,
                    sourceUrl: pickRandom(nna, nna2, nn, md, yt, tiktok),
                    mediaType: 1,
                    showAdAttribution: false,
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: null });
    }

if (command == 'unreg') {
const {createHash} = require('crypto') 
if (!args[0]) return m.reply(lenguaje.rpg.unreg) 
const user = global.db.data.users[m.sender];
   let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6);
if (args[0] !== sn) return m.reply(lenguaje.rpg.myns) 
user.registered = false; 
global.db.data.users[m.sender].limit -= 2
global.db.data.users[m.sender].exp -= 200
m.reply(lenguaje.rpg.delreg)}

if (command == 'myns') {
const {createHash} = require('crypto') 
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6);
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', `${lenguaje.rpg.myns2}`, 'status@broadcast')}}

async function rpg(m, command, participants, args, sender, pushname, text, conn, fkontak, replace, who) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
let usuario = global.db.data.users[m.sender]
if (command == 'lb' || command == 'leaderboard') {
if (!m.isGroup) return m.reply(info.group) 
let member = participants.map(u => u.id)
let me = m.split
const users = Object.entries(global.db.data.users).map(([key, value]) => {
return {...value, jid: key}});
const sortedExp = users.map(toNumber('exp')).sort(sort('exp'));
const sortedLim = users.map(toNumber('limit')).sort(sort('limit'));
const sortedLevel = users.map(toNumber('level')).sort(sort('level'));
const sortedRole = users.map(toNumber('role')).sort(sort('role'))
const usersExp = sortedExp.map(enumGetKey);
const usersLim = sortedLim.map(enumGetKey);
const usersLevel = sortedLevel.map(enumGetKey);
const usersRole = sortedRole.map(enumGetKey)
const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length);
const texto = `${lenguaje.rpg.text3}

╭🌟 *Top ${len} XP* 🌟╮
┃ 🌸 *Tú*: ${usersExp.indexOf(m.sender) + 1} / ${usersExp.length}
${sortedExp.slice(0, len).map(({jid, exp}, i) => `┃ ${i + 1}. ${(participants.some((p) => jid === p.jid) ? `💖 ${conn.getName(jid)}` : '@')}${jid.split`@`[0]} ➜ *${exp} XP*`).join`\n`}
╰──────────╯

╭💎 *Top ${len} Diamantes* 💎╮
┃ ✨ *Tú*: ${usersLim.indexOf(m.sender) + 1} / ${usersLim.length}
${sortedLim.slice(0, len).map(({jid, limit}, i) => `┃ ${i + 1}. ${(participants.some((p) => jid === p.jid) ? `🌷 ${conn.getName(jid)}` : '@')}${jid.split`@`[0]} ➜ *${limit} diamantes*`).join`\n`}
╰──────────╯

╭⬆️ *Top ${len} Nivel* ⬆️╮
┃ 🌸 *Tú*: ${usersLevel.indexOf(m.sender) + 1} / ${usersLevel.length}
${sortedLevel.slice(0, len).map(({jid, level}, i) => `┃ ${i + 1}. ${(participants.some((p) => jid === p.jid) ? `🌺 ${conn.getName(jid)}` : '@')}${jid.split`@`[0]} ➜ *nivel ${level}*`).join`\n`}
╰──────────╯

╭💪 *Top ${len} Rango* 💪╮
┃ 🌟 *Tú*: ${usersLevel.indexOf(m.sender) + 1} / ${usersLevel.length}
${sortedLevel.slice(0, len).map(({jid, role}, i) => `┃ ${i + 1}. ${(participants.some((p) => jid === p.jid) ? `💖 ${conn.getName(jid)}` : '@')}${jid.split`@`[0]} ➜ *${role}*`).join`\n`}
╰──────────╯`.trim();
conn.sendMessage(m.chat, { text: texto, contextInfo:{
mentionedJid: [...texto.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'afk') {
if (!m.isGroup) return m.reply(info.group) 
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
const afk = `${lenguaje.rpg.text4} ${pushname} ${lenguaje.rpg.text5} ${text ? text : ''}\n\n\n\n\n\n\n`
conn.relayMessage(m.chat, {scheduledCallCreationMessage: {callType: 'VIDEO', scheduledTimestampMs: 0, title: afk }}, {})}

if (command == 'rob' || command == 'robar') {
if (!m.isGroup) return m.reply(info.group) 
const user = global.db.data.users[m.sender]
const date = global.db.data.users[m.sender].robs + 600000; //600000
if (new Date - global.db.data.users[m.sender].robs < 600000) return m.reply(`${lenguaje.rpg.text6} ${msToTime(date - new Date())}`) 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
else who = m.chat;
if (!who) return m.reply(lenguaje.rpg.rob)
try { 
if (!(who in global.db.data.users)) return m.reply(lenguaje.grupos.text31)
const users = global.db.data.users[who];
let exp = Math.floor(Math.random() * 15) + 10;
let limit = Math.floor(Math.random() * 5) + 3;
const rob = Math.floor(Math.random() * 500);
if (users.limit < 15) return conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob2} @${who.split`@`[0]} ${lenguaje.rpg.rob3}`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});  
if (users.exp < 10) return conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob2} @${who.split`@`[0]} ${lenguaje.rpg.rob4}`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});   
global.db.data.users[m.sender].exp += exp * 1;
global.db.data.users[m.sender].limit += limit * 1;
global.db.data.users[who].exp -= exp * 1;
global.db.data.users[who].limit -= limit * 1;
conn.sendMessage(m.chat, {text: `${lenguaje.rpg.rob5} @${who.split`@`[0]}\n◦ ᴇxᴘ ${exp}\n◦ ᴅɪᴀᴍᴀɴᴛᴇ: ${limit}\n\n${lenguaje.rpg.rob6} @${m.sender.split("@")[0]}`, mentions: [who, m.sender]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
global.db.data.users[m.sender].robs = new Date * 1;
 } catch {
m.reply(lenguaje.rpg.rob7)}}

if (command == 'crime' || command == 'Crime') {
const date = global.db.data.users[m.sender].crime + 3600000; //3600000 = 1 hs
if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`*《🚓︎》LA POLICIA ESTA VIGILANDO EN ESTE MOMENTO, VUELVE EN:* ${msToTime(date - new Date())}`)
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 90)
const money = Math.floor(Math.random() * 9000)

if (global.db.data.users[m.sender].exp < 0) return m.reply(`《💰》${robar} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp)
if (global.db.data.users[m.sender].limit < 0) return m.reply(`《💰》${robar} ${diamond} 💎 Diamante`).catch(global.db.data.users[m.sender].limit += diamond)
if (global.db.data.users[m.sender].money < 0) return m.reply(`《💰》${robar} ${money} 🪙 Coins`).catch(global.db.data.users[m.sender].money += money) 

let or = ['text', 'text2', 'text3', 'text4']; 
let media = or[Math.floor(Math.random() * 4)]
global.db.data.users[m.sender].crime = new Date * 1;
if (media === 'text') m.reply(`《💰》${robar} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (media === 'text2') m.reply(`《🚓》${robmal} ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (media === 'text3') m.reply(`《💰》${robar}\n\n💎 ${diamond} diamante\n🪙${money} Coins`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money) 
if (media === 'text4') m.reply(`《🚓》${robmal}\n\n💎${diamond} diamante\n🪙 ${money} coins`).catch(global.db.data.users[m.sender].limit -= diamond).catch(global.db.data.users[m.sender].money -= money)}

if (command == 'buy' || command == 'buyall') {
let count = command.replace(/^buy/i, '');
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / 450) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
count = Math.max(1, count);
if (global.db.data.users[m.sender].exp >= 450 * count) {
global.db.data.users[m.sender].exp -= 450 * count;
global.db.data.users[m.sender].limit += count;
m.reply(`╔═❖ ${lenguaje.rpg.buy}\n║‣ ${lenguaje.rpg.buy2} ${count}💎\n║‣ ${lenguaje.rpg.buy3} ${450 * count} XP\n╚═══════════════`);
} else m.reply(`${lenguaje.rpg.buy4} *${count}* ${lenguaje.rpg.buy5}`)
}

if (command == 'bal' || command == 'balance' || command == 'diamond') {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
if (!(who in global.db.data.users)) return m.reply(lenguaje.grupos.text31)
conn.sendMessage(m.chat, {text: `
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  🏦 *Balance de tu cuenta* 🏦
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

💼 *Usuario:* @${who.split('@')[0]} ${user.registered ? '✓' : ''}

💳 *Crédito Disponible:* ${user.limit}
📈 *Exp:* ${user.exp}
💰 *Monedas:* ${user.money}
🏦 *Dinero en Banco:* ${user.banco}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🔔 *Nota:* Puedes comprar más créditos usando los siguientes comandos:
➥ *${prefix}buy <cantidad>*
➥ *${prefix}buyall*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'dep' || command == 'depositar') {    
let who;
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
else who = m.sender;
let users =  global.db.data.users[m.sender];
if (!args[0]) return m.reply(`[ ⚠️ ] *Ingresa la cantidad para agregar a sus cuenta bancaria*`);
if (args[0] == '--all') {
let count = parseInt(users.limit);
users.limit -= count * 1
users.banco += count * 1
await m.reply(`*[ 🏦 ] Has agregados.*`);
return !0;
};
if (!Number(args[0])) return m.reply(`[ ⚠️ ] *Falto en número de cantidad de diamante 💎*`);
let count = parseInt(args[0]);
if (!users.limit) return m.reply(`*Esta pobre no tener suficiente diamante*`);
if (users.limit < count) return m.reply(`*Che no sabes cuanto dinero tiene el tu cartera? usar el comando:* #bal`);
users.limit -= count * 1;
users.banco += count * 1;
await m.reply(`*[ 🏦 ] Has ingresando ${count} diamante al Banco*`)}
  
if (command == 'retirar' || command == 'toremove') {     
let user =  global.db.data.users[m.sender]
if (!args[0]) return m.reply(`[ ⚠️ ] *ingresa la cantidad a retirar*`);
if (args[0] == '--all') {
let count = parseInt(user.banco);
user.banco -= count * 1
user.limit += count * 1
await m.reply(`*[ 🏦 ] Retiraste (${count}) diamante 💎 del Banco.*`);
return !0 
}
if (!Number(args[0])) return m.reply(`La cantidad debe ser un mumero`); 
let count = parseInt(args[0]);
if (!user.banco) return m.reply(`Hey fantasma 👻, no tener esa cantidad de dinero el banco 🥲`);
if (user.banco < count) return m.reply(`*Che no sabes cuanto dinero tiene el tu cartera? usar el comando:* #bal`);
user.banco -= count * 1
user.limit += count * 1
await m.reply(`*[ 🏦 ] Has Retirado (${count}) dinero del Banco*`)}

if (command == 'minar' || command == 'mine') {
const date = global.db.data.users[m.sender].lastmiming + 600000;
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return m.reply(`*${lenguaje.rpg.text9} ${msToTime(date - new Date())} ${lenguaje.rpg.text10}*`) 
const exp = Math.floor(Math.random() * 1500)
global.db.data.users[m.sender].exp += exp;
m.reply(`*${minar} ${exp} XP*`)
global.db.data.users[m.sender].lastmiming = new Date * 1;
}

if (command == 'minar2' || command == 'mine2') {
const date = global.db.data.users[m.sender].lastmiming2 + 3600000;
if (new Date - global.db.data.users[m.sender].lastmiming2 < 3600000) return m.reply(`*${lenguaje.rpg.text9} ${msToTime(date - new Date())} ${lenguaje.rpg.text10}*`)
//const exp = Math.floor(Math.random() * 2500)
const diamond = Math.floor(Math.random() * 60)
const money = Math.floor(Math.random() * 2500)
//global.db.data.users[m.sender].exp += exp
global.db.data.users[m.sender].limit += diamond
global.db.data.users[m.sender].money += money
m.reply(`${minar}\n${diamond} 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄 💎\n${money} 𝐂𝐎𝐈𝐍𝐒 🪙`)
m.react('💎') 
global.db.data.users[m.sender].lastmiming2 = new Date * 1;
}

if (command == 'trabajar' || command == 'work' || command == 'w') {
let hasil = Math.floor(Math.random() * 3000)
//let dono = Math.floor(Math.random() * 40)
let time = global.db.data.users[m.sender].lastwork + 3600000 //3600000
if (new Date - global.db.data.users[m.sender].lastwork < 3600000) return m.reply(`${lenguaje.rpg.text12}\n\n*${lenguaje.rpg.text9}* ${msToTime(time - new Date())} ${lenguaje.rpg.text13}`) 
let anu = (await axios.get('https://raw.githubusercontent.com/fgmods/fg-team/main/games/work.json')).data
let res = pickRandom(anu)
global.db.data.users[m.sender].exp += hasil
//global.db.data.users[m.sender].limit += dono
m.reply(`⚒️ ${res.fgwork} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}

if (command == 'claim' || command == 'daily') {
let time = global.db.data.users[m.sender].lastclaim + 7200000
if (new Date - global.db.data.users[m.sender].lastclaim < 7200000) return m.reply(`${lenguaje.rpg.text14} ${msToTime(time - new Date())}`) 
const exp = Math.floor(Math.random() * 900)
const limit = Math.floor(Math.random() * 30)
const money = Math.floor(Math.random() * 800)
global.db.data.users[m.sender].limit += limit;
global.db.data.users[m.sender].money += money
global.db.data.users[m.sender].exp += exp
m.reply(`${lenguaje.rpg.text15}\n🆙 *xᴘ* : ${exp}\n💎 *ᴅɪᴀᴍᴀɴᴛᴇ :* ${limit}\n🪙 *ᴄᴏɪɴs :* ${money}`)
global.db.data.users[m.sender].lastclaim = new Date * 1
}




if (command == 'levelup' || command == 'nivel') {
  let user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    let {min, xp, max} = xpRange(user.level, global.multiplier);
    return m.reply(`╭💖 「 ${lenguaje.rpg.level} 」 💖
│🌸 ${lenguaje.rpg.level2}
│🌺 ${lenguaje.rpg.level3} ${pushname}
│✨ *XP:* ${user.exp - min}/${xp}
│🎀 Nivel: ${user.level}
│👑 Rango: ${user.role}
╰💫 Restan *${max - user.exp}* XP para el siguiente nivel.`);
  }
  
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  
  if (before !== user.level) {
    const str = `╭🎉 「 ¡LEVEL UP! 」 🎉
│🥂 ¡Felicidades, ${pushname}! 🌟
│✨ Nivel anterior: ${before}
│🎀 Nuevo nivel: ${user.level}
│👑 Rango actual: ${user.role}
╰🌈 ¡Sigue brillando y alcanzando nuevas alturas! ✨`.trim();
    return m.reply(str);
  }
}

if (command == 'cofre') {
if (global.db.data.users[m.sender].level < 9) return m.reply(`${lenguaje['nivel']()} 9 ${lenguaje['nivel2']()} ${prefix}nivel`) 
const date = global.db.data.users[m.sender].lastcofre + 86400000; //10 hs
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) return m.reply(`${lenguaje.rpg.text16} ${msToTime(date - new Date())}`) 
exp = Math.floor(Math.random() * 9999)
limit = Math.floor(Math.random() * 70)
trash = Math.floor(Math.random() * 600)
potion = Math.floor(Math.random() * 300)
money = Math.floor(Math.random() * 8500)
global.db.data.users[m.sender].exp += exp
global.db.data.users[m.sender].limit += limit
global.db.data.users[m.sender].trash += trash
global.db.data.users[m.sender].potion += potion
global.db.data.users[m.sender].money += money
m.reply(`╔══🎉═🎉═🎉══⬣\n║${lenguaje.rpg.text17}\n║┈┈┈┈┈┈┈┈┈┈┈┈┈\n║⚡${exp} 𝙴𝚇𝙿\n║💎 ${limit} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴\n║🗑️ ${trash} 𝙱𝙰𝚂𝚄𝚁𝙰\n║🥤 ${potion} 𝙿𝙾𝙲𝙸𝙾𝙽𝙴𝚂\n║🪙 ${money} 𝙲𝙾𝙸𝙽𝚂\n╚═════════════════⬣`)
global.db.data.users[m.sender].lastcofre = new Date * 1;
}}

//función pickrandow
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}

//temporarily
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " Horas " + minutes + " Minutos " + seconds + " Segundos "
}

function isNumber(x) {
    return !isNaN(x)
}

module.exports = { reg, rpg }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})