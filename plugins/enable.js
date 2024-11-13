require('../main.js') 
const fs = require("fs") 
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 

async function enable(m, command, isGroupAdmins, text, command, args, conn, isBotAdmins, isGroupAdmins, isCreator) {
    if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
    
    const {welcome, antilink, antiFake, antiArabe, detect, autosticker, antiNsfw, game2, modeadmin, chatbot, audios, autolevelup, antitoxic, antiprivado, anticall, antilink2, AntiTiktok, AntiTelegram, viewonce, AntiFacebook, AntInstagram, AntiYoutube, AntiTwitter, autoread} = global.db.data.chats[m.chat];
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[conn.user.jid] || {}
    
    if (command == 'enable' || command == 'configuracion' || command == 'configurar') {
        conn.sendMessage(m.chat, { 
            text: `━━━━▣━━◤ANSI◢━━▣━━━━━\n║◤━━━━━ ◑ω◐ ━━━━━◥\n║aqui tiene las lista para activar y desactivar\n║◤━━━━━ ☆. ∆ .☆ ━━━━━◥\n║ Ejemplo de uso:\n║❍ _#welcome on_\n║❍ _#welcome off_\n║◤━━━━━ ☆. ∆ .☆ ━━━━━◥\n╚━━━━▣━━◤ANSI◢━━▣━━━━━\n`
        }, { quoted: m });
    }

    if (command === 'welcome' || command === 'bienvenida') {
        if (!m.isGroup) return m.reply(info.group);
        if (!isGroupAdmins) return m.reply(info.admin);
        
        if (typeof global.db.data.chats[m.chat].welcome === 'undefined') {
            global.db.data.chats[m.chat].welcome = false;
        }

        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.chats[m.chat].welcome = true;
            await global.db.write();
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.chats[m.chat].welcome = false;
            await global.db.write();
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    const handleCommand = async (setting, messageOn, messageOff) => {
        if (!m.isGroup) return m.reply(info.group)
        if (!isBotAdmins) return m.reply(info.botAdmin)
        if (!isGroupAdmins) return m.reply(info.admin)
        if (!text) return conn.sendMessage(m.chat, { 
            text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
        }, { quoted: m });

        if (args[0] === "on") {
            setting[m.chat] = true;
            conn.sendMessage(m.chat, { 
                text: messageOn
            }, { quoted: m });
        } else if (args[0] === "off") {
            setting[m.chat] = false;
            conn.sendMessage(m.chat, { 
                text: messageOff
            }, { quoted: m });
        }
    }
    if (command == 'antifake' || command == 'antiFake') {
        await handleCommand(global.db.data.chats, `*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} está activo*\n\n⚠️ *Los cuales el grupo no permite el ingreso de números fake (virtuales), serán expulsados automáticamente del Grupo...*`, `🟢 *${command}* ${lenguaje.enable.text2}\n`);
    }

    if (command == 'antiarabe' || command == 'antiArabe') {
        await handleCommand(global.db.data.chats, `*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} está activo*\n\n⚠️ *Los números árabes (+212, +91, +92, etc.) serán expulsados automáticamente del Grupo...*\n`, `🟢 *${command}* ${lenguaje.enable.text2}\n`);
    }

    if (command == 'antiviewonce') {
        await handleCommand(global.db.data.chats, `✅ *${command}* ${lenguaje.enable.text1}\n`, `🟢 *${command}* ${lenguaje.enable.text2}\n`);
    }

    if (command == 'antitoxic') {
        await handleCommand(global.db.data.chats, `✅ *${command}* ${lenguaje.enable.text1}\n`, `🟢 *${command}* ${lenguaje.enable.text2}\n`);
    }

    if (command == 'audios') {
        await handleCommand(global.db.data.chats, `✅ *${command}* ${lenguaje.enable.text1}\n`, `🟢 *${command}* ${lenguaje.enable.text2}\n`);
    }

    if (command == 'autosticker' || command == 'stickers') {
        await handleCommand(global.db.data.chats, `✅ *${command}* ${lenguaje.enable.text1}\n`, `🟢 *${command}* ${lenguaje.enable.text2}\n`);
    }

    if (command == 'modocaliente' || command == 'antinsfw') {
        await handleCommand(global.db.data.chats, `✅ *${command}* ${lenguaje.enable.text1}\n`, `🟢 *${command}* ${lenguaje.enable.text2}\n`);
    }

    if (command == 'game2') {
        await handleCommand(global.db.data.chats, `✅ *${command}* ${lenguaje.enable.text1}\n`, `🟢 *${command}* ${lenguaje.enable.text2}\n`);
    }

    if (command == 'modoadmin' || command == 'soloadmin' || command == 'modoadmins') {
        await handleCommand(global.db.data.chats, `✅ *${command}* ${lenguaje.enable.text1}\n\n${lenguaje.enable.text4}\n`, `🟢 *${command}* ${lenguaje.enable.text2}\n\n${lenguaje.enable.text5}\n`);
    }

    if (command == 'antiprivado') {
        if (m.sender !== '50582340051@s.whatsapp.net') return m.reply('No tienes permiso para ejecutar este comando.');
        
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.settings[numBot].antiprivado = true;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.settings[numBot].antiprivado = false;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    if (command == 'antipv') {
        if (!isCreator) return m.reply(info.owner);
        
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.settings[numBot].antipv = true;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.settings[numBot].antipv = false;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    if (command == 'anticall' || command == 'antillamada') {
        if (!isCreator) return m.reply(info.owner);
        
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.settings[numBot].anticall = true;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.settings[numBot].anticall = false;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    if (command == 'modojadibot' || command == 'jadibot') {
        if (!isCreator) return m.reply(info.owner);
        
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.chats[m.chat].jadibot = true;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.chats[m.chat].jadibot = false;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    if (command == 'autoread' || command == 'autovisto') {
        if (!isCreator) return m.reply(info.owner);
        
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.settings[conn.user.jid].autoread = false;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.settings[conn.user.jid].autoread = true;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    if (command == 'antispam') {
        if (!isCreator) return m.reply(info.owner);
        
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.chats[m.chat].antispam = true;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.chats[m.chat].antispam = false;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    if (command == 'chatbot' || command == 'simsimi') {
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.chats[m.chat].simi = true;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.chats[m.chat].simi = false;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    if (command == 'reaccion' || command == 'reacciónes' || command == 'desactivar' || command == 'antireaciones' || command == 'antireac') {
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.chats[m.chat].reaccion = true;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.chats[m.chat].reaccion = false;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }

    if (command == 'autolevelup' || command == 'autonivel') {
        if (!m.isGroup) return m.reply(info.group);
        
        if (!text) {
            conn.sendMessage(m.chat, { 
                text: `${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*\n`
            }, { quoted: m });
            return;
        }

        if (args[0] === "on") {
            global.db.data.chats[m.chat].autolevelup = true;
            conn.sendMessage(m.chat, { 
                text: `✅ *${command}* ${lenguaje.enable.text1}\n`
            }, { quoted: m });
        } else if (args[0] === "off") {
            global.db.data.chats[m.chat].autolevelup = false;
            conn.sendMessage(m.chat, { 
                text: `🟢 *${command}* ${lenguaje.enable.text2}\n`
            }, { quoted: m });
        }
    }
}

module.exports = { enable }

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});
