const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, toAudio } = require('./fuctions2.js')
const { default: makeWASocket, WAMessageStubType, relayMessage, areJidsSameUser, generateWAMessage, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, getContentType, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const fs = require('fs')
const child_process = require('child_process')
const ffmpeg = require('fluent-ffmpeg')
const Crypto = require('crypto')
const axios = require('axios')
const pino = require('pino')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const util = require('util')
const jimp = require('jimp')
const { defaultMaxListeners } = require('stream')
const FileType = require("file-type")
const path = require("path")
const os = require('os') // Proporciona información del sistema operativo 
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const PhoneNumber = require('awesome-phonenumber')
const { en, es, id, ar } = require('./idiomas/total-idiomas.js') 

function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var días = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
var resultado = "";
if (días !== 0) {
resultado += días + " días, ";
}
if (horas !== 0) {
resultado += horas + " horas, ";
}
if (minutos !== 0) {
resultado += minutos + " minutos, ";
}
if (segundos !== 0) {
resultado += segundos + " segundos";
}
return resultado;
}

exports.pickRandom = async (list) => {
return list[Math.floor(list.length * Math.random())]
}  

//información del usuario
exports.getUserProfilePic = async (conn, sender) => {
try {
const userProfilePicUrl = await conn.profilePictureUrl(sender, "image");
return await getBuffer(userProfilePicUrl);
} catch {
return fs.readFileSync("./media/Menu1");
}}

//
exports.getUserBio = async (conn, sender) => {
try {
const statusData = await conn.fetchStatus(sender);
return statusData.status;
} catch {
return "";
}}

//Tiempo de Actividad del bot
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
//conn.sendReadReceipt(from,sender,[m.key.id])
        
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

exports.getBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (err) {
return err
}
}

exports.fetchJson = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: 'GET',
url: url,
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
},
...options
})
return res.data
} catch (err) {
return err
}
}

const downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
let extension = mime.split('/')[1]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
        
return buffer
}

exports.getSizeMedia = (path) => {
return new Promise((resolve, reject) => {
if (/http/.test(path)) {
axios.get(path).then((res) => {
let length = parseInt(res.headers['content-length'])
let size = exports.bytesToSize(length, 3)
if(!isNaN(length)) resolve(size)
})
} else if (Buffer.isBuffer(path)) {
let length = Buffer.byteLength(path)
let size = exports.bytesToSize(length, 3)
if (!isNaN(length)) resolve(size)
} else {
reject('error')
}
})
}

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

exports.unixTimestampSeconds = unixTimestampSeconds

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " Horas " + minutes + " Minutos " + seconds + " Seg "
}

exports.msToTime = msToTime

exports.generateMessageTag = (epoch) => {
let tag = (0, exports.unixTimestampSeconds)().toString();
if (epoch)
tag += '.--' + epoch; // attach epoch if provided
return tag;
}

exports.processTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

exports.getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.fetchJson = async (url, options) => {
try {
options ? options : {}
const res = await axios({method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36' }, ...options })
return res.data
} catch (err) {
return err
}
}

exports.runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);

var dDisplay = d < 10 ? String("0" + d) : d >= 10 ? String(d) : "00"; 
var hDisplay = h < 10 ? String("0" + h) : h >= 10 ? String(h) : "00"; 
var mDisplay = m < 10 ? String("0" + m) : m >= 10 ? String(m) : "00"; 
var sDisplay = s < 10 ? String("0" + s) : s > 10 ? String(s) : "0"; 
dDisplay = dDisplay.replace(/1/g, "1") 
dDisplay = dDisplay.replace(/2/g, "2") 
dDisplay = dDisplay.replace(/3/g, "3") 
dDisplay = dDisplay.replace(/4/g, "4") 
dDisplay = dDisplay.replace(/5/g, "5") 
dDisplay = dDisplay.replace(/6/g, "6") 
dDisplay = dDisplay.replace(/7/g, "7") 
dDisplay = dDisplay.replace(/8/g, "8") 
dDisplay = dDisplay.replace(/9/g, "9") 
dDisplay = dDisplay.replace(/1/g, "1") 
dDisplay = dDisplay.replace(/2/g, "2") 
dDisplay = dDisplay.replace(/3/g, "3") 
dDisplay = dDisplay.replace(/4/g, "4") 
dDisplay = dDisplay.replace(/5/g, "5") 
dDisplay = dDisplay.replace(/6/g, "6") 
dDisplay = dDisplay.replace(/7/g, "7") 
dDisplay = dDisplay.replace(/8/g, "8") 
dDisplay = dDisplay.replace(/9/g, "9") 
dDisplay = dDisplay.replace(/1/g, "1") 
dDisplay = dDisplay.replace(/2/g, "2") 
dDisplay = dDisplay.replace(/3/g, "3") 
dDisplay = dDisplay.replace(/4/g, "4") 
dDisplay = dDisplay.replace(/5/g, "5") 
dDisplay = dDisplay.replace(/6/g, "6") 
dDisplay = dDisplay.replace(/7/g, "7") 
dDisplay = dDisplay.replace(/8/g, "8") 
dDisplay = dDisplay.replace(/9/g, "9") 
dDisplay = dDisplay.replace(/1/g, "1") 
dDisplay = dDisplay.replace(/2/g, "2") 
dDisplay = dDisplay.replace(/3/g, "3") 
dDisplay = dDisplay.replace(/4/g, "4") 
dDisplay = dDisplay.replace(/5/g, "5") 
dDisplay = dDisplay.replace(/6/g, "6") 
dDisplay = dDisplay.replace(/7/g, "7") 
dDisplay = dDisplay.replace(/8/g, "8") 
dDisplay = dDisplay.replace(/9/g, "9") 
dDisplay = dDisplay.replace(/0/g, "0") 
hDisplay = hDisplay.replace(/0/g, "0") 
mDisplay = mDisplay.replace(/0/g, "0") 
sDisplay = sDisplay.replace(/0/g, "0") 

return dDisplay + ":" + hDisplay + ":" + mDisplay + ":" + sDisplay;
}

