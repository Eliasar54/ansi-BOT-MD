//Código editado por Eliasar YT
(async () => {
require("./settings")
const { default: makeWASocket, CONNECTING, PHONENUMBER_MCC, Browsers, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const { state, saveCreds } = await useMultiFileAuthState('./sessions')
const chalk = require('chalk')
const moment = require('moment')
const fs = require('fs')
const yargs = require('yargs/yargs')
const { smsg, sleep, delay, getBuffer} = require('./libs/fuctions')
const _ = require('lodash')
const NodeCache = require('node-cache')
const os = require('os')
const { execSync } = require('child_process')
const util = require('util')
const pino = require('pino')
const Pino = require("pino")
const cfonts = require('cfonts') 
const { tmpdir } = require('os')
const { join } = require('path')
const PhoneNumber = require('awesome-phonenumber')
const readline = require("readline")
const { Boom } = require('@hapi/boom')
const { parsePhoneNumber } = require("libphonenumber-js")

const { readdirSync, statSync, unlinkSync } = require('fs')
const {say} = cfonts;
const color = (text, color) => {
return !color ? chalk.green(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)
}

//base de datos
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./libs/database/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./libs/database/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
 global.db.chain = _.chain(global.db.data)}
loadDatabase() //@aidenlogin

if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 5 * 1000)
//_________________

//tmp
if (!opts['test']) {
if (global.db) {
setInterval(async () => {
if (global.db.data) await global.db.write();
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', 'jadibts'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])));
}, 30 * 1000)
}}

function clearTmp() {
const tmp = [tmpdir(), join(__dirname, './tmp')];
const filename = [];
tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
return filename.map((file) => {
const stats = statSync(file);
if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) {
return unlinkSync(file); // 3 minutes
}
return false;
})}

setInterval(async () => {
await clearTmp()
console.log(chalk.cyanBright(lenguaje['tmp']()))}, 180000)
//_________________

//sessions/jadibts
function purgeSession() {
let prekey = []
let directorio = readdirSync("./sessions")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') //|| file.startsWith('session-') || file.startsWith('sender-') || file.startsWith('app-') 
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./sessions/${files}`)
})} 

function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./jadibts/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./jadibts/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./jadibts/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-') /*|| fileInDir.startsWith('app-') || fileInDir.startsWith('session-')*/
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./jadibts/${directorio}/${fileInDir}`)
})}})
if (SBprekey.length === 0) return; 
console.log(chalk.cyanBright(lenguaje['session']()))
} catch (err) {
console.log(chalk.bold.red(lenguaje['errorsession']()))
}}

