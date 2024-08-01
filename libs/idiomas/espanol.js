const lenguaje = () => { return 'es' } //Español  

//index.js 
const tmp = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│SE LIMPIO LA CARPETA TMP CORRECTAMENTE\n╰━─━─━─≪🔆≫─━─━─━╯` } 
const session = () => { return `🟢 NO HAY ARCHIVO POR ELIMINAR` }
const errorsession = () => { return `🟢 ALGO SALIO MAL DURANTE LA ELIMINACIÓN, ARCHIVO NO ELIMINADOS` }
const archivo = () => { return `🟢 ARCHIVO` }
const archborrado = () => { return `BORRADO CON EXITO` }
const archivoborrado = () => { return `NO BORRADO` }
const purgesessions = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│AUTOPURGESESSIONS\n│ARCHIVOS ELIMINADOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }
const purgesubbots  = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_SESSIONS_SUB-BOTS\n│ ARCHIVOS ELIMINADOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }
const purgeoldfiles = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_OLDFILES\n│ARCHIVOS ELIMINADOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }

const console = { 
text1: `MÉTODO DE VINCULACIÓN`, 
text2: `¿CÓMO DESEA CONECTARSE?`, 
text3: `⇢  Opción 1:`, 
text4: `Código QR`, 
text5: `⇢  Opción 2:`, 
text6: `Código de 8 digitos.`, 
text7: `Escriba sólo el número de`, 
text8: `la opción para conectarse.`, 
text9: (chalk) => `NO SE PERMITE NÚMEROS QUE NO SEAN ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, TAMPOCO LETRAS O SÍMBOLOS ESPECIALES.\n${chalk.bold.yellowBright("CONSEJO: COPIE EL NÚMERO DE LA OPCIÓN Y PÉGUELO EN LA CONSOLA.")}`, 
text10: `✨ Comience con el código de país de su número de WhatsApp, ejemplo: +59178862672`, 
text11: `✨ Ingresa el número que sera bot\nPor ejemplo: +59178862672`, 
text12: `⛔ Asegúrese de agregar el código de país.`, 
text13: `✨ CÓDIGO DE VINCULACIÓN ✨:` }

//call
const smscall = () => { return `Seras bloqueado*\n_Razon : por realizar una` }
const smscall2 = () => { return `*Si accidentalmente llamaste póngase en contacto con mi creador para que te desbloquee.*` }

//antiprivado
const smsAntiPv = () => { return `*ᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ʜᴀʙʟᴀʀ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ ᴘᴏʀ ʟᴏ ᴄᴜᴀʟ sᴇʀᴀs ʙʟᴏϙᴜᴇᴀᴅᴏ.*\n\n*ᴘᴀʀᴀ ᴜsᴀʀ ᴇʟ ʙᴏᴛ ᴜɴɪʀᴛᴇ ᴀʟ ɢʀᴜᴘᴏ ᴅᴇʟ ʙᴏᴛ*` }

//detec
const smsAvisos = () => { return `[ 🔒 ＧＲＵＰＯ ＣＥＲＲＡＤＯ ]` }
const smsAvisos2 = () => { return `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿˢ ᵖᵘᵉᵈᵉⁿ ᵉˢᶜʳᶦᵇᶦʳ ᵉˡ ᵍʳᵘᵖᵒ*` }
const smsAvisos3 = () => { return `[ 🔓 ＧＲＵＰＯ ＡＢＩＥＲＴＯ ]` }
const smsAvisos4 = () => { return `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵐᵃⁿᵈᵃʳ ᵐᵉⁿˢᵃʲᵉˢ 🗣️*` } 
const smsAvisos5 = () => { return `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n` }
const smsAvisos6 = () => { return `*ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿˢ ᵖᵘᵉᵈᵉ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉ ᵈᵉˡ ᵍʳᵘᵖᵒ*` } 
const smsAvisos7 = () => { return `ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃʳᵗᵉ ᵖᵘᵉᵈᵉ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉ ᵈᵉˡ ᵍʳᵘᵖᵒ` }
const smsAvisos8 = () => { return `ᴸᵃ ᵈᵉˢᶜʳᶦᵖᶜᶦᵒ́ⁿ ᵈᵉˡ ᵍʳᵘᵖᵒ ᶠᵘᵉ ᶜᵃᵐᵇᶦᵃᵈᵃ ⁿᵘᵉᵛᵃ ᵈᵉˢᶜʳᶦᵖᶜᶦᵒⁿ ᵉˢ` }
const smsAvisos9 = () => { return `*ᴱˡ ⁿᵒᵐᵇʳᵉ ᵈᵉˡ ᵍʳᵘᵖᵒ ᶠᵘᵉ ᶜᵃᵐᵇᶦᵃᵈᵒ ⁿᵘᵉᵛᵒˢ ⁿᵒᵐᵇʳᵉ ᵉˢ*` }

//welcome
const smsWel =  () => { return `Hola` }
const smsWel2 = () => { return `¿COMO ESTAS? 😃` }
const smsWel3 = () => { return `¿COMO ESTAS?😃\n\n『Bienvenido A` }
const smsWel4 = () => { return `Un gusto conocerte amig@ 🤗\n\n_Recuerda leer las reglas del grupo para no tener ningun problema 🧐_\n\n*Solo disfrutar de este grupo y divertite 🥳*` }
const smsWel5 = () => { return `[ NUEVO MIEMBRO ]\n\n` }
const smsWel6 = () => { return `𝘓𝘦 𝘥𝘢𝘮𝘰𝘴 𝘭𝘢 𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢 𝘢` }
const smsWel7 = () => { return `⪨────[ ＷＥＬＣＯＭＥ ]────⪩\n\n` }
const smsWel8 = () => { return `💫 *Bienvenido a :*` }
const smsWel9 = () => { return `💫 *Participantes*` }
const smsWel10 = () => { return `💫 *Fecha*` }
const smsWel11 = () => { return `📢 *Lee la descripcion* 📢\n` }
const smsBye = () => { return `Adios` }
const smsBye2 = () => { return `Bueno, se fue` }
const smsBye3 = () => { return `Que dios lo bendiga 😎` }
const smsBye4 = () => { return `Salió del grupo._` }
const smsBye5 = () => { return `se fue\n┃ un fan de bts` }
const promote = () => { return `Felicidades ahora eres parte del staff 🎉` }
const demote = () => { return `ya no eres admins 🥲` }

//mensaje el la consola inicio
const smsConexion = () => { return `✨ 𝘜𝘚𝘜𝘈𝘙𝘐𝘖 𝘊𝘖𝘕𝘌𝘊𝘛𝘈𝘋𝘖 =>` }
const smsEscaneaQR = () => { return `ESCANEA EL QR, EXPIRA 45 SEG...` }
const smsConectado = () => { return `YA ESTA CONECTADO CORRECTAMENTE` }
const smsConexionOFF = () => { return `[ ⚠️ ]  Conexion cerrada, por favor elimina la carpeta sessions y escanea nuevamente.`}
const smsConexioncerrar = () => { return `⚠️ CONEXION CERRADA, SE INTENTARA RECONECTAR` }
const smsConexionperdida = () => { return `[ ⚠️ ] Conexión perdida con el servidor, reconectando...`}
const smsConexionreem = () => { return `[ ⚠️ ] Conexión reemplazada, se ha abierto otra nueva sesión. Por favor, cierra la sesión actual primero.`}
const smsConexionreinicio = () => { return `🔁 Reinicio necesario, reiniciando...`}
const smsConexiontiem = () => { return `[ ⚠️ ] Tiempo de conexión agotado, reconectando...`}
const smsConexiondescon = () => { return `[ ⚠️ ] Razón de desconexión desconocida:`}

const consola = {
text: `HORARIO:`, 
text1: `MODO:`, 
text2: `TIPO (SMS):`, 
text3: `USUARIO:`, 
text4: `CHAT GRUPO:`, 
text5: `CHAT PRIVADO:`, 
text6: `MENSAJE:` }

//autobio
const Bio = { 
text: `✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨- ᴛᴇɴɢᴏ:`, 
text2: `ᴜsᴜᴀʀɪᴏs ᴜsᴀᴅᴏʀᴍᴇ ᴘᴜᴇᴅᴏ ʀᴇsᴘᴏɴᴅᴇ ʟᴇɴᴛᴀ ᴍɪ ᴠᴇʟᴏᴄɪᴅᴀᴅ ᴅᴇ ʀᴇsᴘᴜᴇsᴛᴀ ᴇs:`,
text3: `✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨ | ᴀᴄᴛɪᴠᴏ ✅️:`, 
text4: `ᴘᴀʀᴀ ᴠᴇᴢ ᴍɪ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏ ᴜsᴀʀ #menu`, 
text5: `✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨ - sᴜʙsᴄʀɪʙɪʀᴛᴇ ᴇʟ ɴᴜᴇsᴛʀᴏ ᴄᴀɴᴀʟ ᴅᴇʟ ʏᴏᴜᴛᴜʙᴇ 🔔\nhttps://www.youtube.com/@Eliasar_yt`, 
text6: `✅ Actividad:`, 
text7: `👥 Usuarios:` }

//antiarabe
const smsAntiFake = () => { return `✳️ En este grupo no esta permitido numero fake sera expulsado...` }
const smsAntiArabe = () => { return `✳️ En este grupo no esta permitido numero arabe hasta la próxima...` }

//antilink
const smsAntiLink = () => { return `\`\`\`「 ANTILINK DETECTADO 」\`\`\`\n\n` }
const smsAntiLink2 = () => { return `🤨 eso no esta permitido rata, Sera expulsado del grupo....` }
const smsAntiLink3 = () => { return `Te salvarte puto no soy admins 🙄\n\n*[ LLAMADO A LOS ADMINS ]*` }
const smsAntiLink4 = () => { return `> ᴱˡ ᵇᵒᵗ ⁿᵉᶜᵉˢᶦᵗᵃ ᵃᵈᵐᶦⁿ ᵖᵃʳᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵃ ᵉˢᵗᵃ ˢᵘᶜᶦᵃ ʳᵃᵗᵃ` }
const smsAntiLink5 = () => { return `Eres un admins del grupo, así que no te prohibiré el uso de enlaces :)` }
const smsAntiLink6 = () => { return `Te salvarte gil, no soy admin no te puedo eliminar` }