exports.clockString = (ms) => {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.buffergif = async (image) => {
const filename = `${Math.random().toString(36)}`
await fs.writeFileSync(`./tmp/${filename}.gif`, image)
child_process.exec(`ffmpeg -i ./tmp/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./tmp${filename}.mp4`)
await sleep(4000)
var buffer5  =  await  fs.readFileSync(`./tmp/${filename}.mp4`)
Promise.all([unlink(`./tmp/${filename}.mp4`), unlink(`./tmp/${filename}.gif`)])
return buffer5
}

exports.getTime = (format, date) => {
if (date) {
return moment(date).locale('id').format(format)
} else {
return moment.tz('Asia/Jakarta').locale('id').format(format)
}
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms)); // promises?
}

exports.formatDate = (n, locale = 'id') => {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}

exports.tanggal = (numer) => {
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
myDays = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']; 
var tgl = new Date(numer);
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy; 
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

exports.formatp = sizeFormatter({
std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2)
}

function delay(ms) {
return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

function format(...args) {
return util.format(...args)
}

exports.logic = (check, inp, out) => {
if (inp.length !== out.length) throw new Error('Input and Output must have same length')
for (let i in inp)
if (util.isDeepStrictEqual(check, inp[i])) return out[i]
return null
}

exports.generateProfilePicture = async (buffer) => {
const jimp = await jimp_1.read(buffer)
const min = jimp.getWidth()
const max = jimp.getHeight()
const cropped = jimp.crop(0, 0, min, max)
return {
img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
}
}

exports.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.getGroupAdmins = (participantes) => {
const admins = []
for (let i of participantes) {
i.admin ? admins.push(i.id) : ''
}
return admins
}

/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {Boolean} hasParent 
 */

exports.smsg = (conn, m, hasParent) => {
const pushname = m.pushName || "Sin nombre" 
conn.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

if (!m) return m
let M = proto.WebMessageInfo
let protocolMessageKey
    
if (m.key) {
m.messageInfo = M
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = m.fromMe ? (conn.user.id.split(":")[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
m.device = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
}

try {   
let isNumber = x => typeof x === 'number' && !isNaN(x)  // NaN in number?
let user = global.db.data.users[m.sender]  
if (typeof user !== 'object') global.db.data.users[m.sender] = {}  
if (user) {
if (!("premium" in user)) user.premium = false
if (!('registered' in user)) user.registered = false
if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!('Language' in user)) user.Language = m.Language
if (!('mensaje' in user)) user.mensaje = 0
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}
if (!isNumber(user.afkTime)) user.afkTime = -1  
if (!isNumber(user.joincount)) user.joincount = 1;
if (!('afkReason' in user)) user.afkReason = ''  
if (!('banned' in user)) user.banned = false
if (!isNumber(user.limit)) user.limit = 25
if (!isNumber(user.coins)) user.coins = 100
if (!isNumber(user.gato)) user.gato = 0
if (!isNumber(user.perro)) user.perro = 0
if (!isNumber(user.monos)) user.monos = 0
if (!isNumber(user.lobos)) user.lobos = 0
if (!isNumber(user.banco)) user.banco = 0
if (!isNumber(user.tridente)) user.tridente = 0
if (!isNumber(user.telefeno)) user.telefeno = 0
if (!isNumber(user.camara)) user.camara = 0
if (!isNumber(user.reloj)) user.reloj = 0
if (!isNumber(user.daga)) user.daga = 0
if (!isNumber(user.television)) user.television = 0
if (!isNumber(user.impresora)) user.impresora = 0
if (!isNumber(user.auto)) user.auto = 0
if (!isNumber(user.moto)) user.moto = 0
if (!isNumber(user.vehiculo)) user.vehiculo = 0
if (!isNumber(user.ambulancia)) user.ambulancia = 0
if (!isNumber(user.avion)) user.avion = 0
if (!isNumber(user.banco)) user.banco = 0
if (!isNumber(user.cohete)) user.cohete = 0
if (!isNumber(user.ovni)) user.ovni = 0
if (!isNumber(user.helicoptero)) user.helicoptero = 0
if (!isNumber(user.autobus)) user.autobus = 0
if (!isNumber(user.fuente)) user.fuente = 0
if (!isNumber(user.castillo)) user.castillo = 0
if (!user.premiumTime)  user.premiumTime = 0
if (!isNumber(user.warn)) user.warn = 0
if(!isNumber(user.money)) user.money = 300
if(!isNumber(user.health)) user.health = 100  
if(!isNumber(user.warn)) user.warn = 0  
if(!isNumber(user.exp)) user.exp = 5
if(!isNumber(user.role)) user.role = '🙊 NOVATO(A) :v'
if (!('autolevelup' in user)) user.autolevelup = true
if(!isNumber(user.level)) user.level = 0
if(!isNumber(user.armor)) user.armor = 0
if(!isNumber(user.sword)) user.sword = 0
if(!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.timebatalla)) user.timebatalla = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0
if(!isNumber(user.axe)) user.axe = 0
if(!isNumber(user.gems)) user.gems = 0
if(!isNumber(user.gold)) user.gold = 0
if(!isNumber(user.copper)) user.copper = 0
if (!isNumber(user.lastmiming)) user.lastmiming = 0
if (!isNumber(user.lastmiming2)) user.lastmiming2 = 0
if (!isNumber(user.crime)) user.crime = 0
if (!isNumber(user.robs)) user.robs = 0
if (!isNumber(user.spam)) user.spam = 0
if (!isNumber(user.spam2)) user.spam2 = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastslot)) user.lastslot= 0
if (!isNumber(user.lastcofre)) user.lastcofre = 0
if(!isNumber(user.diamonds)) user.diamonds = 0
if (!isNumber(user.juegos)) user.juegos = 0
if(!isNumber(user.swordDurability)) user.swordDurability = 100
if(!isNumber(user.pickaxeDurability)) user.pickaxeDurability = 100
if(!isNumber(user.axeDurability)) user.axeDurability = 100
if(!isNumber(user.armorDurability)) user.armorDurability = 100
if(!isNumber(user.lastMining)) user.lastMining = 0
if(!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.trash)) user.trash = 0
} else global.db.data.users[m.sender] = {  
afkTime: -1,  
afkReason: '',  
banned: false, 
limit: 25, 
warn: 0,
money: 300,
banco: 0,
registered: false,
premium: false, 
tridente: 0,
telefeno: 0,
camara: 0,
reloj: 0,
daga: 0,
television: 0,
impresora: 0,
auto: 0,
moto: 0,
vehiculo: 0,
ambulancia: 0,
avion: 0,
cohete: 0,
ovni: 0, 
helicoptero: 0,
autobus: 0,
fuente: 0,
castillo: 0,
joincount: 1,
lastclaim: 0,
name: m.name,
Language: 0,
mensaje: 0,
lastmiming: 0,
lastmiming2: 0,
timebatalla: 0,
age: -1,
regTime: -1,
afk: -1,
afkReason: '',
money: 0,  
lobos: 0,
monos: 0,
perro: 0,
gato: 0,
health: 100,  
prem: false,
premiumTime: 0,
warn: 0, 
exp: 0,
role: '🙊 NOVATO(A) :v',
autolevelup: true, 
level: 1,
armor: 0,
sword: 0,
pickaxe: 0,
axe: 0,
gems: 0,
gold: 0,
copper: 0,
diamonds: 0,
swordDurability: 100,
pickaxeDurability: 100,
axeDurability: 100,
armorDurability: 100,
lastMining: 0,
potion: 0,
rock: 0,
iron: 0,
trash: 0,
}  
let chats = global.db.data.chats[m.chat]  
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}  
if (chats) {  
if (!('antilink' in chats)) chats.antilink = false  
if (!('antiLink2' in chats)) chats.antiLink2 = false
if (!('AntiTwitter' in chats)) chats.AntiTwitter = false
if (!('AntiTiktok' in chats)) chats.AntiTiktok = false
if (!('AntiTelegram' in chats)) chats.AntiTelegram = false
if (!('AntiFacebook' in chats)) chats.AntiFacebook = false
if (!('AntInstagram' in chats)) chats.AntInstagram = false
if (!('AntiYoutube' in chats)) chats.AntiYoutube = false
if (!('isBanned' in chats)) chats.isBanned = false
if (!('modeadmin' in chats)) chats.modeadmin = false  
if (!('welcome' in chats)) chats.welcome = true
if (!('audios' in chats)) chats.audios = true
if (!('simi' in chats)) chats.simi = false
if (!('antiNsfw' in chats)) chats.antiNsfw = true
if (!('antispam' in chats)) chats.antispam = true
if (!('antiFake' in chats)) chats.antiFake = false
if (!('antiArabe' in chats)) chats.antiArabe = false
if (!('antitoxic' in chats)) chats.antitoxic = true
if (!('autosticker' in chats)) chats.autosticker = false
if (!('detect' in chats)) chats.detect = true
if (!('autoread' in chats)) chats.autoread = true
if (!('autolevelup' in chats)) chats.autolevelup = true
if (!('viewonce' in chats)) chats.viewonce = true 
if (!('game2' in chats)) chats.game2 = true 	
if (!('rules' in chats)) chats.rules = ''
} else global.db.data.chats[m.chat] = {  
antilink: false,  
antiLink2: false, 
AntiTwitter: false, 
AntiTiktok: false, 
AntiTelegram: false, 
AntiFacebook: false, 
AntInstagram: false, 
AntiYoutube: false, 
isBanned: false,   
modeAdmin: false,  
welcome: true, 
audios: true, 
simi: false, 
antiNsfw: true, 
antispam: true, 
antiFake: false,
antitoxic: true, 
autosticker: false, 
detect: true, 
autoread: false, 
autolevelup: true, 
viewonce: true, 
game2: true, 	
rules: ''
}
  