function purgeOldFiles() {
const directories = ['./sessions/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {  
if (err) throw err
console.log(chalk.bold.green(`${lenguaje['archivo']()} ${file} ${lenguaje['archivoborrado']()}`))})
} else {  
console.log(chalk.bold.red(`${lenguaje['archivo']()} ${file} ${lenguaje['archborrado']()}` + err))
} }) }) }) })}
setInterval(async () => {
  await purgeSession();
  console.log(chalk.cyanBright(`${lenguaje['purgesessions']()}`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeSessionSB();
  console.log(chalk.cyanBright(`${lenguaje['purgesubbots']()}`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeOldFiles();
  console.log(chalk.cyanBright(`${lenguaje['purgeoldfiles']()}`));
}, 1000 * 60 * 60);
//___________
    
const store = makeInMemoryStore({logger: pino().child({level: 'silent', stream: 'store' })})

//configuración 
const methodCodeQR = process.argv.includes("qr")
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const methodCode = !!phoneNumber || process.argv.includes("code")
const useMobile = process.argv.includes("--mobile")
const MethodMobile = process.argv.includes("mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const msgRetry = (MessageRetryMap) => { }
const msgRetryCounterCache = new NodeCache() //para mensaje de reintento, "mensaje en espera"
let { version, isLatest } = await fetchLatestBaileysVersion();   

let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./sessions/creds.json`)) {
    do {
        let lineM = '━━━━━━━━━━━━━━━━━━━━'
        opcion = await question(`╔${lineM}╗
║ ${chalk.blueBright('╔═════════════════╗')}
║ ${chalk.blueBright('║')} ${chalk.blue.bgBlue.bold.cyan(lenguaje.console.text1)}
║ ${chalk.blueBright('╚═════════════════╝')}   
║ ${chalk.blueBright('╔═════════════════╗')}     
║ ${chalk.blueBright('║')} ${chalk.green.bgMagenta.bold.yellow(lenguaje.console.text2)}
║ ${chalk.blueBright('║')} ${chalk.bold.redBright(lenguaje.console.text3)} ${chalk.greenBright(lenguaje.console.text4)}
║ ${chalk.blueBright('║')} ${chalk.bold.redBright(lenguaje.console.text5)} ${chalk.greenBright(lenguaje.console.text6)}
║ ${chalk.blueBright('╚═════════════════╝')}
║ ${chalk.blueBright('╔═════════════════╗')}     
║ ${chalk.blueBright('║')} ${chalk.italic.magenta(lenguaje.console.text7)}
║ ${chalk.blueBright('║')} ${chalk.italic.magenta(lenguaje.console.text8)}
║ ${chalk.blueBright('╚═════════════════╝')}
╚${lineM}╝\n${chalk.bold.magentaBright('---> ')}`)

        if (!/^[1-2]$/.test(opcion)) {
            console.log(chalk.bold.redBright(`${lenguaje.console.text9(chalk)}`))
        }
    } while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./sessions/creds.json`))
}

    
async function startBot() {

console.info = () => {}
const socketSettings = {
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
mobile: MethodMobile, 
browser: opcion == '1' ? ['𝐚𝐧𝐬í-𝐁𝐎𝐓', 'Safari', '1.0.0'] : methodCodeQR ? ['𝐚𝐧𝐬í-𝐁𝐎𝐓', 'Safari', '1.0.0'] : ["Ubuntu", "Chrome", "20.0.04"],
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
syncFullHistory: true,
getMessage: async (key) => {
let jid = jidNormalizedUser(key.remoteJid)
let msg = await store.loadMessage(jid, key.id)
return (msg?.message || "").replace(/(?:Closing stale open|Closing open session)/g, "")
},
msgRetryCounterCache, // Resolver mensajes en espera
msgRetry, 
defaultQueryTimeoutMs: undefined,
version,  
}

const sock = makeWASocket(socketSettings)
sock.isInit = false

if (!fs.existsSync(`./sessions/creds.json`)) {
if (opcion === '2' || methodCode) {
opcion = '2'
if (!sock.authState.creds.registered) {  
let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.bold.redBright(lenguaje.console.text10))) 
process.exit(0)
}} else {
while (true) {
addNumber = await question(chalk.bgBlack(chalk.bold.greenBright(lenguaje.console.text11)))
addNumber = addNumber.replace(/[^0-9]/g, '')
  
if (addNumber.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
break 
} else {
console.log(chalk.bold.redBright(lenguaje.console.text12))
}}
rl.close()  
}

setTimeout(async () => {
let codeBot = await sock.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
console.log(chalk.bold.white(chalk.bgMagenta(lenguaje.console.text13)), chalk.bold.white(chalk.white(codeBot)))
}, 2000)
}}
}

async function getMessage(key) {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message
} return {
conversation: 'SimpleBot',
}}

sock.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
chatUpdate.messages.forEach(async (mek) => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!sock.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('FatihArridho_')) return
global.numBot = sock.user.id.split(":")[0] + "@s.whatsapp.net"
global.numBot2 = sock.user.id
m = smsg(sock, mek)
require("./main")(sock, m, chatUpdate, mek, store)
} catch (e) {
console.log(e)
}})
} catch (err) {
console.log(err)
}})

sock.ev.on('messages.update', async chatUpdate => {
for(const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({message: pollCreation, pollUpdates: update.pollUpdates, })
var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (toCmd == undefined) return
var prefCmd = prefix+toCmd
sock.appenTextMessage(prefCmd, chatUpdate)
}}}})