//allAntilink
const AntiLink = () => { return `*LINK DETECTADO 📢*` }
const AntiLink2 = () => { return `Usted sera eliminado de este grupo` }
const AntiToxic = (m, isToxic) => { return `Hey @${m.sender.split('@')[0]} decir la palabra *(${isToxic})* Esta prohibida En este grupo, No seas Toxico(a)\n\nADVERTENCIA` }
const AntiToxic2 = () => { return `superaste las 4 advertencias serás eliminado de este grupo 😐....` }
const viewOnce = () => { return `𝙰𝚀𝚄𝙸 𝙽𝙾 𝚂𝙴 𝙿𝙴𝚁𝙼𝙸𝚃𝙴 𝙾𝙲𝚄𝙻𝚃𝙰𝚁 𝙽𝙰𝙳𝙰` }

//autosticker
const smsAutoSicker = () => { return `🤡 Hey Donde carajo viste un sticker que dure tanto bobo 🤣. (Máximo 15 segundos)` }

//autonivel
const smsAutonivel = () => { return `*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\n🥳 Felicidades` }
const smsAutonivel2 = () => { return `👏 Subiste de nivel sigue asi 👏\n` }
const smsAutonivel3 = () => { return `*❑ NIVEL :*` }
const smsAutonivel4 = () => { return `*❐ NIVEL ANTERIOR :* ` }
const smsAutonivel5 = () => { return `*❐ NIVEL ACTUAL :*` }
const smsAutonivel6 = () => { return `*❑ RANGO :*` }
const smsAutonivel7 = () => { return `*❐ FECHA :*` }
const smsAutonivel8 = () => { return `_*Para saber cual es tu puesto del top, coloca el comando #lb*_` }
const smsAutonivel9 = () => { return `*🥳 FELICIDADES LLEGARTE A UN NUEVO NIVEL 🎊*\n\n` }

//info
const nivel = () => { return `[ ❇️ ] ɴᴇᴄᴇsɪᴛᴀ ᴇʟ ɴɪᴠᴇʟ` }
const nivel2 = () => { return `ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴛᴜ ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ` }
const admin = () => { return `*⚠️ Tu no eres admins 🤡 solo los admins pueden usar este comando*` }
const botAdmin = () => { return `*⚠️ Hey primero el bot osea (Yo), Necesito ser admin para usar este comando*` }
const propietario = () => { return `*⚠️ Este comando solo YO o mi jefe lo puede usar*` }
const prem = () => { return `*💠 Este comando solo es para usuarios VIP y mi propietario*` } 
const group = () => { return `*⚠️ Pendejo este comando solo se puede usar el grupo*` }
const private = () => { return `*⚠️ Este comando solo se puede usar al chat privado*` }
const bot = () => { return `*⚠️ Este comando solo (YO) lo puedo usar*` }
const error = () => { return `⪨╼╼≪⚠️ ERROR ⚠️≫╾╼⪩\n\nOCURRIÓ UN ERROR INESPERADO, (API CAIDA 😢)` }
const AvisoMG = () => { return `⪨╼╼≪⚠️ ACCION MAL USADA ⚠️≫╾╼⪩\n\n` }
const advertencia = () => { return `[ ⚠️ ＡＤＶＥＲＴＥＮＣＩＡ ]` }
const registra = () => { return `*[ ✨ HEY ALTO NO ESTAS REGISTRADO ✨ ]*\n\nNO APARECES EN MI BASE DE DATOS 🛑\n\nPara poder usar el bot necesita estar registrado:\n\n#reg nombre.edad` }
const limit = () => { return `*ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴜsᴀᴅᴏ*` }
const AntiNsfw = () => { return `*Los comando +18 esta desactivado*\nSi eres admin y quiere activarlos usar:\n• modocaliente on` }
const endLimit = () => { return `*😢 NOO TIENE MAS DIAMANTE 💎*\n\nPuede comprar mas usando el comando: #buy` }
const exito = () => { return `*EXITOS ✅*` }
const result = () => { return `*Resultados de :*` }

//Buscadores
const lengua = { 
ejem: `Ejemplo :`, 
ejemplo: `*Que esta buscando?\n*Ejemplo:*`, 
opcion: `OPCIÓN :`, 
tipo: `TIPO :`, 
id: `ID DEL VIDEO :`, 
titulo: `TITULO :`, 
Peso: `*PESO :*`, 
artista: `𝘈𝘙𝘛𝘐𝘚𝘛𝘈`, 
album: `𝘈𝘓𝘉𝘜𝘔`, 
vista: `VISTAS :`, 
publi: `𝘗𝘜𝘉𝘓𝘐𝘊𝘈𝘋𝘖`, 
dura: `DURACIÓN :`, 
subidos: `SUBIDOS :`, 
calidad: `CALIDAD :`, 
desc: `DESCRIPCION :`, 
text: `Ingresa un link para acortar!`, 
trad: `🔸 Traducción`, 
text2: `*Y EL TEXTO?*`, 
ia: `*⚠️ INGRESE EL TEXTO DE LO QUE QUIERE BUSCAR?*\n\n*• EJEMPLO :*\n`, 
ia2: `*⚠️ INGRESE UN TEXTO PARA CREAR UNA IMAGEN Y ASI USAR LA FUNCION DE DALL-E*\n\n*• EJEMPLO:*\n`,
espere: `⏳ *Aguarde un momento....*`, 
aguarde: `⏳ *𝘗𝘙𝘖𝘊𝘌𝘚𝘈𝘕𝘋𝘖 𝘓𝘈 𝘐𝘔𝘈𝘎𝘌𝘕, 𝘈𝘎𝘜𝘈𝘙𝘋𝘌𝘕 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖....*`, 
responde: `*[ ⚠️ ] ᴇɴᴠɪᴇ/ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ :`, 
incorrecto: `*[ ⚠️ ] ᴇʟ ғᴏʀᴍᴀᴛᴏ ᴅᴇʟ ᴀʀᴄʜɪᴠᴏ ɴᴏ ᴇs ᴄᴏᴍᴘᴀʀᴛɪʙʟᴇ, ᴇɴᴠɪᴀ/ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴜɴᴀ ғᴏᴛᴏ*`, 
hd: `*𝘈𝘘𝘜𝘐 𝘛𝘐𝘌𝘕𝘌 𝘓𝘈 𝘐𝘔𝘈𝘎𝘌𝘕 𝘌𝘓 𝘏𝘋*\n\nˢᶦ ˡᵃ ᶦᵐᵃᵍᵉⁿ ⁿᵒ ˢᵃˡᵉ ᵉˡ ᴴᴰ ʳᵉˢᵖᵒⁿᵈᵉ ᵃ ˡᵃ ᶦᵐᵃᵍᵉⁿ ᶜᵒⁿ ᵉˡ ᶜᵒᵐᵃⁿᵈᵒ ᵈᵉ ⁿᵘᵉᵛᵒ`, 
error: `No se pudo descargar su video por favor vuelva a intentar` 
}

//convertidores
const sms = {
text: `*Responde al audio que deseas cambiar con el comando:*`, 
text2: `*Responde a una imagen/video para convertir en url`, 
text3: `*[ ⚠️ ] Responda a un audio*`, 
text4: `*Y el sticker?*\n*Responde a un sticker capo*`, 
text5: `*🕔 𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖....*\n𝘌𝘴𝘵𝘰𝘺 𝘤𝘰𝘯𝘷𝘪𝘦𝘳𝘵𝘪𝘥𝘰 𝘪𝘮𝘢𝘨𝘦𝘯 𝘢 𝘥𝘪𝘴𝘦𝘯̃𝘰 𝘢𝘯𝘪𝘮𝘦, 𝘴𝘦𝘢 𝘱𝘢𝘤𝘪𝘦𝘯𝘵𝘦 𝘦𝘯 𝘭𝘰 𝘲𝘶𝘦 𝘦𝘯𝘷𝘪𝘰 𝘦𝘭 𝘳𝘦𝘴𝘶𝘭𝘵𝘢𝘥𝘰`, 
text6: `*ᴠᴇʀɪғɪǫᴜᴇ ǫᴜᴇ ᴇɴ ʟᴀ ɪᴍᴀɢᴇɴ sᴇᴀ ᴠɪsɪʙʟᴇ ᴇʟ ʀᴏsᴛʀᴏ ᴅᴇ ᴜɴᴀ ᴘᴇʀsᴏɴᴀ*`, 
text7: `𝘠 𝘭𝘢 𝘪𝘮𝘢𝘨𝘦𝘯? 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘰 𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘦 𝘢 𝘶𝘯𝘢 𝘪𝘮𝘢𝘨𝘦𝘯*`
}