let setting = global.db.data.settings[conn.user.jid]
if (typeof setting !== 'object') global.db.data.settings[conn.user.jid] = {}  
if (setting) {  
if (!isNumber(setting.status)) setting.status = 0  
if (!('self' in setting)) setting.self = false;
if (!('autobio' in setting)) setting.autobio = true
if (!('jadibot' in setting)) setting.jadibot = true 
if (!('anticall' in setting)) setting.anticall = true
if (!('antiprivado' in setting)) setting.antiprivado = false;
} else global.db.data.settings[conn.user.jid] = {  
status: 0,  
self: false, 
autobio: true,
jadibot: true,
anticall: true, 
antiprivado: false
} 

global.db.data.sticker = global.db.data.sticker || {};
if (user) { 
  if (user.level <= 3) {
    user.role = '🌸 INICIANTE';
  } else if (user.level <= 6) {
    user.role = '🌷 NOVATA EMERGENTE';
  } else if (user.level <= 9) {
    user.role = '🌺 NOVATA AVANZADA';
  } else if (user.level <= 12) {
    user.role = '🌼 NOVATA EXPERTA';
  } else if (user.level <= 15) {
    user.role = '🌟 APRENDIZA BRILLANTE';
  } else if (user.level <= 18) {
    user.role = '✨ APRENDIZA ILUMINADA';
  } else if (user.level <= 21) {
    user.role = '💫 APRENDIZA DESTACADA';
  } else if (user.level <= 24) {
    user.role = '🌈 APRENDIZA EXCEPCIONAL';
  } else if (user.level <= 27) {
    user.role = '🌌 EXPLORADORA CURIOSA';
  } else if (user.level <= 30) {
    user.role = '🌙 EXPLORADORA AUDACIOSA';
  } else if (user.level <= 33) {
    user.role = '🌠 EXPLORADORA VALIENTE';
  } else if (user.level <= 36) {
    user.role = '🌺 EXPLORADORA INSPIRADORA';
  } else if (user.level <= 39) {
    user.role = '🦄 MAESTRA MAGNÍFICA';
  } else if (user.level <= 42) {
    user.role = '🦋 MAESTRA ENCANTADORA';
  } else if (user.level <= 45) {
    user.role = '🌹 MAESTRA SABIA';
  } else if (user.level <= 48) {
    user.role = '🌻 MAESTRA MAESTRA';
  } else if (user.level <= 51) {
    user.role = '⚡ GUERRERA FIERA';
  } else if (user.level <= 54) {
    user.role = '🔥 GUERRERA INDOMABLE';
  } else if (user.level <= 57) {
    user.role = '🌪️ GUERRERA VIBRANTE';
  } else if (user.level <= 60) {
    user.role = '🌊 SIRENA MÁGICA';
  } else if (user.level <= 63) {
    user.role = '🌈 SIRENA RADIANTE';
  } else if (user.level <= 66) {
    user.role = '🌌 SIRENA ENCANTADA';
  } else if (user.level <= 69) {
    user.role = '💎 REINA DEL MAR';
  } else if (user.level <= 72) {
    user.role = '👑 REINA DE LA NOCHE';
  } else if (user.level <= 75) {
    user.role = '👸 REINA DEL CIELO';
  } else if (user.level <= 78) {
    user.role = '💖 DIAMANTE RADIANTE';
  } else if (user.level <= 81) {
    user.role = '🌹 DIAMANTE BRILLANTE';
  } else if (user.level <= 84) {
    user.role = '🌸 DIAMANTE PRECIADO';
  } else if (user.level <= 87) {
    user.role = '✨ EXPERTA EN ANSI';
  } else if (user.level <= 90) {
    user.role = '🌟 MAESTRA EN ANSI';
  } else if (user.level <= 93) {
    user.role = '💫 GURÚ EN ANSI';
  } else if (user.level <= 96) {
    user.role = '🌺 SUPER PRO MAGISTRAL';
  } else if (user.level <= 99) {
    user.role = '🌟 SUPER PRO EXCELENTE';
  } else if (user.level <= 102) {
    user.role = '🌈 SUPER PRO INCREÍBLE';
  } else if (user.level <= 105) {
    user.role = '🦄 LEGENDARIA EN SU ESPLENDOR';
  } else if (user.level <= 108) {
    user.role = '🦋 LEGENDARIA EN SU BRILLO';
  } else if (user.level <= 111) {
    user.role = '🌹 LEGENDARIA EN SU GLORIA';
  } else if (user.level <= 114) {
    user.role = '🌠 LEYENDA CELESTE';
  } else if (user.level <= 117) {
    user.role = '🌌 LEYENDA BRILLANTE';
  } else if (user.level <= 120) {
    user.role = '🌈 LEYENDA MÁGICA';
  } else if (user.level <= 123) {
    user.role = '💖 ESTELAR EN SU BRILLO';
  } else if (user.level <= 126) {
    user.role = '✨ ESTELAR EN SU MAGIA';
  } else if (user.level <= 129) {
    user.role = '🌟 ESTELAR EN SU GLORIA';
  } else if (user.level <= 132) {
    user.role = '👑 TOP ASTRAL EN SU ESPLENDOR';
  } else if (user.level <= 135) {
    user.role = '💎 TOP ASTRAL EN SU BRILLO';
  } else if (user.level <= 138) {
    user.role = '🌺 TOP ASTRAL EN SU MAGIA';
  } else if (user.level <= 141) {
    user.role = '👑 ÉLITE GLOBAL EN SU GLORIA';
  } else if (user.level <= 151) {
    user.role = '💖 ÉLITE GLOBAL EN SU BRILLO';
  } else if (user.level <= 161) {
    user.role = '✨ ÉLITE GLOBAL EN SU MAGIA';
  } else if (user.level <= 168) {
    user.role = '👑 ÉLITE GLOBAL EN SU ESPLENDOR';
  } else if (user.level <= 171) {
    user.role = '👑 *∞ ÉLITE GLOBAL EN SU GLORIA* 🌟';
  } else if (user.level <= 185) {
    user.role = '💖 *∞ ÉLITE GLOBAL EN SU BRILLO* 🌠';
  } else if (user.level <= 240) {
    user.role = '✨ *∞ ÉLITE GLOBAL EN SU MAGIA* 🌌';
  } else if (user.level <= 270) {
    user.role = '👑 *∞ ÉLITE GLOBAL EN SU ESPLENDOR* 🌈';
  } else if (user.level <= 300) {
    user.role = '🎉 *QUE PRO 🙌*\n\n🥳 Eres la más activa del grupo, ¡te mereces ser administradora! 🤩🥳';
  }
}} catch (error) {
  m.error = error;
  if (error) {
    console.error(m.error);
  }
}

