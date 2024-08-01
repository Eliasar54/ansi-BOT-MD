const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, sendImageAsUrl, getRandom} = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
let tebaklagu = global.db.data.game.tebaklagu = []
let kuismath = global.db.data.game.math = []
let tekateki = global.db.data.game.tekateki = []
let usuario = global.db.data.users[m.sender]

async function game(m, budy, command, text, pickRandom, pushname, conn, participants, sender, who, body, ra) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
if (budy.includes(`Bot`) || budy.includes(`simi`)) {   
if (!text) return m.reply(`*${lenguaje['smsWel']()} ${pushname} 👋 Quieres hablar un rato conmigo? usar de esta forma*\n\n• *Ejemplo:* #Bot Hola`) 
try {
await conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/simi?text=${text}`)
let res = await gpt.json()
await m.reply(res.data.message)
} catch {
try {
if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
if (text.includes('hola')) text = text.replace('hola', 'Hello');
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
const resu = await reis.json();
const nama = m.pushName || '1';
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
const res = await api.json();
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
const resu2 = await reis2.json();
m.reply(resu2[0][0][0]);
} catch (e) {
return m.reply(`*Api simsimi caida vuelva mas tardes*`)
console.log(e)}}}

if (command == 'pregunta' || command == 'preg') {
    if (!text) return m.reply(`${lenguaje.juegos.text} ${prefix + command} mañana va a llover?`)
    
    m.react('🤔')
    
    let pr = [
        'no', 
        'sí', 
        'no sé', 
        'puede ser', 
        'no creo', 
        'olvio', 
        '¿Qué pregunta más boluda?', 
        'A ver...', 
        'pendejo', 
        'pues no sé',
        'claro que sí',
        'por supuesto',
        'absolutamente',
        'es posible',
        'dudo mucho',
        'sin duda',
        'quizás',
        'depende',
        'ni idea',
        'me inclino a decir que sí',
        'definitivamente no',
        'ni lo sueñes',
        'es probable',
        'tal vez sí, tal vez no',
        'no te puedo decir',
        'eso es secreto',
        'seguro que no',
        'la verdad es que sí',
        'no tengo ni idea',
        'no deberías preguntar eso',
        'pregunta complicada',
        'no sabría decir',
        'es imposible saberlo',
        'puede que sí, puede que no',
        'ni idea, amigo',
        'quizá más tarde',
        'no me hagas elegir',
        'eso es irrelevante',
        'no me pidas que adivine',
        'nadie sabe'
    ]
    
    let preg = pr[Math.floor(Math.random() * pr.length)]
    
    m.reply(`${lenguaje.juegos.text1} ${text}\n${lenguaje.juegos.text2} ${preg}`)
}


if (command == 'gay') {
if (!m.isGroup) return m.reply(info.group)
let vn = 'https://qu.ax/HfeP.mp3'
m.react('🏳‍🌈') 
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Usted es hetero 🤪🤙'} else if (gay == 21 ) {ga = 'Mas o menos 🤔'} else if (gay == 23 ) {ga = 'Mas o menos 🤔'} else if (gay == 24 ) {ga = 'Mas o menos 🤔'} else if (gay == 25 ) {ga = 'Mas o menos 🤔'} else if (gay == 26 ) {ga = 'Mas o menos 🤔'} else if (gay == 27 ) {ga = 'Mas o menos 🤔'} else if (gay == 28 ) {ga = 'Mas o menos 🤔'} else if (gay == 29 ) {ga = 'Mas o menos 🤔'} else if (gay == 30 ) {ga = 'Mas o menos 🤔'} else if (gay == 31 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 32 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 33 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 34 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 35 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 36 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 37 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 38 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 41 ) {ga = 'Tengo razon? 😏'} else if (gay == 42 ) {ga = 'Tengo razon? 😏'} else if (gay == 43 ) {ga = 'Tengo razon? 😏'} else if (gay == 44 ) {ga = 'Tengo razon? 😏'} else if (gay == 45 ) {ga = 'Tengo razon? 😏'} else if (gay == 46 ) {ga = 'Tengo razon? 😏'} else if (gay == 47 ) {ga = 'Tengo razon? 😏'} else if (gay == 48 ) {ga = 'Tengo razon? 😏'} else if (gay == 49 ) {ga = 'Tengo razon? 😏'} else if (gay == 50 ) {ga = 'Eres o no? 🧐'} else if (gay > 51) {ga = 'Usted es gay 🥸'}
//let kah = ra[Math.floor(Math.random() * ra.length)]
let jawab = `@${who.split("@")[0]} Es 🏳️‍🌈 ${random}% Gay\n\n${ga}`
let ments = [me, jodoh]
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/gay', { 
avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/6765f503ebd91db2fe461.jpg'), 
   })}, caption: jawab, contextInfo:{ mentionedJid:[who], forwardingScore: 9999999, isForwarded: false, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
conn.sendAudio(m.chat, vn, m)}

if (command == 'pareja' || command == 'formarpareja') {
if (!m.isGroup) return m.reply(info.group) 
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let love = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat, { text: `*@${jodoh.split('@')[0]} ${lenguaje.juegos.text3} @${love.split('@')[0]} ${lenguaje.juegos.text4}*`,
contextInfo:{
mentionedJid:[jodoh, love],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${botname}`,
"body": `${pushname}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'follar' || command == 'violar' || command == 'coger') { 
if (!text) return m.reply(lenguaje.juegos.text5) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.sendMessage(m.chat, { text: `${lenguaje.juegos.text6} ${text} ${lenguaje.juegos.text7}\n\n${text}\n${lenguaje.juegos.text8}`, mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net']}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'formartrio') {
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat, { text: `🥵 Hey!!! @${a.split('@')[0]}, @${b.split('@')[0]} y @${c.split('@')[0]} ${lenguaje.juegos.text9}`, contextInfo:{mentionedJid:[a, b, c], forwardingScore: 9999999, isForwarded: false, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'formapareja5') {
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
let d = member[Math.floor(Math.random() * member.length)]
let e = member[Math.floor(Math.random() * member.length)]
let f = member[Math.floor(Math.random() * member.length)]
let g = member[Math.floor(Math.random() * member.length)]
let h = member[Math.floor(Math.random() * member.length)]
let i = member[Math.floor(Math.random() * member.length)]
let j = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat, { text: `${lenguaje.juegos.text10}\n\n*_1.- @${a.split('@')[0]} y @${b.split('@')[0]}_*\n${lenguaje.juegos.text11}\n\n*_2.- @${c.split('@')[0]} y @${d.split('@')[0]}_*\n${lenguaje.juegos.text12}\n\n*_3.- @${e.split('@')[0]} y @${f.split('@')[0]}_*\n${lenguaje.juegos.text13}\n\n*_4.- @${g.split('@')[0]} y @${h.split('@')[0]}_*\n${lenguaje.juegos.text14}\n\n*_5.- @${i.split('@')[0]} y @${j.split('@')[0]}_*\n${lenguaje.juegos.text15}`, contextInfo:{mentionedJid:[a, b, c, d, e, f, g, h, i, j]}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'top') {
  if (!text) return m.reply(`*Ejemplo de uso:*\n.top *texto*`)
  
  let member = participants.map(u => u.id)
  let me = m.sender
  
  // Generar 10 miembros aleatorios
  let a = member[Math.floor(Math.random() * member.length)]
  let b = member[Math.floor(Math.random() * member.length)]
  let c = member[Math.floor(Math.random() * member.length)]
  let d = member[Math.floor(Math.random() * member.length)]
  let e = member[Math.floor(Math.random() * member.length)]
  let f = member[Math.floor(Math.random() * member.length)]
  let g = member[Math.floor(Math.random() * member.length)]
  let h = member[Math.floor(Math.random() * member.length)]
  let i = member[Math.floor(Math.random() * member.length)]
  let j = member[Math.floor(Math.random() * member.length)]
  
  const k = Math.floor(Math.random() * 70);
  const x = `${pickRandom(['🤓', '😅', '😂', '😳', '😎', '🥵', '😱', '🤑', '🙄', '💩', '🍑', '🤨', '🥴', '🔥', '👇🏻', '😔', '👀', '🌚', '🤯', '🤪', '🤡', '🥳', '🥺', '😇', '😈'])}`;
  const l = Math.floor(Math.random() * x.length);
  const vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`;
  
  const top = `*${x} Top 10 ${text} ${x}*
  
  *1. @${a.split('@')[0]}*
  *2. @${b.split('@')[0]}*
  *3. @${c.split('@')[0]}*
  *4. @${d.split('@')[0]}*
  *5. @${e.split('@')[0]}*
  *6. @${f.split('@')[0]}*
  *7. @${g.split('@')[0]}*
  *8. @${h.split('@')[0]}*
  *9. @${i.split('@')[0]}*
  *10. @${j.split('@')[0]}*`;
  
  conn.sendMessage(m.chat, { text: top, contextInfo:{
    mentionedJid:[a, b, c, d, e, f, g, h, i, j],
    forwardingScore: 9999999,
    isForwarded: false,
  }}, { quoted: m })
  
  conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}



if (command == 'topgays') { 
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
let d = member[Math.floor(Math.random() * member.length)]
let e = member[Math.floor(Math.random() * member.length)]
let f = member[Math.floor(Math.random() * member.length)]
let g = member[Math.floor(Math.random() * member.length)]
let h = member[Math.floor(Math.random() * member.length)]
let i = member[Math.floor(Math.random() * member.length)]
let j = member[Math.floor(Math.random() * member.length)]
const vn = 'https://qu.ax/HfeP.mp3';
const top = `*🌈 TOP 10 GAYS/LESBIANAS DEL GRUPO 🌈*
    
*1. @${a.split('@')[0]}*
*2. @${b.split('@')[0]}*
*3. @${c.split('@')[0]}*
*4 @${d.split('@')[0]}*
*5 @${e.split('@')[0]}*
*6 @${f.split('@')[0]}*
*7 @${g.split('@')[0]}*
*8 @${h.split('@')[0]}*
*9 @${i.split('@')[0]}*
*10 @${j.split('@')[0]}*`;
conn.sendMessage(m.chat, { text: top, contextInfo:{
mentionedJid:[a, b, c, d, e, f, g, h, i, j],
forwardingScore: 9999999,
isForwarded: false, }}, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (command == 'topotakus') {
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
let d = member[Math.floor(Math.random() * member.length)]
let e = member[Math.floor(Math.random() * member.length)]
let f = member[Math.floor(Math.random() * member.length)]
let g = member[Math.floor(Math.random() * member.length)]
let h = member[Math.floor(Math.random() * member.length)]
let i = member[Math.floor(Math.random() * member.length)]
let j = member[Math.floor(Math.random() * member.length)]
const vn = 'https://qu.ax/ZgFZ.mp3';
const top = `*🌸 TOP 10 OTAKUS DEL GRUPO 🌸*
    
*1. @${a.split('@')[0]}*
*2. @${b.split('@')[0]}*
*3. @${c.split('@')[0]}*
*4 @${d.split('@')[0]}*
*5 @${e.split('@')[0]}*
*6 @${f.split('@')[0]}*
*7 @${g.split('@')[0]}*
*8 @${h.split('@')[0]}*
*9 @${i.split('@')[0]}*
*10 @${j.split('@')[0]}*`;
conn.sendMessage(m.chat, { text: top, contextInfo:{
mentionedJid:[a, b, c, d, e, f, g, h, i, j],
forwardingScore: 9999999,
isForwarded: false, }}, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'racista') {
rate = body.slice(9)
random = `${Math.floor(Math.random() * 100)}`
racista = random
if (racista < 20 ) {ra = 'Tu no eres racista 👏'} else if (racista == 21 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 23 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 24 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 25 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 26 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 27 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 28 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 29 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 30 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 31 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 32 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 33 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 34 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 35 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 36 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 37 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 38 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 39 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 40 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 41 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 42 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 43 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 44 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 45 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 46 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 47 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 48 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 49 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 50 ) {ra = 'Fuck men alto racista 😡'} else if (racista > 51) {ra = 'UN AUTENTICO RACISTA 🥸'}
hasil = `${rate} Usted es ${random}% racista\n\n${ra}`
m.reply(hasil)}

if (command == 'love') {
let love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*

*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}% *de un 100%*\n*Deberias pedirle que sea tu  novia/o ?*`.trim() 
m.react('💞') 
conn.sendMessage(m.chat, { text: love, mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net']}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'ship') {
if (!text) return m.reply(lenguaje.juegos.text16) 
let [text1, ...text2] = text.split(' ')
text2 = (text2 || []).join(' ')
if (!text2) return m.reply(lenguaje.juegos.text17) 
let lovetext = `❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%*👩🏻‍❤️‍👨🏻`.trim()
conn.sendTextWithMentions(m.chat, lovetext)}
//m.reply(lovetext, null, { mentions: conn.parseMention(lovetext)})}

if (command == 'personalidad') { 
if (!text) return m.reply(lenguaje.juegos.text18) 
let personalidad = `┏━━°❀❬ *PERSONALIDAD* ❭❀°━━┓
*┃*
*┃• Nombre* : ${text}
*┃• Buena Moral* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Mala Moral* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Tipo de persona* : ${pickRandom(['De buen corazón','Arrogante','Tacaño','Generoso','Humilde','Tímido','Cobarde','Entrometido','Cristal','No binarie XD', 'Pendejo'])}
*┃• Siempre* : ${pickRandom(['Pesado','De malas','Distraido','De molestoso','Chismoso','Pasa jalandosela','De compras','Viendo anime','Chatea en WhatsApp porque esta soltero','Acostado bueno para nada','De mujeriego','En el celular'])}
*┃• Inteligencia* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Morosidad* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Coraje* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Miedo* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Fama* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Género* : ${pickRandom(['Hombre', 'Mujer', 'Homosexual', 'Bisexual', 'Pansexual', 'Feminista', 'Heterosexual', 'Macho alfa', 'Mujerzona', 'Marimacha', 'Palosexual', 'PlayStationSexual', 'Sr. Manuela', 'Pollosexual'])}
┗━━━━━━━━━━━━━━━━`
m.reply(personalidad)}

if (command == 'doxear' || command == 'doxxeo') { 
    let who;
    if (m.isGroup) who = m.mentionedJid[0];
    else who = m.chat;
    if (!who) return m.reply(lenguaje.juegos.text19);
    
    let start = `*😱 ¡¡Empezando Doxxeo!! 😱*`;
    let boost = `*${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%*`;
    let boost2 = `*${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%*`;
    let boost3 = `*${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%*`;
    let boost4 = `*${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%*`;
    let boost5 = `*${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%*`;
    
    const { key } = await conn.sendMessage(m.chat, { text: start, contextInfo: { mentionedJid: [text] }}, { quoted: m });
    await conn.sendMessage(m.chat, { text: boost, edit: key });
    await conn.sendMessage(m.chat, { text: boost2, edit: key });
    await conn.sendMessage(m.chat, { text: boost3, edit: key });
    await conn.sendMessage(m.chat, { text: boost4, edit: key });
    await conn.sendMessage(m.chat, { text: boost5, edit: key });
    
    let speed = (Math.random() * 10).toFixed(2); // Simular tiempo de doxeo
    let doxeo = `*_🤣 Persona Hackeada/doxxeada con éxito 🤣_*\n\n*_Tiempo: ${speed} segundos!_*\n\n*RESULTADOS:*\n\n*Ip:* 92.28.211.234
*N:* 43 7462
*W:* 12.4893
*SS NUMBER:* 6979191519182016
*IPV6:* fe80::5dcd::ef69::fb22::d9888%12 
*UPNP:* Enabled
*DMZ:* 10.112.42.15
*MAC:* 5A:78:3E:7E:00
*ISP:* Ucom unversal 
*DNS:* 8.8.8.8
*ALT DNS:* 1.1.1.8.1  
*DNS SUFFIX:* Dlink
*WAN:* 100.23.10.15
*WAN TYPE:* private nat
*GATEWAY:* 192.168.0.1
*SUBNET MASK:* 255.255.0.255
*UDP OPEN PORTS:* 8080.80
*TCP OPEN PORTS:* 443
*ROUTER VENDEDOR:* ERICCSON
*DEVICE VENDEDOR:* WIN32-X
*CONNECTION TYPE:* TPLINK COMPANY
*ICMPHOPS:* 192.168.0.1 192.168.1.1 100.73.43.4
host-132.12.32.167.ucom.com
host-132.12.111.ucom.com
36.134.67.189 216.239.78.11
Sof02s32inf14.1e100.net
*HTTP:* 192.168.3.1:433-->92.28.211.234:80
*Http:* 192.168.625-->92.28.211.455:80
*Http:* 192.168.817-->92.28.211.8:971
*Upd:* 192.168452-->92.28.211:7265288
*Tcp:* 192.168.682-->92.28.211:62227.7
*Tcp:* 192.168.725-->92.28.211:67wu2
*Tcp:* 192.168.629-->92.28.211.167:8615
*EXTERNAL MAC:* 6U:77:89:ER:O4
*MODEM JUMPS:* 64`;
    
    conn.sendMessage(m.chat, { text: doxeo, edit: key });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



if (command == 'ruletas' || command == 'ruleta' || command == 'suerte') { 
if (!global.db.data.chats[m.chat].game2) return m.reply(`⚠️ 𝙀𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤𝙨 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙥𝙤𝙧 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙙𝙚𝙡 𝙂𝙧𝙪𝙥𝙤 𝙨𝙞 𝙩𝙪 𝙚𝙧𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙮 𝙦𝙪𝙞𝙚𝙧𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤 𝙪𝙨𝙖𝙧: #game2 on`) 
const date = global.db.data.users[m.sender].juegos + 10800000; //10800000 = 3 hs 
if (new Date - global.db.data.users[m.sender].juegos < 10800000) return m.reply(`『⏰』𝙀𝙨𝙥𝙚𝙧𝙖 : ${msToTime(date - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙟𝙪𝙜𝙖𝙧`) 
if (global.db.data.users[m.sender].exp < 0 || global.db.data.users[m.sender].money < 0 || global.db.data.users[m.sender].limit < 0) return m.reply(`🚩 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 🪙`)
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000) 
const exp = Math.floor(Math.random() * 8500)
const diamond = Math.floor(Math.random() * 130)
const money = Math.floor(Math.random() * 8500)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5']; 
let ruleta = rulet[Math.floor(Math.random() * 5)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`😺 𝙌𝙐𝙀 𝘽𝙐𝙀𝙉𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 🐞🍀\n*𝙊𝙗𝙩𝙞𝙚𝙣𝙚 :* ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`😿 𝙉𝙊𝙊 𝙀𝙎𝙏𝘼𝙎 𝘿𝙀 𝙈𝘼𝙇𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 𝘼𝘾𝘼𝘽𝘼 𝘿𝙀 𝙋𝙀𝙍𝘿𝙀𝙍 : ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`😹 𝙀𝙎𝙏𝘼𝙎 𝙍𝙀 𝙈𝘼𝙇𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙏𝙊 𝙀𝙇 𝙋𝙊𝘿𝙀𝙍 𝘼𝙃𝙊𝙍𝘼 𝙔𝘼 𝙉𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙅𝙊𝘿𝙀𝙍𝙏𝙀 😹😹😹`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote').catch(m.reply(`😼 𝙀𝙎𝙏𝘼 𝙍𝙀 𝘽𝙐𝙀𝙉𝘼 😉, 𝘼𝙝𝙤𝙧𝙖 𝙚𝙧𝙚𝙨 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧, 𝙚𝙡 𝙦𝙪𝙚 𝙦𝙪𝙞𝙩𝙖𝙧 𝙖𝙙𝙢𝙞𝙣𝙨 𝙚𝙨 𝙛𝙖𝙣 𝙙𝙚 𝙠𝙪𝙣𝙤 😂`)) 
if (ruleta === 'text5') return m.reply(`𝙒𝙐𝙐𝙐 𝙎𝙀𝙉̃𝙊𝙍 𝙀𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝙀𝙍𝙏𝙀, 𝙑𝘼𝙔𝘼𝙍 𝘼 𝙅𝙐𝙂𝘼𝙍 𝘼𝙇 𝘾𝘼𝙎𝙄𝙉𝙊 🎰\n*𝙂𝘼𝙉𝘼𝙍𝙏𝙀 :* ${diamond} 💎`).catch(global.db.data.users[m.sender].diamond += diamond) 
}}

async function game2(m, command, sendImageAsUrl, pickRandom) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
if (command == 'verdad') { 
sendImageAsUrl('https://telegra.ph/file/2a2a3b03697dd33bfbb95.jpg', `𝘏𝘢𝘴 𝘦𝘴𝘤𝘰𝘨𝘪𝘥𝘰 *𝘝𝘌𝘙𝘋𝘈𝘋*\n\n╱╲❀╱╲╱╲❀╱╲╱╲❀╱╲\n◆ ${pickRandom(global.verdad)}\n╲╱❀╲╱╲╱❀╲╱╲╱❀╲╱`)}

if (command == 'reto') { 
sendImageAsUrl('https://i.ibb.co/gzfDZLv/unnamed.jpg', `𝘏𝘢𝘴 𝘦𝘴𝘤𝘰𝘨𝘪𝘥𝘰 *𝘙𝘌𝘛𝘖*\n\n╱╲❀╱╲╱╲❀╱╲╱╲❀╱╲\n◆ ${pickRandom(global.reto)}\n╲╱❀╲╱╲╱❀╲╱╲╱❀╲╱`)}

if (command == 'piropo') {
m.reply(`╱╲❀╱╲╱╲❀╱╲╱╲❀╱╲\n◆ ${pickRandom(global.piropo)}\n╲╱❀╲╱╲╱❀╲╱╲╱❀╲╱`)}}

async function game3(m, command, conn, args, prefix, msToTime, text, body, from, sender, quoted, target, bot, participant, pushname, astro) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
if (command == 'slot' || command == 'apuesta') { 
if (!args[0]) return m.reply(`${lenguaje.juegos.text20}\n*${prefix + command} 100*`)
if (isNaN(args[0])) return m.reply(`${lenguaje.juegos.text20}\n*${prefix + command} 100*`)
const apuesta = parseInt(args[0]);
const users = global.db.data.users[m.sender];
const time = users.lastslot + 30000;//30 seg
if (new Date - users.lastslot < 30000) return m.reply(`*${lenguaje.juegos.text21} ${msToTime(time - new Date())} ${lenguaje.juegos.text22}*`) 
if (apuesta < 100) return m.reply(lenguaje.juegos.text23) 
if (users.exp < apuesta) {
return m.reply(lenguaje.juegos.text24)}
const emojis = ['💎', '🪙', '🌀'];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
const x = [];
const y = [];
const z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `${lenguaje.juegos.text25} +${apuesta + apuesta} ᥊⍴`;
users.exp += apuesta += apuesta += apuesta
} else if (a == b || a == c || b == c) {
end = `${lenguaje.juegos.text26}`;
users.exp += 20;
} else {
end = `${lenguaje.juegos.text27} -${apuesta} ᥊⍴`;
users.exp -= apuesta;
}
users.lastslot = new Date * 1;

var hawemod = [
`${x[1]} : ${y[0]} : ${z[0]}
${z[0]} : ${y[1]} : ${x[1]}
${z[1]} : ${x[2]} : ${y[0]}`, 
`${x[0]} : ${y[1]} : ${z[2]}
${y[1]} : ${z[2]} : ${x[1]}
${x[2]} : ${y[0]} : ${z[0]}`, 
`${x[1]} : ${y[2]} : ${z[1]}
${y[0]} : ${z[0]} : ${x[2]}
${x[2]} : ${y[1]} : ${z[0]}`
]

const maxIterations = 25;
const arrayCasuale = generaArrayCasuale(hawemod, maxIterations);

const array = [...arrayCasuale, ];
  
let { key } = await conn.sendMessage(m.chat, { text: `🕹` }, { quoted: m });

for (let i = 0; i < maxIterations; i++) {

await conn.sendMessage(m.chat, { text: `•╼≪ *🎰 | SLOTS | 🎰* ≫╼•\n` + `${array[i]}` + `\n•╼≪ *🎰 | SLOTS | 🎰* ≫╼•`, edit: key }, { quoted: m });
await new Promise((resolve) => setTimeout(resolve, 1))}
  
return await conn.sendMessage(m.chat, {text: `   •╼≪ *🎰 | SLOTS | 🎰* ≫╼•
      ${x[0]} : ${y[0]} : ${z[0]}
      ${x[1]} : ${y[1]} : ${z[1]}
      ${x[2]} : ${y[2]} : ${z[2]}
  •╼≪ *🎰 | SLOTS | 🎰* ≫╼•\n\n${end}`, edit: key}, {quoted: m})}

if (command == 'fake') { 
var gh = body.slice(11);
var mentioned = m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
if (mentioned && target && bot) {
var quotedMessage = {
key: {
fromMe: false,
participant: mentioned
},
message: {
conversation: target
}};
var sendMessageOptions = {
text: `${bot}`,
quoted: quotedMessage
};
conn.sendMessage(m.chat, sendMessageOptions, { quoted: quotedMessage });
} else {
conn.sendMessage(m.chat, { text: `${lenguaje.lengua.ejem} ${prefix + command} @tag|puto|😯`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}}

if (command == 'ppt' || command == 'suit') { 
if (!text) return m.reply(`${lenguaje.juegos.text28}`) 
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 EMPATE! 🤝\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIOS +500 XP`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 2000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +2000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO ! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}}}}

module.exports = {game, game2, game3}

function generaArrayCasuale(array, ripetizioni) {
  let risultato = [];
  for (let i = 0; i < ripetizioni; i++) {
    risultato = risultato.concat(array);
  }
  return risultato;
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

global.verdad = ["¿Alguna vez te ha gustado alguien? ¿Cuánto tiempo?", "¿cual es tu mas grande miedo?", "¿Alguna vez te ha gustado alguien y has sentido a esa persona como tú también?", "¿Cuál es el nombre del exnovio de tu amiga que una vez te gustó en secreto?", "¿Alguna vez has robado el dinero de tu madre/padre? ¿La razón?", "lo que te hace feliz cuando estás triste", "¿Alguna vez has sido amor no correspondido? ¿Si has estado con quién? ¿Cómo se siente brou?", "¿Alguna vez has tenido una aventura con alguien?", "lo más temido", "quién es la persona más influyente en tu vida", "qué orgullo tienes este año", "quién es la persona que puede enfermarte", "quien es la persona que alguna vez te puso cachondo", "(para los musulmanes) ¿nunca has rezado en todo el día?", "¿Quién es el más cercano a su tipo de pareja ideal aquí", "¿Con quién te gusta jugar?", "¿Alguna vez has rechazado a alguien? ¿Por qué?", "Menciona el incidente que te hizo daño y que aún recuerdas", "¿Qué logros has obtenido este año?", "¿Cuál es tu peor hábito en la escuela?", "¿Qué programa de televisión odias más? ¡Da la razón!", "¿Cuál es el vestido más feo (en su opinión) que ha usado y cuándo lo usó?", "¿Qué es lo peor (chisme) que has dicho sobre tu amigo?","¿Qué es lo más vergonzoso de ti?"," ¿Qué es lo primero que ves cuando miras a otra persona (del sexo opuesto)?", "¿Qué es lo primero que te viene a la mente cuando te miras al espejo?","¿Que es lo mas tonto que has hecho en tu vida?"," ¿Cuál es el peor sueño que has tenido?"," ¿Cuál es el sueño más loco que puedes recordar hasta ahora?", " ¿Cuál es tu peor rasgo en tu opinión?", " ¿Qué rasgo te gustaría cambiar de ti mismo?", " ¿Qué rasgo te gustaría cambiar en tu amigo?", " ¿Qué harías si tu novio te dijera que tienes mala nariz o dedos?", " ¿En qué piensas antes de dormir? ej: fantasear con una pareja, etc.", "¿Qué crees que se destaca más de ti?"," ¿Qué parte del cuerpo de tu amigo te gusta más y desearías tener?", "¿Qué parte de tu cuerpo odias más?"," De todas las clases de la escuela, ¿a qué clase le gustaría ingresar y qué clase le gustaría evitar?",  "¡Describe a tu amigo más cercano!"," ¡Descríbete en una palabra!"," ¿Qué películas y canciones te han hecho llorar?", " ¿Qué es algo que has mantenido en secreto hasta ahora y nadie lo ha descubierto?", " ¿Qué es lo más romántico que alguien (del sexo opuesto) te ha hecho o regalado?", "¿Qué es lo más desagradable que has experimentado?", " Si nacieras de nuevo y tuvieras que ser uno de tus amigos, ¿a quién elegirías ser?", " Si tienes superpoder, ¿qué quieres hacer?", " Si el apocalipsis llega pronto, ¿qué haces?", " Si te pidieran que te sometieras a una cirugía plástica con una muestra de rostro de tu compañero de clase, ¿a quién imitarías?", " Alguna vez has robado algo?", "¿Cuándo fue la última vez que lloraste y por qué?", " ¿Cuáles son tus habilidades especiales?", " ¿Cómo te puede gustar la persona que te gusta?", " ¿Cuál crees que es un buen rasgo de tu amigo más cercano que él o ella no conozca?", " ¿Con qué tipo de persona te gustaría casarte algún día?", " En tu opinión, ¿cuál es el trabajo más atractivo para el amigo que está sentado a tu lado? ¿Y por qué?", " ¿Con quién quieres intercambiar por un día? (amigos más cercanos que ambos conocen) y por qué", " ¿Alguna vez has esperado en secreto que la relación de alguien con su novia se rompiera? ¿Quién?", " ¿Prefiere AMIGAS o AMIGOS? ¿Por qué?", " ¿Qué cita recuerdas más y te gusta?", " ¿Qué secretos nunca les has contado a tus amigos hasta ahora?", " ¿Quiénes son sus verdaderos modelos a seguir?", " ¿Cuál de tus amigos crees que es matre?", " ¿Cuál de tus amigos crees que tiene menos corte de pelo?", " ¿Cuál de tus amigos es el más fotogénico?", " ¿Quién es tu mejor ex? ¡¿Y por qué rompieron ?!", " ¿Cómo se llama el artista con el que hablaste en secreto?", " ¿Cómo se llamaba el profesor que te gustaba?", " ¿Cuál es el nombre de la exnovia de tu amigo que te ha gustado en secreto?", " ¿Cuál es el nombre de la persona (del sexo opuesto) que crees que sería divertido ser novia?", " ¿Cuál es el nombre de la persona que odias, pero crees que le gustas a esa persona (no necesariamente del sexo opuesto)?", " ¿Cuál es el nombre de la persona a la que has estado señalando en secreto?", " ¿Quién es la persona (del sexo opuesto) que más se te pasa por la cabeza?", " ¿Quién es la persona más molesta entre tus amigos? ¡la razón!", " ¿A quién de tus amigos crees que debería renovarse?", " ¿Quién está más cerca de tu pareja ideal aquí?", "Padre o madre", "La parte del cuerpo que no te gusta", "¿Alguna vez has hecho trampa?", "¿Alguna vez te han besado?", "¿Qué es lo primero que harías si te despertaras como del sexo opuesto?", "¿Alguna vez has dejado que alguien más se meta en problemas por algo que hiciste?", "¿Qué es lo más embarazoso que has hecho en tu vida?", " ¿Cuál es la razón más ridícula por la que has roto con alguien?", " ¿Cuál es el peor hábito que tienes?", " ¿Cuál crees que es tu mejor característica? ¿Y que es lo peor?", " ¿Cuál es la cosa más valiente que has hecho?", " ¿Cuándo fue la última vez que mojaste la cama?", " ¿Con qué sueñas más sobre dormir?", " Si va a ganar dinero ilegalmente, ¿cómo lo hace?", " ¿Qué cosas infantiles sigues haciendo?", " ¿Qué es lo que más te impresiona?", " Si se le permitiera usar solo 3 palabras durante el resto de la noche a partir de ahora, ¿cuál sería?", " Si fueras un dictador, ¿qué ley promulgarías primero?", "Si vivieras durante la era nazi, ¿quién serías?", "¿Cuál fue la experiencia más vergonzosa en la escuela o el año pasado?", "¿Cuál es el mayor error de tu vida?", "¿Qué no harías nunca, incluso si supieras que solo te quedan 12 horas de vida?", " ¿Qué delitos ha cometido?", " Cuéntame un secreto de tu infancia.", " ¿Cuál es su mayor representante (secreto)?", " ¿Qué quieres hacer con (x persona), si luego puedes borrar su memoria (él,…)?", " ¿Qué es lo peor que le has hecho a alguien?", " ¿Quién te gusta más?", "¿Alguna vez te has enamorado de alguno de los presentes?", " Si fueras un vampiro, ¿a cuál de nosotros morderías ahora?", " ¿Ha defecado alguna vez en público?", " ¿Cuál es tu fantasía más oscura?", " ¿Qué es lo mejor que has tenido con alguien más?", " ¿Cuál es el mayor desvío para ti?", " ¿Qué es lo que más te gusta de tu cuerpo y qué es lo más feo?", " ¿A quien te gustaría ver desnuda?", " ¿Quién en esta ronda puede enamorarte?", " ¿Alguna vez has tenido un sueño erótico donde sucedió alguien de este grupo?", " Si te vas a tatuar en el área genital, ¿que habrá allí?", " ¿Qué es más importante en una relación: el sexo o el amor?", " ¿Crees que el sexo es genial, bueno, bueno, divertido a veces, o realmente no te importa?", " ¿Qué te hace realmente amar?", "¿Cuántas veces a la semana / mes tiene relaciones sexuales y con qué frecuencia desea tener relaciones sexuales?", " ¿Con cuántas parejas sexuales te has acostado?"," ¿Qué parte del cuerpo te hace más?", " ¿Cómo, dónde y con quién estuviste primero?", " ¿Qué importancia tienen para ti los juegos previos prolongados?", " ¿Qué debe hacer un hombre o una mujer para seducirte?", " ¿Alguna vez has tenido sexo con un buen amigo?", " ¿Alguna vez ha tenido relaciones sexuales con alguno de estos grupos, excepto con su pareja?", "¿Qué animal se adapta mejor a ti y por qué?", " ¿Cuál es tu peor cita?", " ¿A quién quieres besar ahora?", " ¿Cuál es tu oscura fantasía secreta?", " ¿Prefieres tatuarte el culo o perforarte la lengua?", " ¿Eres siempre leal?", " ¿Tienes un enamoramiento adolescente?", " ¿De qué persona te enamoraste?", " ¿Con qué celebridad te gustaría salir?", " ¿Cuál fue el momento más embarazoso de tu vida?", " ¿Qué jugador tiene la mano más hermosa?", " ¿Dónde fue tu primer beso?", " ¿A quién del grupo te gustaría besar más?", " ¿Quién en la mesa es quizás el más divertido?", " ¿Cuál es el mayor error de tu vida?", " ¿Te pasó algo vergonzoso en una cita?", " ¿Ha estado alguna vez en contacto con drogas?", " ¿A qué persona quieres besar ahora?", " ¿Cuándo fue la última vez que estuvo borracho?", " ¿Alguna vez has hecho trampa en un examen escolar?", " ¿Has robado algo en el pasado?", " ¿Roncas por la noche?", " ¿Cuales tu cancion favorita?", " ¿Con qué jugadores comerciará durante 1 semana y por qué?", " Te mudaste a una isla desierta, ¿a quién te llevaste de aquí?", " ¿A que temes más?", " ¿Dónde te afeitas en todas partes?", "¿Tienes un apodo?", " ¿Miras en el baño antes de lavarte?", "¿Quién te dio la peor angustia?", " Cuantas veces te has besado", "¿Qué es lo más embarazoso que te ha pasado?", "¿Cuántos chicas/os has besado?", "¿De quien estas enamorado(a) ?", "Que estrella te gusta", "¿Empezaste algo con XY (insertar nombre)?", "Alguna vez has robado algo?"] 

global.reto = ["comer 2 cucharadas de arroz sin guarniciones, si se está arrastrando se puede beber", "derrama gente que te hace pausar", "llama a crush ahora y envíarle quiero terminar ahora y manda cartura al grupos", "soltar solo emoticón cada vez que escribes en grupo durante 1 día.", "di ¡Bienvenido a Quién Quiere Ser Millonario! a todos los grupos que tengas", "canta el coro de la última canción que tocaste", "Golpea la mesa (que está en casa) hasta que te regañen por hacer ruido", "Dile a la gente al azar _Me acaban de decir que primero era tu gemelo, nos separamos, luego me hice una cirugía plástica. Y esto es lo más ciyusss_", "menciona el nombre de tu ex", "¡haz 1 rima con (teta, culo) para los miembros grupo 😂!", "envía el contacto de tu novia/o al grupo","Chatea con personas al azar con lenguaje cheto y luego enviar aquí", "cuenta tu propia versión de las cosas vergonzosas", "etiqueta a la persona que odias","Fingir estar poseído, por ejemplo: poseído por perro, poseído por saltamontes, poseído por refrigerador, etc.","cambiar nombre a *SOY BURRO* por 24 horas", "grita *SOY GAY* frente a tu casa", "¡dime tu tipo de novio!", "Di *estoy enamorado de ti, ¿quieres ser mi novia?* al sexo opuesto, la última vez que chateaste (enviar captura), espera a que te responda, si es así, déjalo aquí", "Manda un audio cantado la vaca loca", "bromea con tu ex y di *te amo, por favor vuelve* ¡sin decir atrévete!", "cambiar tu nombre a *Soy gay* por 5 horas", "ponerte de foto de perfil la primera que salga el tu galeria, durante 3 días", "enviar una nota de voz diciendo ¿puedo llamarte bebé?", "¡Di *ERES TAN HERMOSO, NO MIENTEN* a los chicos!", "dile a un miembro del grupo randow (TE AMO)", "Actúa como una gallina delante de tus padres", "Toma un libro al azar y lee una página en voz alta, y envíalo aquí", "Abre la puerta de tu casa y aúlla como un lobo durante 10 segundos", "Tómate una selfie vergonzosa y pégala en tu foto de perfil", "Que el grupo elija una palabra y una canción conocida. Tienes que cantar esa canción y enviarla en nota de voz", "Cuéntame la historia más triste que conozcas", "haz un video bailado (dame tu cosita) y ponlo en estado durante 5 minutos", "Muestre las últimas cinco personas a las que envió mensajes de texto y lo que decían los mensajes", "ponga su nombre completo en el estado durante 5 horas", "haz un video de baile corto sin ningún filtro solo con música y ponlo en tu estado durante 5 horas", "Llama a tu mejor amiga, perra", "pon tu foto sin filtro en tu estado durante 10 minutos", "di que amo a LoliBot en nota de voz 😂", "Envíale un mensaje a tu ex y dile que todavía me gustas", "Llama a Crush/novia ahora y haz una captura de pantalla aquí", "Accede al chat personal de uno de los miembros del grupo y dile (puto/a) 😂", "dile ERES HERMOSO/GUAPO a una de las personas que está en la parte superior de tu lista de favoritos o la primera persona en tu lista de chat", "pon la foto de tu enamorado en el estado con el título: Tiene pito corto 😂", "cambio de nombre a SOY GAY durante 5 horas", "chatea con cualquier contacto en whatsapp y di que seré tu novio/novia durante 5 horas", "enviar una nota de voz que diga que estoy enamorado de ti, ¿quieres ser mi novia/novio o no? a cualquier persona aleatoria del grupo (si eres una chica, elige un chico, si un chico elige una chica", "Golpea tu trasero apenas envía el sonido de una bofetada a través de la nota de voz 🤣", "indique su tipo de novia/novia y envíe la foto aquí con el título, la niña/niño más feo del mundo", "grita bravooooooooo y envía aquí a través de nota de voz", "toma tu cara y envíala aquí", "Envía tu foto con un pie de foto, soy lesbiana", "grita cabrón delante de tu mamá/papá", "cambiar el nombre a soy idiota por 3 horas", "di que amor al propietario del bot elrebelde por audio 😆", "envía la foto de tu novia/novia aquí", "haga cualquier video de desafío de baile tiktok y póngalo en estado, puede eliminarlo después de 5 horas", "rompe con tu mejor amigo durante 5 horas sin decirle que es un reto", "dile a uno de tus amigos que lo amas y que quieres casarte con él/ella, sin decirle que es un desafío", "Escriba Me siento cachondo y póngalo en estado, puede eliminarlo solo después de 5 horas", "escriba soy lesbiana y póngalo en estado, puede eliminarlo solo después de 5 horas", "ponga el nombre de su padre en el estado durante 5 horas", "envíe palabras abusivas en cualquier grupo, excepto en este grupo, y envíe una prueba de captura de pantalla aquí"]
     
global.piropo = ['Me gustaría ser papel para poder envolver ese bombón.', 'Eres como wifi sin contraseña, todo el mundo te busca', 'Quién fuera bus para andar por las curvas de tu corazón.', 'Quiero volar sin alas y salir de este universo, entrar en el tuyo y amarte en silencio.', 'Quisiera ser mantequilla para derretirme en tu arepa.', 'Si la belleza fuera pecado vos ya estarías en el infierno.', 'Me Gustaría Ser Un Gato Para Pasar 7 Vidas A Tu Lado.', 'Robar Está Mal Pero Un Beso De Tu Boca Sí Me Lo Robaría.', 'Qué Hermoso Es El Cielo Cuando Está Claro Pero Más Hermoso Es El Amor Cuando Te Tengo A Mi Lado.', 'Bonita, Camina Por La Sombra, El Sol Derrite Los Chocolates.', 'Si Fuera Un Correo Electrónico Serías Mi Contraseña.', 'Quisiera que fueses monte para darte machete', 'Perdí mi número de teléfono ¿Me das el tuyo?', '¿Cómo te llamas para pedirte de regalo a Santa Claus?', ' En el cielo hay muchas estrellas, pero la más brillante está en la Tierra y eres tú.', '¿Acaba de salir el sol o es la sonrisa que me regalas hoy?', 'No es el ron ni la cerveza, eres tú quien se me ha subido a la cabeza', 'Si hablamos de matemáticas eres la suma de todos mis deseos.', 'Pareces Google porque tienes todo lo que yo busco.', 'Mi café favorito, es el de tus ojos.', 'Quiero ser photoshop para retocarte todo el cuerpo.', 'Quisiera que fueras cereal, para cucharearte en las mañanas.', 'Quien fuera hambre, para darte tres veces al día.'];
     
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