//anticall
sock.ev.on('call', async (fuckedcall) => { 
sock.user.jid = sock.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user?
let anticall = global.db.data.settings[numBot].anticall
if (!anticall) return
console.log(fuckedcall)
for (let fucker of fuckedcall) {
if (fucker.isGroup == false) {
if (fucker.status == "offer") {
let call = await sock.sendTextWithMentions(fucker.from, `*[ ! ] @${fucker.from.split('@')[0]} ${lenguaje['smscall']()} ${fucker.isVideo ? `videollamadas` : `llamadas` }_\n\n${lenguaje['smscall2']()}\n\n• ${fb}`)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:; Eliasar YT👑;;;\nFN: Eliasar YT\nORG: Eliasar YT👑\nTITLE:\nitem1.TEL;waid=50582340051:+50582340051\nitem1.X-ABLabel:Propietario 👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:Owner 👑\nEND:VCARD`
sock.sendMessage(fucker.from, { contacts: { displayName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨', contacts: [{ vcard }] }}, {quoted: call, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await sleep(8000)
await sock.updateBlockStatus(fucker.from, "block")
}}}})

//detect
sock.ev.on("groups.update", async (json) => {
console.log(color(json, '#009FFF'))
//console.log(json)
const res = json[0];
let detect = global.db.data.chats[res.id].detect
if (!detect) return
if (res.announce == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//let text = ``
sock.sendMessage(res.id, {text: lenguaje['smsAvisos2'](),  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos'](), 
"mediaType": 1,  
"thumbnail": imagen1,  
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.announce == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵐᵃⁿᵈᵃʳ ᵐᵉⁿˢᵃʲᵉˢ 🗣️*`
sock.sendMessage(res.id, {   
text: lenguaje['smsAvisos4'](),  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,  
isForwarded: true,    
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos3'](),   
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": md  
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.restrict == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿˢ ᵖᵘᵉᵈᵉ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉ ᵈᵉˡ ᵍʳᵘᵖᵒ*`
sock.sendMessage(res.id, {text: lenguaje['smsAvisos6'](),
contextInfo:{ 
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": yt
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.restrict == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃʳᵗᵉ ᵖᵘᵉᵈᵉ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉ ᵈᵉˡ ᵍʳᵘᵖᵒ*`
sock.sendMessage(res.id, {text: lenguaje['smsAvisos7'](),  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if(!res.desc == ''){
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `${lenguaje['smsAvisos8']()}\n${res.desc}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `${lenguaje['smsAvisos9']()}\n${res.subject}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}})

//Welcome adaptado
sock.ev.on('group-participants.update', async (anu) => {
console.log(anu)
//let Welc = global.db.data.chats[anu.id].welcome
if(global.db.data.chats[anu.id].welcome < true) return
try {
let metadata = await sock.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await sock.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
memb = metadata.participants.length
welc = await getBuffer(ppuser)
leave = await getBuffer(ppuser)
if (anu.action == 'add') {
const buffer = await getBuffer(ppuser)
const time = moment.tz('America/Bogota').format('HH:mm:ss')
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
let name = num
const miembros = metadata.participants.length
let vn = 'https://qu.ax/cUYg.mp3'
let wel = [`${lenguaje['smsWel']()} @${name.split("@")[0]} ${lenguaje['smsWel2']()}`, `${lenguaje['smsWel']()} @${name.split("@")[0]} ${lenguaje['smsWel3']()} ${metadata.subject} 』\n\n${lenguaje['smsWel4']()}`, `${lenguaje['smsWel5']()} ${lenguaje['smsWel6']()} @${name.split("@")[0]} 🥳`]
let or = ['texto', 'audio', 'texto2'];
let media = or[Math.floor(Math.random() * 3)]
let welcome = wel[Math.floor(Math.random() * wel.length)]
if (media === 'texto')
sock.sendMessage(anu.id, { text: welcome, mentions: [num]}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'audio')
sock.sendMessage(anu.id, { audio: { url: vn }, 
contextInfo: { forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, forwardingScore: 9999999, isForwarded: true, mentionedJid:[num], "externalAdReply": { 
"title": `乂 ＷＥＬＣＯＭＥ 乂`, 
"body": `${name.split("@")[0]}`, 
"previewType": "PHOTO", 
"thumbnailUrl": null,
"thumbnail": welc, 
"sourceUrl": `${pickRandom([md, yt])}`, 
"showAdAttribution": true}}, 
seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto2')
sock.sendMessage(anu.id, { text: `${lenguaje['smsWel7']()} ${lenguaje['smsWel']()} @${name.split("@")[0]} ${lenguaje['smsWel2']()}\n${lenguaje['smsWel8']()} ${metadata.subject}\n${lenguaje['smsWel9']()} ${miembros}\n${lenguaje['smsWel10']()} ${date}\n\n${lenguaje['smsWel11']()} \n\n${metadata.desc}`, contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": `乂 ＷＥＬＣＯＭＥ 乂`,
body: `${metadata.subject}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": welc,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (anu.action == 'remove') {
const buffer = await getBuffer(ppuser)
let name = num
const members = metadata.participants.length
let by = [`${lenguaje['smsBye']()} @${name.split("@")[0]} 👋`, `${lenguaje['smsBye2']()} @${name.split("@")[0]} 👋\n\n${lenguaje['smsBye3']()}`, `_@${name.split("@")[0]} ${lenguaje['smsBye4']()}`]
//let byegc = fs.readFileSync('./src/byegc.webp')
let byegc = 'https://qu.ax/WUEu.webp'
let or = ['texto', 'texto2', 'stickers'];
let media = or[Math.floor(Math.random() * 3)]
let bye = by[Math.floor(Math.random() * by.length)]
if (media === 'texto')
sock.sendMessage(anu.id, { text: bye, mentions: [num]}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto2')
sock.sendMessage(anu.id, { text: `\`\`\`[!] Un miembro ha salido del grupo: @${name.split("@")[0]} 🫡. Esperamos verte de nuevo.\`\`\``,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,
isForwarded: true,  
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": '乂 ＡＤＩＯ́Ｓ 乂', 
body: `Esperemos que no vuelva -_-`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": leave,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'stickers')
sock.sendFile(anu.id, byegc, 'sticker.webp', '', null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: '乂 ＡＤＩＯ́Ｓ 乂', body: `${name.split("@")[0]}`, mediaType: 2, sourceUrl: `${pickRandom([md, yt])}`, thumbnail: leave}}})
} else if (anu.action == 'promote') {
//let users = participants.map(u => sock.decodeJid(u.id))
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const buffer = await getBuffer(ppuser)
let name = num
let usuario = anu.author
sock.sendMessage(anu.id, { text: `${pickRandom(['[ NUEVO ADMINS ]\n\n', 'Hey'])} @${name.split("@")[0]} ${pickRandom(['Ahora eres admin del grupo 🥳', 'Felicidades ahora eres parte staff 🎉'])}\n\n🫵 Acción echa por : @${usuario.split("@")[0]}`, mentions: [...groupAdmins.map(v => v.id)], 
 contextInfo:{
 forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,
isForwarded: true, 
 mentionedJid: [num, usuario],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＮＵＥＶＯ ＡＤＭＩＮ 乂`,
"body": botname,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": welc,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (anu.action == 'demote') {
const buffer = await getBuffer(ppuser)
let name = num
let usuario = anu.author
sock.sendMessage(anu.id, { text: `@${name.split("@")[0]} ${pickRandom(['Joderte ya no eres admin 🥲', 'jjjjj ya no eres admin culiado 🤣'])}\n\n🫵 Acción echa por : @${usuario.split("@")[0]}`,
 contextInfo:{
 forwardedNewsletterMessageInfo: { 
newsletterJid: '120363296103096943@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,
isForwarded: true, 
 mentionedJid:[num, usuario],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＵＮ ＡＤＭＩＮ ＭＥＮＯＳ  乂`,
"body": botname, 
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": leave,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}}} catch (err) {
console.log(err)
}})

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}  

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

sock.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, qr, receivedPendingNotifications, isNewLogin} = update;
console.log(receivedPendingNotifications)
if (isNewLogin) sock.isInit = true
if (connection == 'connecting') {
console.log(chalk.gray('iniciando✨...'));
console.log(chalk.gray('iniciando✨...'));
console.log(chalk.blue('iniciando✨...')); // Cambiado a azul
say('ANSI\nBOT\nMD', {font: 'block', align: 'center', colors: ['yellow', 'blueBright']}); // Cambiado a amarillo y azul brillante
say(`CREADOR ${creador2}\npuro nica papa`, {font: 'console', gradient: ['red', 'cyan']}); // Cambiado a rojo y cian



console.log(global.ASCII);
} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`${lenguaje['smsConexioncerrar']()}`, '#f64f59'));
startBot()
} else if (opcion == '1' || methodCodeQR && qr !== undefined) {
if (opcion == '1' || methodCodeQR) {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n╭━─━─━─≪ ${vs} ≫─━─━─━╮\n│${lenguaje['smsEscaneaQR']()}\n╰━─━━─━─≪ 💥 ≫─━─━━─━╯`, '#f12711'))
}
} else if (connection == 'open') {
console.log(color(` `,'magenta'))
console.log(color(`\n${lenguaje['smsConexion']()} ` + JSON.stringify(sock.user, null, 2), 'yellow'))
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n╭━─━─━─≪ ${vs} ≫─━─━─━╮\n│${lenguaje['smsConectado']()}\n╰━─━━─━─≪ 💥 ≫─━─━━─━╯` + receivedPendingNotifications, '#38ef7d')
);

if (!sock.user.connect) {
await delay(3 * 1000)
await sock.groupAcceptInvite(global.nna2)
sock.user.connect = true
return !1;
}
}});

sock.public = true
store.bind(sock.ev)
sock.ev.on('creds.update', saveCreds)
process.on('uncaughtException', console.log)
process.on('unhandledRejection', console.log)
process.on('RefenceError', console.log)
}

startBot()

})()