if (m.message) {
m.mtype = Object.keys(m.message)[0]
//m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
//m.msg = m.message[m.mtype]
if (m.mtype == 'protocolMessage' && m.msg.key) { 
protocolMessageKey = m.msg.key; 
if (protocolMessageKey == 'status@broadcast') protocolMessageKey.remoteJid = m.chat; 
if (!protocolMessageKey.participant || protocolMessageKey.participant == 'status_me') protocolMessageKey.participant = m.sender; 
protocolMessageKey.fromMe = conn.decodeJid(protocolMessageKey.participant) === conn.decodeJid(conn.user.id); 
if (!protocolMessageKey.fromMe && protocolMessageKey.remoteJid === conn.decodeJid(conn.user.id)) protocolMessageKey.remoteJid = m.sender; 
} 
  
try {
if (protocolMessageKey && m.mtype == 'protocolMessage') conn.ev.emit('message.delete', protocolMessageKey); 
} catch (e) {
console.error(e)
}
if (m.mtype === 'ephemeralMessage') {
exports.smsg(sock, m.msg)
m.mtype = m.msg.mtype
m.msg = m.msg.msg
}
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = m.msg.contextInfo.participant.split(":")[0] || m.msg.contextInfo.participant
m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})

/**** @returns */
m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })

/**** @param {*} jid 
* @param {*} forceForward 
* @param {*} options 
* @returns 
*/
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)