const info = {
text: `𝐄𝐒𝐓𝐀𝐃𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓`, 
text2: `➢ 𝚁𝙰𝙼 𝙳𝙴𝙻 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁 :`, 
text3: `➢ 𝙿𝙻𝙰𝚃𝙰𝙵𝙾𝚁𝙼𝙰 :`, 
text4: `➢ 𝙷𝙾𝚃𝚂 :`, 
text5: `➢ 𝙲𝙿𝚄 𝚄𝚂𝙰𝙽𝙳𝙾 :`, 
text6: `➢ 𝙼𝙴𝙼𝙾𝚁𝙸𝙰 𝚃𝙾𝚃𝙰𝙻 :`, 
text7: `➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 :`, 
text8: `➢ 𝙰𝙲𝚃𝙸𝚅𝙾 :`, 
text9: `➢ 𝙼𝙾𝙳𝙾 :`, 
text10: `➢ 𝙱𝙾𝚃 𝚂𝙴𝙲𝚄𝙽𝙳𝙰𝚁𝙸𝙾𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 :`, 
text11: `➢ 𝐒𝐨𝐲 𝐮𝐧 𝐒𝐮𝐛𝐁𝐨𝐭 𝐝𝐞 :`,
text12: `𝐚𝐪𝐮𝐢 𝐭𝐢𝐞𝐧𝐞 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐦𝐢 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨, 𝐬𝐨𝐥𝐨 𝐡𝐚𝐛𝐥𝐚𝐫𝐥𝐞 𝐩𝐨𝐫 𝐝𝐮𝐝𝐚𝐬, 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚𝐬 𝐬𝐨𝐛𝐫𝐞 𝐞𝐥 𝐛𝐨𝐭.\n\nᴺᵒ ʰᵃᵍᵃⁿ ˢᵖᵃᵐ ᵃ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ ᵒ ᵠᵘᵉ ᵇˡᵒᵠᵘᵉᵃ`, 
text13: `*ʜᴏʟᴀ ᴇsᴛɪᴍᴀᴅᴏs ᴜsᴜᴀʀɪᴏs 👋🏻, ᴛᴇ ɪɴᴠɪᴛᴏ ᴀ ᴜɴɪʀᴛᴇ ᴀ ʟᴏs ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ʟᴀs ғᴀᴍɪʟᴀs ᴛʜᴇ ʟᴏʟɪʙᴏᴛ-ᴍᴅ ʏ ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ, ᴘᴀʀᴀ ᴄᴏɴᴠɪᴠɪʀ ᴄᴏɴ ʟᴀ ᴄᴏᴍᴜɴɪᴅᴀᴅ :ᴠ*\n\n*➤ ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇʟ ʙᴏᴛ:*`, 
text14: `*➤ ɢʀᴜᴘᴏ ᴅᴇʟ ᴄᴏʟᴀʙᴏʀᴀᴄɪᴏɴ:*`, 
text15: `*➤ ɢʀᴜᴘᴏs ᴛᴇsᴛ ᴘᴀʀᴀ ᴘʀᴜᴇʙᴀ ᴅᴇʟ ʙᴏᴛ:*`, 
text16: `*➤ ɪɴғᴏᴍᴀʀᴛᴇ sᴏʙʀᴇ ʟᴀs ɴᴜᴇᴠᴀs ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇs ᴅᴇʟ ʙᴏᴛ ᴀǫᴜɪ:*`, 
text17: `*➤ ɢʀᴜᴘᴏ ᴅᴇʟ ᴀʏᴜᴅᴀ sᴏʙʀᴇ ᴇʟ ʙᴏᴛ:*`, 
text18: `• ɢʀᴜᴘᴏs ᴅᴇʟ ᴀᴍɪsᴛᴀᴅᴇs ᴅᴏɴᴅᴇ ᴇsᴛᴀ ᴇʟ ʙᴏᴛ`, 
text19: `ˢᶦ ᵠᵘᶦᵉʳᵉˢ ᵠᵘᵉ ᵗᵘ ᵍʳᵘᵖᵒˢ ᵃᵖᵃʳᵉᶻᶜᵃⁿ ᵃᵠᵘᶦ ʰᵃᵇˡᵃʳ ᶜᵒⁿ ᵐᶦ ᶜʳᵉᵃᵈᵒ`, 
text20: (fb, md) => `╭─────────────┈⊷
│ \`COMO INSTALAR ESTE BOT?\`
╰┬────────────┈⊷
┌┤\`📌 REQUISITOS PARA LAS INSTALACION \`
┌┤❇️ _Dudas: ${fb}_
┌┤❇️ _Tutoríal: https://www.youtube.com/@Eliasar_yt_
┌┤❇️ _1 GB de almacenamiento_
┌┤❇️ _Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file_
┌┤❇️ _GitHub: ${md}_
┌┤❇️ _un whatsapp inmune (secundario)_
┌┤❇️ _un número victual (otro numero)_
┌┤❇️ _2 dispositivo o una PC para escanear_
╰────────────┈⊷

 \`\`\`📌 COMANDO DE INSTALACION TERMUX\`\`\`

* termux-setup-storage

* apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn

* git clone https://github.com/Eliasar54/ansi-BOT-MD.git && cd ansi-BOT-MD && yarn && npm install

* npm start

> (𝘌𝘴𝘤𝘢𝘯𝘦𝘢𝘳 𝘦𝘭 𝘘𝘙, 𝘙𝘢𝘱𝘪𝘥𝘰)

🚩 --------[ Infinity-Host ]--------- 🚩
> *🆕 Nuevo host propio*

*🔰 Tutorial de como crear cuenta el la Dashboard y crear un servidor:*
https://youtu.be/o6ZSpMOsvHs?si=fzwZIDN5LPE1w0pI

*📍Dashboard:*
https://dashboard.infinitywa.xyz

*✅ Panel:*
https://live.panel-infinitywa.store

*🧰 Bot de Support: exclusivo para host* 
wa.me/message/FETBF7YBO37CG1

*⚙️Grupo support:*
> Dudas *UNICAMENTE SOBRE EL HOST*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

🚀 --------[ Cafirexos host ]--------- 🚀

*Página oficial:*
https://www.cafirexos.com/

*Panel:*
https://panel.cafirexos.com/

*dashboard:*
https://dash.cafirexos.com/home

*Dudas UNICAMENTE SOBRE EL HOST:*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ 
(Pregunta por Diego: cafirexos) 

*Canal de WhatsApp:*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

🚀 --------[ Vortexuscloud host ]--------- 🚀
> 💞 Agraciemiento a: mauro 

https://youtube.com/@vortexuscloud

> Pagina oficial :
https://vortexuscloud.com

> dashboard:
https://dash.vortexuscloud.com

> panel:
https://panel.vortexuscloud.com

> Canal de WhatsApp sobre informacion del host 
https://whatsapp.com/channel/0029Va8ZD6O3mFXxTPl1m13A`, 
text21: `*𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:`, 
text22: `𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁, 𝙽𝙾𝚂 𝙲𝙾𝙽𝚃𝙰𝚁𝙴𝙼𝙾𝚂 𝙲𝙾𝙽 𝚄𝚂𝚃𝙴𝙳 𝚂𝙸 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾, 𝙳𝙴 𝚂𝙴𝚁 𝙵𝙰𝙻𝚂𝙾 𝚂𝙴𝚁𝙰 𝙸𝙶𝙽𝙾𝚁𝙰𝙳𝙾 𝚈 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*`, 
text23: (paypal) => `*╼╼╼╼╼╼╼[ 💖 DONACION 💖 ]╾╾╾╾╾╾╾╾*\n\n*Hola 👋, si quieres apoyar este proyecto, puedes hacerlo a través de donaciones voluntarias por PayPal, Mercado Pago o Naranja X.*\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️PayPal:*\n${paypal}\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️Mercado pago:*\n*• Alias :* OficialGB\n*• CVU :* 0000003100059201491917\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️ Naranja X:*\n*• Alias :* OficialGL\n*• CVU :* 4530000800017922067114`, 
text24: `> *💖 ᵀᵃᵐᵇᶦᵉⁿ ᵖᵘᵉᵈᵉˢ ᶜᵒᵐᵖᵃʳᵗᶦʳ ˡᵒ ˢᶦᵍᵘᶦᵉⁿᵗᵉ ᶜᵒᵐᵒ ᴹᵘᵉˢᵗʳᵃ ᵈᵉ ᴬᵖᵒʸᵒ 💕*\n\n*❤ ᴬᵖᵒʸᵃʳ ᵉˡ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᶜᵒⁿ ᵘⁿᵃ ᵉˢᵗʳᵉˡˡᶦᵗᵃˢ ᴳʳᵃᶜᶦᵃˢ 🙏💕*`, 
text25: `┗❴ ⚠ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 ⚠ ❵┛\n\nᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ᴇᴛɪǫᴜᴇᴛᴀʀ ᴀʟ ᴄʀᴇᴀᴅᴏʀ/ᴅᴇsᴀʀʀᴏʟʟᴏ sɪ ᴛɪᴇɴᴇs ᴜɴᴀ sᴜɢᴇʀᴇɴᴄɪᴀs ʀᴇғᴇʀᴇɴᴛᴇ ᴀʟ ʙᴏᴛ ᴇsᴄʀɪʙɪʀʟᴇ ᴀ sᴜs ᴘʀɪᴠ`, 
text26: `*⚡ ¿Esta buscando un hots de calidad y al ajuste de su bolsillo?*

⚡ ¿Su bot necesita un impulso? ¡Cafirexos tiene la solución perfecta! Nuestro hosting de alto rendimiento mantendrá tu bot activo 24/7 a un precio increíblemente bajo. Olvídese de los problemas de memoria y manténga su bot 24/7 Activo a un precio aceptable. Únase a nuestra comunidad y dale a su bot el impulso que se merece.

🔵 \`\`\`Información del Host\`\`\`

💻 *Página*
• https://www.cafirexos.com

✨ *Dashboard*
• https://dash.cafirexos.com

⚙️ *Panel*
• https://panel.cafirexos.com

📢 *Canal de WhatsApp*
• https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

💥 *Grupo de WhatsApp* 
• https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ 

📧 *Correo*
• contacto@cafirexos.com

🧑‍💻 *Contacto (Diego Flores)*
_(Dudas UNICAMENTE SOBRE EL HOST)_
• https://wa.me/50497150165`, 
text27: (nna, host, paypal, fb) => `*\`💫 Te presentamos un nuevo hosting: "Infinity-Wa Host"\`*

*¿Muy lento tu nokia y necesitas tener activo tu bot 24/7?*

> *Te tenemos la mejor opción para mantener activo tu bot 24/7, a precios muy accesibles. Es muy barato y todos pueden comprar.*

*🚩Precios :*
* 1GB, 100 CPU = 1Dolar
* 2GB, 120 CPU = 2Dolar
* 3GB, 140 CPU = 3Dolar
* 4GB, 175 CPU = 4Dolar
* 5GB, 200 CPU = 5 Dólar. 

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://host.panel-infinitywa.store

🧡 *Canal de WhatsApp:*
${nna}

💚 *Grupo:*
${host}

🛍️ *Método de pago:*
*• PayPal :* CON INFINITI-WA
*• Mercado pago, alías:* OficialGB
*• Naranja x, alías:* OficialGL
*• Yape (Perú) :* +51948705559

*\`💙 Contactanos para más información o alquidir los servicios:\`*
• ${fb}
• wa.me/527294888993
• wa.me/5492964650915` }

