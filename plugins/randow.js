require('../main.js') 
const fs = require("fs")
const chalk = require("chalk");
const axios = require('axios')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 

async function randow(m, sender, command, sendImageAsUrl, pickRandom, conn) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (global.db.data.users[m.sender].banned) return
if (command == 'memes') {
let hispamemes = require("hispamemes") 
const meme = hispamemes.meme()
conn.sendButton(m.chat, '🤣', botname, meme, [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)
//sendImageAsUrl(meme, '🤣')
m.react('😆')}
if (command == 'loli') {
var loli = JSON.parse(fs.readFileSync('./src/randow/loli.json'))
var loliresult = pickRandom(loli)
conn.sendButton(m.chat, `Soy tu loli 🤩`, botname, loliresult, [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)
//sendImageAsUrl(loliresult)
}
if (command == 'lolivid') {
var lolivid = JSON.parse(fs.readFileSync('./src/randow/lolivid.json'))
var lolividresult = pickRandom(lolivid)
conn.sendButton(m.chat, `Soy tu loli 🤩`, botname, lolividresult, [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)
//conn.sendMessage(m.chat, { video: { url: lolividresult }, caption: `💕💕💕💕` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
if (command == 'neko') {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = pickRandom(nek)
//sendImageAsUrl(neko)
conn.sendButton(m.chat, `Uwu`, botname, neko, [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)}
if (command == 'akira' || command == 'akiyama' || command == 'anna' || command == 'asuma' || command == 'ayuzawa' || command == 'boruto' || command == 'chiho' || command == 'chitoge' || command == 'deidara' || command == 'erza' || command == 'elaina' || command == 'eba' || command == 'emilia' || command == 'hestia' || command == 'hinata' || command == 'inori' || command == 'isuzu' || command == 'itachi' || command == 'itori' || command == 'kaga' || command == 'kagura' || command == 'kaori' || command == 'keneki' || command == 'kotori' || command == 'kurumi' || command == 'madara' || command == 'mikasa' || command == 'miku' || command == 'minato' || command == 'naruto' || command == 'nezuko' || command == 'sagiri' || command == 'sakura' || command == 'sasuke' || command == 'cosplay') {
let a = JSON.parse(fs.readFileSync(`./src/randow/anime-${command}.json`))
var result = pickRandom(a)
conn.sendButton(m.chat, `${command}`, botname, result, [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)
//sendImageAsUrl(result, `${command}`)
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)}
if (command == 'blackpink') {
conn.sendButton(m.chat, 'blackpink', botname, "https://delirius-image-random.vercel.app/api/all", [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)
//sendImageAsUrl("https://delirius-image-random.vercel.app/api/all")
}
if (command == 'navidad') {
const res = (await axios.get(`https://raw.githubusercontent.com/elrebelde21/NovaBot-MD/master/src/randow/navidad.json`)).data;
const result = await res[Math.floor(res.length * Math.random())];
//sendImageAsUrl(result, `${command}`)
conn.sendButton(m.chat, `${command}`, botname, result, [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)
}
if (command == 'china') {
conn.sendButton(m.chat, `${command}`, botname, "https://delirius-api.vercel.app/api/china", [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)
//sendImageAsUrl("https://delirius-api.vercel.app/api/china")
}}

async function randow2(conn, m, command, text, sender, pushname) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (global.db.data.users[m.sender].banned) return
if (command == 'horny') {
let who = conn
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/horny', { 
avatar: await conn.profilePictureUrl(m.chat, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
})}, caption: `${lenguaje.ramdow.text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)}
if (command == 'simp') {
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/simpcard', { 
avatar: await conn.profilePictureUrl(m.chat, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
})}, caption: `${lenguaje.ramdow.text2}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)}
if (command == 'lolice') {
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/lolice', {
 avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })}, caption: `${lenguaje.ramdow.text3}`, mentions: [who] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)}
if (command == 'comentar' || command == 'comment') {
if (!text) return m.reply(lenguaje.grupos.text) 
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/youtube-comment', { 
avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
comment: text, 
username: pushname,
})}, caption: `${lenguaje.ramdow.text4}`, mentions: [m.sender] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)}}

module.exports = {randow, randow2}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})