/**** @returns */
m.quoted.download = () => downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''

/*** * @param {*} jid 
* @param {*} path 
* @param {*} quoted 
* @param {*} options 
* @returns 
*/
     
conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted: quoted ? quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
return buffer
}
    
conn.sendPayment = async (jid, amount, text, quoted, options) => { 
conn.relayMessage(jid, { requestPaymentMessage: {  currencyCodeIso4217: 'PEN', amount1000: amount,  requestFrom: null, noteMessage: { extendedTextMessage: { text: text, contextInfo: {  externalAdReply: { showAdAttribution: true, }, mentionedJid: conn.parseMention(text)}}}}}, {})}
conn.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
let extension = mime.split('/')[1]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
        
/*** @param {*} jid
* @param {*} path
* @param {*} caption 
*/
conn.sendImage = async (jid, path, caption = '', quoted = '', options) => { 
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0) 
return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted: quoted ? quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} 
     
    /**
    * @param {*} jid
    * @param {*} caption
    * @param {*} thumbnail
    * @param {*} quoted
    */
conn.adReply = (jid, caption, thumbnail, quoted, inTrue) => {
conn.sendMessage(jid ? jid : m.chat, { text: caption,  
contextInfo:{ forwardingScore: 9999999, isForwarded: true, mentionedJid:[m.sender], "externalAdReply": {  "showAdAttribution": true, "containsAutoReply": true,"renderLargerThumbnail": inTrue ? inTrue : false,  "title": botname, "containsAutoReply": false,  "mediaType": 1, "thumbnail": thumbnail ? thumbnail : global.imagen1, "mediaUrl": md, "sourceUrl": md}}}, { quoted: quoted ? quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
}
    
    /**
    * @param {*} jid
    * @param {*} caption
    * @param {*} thumbail // optional
    * @param {*} orderTitle // optional
    * @param {*} userJid // optional
    */
    
conn.sendCart = async (jid, text, thumbail, orderTitle, userJid) => {
var messa = await prepareWAMessageMedia({ image: thumbail ? thumbail : success }, { upload: conn.waUploadToServer })
var order = generateWAMessageFromContent(jid, proto.Message.fromObject({"orderMessage":{ "orderId":"3648563358700955",
"thumbnail": thumbail ? thumbail : success,
"itemCount": 999999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": text,
"orderTitle": orderTitle ? orderTitle : 'unknown',
"sellerJid": "54446767@s.whatsapp.net",
"token": "AR4flJ+gzJw9zdUj+RpekLK8gqSiyei/OVDUFQRcmFmqqQ==",
"totalAmount1000": "-500000000",
"totalCurrencyCode":"USD",
"contextInfo":{ "expiration": 604800, "ephemeralSettingTimestamp":"1679959486","entryPointConversionSource":"global_search_new_chat","entryPointConversionApp":"whatsapp","entryPointConversionDelaySeconds":9,"disappearingMode":{"initiator":"CHANGED_IN_CHAT"}}}
}), { userJid: userJid ? userJid : conn.user.id})
conn.relayMessage(jid, order.message, { messageId: order.key.id })
}
   
conn.user.jid = conn.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user?
conn.user.chat = m.chat // chat in user?????????
    
    /**
    * @param {*} jid
    * @param {*} caption
    * @param {*} fakenumber
    * @param {*} fakecaption
    */

conn.fakeReply = (jid, caption,  fakeNumber, fakeCaption, quoted) => {
conn.sendMessage(jid, { text: caption }, {quoted: { key: { fromMe: false, participant: fakeNumber, ...(m.chat ? { remoteJid: null } : {}) }, message: { conversation: fakeCaption, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}}})
}

    /**
    * @param {*} jid
    * @param {*} text
    * @param {*} editedText
    * @param {*} quoted
    */
conn.editMessage = async (jid, text, editedText, seconds, quoted) => {
const {key} = await conn.sendMessage(jid, { text: text }, { quoted: quoted ? quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
await delay(1000 * seconds); // message in seconds?? (delay)
await conn.sendMessage(m.chat, { text: editedText, edit: key }); 
}
    
    /**
    * @param {*} jid
    * @param {*} audio
    * @param {*} quoted
    */
conn.sendAudio = async (jid, audio, quoted, ppt, options) => { // audio? uwu
await conn.sendPresenceUpdate('recording', jid)
await conn.sendMessage(jid, { audio: { url: audio }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: ppt ? ptt : true, ...options }, { quoted: quoted ? quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
conn.parseAudio = async (jid, audio, quoted, ppt, name, link, image) => {
await conn.sendPresenceUpdate('recording', jid)
await conn.sendMessage(jid, { audio: { url: audio }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: ppt ? ptt : true, contextInfo:{  externalAdReply: { showAdAttribution: true, mediaType:  1, mediaUrl: link ? link : md, title: name ? name : global.botname, sourceUrl: link ? link : md, thumbnail: image ? image : global.imagen1 }}}, { quoted: quoted ? quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
    
  /**
    * @param {*} jid
    * @param {*} text
    * @param {*} quoted
    * @param {*} options
    */
conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
    
    
    /**
    * @param {*} jid
    * @param {*} text
    * @param {*} quoted
    * @param {*} options
    */
    
conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
   
    /**
    * @returns
    */
    
conn.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
    
    /**
    * @param {*} jid
    */

conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
    
    /**
    * @param {*} jid?
    */
    
conn.getName = (jid, withoutContact  = false) => { // jid = m.chat?
id = conn.decodeJid(jid)
withoutContact = conn.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {id, name: 'WhatsApp' } : id === conn.decodeJid(conn.user.jid) ?
conn.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}
    
    /**
    *
    * @param {*} jid
    * @param {*} kon
    * @param {*} quoted
    * @param {*} opts = options?
    */
    
conn.sendContact = async (jid, kon, quoted = '', opts = {}) => { 
let list = []
for (let i of kon) {
list.push({displayName: await conn.getName(i), vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:toca aqui uwu\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${github}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})}
conn.sendMessage(jid, { contacts: { displayName: `${list.length} Contacto`, contacts: list }, ...opts }, { quoted, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, {quoted: quoted ? quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
return buffer
}
conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }
    
conn.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
    * a normal reply
    */
m.reply = (text, chatId, options) => conn.sendMessage(chatId ? chatId : m.chat, { text: text }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100, detectLinks: false, thumbnail: global.thumb, ...options })

m.react = (text, key, options) => conn.sendMessage(m.chat, { react: {text, key: m.key }})

m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, true, {readViewOnce: true})

//m.react = (text, chatId, key, options) => conn.relayMessage(chatId ? chatId : m.chat, {reactionMessage: { key: m.key, text, }}, { messageId: m.key.id })

    /**
    * copy message?
    */
m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
    
    /**
     * 
     * @param {*} path 
     * @returns 
     */
					
conn.sendButton = async (jid, text = '', footer = '', buffer, buttons, copy, urls, quoted, options) => {
  let img, video;

  try {
    if (/^https?:\/\//i.test(buffer)) {
      const response = await fetch(buffer);
      const contentType = response.headers.get('content-type');

      if (/^image\//i.test(contentType)) {
        img = await prepareWAMessageMedia({ image: { url: buffer } }, { upload: conn.waUploadToServer });
      } else if (/^video\//i.test(contentType)) {
        video = await prepareWAMessageMedia({ video: { url: buffer } }, { upload: conn.waUploadToServer });
      } else {
        console.error("Tipo MIME no compatible:", contentType);
      }
    } else {
      const type = await conn.getFile(buffer);
      if (/^image\//i.test(type.mime)) {
        img = await prepareWAMessageMedia({ image: { url: buffer } }, { upload: conn.waUploadToServer });
      } else if (/^video\//i.test(type.mime)) {
        video = await prepareWAMessageMedia({ video: { url: buffer } }, { upload: conn.waUploadToServer });
      }
    }

    const dynamicButtons = buttons.map(btn => ({
      name: 'quick_reply',
      buttonParamsJson: JSON.stringify({
        display_text: btn[0],
        id: btn[1]
      }),
    }));

    if (copy && (typeof copy === 'string' || typeof copy === 'number')) {
      dynamicButtons.push({
        name: 'cta_copy',
        buttonParamsJson: JSON.stringify({
          display_text: 'Copy', copy_code: copy
        })
      });
    }

    if (urls && Array.isArray(urls)) {
      urls.forEach(url => {
        dynamicButtons.push({
          name: 'cta_url',
          buttonParamsJson: JSON.stringify({
            display_text: url[0],
            url: url[1],
            merchant_url: url[1]
          })
        });
      });
    }

    const interactiveMessage = {
      body: { text: text },
      footer: { text: footer },
      header: {
        hasMediaAttachment: false,
        imageMessage: img ? img.imageMessage : null,
        videoMessage: video ? video.videoMessage : null
      },
      nativeFlowMessage: {
        buttons: dynamicButtons,
        messageParamsJson: ''
      }
    };

    if (!quoted) {
      quoted = {};
    }
    if (typeof quoted.fromMe === 'undefined') {
      quoted.fromMe = false; // o el valor por defecto adecuado
    }

    let msgL = generateWAMessageFromContent(jid, { viewOnceMessage: { message: { interactiveMessage } } }, { userJid: conn.user.jid, quoted });
    await conn.relayMessage(jid, msgL.message, { messageId: msgL.key.id, ...options });
  } catch (error) {
    console.error("Error al enviar el botón:", error);
  }
};


conn.sendList = async(jid, title, text, buttonText, listSections, quoted, options = {}) => {
  const sections = [...listSections];
  const message = {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({ text: text }),
        footer: proto.Message.InteractiveMessage.Footer.create({ text: "" }),
        header: proto.Message.InteractiveMessage.Header.create({ title: title, subtitle: "", hasMediaAttachment: false }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: 'single_select',
              buttonParamsJson: JSON.stringify({
                title: buttonText,
                sections
              })
            }
          ]
        }),
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363296103096943@newsletter',
            newsletterName: `${ucapan()} ${pushname}`, 
            serverMessageId: ''
          }
        }
      })
    }
  };
  await conn.relayMessage(jid, { viewOnceMessage: message }, {});
}
					
conn.getFile = async (PATH, saveToFile = false) => { 
let res; let filename; 
const data = Buffer.isBuffer(PATH) ? PATH : PATH instanceof ArrayBuffer ? PATH.toBuffer() : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0); 
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer'); 
const type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin', }; 
if (data && saveToFile && !filename) (filename = path.join(__dirname, '../tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data)); 
return { res, filename, ...type, data, deleteFile() { 
return filename && fs.promises.unlink(filename); 
}, 
}}
   /**
    * @param {*} jid
    * @param {*} path
    * @param {*} fileName
    * @param {*} quoted
    * @param {*} options
    * @return
    */
conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
const type = await conn.getFile(path, true); 
let {res, data: file, filename: pathFile} = type; 
if (res && res.status !== 200 || file.length <= 65536) { 
try { 
throw {json: JSON.parse(file.toString())}; 
} catch (e) { 
if (e.json) throw e.json; 
}}      
const opt = {}; 
if (quoted) opt.quoted = quoted; 
if (!type) options.asDocument = true; 
let mtype = ''; let mimetype = options.mimetype || type.mime; let convert; 
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'; 
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'; 
else if (/video/.test(type.mime)) mtype = 'video'; 
else if (/audio/.test(type.mime)) { 
( 
convert = await toAudio(file, type.ext), 
file = convert.data, 
pathFile = convert.filename, 
mtype = 'audio', 
mimetype = options.mimetype || 'audio/mpeg; codecs=opus' 
); 
} else mtype = 'document'; 
if (options.asDocument) mtype = 'document'; 
  
delete options.asSticker; 
delete options.asLocation; 
delete options.asVideo; 
delete options.asDocument; 
delete options.asImage; 
  
const message = { ...options, caption, ptt, [mtype]: {url: pathFile}, mimetype, fileName: filename || pathFile.split('/').pop(), }; 
/** 
* @type {import('@whiskeysockets/baileys').proto.WebMessageInfo} 
*/ 
let m; 
try { 
m = await conn.sendMessage(jid, message, {...opt, ...options}); 
} catch (e) { 
console.error(e); 
m = null; 
} finally { 
if (!m) m = await conn.sendMessage(jid, {...message, [mtype]: file}, {...opt, ...options}); 
file = null; // releasing the memory 
return m; 
}}
       
conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
    
conn.appenTextMessage = async(text, chatUpdate) => {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {userJid: conn.user.id, quoted: m.quoted && m.quoted.fakeObj })
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {...chatUpdate, messages: [proto.WebMessageInfo.fromObject(messages)], type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}
return m
}

function ucapan() {
  const time = moment.tz("America/Los_Angeles").format("HH"); //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "🌉Buenas madrugadas";

  if (time >= 4) {
    res = "🌇Buenos Días";
  }

  if (time >= 11) {
    res = "🏙️Buenas Tardes";
  }

  if (time >= 15) {
    res = "🌆Buenas tardes";
  }

  if (time >= 17) {
    res = "🌃Buenas noches";
  }

  return res;
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