const menu = {
text: `❐ 𝑃𝑅𝐸𝐹𝐼𝐽𝑂`, 
text2: `❐ 𝐹𝐸𝐶𝐻𝐴 :`, 
text3: `❑ 𝐻𝑂𝑅𝐴 :`, 
text4: `❐ 𝑉𝐸𝑅𝑆𝐼𝑂𝑁 :`, 
text5: `❐ 𝑈𝑆𝑈𝐴𝑅𝐼𝑂:`, 
text6: `❑ 𝐴𝐶𝑇𝐼𝑉𝐼𝐷𝐴𝐷:`, 
text7: `❐ 𝑀𝑂𝐷𝑂:`, 
text8: `❐ 𝐿𝐼𝑀𝐼𝑇𝐸:`, 
text9: `❑ 𝑁𝐼𝑉𝐸𝐿: `, 
text10: `❐ 𝑅𝐴𝑁𝐺𝑂 :`, 
text11: `❐ 𝑅𝐸𝐺𝐼𝑆𝑇𝑅𝐴𝐷𝑂:`, 
textt: `❐ 𝐵𝑂𝑇-𝑂𝐹𝐶 : 𝐵𝑂𝑇 𝑂𝐹𝐼𝐶𝐼𝐴𝐿 `, 
texttt: `❐ 𝑆𝑂𝑌 𝑈𝑁 𝑆𝑈𝐵 𝐵𝑂𝑇 𝐷𝐸  :`, 
text12: `\`\`\`✨ 𝐿𝐼𝑆𝑇𝐴 𝐷𝐸 𝐶𝑂𝑀𝐴𝑁𝐷𝑂𝑆 ✨\`\`\`
\`\`\`ʙᴏᴛ sɪᴍᴘʟᴇ ᴄᴏɴ ᴘᴏᴄᴏs ᴄᴏᴍᴀɴᴅᴏs\`\`\``, 
text13: `*Palabras especificas para que el bot interactue con usted*`, 
text14: `_*ᴼʲᶦᵗᵒ ᵉˢᶜʳᶦᵇᵉ ᵗᵃˡ ʸ ᶜᵒᵐᵒ ᵉˢᵗᵃ ᵉⁿ ᵉˡ ᵐᵉⁿˢᵃʲᵉ*_
*ᵠᵘᶦᵉʳᵉ ᵃᵍʳᵉᵍᵃ ᵃˡᵍᵘⁿ ᵃᵘᵈᶦᵒ ⁿᵘᵉᵛᵒ ᵉˢᶜʳᶦᵇᶦʳˡᵉ ᵃ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ ᵘʷᵘ*`,
text15: (vs) => `*\`🤔 Que hay de nuevo? 🤗\`*\n\n*🌐 Nueva Version:* [ ${vs} ]\n\n*Nuevo:*

🚩 Se agrego un nuevo menu ahora (menu-lista) 

🚀 El play cambio ahora es con botones y eleccion (audio, video) 

✅ También se ha añadido el comando:
/enable (el cual te mostrará una lista de opciones para proteger tu grupo y activar o desactivar funciones).

🟢 Por si fuera poco, ahora contamos con la inteligencia artificial de Gemini y Copitot, accesibles a través de los comandos:
/gemini
/copilot

> Además, *⚡ hemos mejorado la estabilidad del bot*, para que disfrutes de una experiencia más fluida.

ᴹᵃˢ ᶜᵒᵐᵃⁿᵈᵒ ᵉˡ ᶠᵘᵗᵘʳᵃ ᵛᵉʳˢᶦᵒⁿᵉˢ ᵠᵘᶦᵉʳᵉ ᵠᵘᵉ ᵃᵍʳᵉᵍᵘᵉ ᵃˡᵍᵘⁿ ᶜᵒᵐᵃⁿᵈᵒ ᵉˡ ᵉˢᵖᵉᶜᶦᵃˡ ᵉˢᶜʳᶦᵇᶦʳˡᵉ ᵃ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ`, 
text16: `\`🌐 REGLAS DEL BOT 🌐\`

*• No hacer spam de comandos*

Usar los comando cada 5 segundos, de lo contrario el bot se puede satura, o numero del bot puede irse a support por spam.

*• No estar enviando link del grupos al bot para que se una*

Hablar con mi creador y el lo une a tu grupo

*• No llamar al bot, ni al creador*

Si lo haces, seras baneado del bot y bloqueado` }

//jadibot.js
const jadibot = {
text: `Escanea este QR para convertirte en un bot temporal

1) Haz clic en los tres puntos en la esquina superior derecha
2) Toca WhatsApp Web
3) Escanea este QR
*El QR expira a los 45 segundos*\n\n`, 
text2: `NUEVO FORMA DE HACERTE UN SUB BOT

1) Haz clic en los tres puntos en la esquina superior derecha
2) Toca WhatsApp Web
3) Da click en vincular con codigo de teléfono
4) Pega el codigo a continuación\n\n`, 
text3: `*⚠️ Este comando fue desabilitado por el creador*`, 
text4: `*✅ Ya estas conectado, sea paciente, los mensajes se estan cargando...*`, 
text5: `*Conectado con exito*`, 
text6: `× Bot :`, 
text7: `× Dueño :`, 
text8: `\`NOTA:\` Esto es temporal si el Bot principal se reinicia o se desactiva, todos los sub bots tambien lo haran\n\nPuede iniciar sesión sin el codigo qr con el siguiente mensaje, envialo cuando no funcione el bot....`, 
text9: `*⚠️ Dispositivo desconectado tendra que volver a conectarte con #jadibot*`, 
text10: `*⚠️ Reenvia el comando....*`, 
text11: `[ ⚠️ ] Reinicio requerido, Reiniciando...`, 
text12: `*⚠️ Dispositivo desconectado*\n\n*Tendras que volver a iniciar sesion (usa .deljadibot)*`, 
text13: `*⚠️ Conexion cerrada*\n*Intenta reconectarte con:`, 
text14: `[ ⚠️ ] Conexion perdida con el servidor, reconexion Forzada`, 
text15: `*[ ⚠️ ] Tu conexion es invalida*\n*no se te reconectara*`, 
text16: `[ ⚠️ ] Se agoto el tiempo de conexión.`, 
tex17: `[ ⚠️ ] Error desconocido:\n`, 
text18: `*𝘚𝘜𝘉𝘉𝘖𝘛𝘚 𝘊𝘖𝘕𝘌𝘊𝘛𝘈𝘋𝘖𝘚:*` }

//descargar.js
const descargar = {
text: `*Que esta buscado? ingrese el nombre del tema*\n\nEjemplo:`, 
text1: `*Que esta buscado?*\n\ningrese el nombre del tema o el link de YouTube para descargar sus audio/video\n\nEjemplo:`, 
text2: `         *⌜Cancion Encontrada ✅⌟*`,
text3: `         *⌜Video Encontrado ✅⌟*`, 
text4: `*Aqui tiene su video 👌*`, 
text5: `          *⌜Audio Encontrado ✅⌟*`, 
text6: `*𝘌𝘚𝘗𝘌𝘙𝘌 𝘌𝘕𝘝𝘐𝘈𝘕𝘋𝘖 𝘚𝘜 𝘈𝘙𝘊𝘏𝘐𝘝𝘖 𝘔𝘗3 ⚠*

*𝘚𝘦𝘳𝘷𝘪𝘤𝘪𝘰 𝘱𝘳𝘰𝘷𝘦𝘪𝘥𝘰 𝘱𝘰𝘳 ✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨*`, 
text7: `*𝘌𝘚𝘗𝘌𝘙𝘌 𝘌𝘕𝘝𝘐𝘈𝘕𝘋𝘖 𝘚𝘜 𝘈𝘙𝘊𝘏𝘐𝘝𝘖 𝘔𝘗4 ⚠*

*𝘚𝘦𝘳𝘷𝘪𝘤𝘪𝘰 𝘱𝘳𝘰𝘷𝘦𝘪𝘥𝘰 𝘱𝘰𝘳 ✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨*`, 
text8: `*Que esta buscando?*\n*Ingrese el nombre de algunas canción de spotify.*`, 
text9: `*Donde esta el link del github?*\n\n*Ejemplo :*`, 
text10: `*𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖...*\n\nˢᶦ ᵉˡ ᵃʳᶜʰᶦᵛᵒ ⁿᵒ ˡˡᵉᵍᵃ ᵉˢ ᵠᵘᵉ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᵉˢ ᵐᵘʸ ᵖᵉˢᵃᵈᵒ`, 
text11: `*Que esta buscando? ingresa el titulo/nombre de la canción, para buscar la letra*\n*Ejemplo:*`, 
text12: `*Nombre*`, 
text13: `*Tamaño*`, 
text14: `*Extension*`, 
text15: `No puedo descarga el archivo supera el limite 900 MB\n`, 
text16: `*🎥 AQUI ESTA TU VIDEO DE FACEBOOK*`, 
text17: `*Ingrese el nombre del usuario*\n\n*Ejemplo:*`, 
text19: `*Nombre de usuario :*`, 
text20: `*Seguidores :*`, 
text21: `*Siguiendo :*`, 
text22: `*Biografía :*`, 
text23: `*Publicaciones :*`, 
text24: `*[ ⚠️ ] Que apk esta buscando?*`, 
text25: `*Descargador de Aptoide*`, 
text26: `*Última actualización`, 
text27: `*Tamaño`, 
text28: `[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.`, 
title: `*Título:*`, 
duracion: `*Duracion:*`,
ago: `*Publicado:*`, 
autor: `*Autor:*`,
views: `*Vistas:*`, 
letra: `*Letra:*`, 
music: `*• 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘥𝘰 𝘢𝘶𝘥𝘪𝘰 🔊, 𝘈𝘨𝘶𝘢𝘳𝘥𝘦 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰....*`, 
vid: `*• 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘥𝘰 𝘷𝘪𝘥𝘦𝘰 🎥, 𝘈𝘨𝘶𝘢𝘳𝘥𝘦 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰....*`, 
espere: `*🕔 𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖....*`, 
audio: `*⏳ＰＲＯＣＥＳＡＮＤＯ....*\n\n_ᴰᵉˢᶜᵃʳᵍᵃᵈᵒ ˢᵘˢ ᵃᵘᵈᶦᵒ ᵃᵍᵘᵃʳᵈᵉ ᵘⁿ ᵐᵒᵐᵉⁿᵗᵒ ᵖᵒʳ ᶠᵃᵛᵒʳ_`, 
video: `*⏳ＰＲＯＣＥＳＡＮＤＯ....*\n\n_ᴰᵉˢᶜᵃʳᵍᵃᵈᵒ ˢᵘˢ ᵛᶦᵈᵉᵒ ᵃᵍᵘᵃʳᵈᵉ ᵘⁿ ᵐᵒᵐᵉⁿᵗᵒ ᵖᵒʳ ᶠᵃᵛᵒʳ_`,
descargado: `_Descargo archivo aguarde un momento...._` }

//enable.js
const enable = {
text: `⪨╼╼≪⚠️ ACCION MAL USADA ⚠️≫╾╼⪩\n\n*Use de esta forma ejemplo:*`, 
text1: `*Se activo con exito*`, 
text2: `*Esta desactivado!*`, 
text3: `*Atención a todos los miembros activos de este grupo 📣*\n\n*El antilink esta activo*\n\n*Y solo los admins de este grupo podran pasar enlaces*\n\nSi algun participante que no es admin envía un enlace de otro grupo sera expulsado de este grupo de inmediato`, 
text4: `El Bot solo responderá a los admins del grupo.`, 
text5: `Ahora el bot funciona para todos los participante del grupo 🥳` }

//grupo.js
const grupos = {
text: `*Y el texto?*`, 
text1: `*GRUPO ABIERTO CON EXITO✅*`, 
text2: `*GRUPO CERRADO CON EXITO✅*`, 
text3: `*INGRESE ENLACE DEL GRUPO*\n\n*📌 EJEMPLO:*`, 
text4: `*YA ME UNÍ 😼*`, 
text5: `📧 *ＳＯＬＩＣＩＴＵＤ ＰＡＲＡ ＵＮ ＧＲＵＰＯ*\n\n*👤 ＳＯＬＩＣＩＴＡＮＴＥ*`, 
text6: `*🔮 ＥＮＬＡＣＥ*`, 
text7: `*✅ 𝘚𝘶 𝘦𝘯𝘭𝘢𝘤𝘦 𝘴𝘦 𝘦𝘯𝘷𝘪𝘰𝘯 𝘢 𝘮𝘪 𝘗𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘢)*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *𝘚𝘶 𝘨𝘳𝘶𝘱𝘰 𝘴𝘦𝘳𝘢 𝘦𝘷𝘢𝘭𝘶𝘢𝘥𝘰 𝘺 𝘲𝘶𝘦𝘥𝘢𝘳𝘢 𝘢 𝘥𝘦𝘤𝘪𝘴𝘪𝘰𝘯 𝘥𝘦 𝘮𝘪 𝘗𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘢) 𝘴𝘪 𝘦𝘭 𝘣𝘰𝘵 𝘴𝘦 𝘶𝘯𝘦 𝘰 𝘯𝘰 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *𝘌𝘴 𝘱𝘰𝘴𝘪𝘣𝘭𝘦 𝘲𝘶𝘦 𝘴𝘶 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘶𝘥 𝘴𝘦𝘢 𝘙𝘦𝘤𝘩𝘢𝘻𝘢𝘥𝘢 𝘱𝘰𝘳 𝘭𝘢𝘴 𝘴𝘪𝘨𝘶𝘪𝘦𝘯𝘵𝘦𝘴 𝘊𝘢𝘶𝘴𝘢𝘴:*\n*1️⃣ 𝘌𝘭 𝘉𝘰𝘵 𝘦𝘴𝘵𝘢́ 𝘚𝘢𝘵𝘶𝘳𝘢𝘥𝘰.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *𝘌𝘭 𝘉𝘰𝘵 𝘧𝘶𝘦 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘥𝘰 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *𝘌𝘭 𝘎𝘳𝘶𝘱𝘰 𝘯𝘰 𝘤𝘶𝘮𝘱𝘭𝘦 𝘤𝘰𝘯 𝘭𝘢𝘴 𝘕𝘰𝘳𝘮𝘢𝘵𝘪𝘷𝘢𝘴 𝘥𝘦 𝘣𝘰𝘵*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *𝘌𝘭 𝘦𝘯𝘭𝘢𝘤𝘦 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘴𝘦 𝘳𝘦𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘪𝘰.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *𝘕𝘰 𝘴𝘦 𝘢𝘨𝘳𝘦𝘨𝘢 𝘢 𝘎𝘳𝘶𝘱𝘰𝘴 𝘴𝘦𝘨𝘶́𝘯 𝘔𝘪 𝘗𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘢)*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n📧 *𝘓𝘢 𝘴𝘰𝘭𝘪𝘤𝘪𝘵𝘶𝘥 𝘱𝘶𝘦𝘥𝘦 𝘵𝘢𝘳𝘥𝘢𝘳 𝘏𝘰𝘳𝘢𝘴 𝘦𝘯 𝘴𝘦𝘳 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘪𝘥𝘢. 𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘛𝘦𝘯𝘦𝘳 𝘗𝘢𝘤𝘪𝘦𝘯𝘤𝘪𝘢, 𝘎𝘳𝘢𝘤𝘪𝘢𝘴*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n*ᴾᵘᵉᵈᵉ ᵃᵖᵒʸᵃʳ ᵉˡ ᵇᵒᵗ ᶜᵒⁿ ᵘⁿᵃ ᴱˢᵗʳᵉˡˡᶦᵗᵃ ᵉˡ ⁿᵘᵉˢᵗʳᵒ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᵒᶠᶦᶜᶦᵃˡ ʸ ˢᵘˢᶜʳᶦʳᵗᵉ ᵃ ⁿᵘᵉˢᵗʳᵒ ᶜᵃⁿᵃˡ ᵈᵉˡ ʸᵒᵘᵀᵘᵇᵉ ᵐᵃⁿᵈᵃ ᶜᵃʳᵗᵘʳᵃ ᵃ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ ᵖᵃʳᵃ ᵠᵘᵉ ᵖᵘᵉᵈᵃ ᵃᵍʳᵉᵍᵃ ᵉˡ ᵇᵒᵗ ᵃ ᵗᵘ ᵍʳᵘᵖᵒ 💫*`, 
text8: (md, yt, nn7, fb) => `*[ ＵＮＥ ＵＮ ＢＯＴ Ａ ＴＵ ＧＲＵＰＯ ]*

Puedes solicitarlo haciendo una donación voluntaria a través de PayPal o Mercado Pago arg. 

🚀 El bot estará activo 24/7 para tu grupo.

*⚡ ¿Por dónde puedo donar?*
A través de nuestro Paypal, Mercado Pago o Naranja X.

*❇️PayPal:* 
https://www.paypal.me/EliasarMoncada72

*❇️Mercado pago:*
*• NO TENEMOS ESTE MÉTODO DE PAGO PERO PUEDES

*⚡ ¿No puedo donar hay otra opción para obtener un bot el mi Grupo?*
puede apoyar nuestro repositorio oficial con una estrellita 🌟
• ${md}
• ${md}

🔔 Subscrirte a nuestro canal de YouTube oficial
• ${yt}

*⏩ Siguiente paso ⏩*

Una vez realizado el pago, puedes informar a mi creador y enviar un comprobante de envío del dinero (captura de pantalla) para que pueda agregar el bot a tu grupo 👇. 
• ${nn7}
• ${fb}

*⚡ ¿El bot estará activo 24/7?*
Sí, nuestro bot está alojado en un servidor de pago para mantenerlo activo 24/7 (por eso también solicitamos donaciones para mantenerlo en funcionamiento).`, 
text9: `*⚠️ Y la imagen?*`, 
text10: `*⚠️ Responde a una  Image con :*`, 
text11: `*✅ El nombre del grupo se cambio correctamente*`, 
text12: `*✅ La descripción del grupo se cambio con éxito*`, 
text13: `*[ ⚠️ ] INGRESA EL NÚMERO DEL LA PERSONA QUE QUIERA AGREGA*\n*EJEMPLO:*`, 
text14: `*⚠️ INGRESA EL NUMERO SIN EL (+)*`, 
text15: `≡ *INVITACIÓN*\n\nHola un usuario te invito a unirte a este grupos`, 
text16: `*[ ⚠️ ] A QUIEN CARAJO ELIMINO? ETIQUETA ALGUN USUARIO NO SOY ADIVINO 😯*`, 
text17: `*[ ⚠️ ] A QUIEN LE DOY ADMIN? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`, 
text18: `*[ ⚠️ ] A QUIEN LE QUITO ADMINS? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`, 
text19: `*BOT APAGADO*`, 
text20: `*BOT ONLINE YA ESTOY DISPONIBLE ✅*`, 
text21: `❑ Mensaje :`, 
text22: `*[ ⚠ ️] ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴄᴜᴀɴᴅᴏ sᴇ ᴛʀᴀᴛᴇ ᴅᴇ ᴜɴᴀ ᴇᴍᴇʀɢᴇɴᴄɪᴀ*`, 
text23: `ɪɴғᴏ ᴅᴇ ɢʀᴜᴘᴏ`, 
text24: `*🔸️ ɴᴏᴍʙʀᴇ* :`, 
text25: `*🔸️ ᴍɪᴇᴍʙʀᴏs* :`, 
text26: `Participantes`, 
text27: `*🔸️ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ:*`, 
text28: `*🔸️ ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ:*`, 
text29: `*🔸️ ᴅᴇsᴄʀɪᴘᴄɪᴏɴ* :`, 
text30: `[ ⚠️ ] ᴇᴛɪǫᴜᴇᴛᴀ/ᴍᴇɴᴄɪᴏɴᴀ ᴀ ᴀʟɢᴜɪᴇɴ\n\n📌 ᴇᴊᴇᴍᴘʟᴏ :`, 
text31: `✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`, 
text32: `⚠️ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝙳𝙾* ⚠️`, 
text33: `*𝚄𝚜𝚞𝚊𝚛𝚒𝚘:*`, 
text34: `*𝙰𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊:*`, 
text35: `*𝚁𝚊𝚣𝚘𝚗:*`, 
text36: `⚠️ *𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰* ⚠️
𝚁𝚎𝚌𝚒𝚋𝚒𝚜𝚝𝚎 𝚞𝚗𝚊 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊 𝚍𝚎 𝚞𝚗 𝚊𝚍𝚖𝚒𝚗`, 
text37: `𝚜𝚒 𝚛𝚎𝚌𝚒𝚋𝚎𝚜 *4* 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚜𝚎𝚛𝚊𝚜 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘`, 
text38: `⛔ 𝙴𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚜𝚞𝚙𝚎𝚛𝚘 𝚕𝚊𝚜 *4* 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚙𝚘𝚛 𝚕𝚘 𝚝𝚊𝚗𝚝𝚘 𝚜𝚎𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘`, 
text39: `⚠️ *𝚂𝙴 𝚀𝚄𝙸𝚃𝙾 𝚄𝙽𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰* ⚠️`, 
text40: `ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs ᴛᴏᴛᴀʟ:`, 
text41: `🔸️ ᴜɴ ᴀᴅᴍɪɴ ʀᴇᴅᴜᴊᴏ sᴜ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ, ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs`, 
text42: `🔸️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ ᴛɪᴇɴᴇ ɴɪɴɢᴜɴᴀ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ` }

//juegos.js
const juegos = {
text: `*Y la pregunta?*\n\n*Ejemplo:*`, 
text1: `*• Pregunta:*`, 
text2: `*• Respuesta:*`, 
text3: `Te deberias casar con`, 
text4: `hacen una bonita pareja 💕`, 
text5: `*Ingrese el @ o el nombre de la persona*`, 
text6: `🤤👅🥵 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!*🥵👅🤤

𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚`, 
text7: `𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!`, 
text8: `🤤🥵 *¡𝐘𝐀 𝐓𝐄 𝐇𝐀𝐍 𝐅𝐎𝐋𝐋𝐀𝐃𝐎!* 🥵🤤`, 
text9: `han pensado en hacer un trio? ustedes 3 hacen un buen trio 😳😏`, 
text10: `*_😍 Las 5 mejores parejas del grupo 😍_*`, 
text11: `- Esta pareja esta destinada a estar junta 💙`, 
text12: `- Esta pareja son dos pequeños tortolitos enamorados ✨`, 
text13: `- Ufff y que decir de esta pareja, ya hasta familia deberian tener 🤱🧑‍🍼`, 
text14: `- Estos ya se casaron en secreto 💍`, 
text15: `- Esta pareja se esta de luna de miel ✨🥵😍❤️`, 
text16: `*[ ⚠️ ] ᥱsᥴrіᑲᥱ ᥱᥣ ᥒ᥆mᑲrᥱ ძᥱ ძ᥆s ⍴ᥱrs᥆ᥒᥲs ⍴ᥲrᥲ ᥴᥲᥣᥴᥙᥣᥲr sᥙ ᥲm᥆r*`, 
text17: `*һᥱᥡ ᥱsᥴrіᑲᥱ ᥱᥣ ᥒ᥆mᑲrᥱ ძᥱ ᥣᥲ sᥱgᥙᥒძᥲ ⍴ᥱrs᥆ᥒᥲ*`,
text18: `*Ingrese un nombre?*`, 
text19: `*[ ⚠️ ] INGRESA EL @tag DE ALGUN USUARIO*`, 
text20: `*[ ⚠️ ] іᥒgrᥱsᥲ ᥣᥲ ᥴᥲᥒ𝗍іძᥲძ 𝗊ᥙᥱ ძᥱsᥱᥲ ᥲ⍴᥆s𝗍ᥲr*\n\n*📌 ᥱȷᥱm⍴ᥣ᥆:*`, 
text21: `⏳ ᥱs⍴ᥱrᥱ`, 
text22: `⍴ᥲrᥲ ᥎᥆ᥣ᥎ᥱr ᥲ ᥲ⍴᥆s𝗍ᥲr`, 
text23: `*✳️ mіᥒіm᥆ ძᥱ ᥣᥲ ᥲ⍴ᥙᥱs𝗍ᥲ ᥱs *100 ᥊⍴*`, 
text24: `*✳️ ᥒ᥆ 𝗍іᥱᥒᥱs sᥙ𝖿іᥴіᥱᥒ𝗍ᥱ ᥊⍴*`, 
text25: `🎁 gᥲᥒᥲr𝗍ᥱ`, 
text26: `*🔮 ᥴᥲsі ᥣ᥆ ᥣ᥆grᥲs!! sіgᥙᥱ іᥒ𝗍ᥱᥒ𝗍ᥲᥒძ᥆*\n*𝗍᥆mᥲ +20 ᥊⍴*`, 
text27: `😔 ⍴ᥱrძіs𝗍ᥱ`, 
text28: `🥌ᴘɪᴇᴅʀᴀ 📄ᴘᴀᴘᴇʟ ✂️ᴛɪᴊᴇʀᴀ\n\n• ᴘᴜᴇᴅᴇ ᴜsᴀʀ ᴇsᴛᴏs ᴄᴏᴍᴀɴᴅᴏ:\n🥌 #ppt piedra\n📄 #ppt papel\n✂️ #ppt tijera\n\n• ᴜsᴇ ᴇɴ ᴍɪɴᴜsᴄᴜʟᴀs\n*Ejemplo:* #ppt papel` }

//nsfw.js
const nsfw = {
text: `😐 Eres menor de edad! vete a jugar free fire 😆`, 
text1: `*Aqui tiene mi pack 🥵*`, 
text2: `*🥵 𝘋𝘐𝘚𝘍𝘙𝘜𝘛𝘈 𝘋𝘌𝘓 𝘝𝘐𝘋𝘌𝘖 🥵` }

//propietario.js
const owner = {
text: `*Ingrese el texto que quiere difundir*`, 
text1: `*Enviando mensajes oficial un momento*`, 
text2: `「 ✅ *𝘊𝘖𝘔𝘜𝘕𝘐𝘊𝘈𝘋𝘖 𝘖𝘍𝘐𝘊𝘐𝘈𝘓* ✅ 」`, 
text3: `ᴛʀᴀɴsᴍɪsɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴄᴏɴ ᴇxɪᴛᴏs ✅ ᴛᴏᴛᴀʟ:`, 
text4: `ᴄʜᴀᴛ ɢʀᴜᴘᴏs\nᴛɪᴇᴍᴘᴏ ᴛᴏᴛᴀʟ ᴅᴇ ᴇɴᴠɪᴏ:`, 
text5: `*El usuario fue bloqueado del bot*`, 
text6: `*El usuario fue desbloqueado del bot*`, 
text7: `*[ ⚠️ ] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙻 𝙲𝚄𝙰𝙻 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾 𝚃𝙴𝚇𝚃𝙾*`, 
text8: `*⚠️ 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*`, 
text9: `*[ ⚠️ ] 𝙴𝚁𝚁𝙾𝚁 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*`, 
text10: `*[ ⚠️ ] 𝙽𝚘 𝚝𝚒𝚎𝚗𝚎𝚜 𝚙𝚎𝚛𝚖𝚒𝚜𝚘 𝚙𝚊𝚛𝚊 𝚌𝚊𝚖𝚋𝚒𝚊𝚛 𝚎𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚍𝚎 𝚂𝚝𝚒𝚌𝚔𝚎𝚛*`, 
text11: `*[ ✔ ] ᴇʟ ᴛᴇxᴛᴏ/ᴄᴏᴍᴀɴᴅᴏ ᴀsɪɢɴᴀᴅᴏ ᴀʟ sᴛɪᴄᴋᴇʀ/ɪᴍᴀɢᴇɴ ғᴜᴇ ᴀɢʀᴇɢᴀᴅᴏ ᴀ ʟᴀ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*`, 
text12: `*𝙴𝚜𝚝𝚎 𝚒𝚍 𝚍𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚗𝚘 𝚎𝚡𝚒𝚜𝚝𝚎*`, 
text13: `*[ ⚠️ ] No tienes permiso para cambiar este comando de Sticker*`, 
text14: `*𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂*\n▢ *𝙸𝚗𝚏𝚘:* 𝚂𝚒 𝚎𝚜𝚝𝚊 𝚎𝚗 *𝚗𝚎𝚐𝚛𝚒𝚝𝚊* 𝚎𝚜𝚝𝚊 𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘`, 
text15: `*[ ⚠️ ] ᥱ𝗍і𝗊ᥙᥱ𝗍ᥲ ᥲ ᥙᥒ ᥙsᥙᥲrі᥆ ᥴ᥆ᥒ ᥱᥣ @𝚝𝚊𝚐*`, 
text16: `*[ ⚠️ ] іᥒgrᥱsᥱ ᥣᥲ ᥴᥲᥒ𝗍іძᥲძ ძᥱ ძіᥲmᥲᥒ𝗍ᥱ 𝗊ᥙᥱ ძᥱsᥱᥲ ᥲᥒ̃ᥲძіr*`, 
text17: `*[ ⚠️ ] sіmᑲ᥆ᥣ᥆ ᥒ᥆ ᥲძmі𝗍іძ᥆, s᥆ᥣ᥆ ᥒᥙmᥱr᥆!*`, 
text18: `*[ ⚠️ ] ᥱᥣ ᥒᥙmᥱr᥆ mіᥒіm᥆ ძᥱ ძіᥲmᥲᥒ𝗍ᥱ ⍴ᥲrᥲ ᥲᥒ̃ᥲძіr ᥱs 𝟷*`, 
text19: `*sᥱ ᥲᥒ̃ᥲძіძ᥆*`, 
text20: `*[ ⚠️ ] іᥒgrᥱsᥲ ᥣᥲ ᥴᥲᥒ𝗍іძᥲძ ძᥱ ᥱ᥊⍴ᥱrіᥱᥒᥴіᥲ (᥊⍴) 𝗊ᥙᥱ ძᥱsᥱᥲᥲ ᥲᥒ̃ᥲძіr*`, 
text21: `*[ ⚠️ ] ᥱᥣ ᥒᥙmᥱr᥆ mіᥒіm᥆ ძᥱ ᥱ᥊⍴ᥱrіᥱᥒᥴіᥲ (᥊⍴) ⍴ᥲrᥲ ᥲᥒ̃ᥲძіr ᥱs 𝟷*`, 
text22: `*𝘌𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘧𝘶𝘦 𝘉𝘢𝘯𝘦𝘢𝘥𝘰 𝘺𝘢 𝘯𝘰 𝘱𝘰𝘥𝘳𝘢́ 𝘶𝘴𝘢𝘳 𝘮𝘪𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴*`, 
text23: `*𝘌𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘩𝘢 𝘴𝘪𝘥𝘰 𝘋𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘥𝘰 𝘤𝘰𝘯 𝘦𝘹𝘪𝘵𝘰𝘴✅ 𝘢𝘩𝘰𝘳𝘢 𝘴𝘪 𝘱𝘶𝘦𝘥𝘦 𝘶𝘴𝘢𝘳 𝘦𝘭 𝘣𝘰𝘵*`, 
text24: `✅Cambio con exitoso a uso público`, 
text25: `✅Cambio con exitoso a uso privado`, 
text26: `*Adios fue un gusto esta aqui hasta pronto 👋*`, 
text27: `*𝘌𝘯𝘷𝘪𝘢𝘯𝘥𝘰 𝘤𝘰𝘱𝘪𝘢 𝘥𝘦 𝘴𝘦𝘨𝘶𝘳𝘪𝘥𝘢 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰*`, 
text28: `_🔄 Reiniciando Bot..._` }

//randow.js
const ramdow = {
text: `*𝚃𝚄 𝙴𝚂𝚃𝙰𝚂 𝙷𝙾𝚁𝙽𝚈 🥵🔥*`, 
text2: `_𝚃𝚄 𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 𝙴𝚂 𝚂𝙴𝚁 𝚄𝙽 𝚂𝙸𝙼𝙿!!_`, 
text3: `*ʟʟᴀᴍᴇɴ ᴀ ʟᴀ ᴘᴏʟɪᴄɪᴀ!!* 😱`, 
text4: `*ʜᴀs ᴄᴏᴍᴇɴᴛᴀᴅᴏ ᴇɴ ʏᴏᴜᴛᴜʙᴇ!!* 😳` }

//rpg.js
const rpg = {
text: `[ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤 ]\n\n𝙴𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚚𝚞𝚎 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚜 𝚎𝚜𝚝𝚊 𝙰𝙵𝙺`, 
text1: `*𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 : `, 
text2: `*🕔 𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙰𝙵𝙺 🕔*`, 
text3: `𝚃𝙰𝙱𝙻𝙰 𝙳𝙴 𝙲𝙻𝙰𝚂𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽`, 
text4: `𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂`, 
text5: `𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 😴\n💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤\n☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 :`, 
text6: `*🚓 Regresa el*`, 
text7: `*𝙽𝙾𝙼𝙱𝚁𝙴 :*`, 
text8: `*𝙽𝙾𝚃𝙰 :*\n║𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 💎 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜\n║𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚜𝚒𝚐𝚞𝚎𝚗𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:`, 
text9: `[ ⏳ ] Espera`, 
text10: `para volver a minar`, 
text11: `⚒️ Genial minaste`, 
text12: `*Ya trabajarte mucho por hoy*`, 
text13: `*para volver a chambea*`, 
text14: `🎁 *ʏᴀ ʀᴇᴄᴏɢɪsᴛᴇ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ*\n\n🕚 ᴠᴜᴇʟᴠᴇ ᴇɴ :`, 
text15: `*🎁 ᨵׁׅׅ֮ϐׁtׁׅꪱׁׁׁׅׅׅꫀׁׅܻ݊݊ꪀꫀׁׅܻ݊ υׁׅ݊ꪀ ꭈׁׅꫀׁׅܻ݊ᧁׁɑׁׅᥣׁׅ֪ᨵׁׅׅׅ꯱ 🎁🎅*

• *ʜᴀs ʀᴇᴄɪʙɪᴅᴏ:*`, 
text16: `*🎁 𝚈𝙰 𝚁𝙴𝙲𝙾𝙶𝙸𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴*\n🕚 𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙻:`, 
text17: `🛒 𝙾𝙱𝚃𝙸𝙴𝙽𝙴𝚂 𝚄𝙽 𝙲𝙾𝙵𝚁𝙴`, 
unreg: `*✳️ Ingrese número de serie, verifique su número de serie con el comando:* #myns`, 
myns: `*⚠️ Número de serie incorrecto, usar:* #myns`, 
delreg: `*✅ ᴿᵉᵍᶦˢᵗʳᵒ ᵉˡᶦᵐᶦⁿᵃᵈᵒ*`, 
myns2: `👇 ᴱˢᵗᵉ ᵉˢ ˢᵘˢ ⁿᵘᵐᵉʳᵒ ᵈᵉˡ ˢᵉʳᶦᵉ:`, 
rob: `*⚠️ ETIQUETA A LA PERSONA BOBO*`, 
rob2: `*😔 ᴇʟ ᴜsᴜᴀʀɪᴏ*`, 
rob3: `*ᴛɪᴇɴᴇ ᴍᴇɴᴏs ᴅᴇ 15 ᴅɪᴀᴍᴀɴᴛᴇ, ɴᴏ ʀᴏʙᴇs ᴀ ᴜɴ ᴘᴏʙʀᴇ*`, 
rob4: `ᴛɪᴇɴᴇ ᴍᴇɴᴏs ᴅᴇ 10 ᴇxᴘ, ɴᴏ ʀᴏʙᴇs ᴀ ᴜɴ ᴘᴏʙʀᴇ* v:`, 
rob5: `*ʜᴀs sᴀǫᴜᴇᴀᴅᴏ ⚔️ ᴀ*`, 
rob6: `ʀᴏʙᴀᴅᴏ ᴘᴏʀ:`, 
rob7: `*🚓🚓🚓 No le pudiste robar por que a este usuario los protege la policía 👮(AFK)*`, 
buy: `*ɴᴏᴛᴀ ᴅᴇ ᴘᴀɢᴏ*`, 
buy2: `*ʜᴀs ᴄᴏᴍᴘʀᴀᴅᴏ :*`, 
buy3: `*ʜᴀs ɢᴀsᴛᴀᴅᴏ :*`, 
buy4: `🔶 ɴᴏ ᴛɪᴇɴᴇ sᴜғɪᴄɪᴇɴᴛᴇ xᴘ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ`, 
buy5: `ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴘᴜᴇᴅᴇs ᴄᴏɴsᴇɢᴜɪʀ *xᴘ* ᴜsᴀɴᴅᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏs #minar`, 
pp: `              *⪨ ＰＥＲＦＩＬ ⪩*`, 
pp2: `*💫 NOMBRE :*`, 
pp3: `*📱 NUMERO :*`, 
pp4: `*💎 DIAMANTES :*`, 
pp5: `*🆙 NIVEL :*`, 
pp6: `*🏆 RANGO :*`, 
pp7: `*📇 REGISTRADOS :*`, 
level: `*💫 TUS ESTADISTICAS 🆙*`, 
level2: `『 Tus estadisticas en tiempo real 🕐 』`, 
level3: `💫 *NOMBRE:*`, 
level4: `🎊 𝘛𝘦 𝘧𝘢𝘭𝘵𝘢`, 
level5: `𝘥𝘦 *XP* 𝘱𝘢𝘳𝘢 𝘴𝘶𝘣𝘪𝘳 𝘥𝘦 𝘯𝘪𝘷𝘦𝘭`, 
level6: `𝘍𝘦𝘭𝘪𝘤𝘪𝘥𝘢𝘥𝘦𝘴\n├ 𝘭𝘭𝘦𝘨𝘢𝘴𝘵𝘦 𝘢 𝘶𝘯 𝘯𝘶𝘦𝘷𝘰 𝘯𝘪𝘷𝘦𝘭 』`, 
level7: `*💫 𝘊𝘶𝘢𝘯𝘵𝘰 𝘮𝘢𝘴 𝘪𝘯𝘵𝘦𝘳𝘢𝘤𝘵𝘶𝘦𝘴 𝘤𝘰𝘯 𝘭𝘰𝘴 𝘣𝘰𝘵𝘴, 𝘮𝘢𝘺𝘰𝘳 𝘴𝘦𝘳𝘢 𝘵𝘶 𝘯𝘪𝘷𝘦𝘭*` }

//sticker.js
const sticker = {
text: `⏳ *Aguarde un momento estoy creando tu stickers....*`, 
text1: `_[ ❌ ] Máximo 20 segundos!_`, 
text2: `*Y LA IMAGEN?*`, 
text3: `*Responda un sticker para robar`, 
text4: `ingresa algo para convertirlo a sticker :v`, 
text5: `_*Calma crack estoy haciendo tu texto a sticker 👏*_\n\n_*Esto puede demorar unos minutos....*_` }

const idioma = (prefix) => { return `*✳️ Usar:*\n${prefix}idioma 1 (español)\n*❗Ejemplo:*\n• ${prefix}idioma 1` }
const idioma2 = () => { return `✅ Idioma cambiado con éxito a ` }

const smsReg = () => { return `*Ya estas registrado 🧐*` }
const smsReg1 = (prefix) => { return `*❌ Forma incorrecta*\n\nuse de esta forma\nEjemplo: ${prefix}reg nombre.edad` }
const smsReg2 = () => { return `El nombre no puede estar vacio` }
const smsReg3 = () => { return `La edad no puede estar vacia (Numeros)` }
const smsReg4 = () => { return 'Esta Viejo (。-`ω´-)' }
const smsReg5 = () => { return `🚼  Basado, los bebes saben escribir.✍️😳` }
const smsReg6 = () => { return `🐈 Fua que basado, el nombre es muy largo que quiere un puente como nombre😹` }
const smsReg7 = (name, user, age, time, date, sender, sn, prefix, rtotalreg) => { return `[ ✅ REGISTRO COMPLETADO ]\n\n ◉ *Nombre:* ${name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''}\n ◉ *Edad:* ${age} años\n ◉ *Hora:* ${time}\n ◉ *Fecha:* ${date}\n ◉ *Número:* wa.me/${sender.split("@")[0]}\n ◉ *Numero del serie*\n ⤷ ${sn}\n\n 🎁 *Recompensa:*\n ⤷ 2 diamante 💎\n ⤷ 200 exp\n\n *◉ Para ver los comandos del bot usar:*
 ${prefix}menu\n\n ◉ *Total de usuários registrados:* ${rtotalreg}` }
const smsReg8 = () => { return `*💬 𝗘𝗟 𝗜𝗗𝗜𝗢𝗠𝗔 𝗔 𝗦𝗜𝗗𝗢 𝗧𝗥𝗔𝗦𝗟𝗔𝗗𝗔𝗗𝗢 𝗔 𝗡𝗨𝗘𝗦𝗧𝗥𝗢 𝗨𝗡𝗜𝗖𝗢 𝗜𝗗𝗜𝗢𝗠𝗔 𝗘𝗦𝗣𝗔Ñ𝗢𝗟*` }
 
const cuenta = (nna, md, yt, tiktok, fb) => { return `*Bienvenido a las cuentas oficiales ✨*

*👑 Numero de ${creador}:*
• https://wa.me/message/WIOCUMWR26RZE1

*✨ Canal del WhatsApp / Update:*
• ${nna}

*✨ GITHUB:*
• ${md}

*✨ YOUTUBE:*
• ${yt}

*✨ TIKTOK:*
• ${tiktok}

*✨ FACEBOOK:*
• ${fb}

*ˢᶦ ᵗᶦᵉⁿᵉⁿ ᵈᵘᵈᵃˢ ˢᵘᵍᵉʳᵉⁿᶜᶦᵃˢ ᵒ ᵖʳᵉᵍᵘⁿᵗᵃˢ ᵐᵉ ᵖᵘᵉᵈᵉ ᵉˢᶜʳᶦᵇᶦʳ ᵖᵒʳ ᶠᵃᶜᵉᵇᵒᵒᵏ*` }

const game = {
text1: `*\`🎮 ＴＲＥＳ ＥＮ ＲＡＹＡ 🎮\`*`, 
text2: `*HAS GANADOS 🎉*\n*🎁 OBTIENE*`, 
text3: `*EMPATE 😹*`, 
text4: `𝐓𝐮𝐫𝐧𝐨 𝐝𝐞`, 
text5: `*Respuesta correcta 🎉*\n\n*Ganarte :*`, 
text6: `⚠️ 𝚃𝚘𝚍𝚊𝚟𝚒𝚊 𝚑𝚊𝚢 𝚙𝚛𝚎𝚐𝚞𝚗𝚝𝚊𝚜 𝚜𝚒𝚗 𝚛𝚎𝚜𝚙𝚞𝚎𝚜𝚝𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝`, 
text7: `🧮 𝙳𝚒𝚏𝚒𝚌𝚞𝚕𝚝𝚊𝚍𝚎𝚜 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎𝚜 :`, 
text8: `MATEMÁTICAS`, 
text9: `¿𝙲𝚄𝙰𝙽𝚃𝙾 𝙴𝚂 :`, 
text10: `𝚃𝙸𝙴𝙼𝙿𝙾`, 
text11: `*𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙲𝙾𝙽 𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰*`, 
text12: `⏳ *sᴇ ᴀᴄᴀʙᴏ ᴇʟ ᴛɪᴇᴍᴘᴏ!, ʟᴀ ʀᴇsᴘᴜᴇsᴛᴀ ᴇs:*`, 
text13: `⚠️ Todavía estás en el juego`, 
text14: `*\`🕹 ＴＲＥＳ ＥＮ ＲＡＹＡ 🎮\`*\n\n🎮👾 ᴇsᴘᴇʀᴀɴᴅᴏ ᴀ`, 
text15: `ᴄᴏᴍᴏ ᴘʀɪᴍᴇʀ ᴊᴜɢᴀᴅᴏʀ`, 
text16: `*𝐒𝐀𝐋𝐀 :*`, 
text17: `*𝐑𝐄𝐆𝐋𝐀𝐒 :*\n\n* ʜᴀᴢ 3 ғɪʟᴀs ᴅᴇ sɪᴍʙᴏʟᴏs ᴠᴇʀᴛɪᴄᴀʟᴇs, ʜᴏʀɪᴢᴏɴᴛᴀʟᴇs ᴏ ᴅɪᴀɢᴏɴᴀʟᴇs ᴘᴀʀᴀ ɢᴀɴᴀʀ\n* ᴇsᴄʀɪʙᴇ *rendirse* para rendirte y admitir la derrota`, 
text18: `*⏳ ᴇsᴘᴇʀᴀɴᴅᴏ ᴀʟ sɪɢᴜɪᴇɴᴛᴇ ᴊᴜɢᴀᴅᴏ*`, 
text19: `*ᴇsᴄʀɪʙᴀ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ:`, 
text20: `ʀᴇᴄᴏᴍᴘᴇɴsᴀ:`, 
text21: `✅ sᴇ ʀᴇɪɴɪᴄɪᴏ ʟᴀ sᴇsɪᴏɴ ᴅᴇ *ᴛɪᴄᴛᴀᴄᴛᴏᴇ 🎮*`, 
text22: `⚠️ ɴᴏ ᴇsᴛᴀs ᴇɴ ᴘᴀʀᴛɪᴅᴀ ᴅᴇ ᴛɪᴄᴛᴀᴄᴛᴏᴇ 🎮` }

const transfer = {
text1: `⚠️ Cancelado, la transferencia no se realizará.`, 
text2: `✅ Se transfirierón correctamente`, 
text3: `Error al transferir`, 
text4: `⚠️ estas haciendo una transferencia*`, 
text5: (prefix, command) => `*⚠️ Uso correcto del comando :*\n*${prefix + command}* [tipo] [cantidad] [@user]\n\n> *Ejemplo :*\n• ${prefix + command} exp 100 @0\n\n📍 Artículos transferibles\n╔═════ೋೋ═════╗\n● *limit* = Diamante\n● *exp* = Experiencia\n● *money* = coins\n╚════ ≪ •❈• ≫ ════╝`, 
text6: `⚠️ *Etiquetas al usuario que desea hacer la transferencia.*`, 
text7: `❌ *El Usuario no está en mi base de datos*`, 
text8: (type) => `*⚠️ No tienes suficientes ${type} para transferir*`, 
text9: `¿ESTA SEGURO QUE DESEA TRANSFERIR`, 
text10: `> *Tienes 60 segundos para confirmar*\n\n*• Escriba:*\n* si = *para acertar*\n* no = *para cancelar*`, 
text11: `⚠️ *Se acabó el tiempo, no se obtuvo respuesta. Transferencia cancelada.*` }

module.exports = { lenguaje, exito, tmp, session, errorsession, archivo, AvisoMG, archborrado, archivoborrado, purgesessions, purgesubbots, purgeoldfiles, smscall, smscall2, smsAvisos, smsAvisos2, smsAvisos3, smsAvisos4, smsAvisos5, smsAvisos6, smsAvisos7, smsAvisos8, smsAvisos9, smsWel, smsWel2, smsWel3, smsWel4, smsWel5, smsWel6, smsWel7, smsWel8, smsWel9, smsWel10, smsWel11, smsBye, smsBye2, smsBye3, smsBye4, smsBye5, smsConexion, smsEscaneaQR, smsConectado,  smsConexionOFF, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, nivel, nivel2, admin, botAdmin, propietario, group, private, bot, error, advertencia, registra, limit, AntiNsfw, endLimit, result, lengua, sms, Bio, smsAntiFake, smsAntiArabe, smsAntiLink, smsAntiLink2, smsAntiLink3, smsAntiLink4, smsAntiLink5, smsAntiLink6, smsAutoSicker, smsAutonivel, smsAutonivel2, smsAutonivel3, smsAutonivel4, smsAutonivel5, smsAutonivel6, smsAutonivel7, smsAutonivel8, smsAutonivel9, smsAntiPv, info, menu, jadibot, descargar, demote, promote, enable, grupos, juegos, nsfw, owner, ramdow, rpg, sticker, idioma, idioma2, smsReg, smsReg1, smsReg2, smsReg3, smsReg4, smsReg5, smsReg6, smsReg7, smsReg8, cuenta, consola, console, AntiLink, AntiLink2, viewOnce, AntiToxic, AntiToxic2, game, transfer, prem}
