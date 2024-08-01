const lenguaje = () => { return 'pt' } //portugués

//index.js
const tmp = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│ A PASTA TMP FOI LIMPA CORRETAMENTE\n╰━─━─━─≪🔆≫─━─━─━╯` } 
const session = () => { return `🟢 NÃO HÁ ARQUIVO PARA EXCLUIR` }
const errorsession = () => { return `🟢 ALGO DEU ERRADO DURANTE A EXCLUSÃO, ARQUIVO NÃO EXCLUÍDO` }
const archivo = () => { return `🟢 ARQUIVO` }
const archborrado = () => { return `EXCLUÍDO COM SUCESSO` }
const archivoborrado = () => { return `NÃO EXCLUÍDO` }
const purgesessions = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│AUTOPURGESESSIONS\n│ ARQUIVOS EXCLUÍDOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }
const purgesubbots  = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_SESSIONS_SUB-BOTS\n│ ARQUIVOS EXCLUÍDOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }
const purgeoldfiles = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_OLDFILES\n│ARQUIVOS EXCLUÍDOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }

const console = { 
text1: ` MÉTODO DE VINCULAÇÃO`, 
text2: ` COMO VOCÊ QUER SE CONECTAR?`, 
text3: ` ⇢ Opção 1:`, 
text4: ` Código QR`, 
text5: ` ⇢ Opção 2:`, 
text6: ` Código de 8 dígitos.`, 
text7: ` Escreva apenas o número de`, 
text8: ` a opção de conectar.`, 
text9: (chalk) => ` NÚMEROS ALÉM DOS NÃO PERMITIDOS ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, SEM LETRAS OU SÍMBOLOS ESPECIAIS.\n${chalk.bold.yellowBright(" DICA: COPIE O NÚMERO DA OPÇÃO E COLE NO CONSOLE.")}`, 
text10: `🟢 Comece com o código do país do seu número do WhatsApp, exemplo: +59178862672`, 
text11: `🟢 Digite o número que será bot\nPor exemplo: +59178862672`, 
text12: `❌ Certifique-se de adicionar o código do país.`, 
text13: `👑 CÓDIGO DE LINK 👑:` }

//call
const smscall = () => { return `Você será bloqueado*\n_Motivo: por fazer uma` } 
const smscall2 = () => { return `*Se você ligou acidentalmente, entre em contato com meu criador para desbloquear você.*` }

//antiprivado
const smsAntiPv = () => { return `É proibido falar em particular sobre o bot pelo qual você será bloqueado.*\n*Para usar o bot entre no grupo do oficial` }

//detec
const smsAvisos = () => { return `[ 🔒 GRUPO FECHADO ]` }//
const smsAvisos2 = () => { return `「 CONFIGURAÇÃO DE GRUPO 」\n\n*Agora apenas administradores podem escrever no grupo*` }
const smsAvisos3 = () => { return `[ 🔓 ABRIR GRUPO ]` } 
const smsAvisos4 = () => { return `「 CONFIGURAÇÃO DE GRUPO  」\n\n*Agora todos os participantes enviam mensagens 🗣️*` } 
const smsAvisos5 = () => { return `「 CONFIGURAÇÃO DE GRUPO 」\n\n` }
const smsAvisos6 = () => { return `*Agora apenas administradores podem editar as configurações do grupo*` } 
const smsAvisos7 = () => { return `Agora todos os participantes podem editar as configurações do grupo` }
const smsAvisos8 = () => { return `A descrição do grupo foi alterada e a nova descrição é:` }
const smsAvisos9 = () => { return `*O nome do grupo foi alterado e o novo nome é:*` }

//welcome
const smsWel =  () => { return `Hora` }
const smsWel2 = () => { return `¿COMO VAI? 😃` }
const smsWel3 = () => { return `¿COMO VAI?😃\n\n『 Bem-vindo a` }  
const smsWel4 = () => { return `Prazer em conhecê-lo amigo 🤗\n\n_Lembre-se de ler as regras do grupo para não ter problemas 🧐_\n\n*Apenas curta esse grupo e divirta-se 🥳*` }
const smsWel5 = () => { return `[ NOVO MEMBRO ]\n\n` }
const smsWel6 = () => { return `Damos as boas-vindas a você` }
const smsWel7 = () => { return `⪨────[ ＷＥＬＣＯＭＥ ]────⪩\n\n` }
const smsWel8 = () => { return `💫 *bem-vindo a :*` }
const smsWel9 = () => { return `💫 *Participe*` }
const smsWel10 = () => { return `💫 *Data*` }
const smsWel11 = () => { return `📢 *Leia a descrição* 📢\n` }
const smsBye = () => { return `Adeus` }
const smsBye2 = () => { return `Bem, se foi` }
const smsBye3 = () => { return `Que Deus te abençoe 😎` }
const smsBye4 = () => { return `deixou o grupo._` }
const smsBye5 = () => { return `se foi\n┃ fã de bts` }
const promote = () => { return `Parabéns, agora você faz parte da equipe. 🎉` }
const demote = () => { return `você não é mais administrador 🥲` }

//mensaje el la consola inicio
const smsConexion = () => { return `🟢 USUÁRIOS CONECTADOS =>` }
const smsEscaneaQR = () => { return `VERIFIQUE O QR, EXPIRE 45 SEG...` }
const smsConectado = () => { return `JÁ ESTÁ CONECTADO CORRETAMENTE` }
const smsConexionOFF = () => { return `[ ⚠️ ]  Conexão encerrada, exclua a pasta de sessões e verifique novamente.`}
const smsConexioncerrar = () => { return `⚠️ CONEXÃO FECHADA, TENTATIVA DE RECONECTAR` }
const smsConexionperdida = () => { return `[ ⚠️ ] Conexão perdida com o servidor, reconectando...`}
const smsConexionreem = () => { return `[ ⚠️ ] Conexão substituída, outra nova sessão foi aberta. Por favor saia da sessão atual primeiro.`}
const smsConexionreinicio = () => { return `🔁 Reinicialização necessária, reiniciando...`}
const smsConexiontiem = () => { return `[ ⚠️ ] A conexão expirou, reconectando...`}
const smsConexiondescon = () => { return `[ ⚠️ ] Motivo de desconexão desconhecido:`}
 
const consola = {
text: `HORARIO:`, 
text1: `CAMINHO:`, 
text2: `TIPO (SMS):`, 
text3: `DO UTILIZADOR:`, 
text4: `CONVERSA EM GRUPO:`, 
text5: `CONVERSA PRIVADA:`, 
text6: `MENSAGEM:` }

//autobio
const Bio = { 
text: `🦁 ɴᴏᴠᴀʙᴏᴛ - Ter:`, 
text2: `Os usuários que me usam podem responder lentamente, minha velocidade de resposta é:`,
text3: `👑 ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ | Ativo ✅️:`, 
text4: `Para cronometrar minha lista de comandos, use #menu`, 
text5: `ɴᴏᴠᴀʙᴏᴛ ᴘᴏʀ ʟᴏʟɪʙᴏᴛ - Inscreva-se em nosso canal no YouTube 🔔\nhttps://www.youtube.com/@elrebelde.21`, 
text6: `✅ Atividade:`, 
text7: `👥 Usuários:` }

//antiarabe
const smsAntiFake = () => { return `✳️ Este grupo não é permitido, número falso será expulso...` }
const smsAntiArabe = () => { return `✳️ Neste grupo, os números arábicos não são permitidos até a próxima vez....` }

//antilink
const smsAntiLink = () => { return `\`\`\`「 ANTILINK DETECTADO 」\`\`\`\n\n` }
const smsAntiLink2 = () => { return `🤨 Isso não é permitido rato, você será expulso do grupo....` }
const smsAntiLink3 = () => { return `Salve sua merda, não sou administrador 🙄\n\n*[LIGUE PARA OS ADMINS ]*` }
const smsAntiLink4 = () => { return `O bot precisa de administradores para eliminar esse rato sujo` }
const smsAntiLink5 = () => { return `Eu vou te salvar porque você é um administrador :v` }
const smsAntiLink6 = () => { return `Eu vou te salvar, Gil, não sou administrador, não posso te deletar.` }

//allAntilink
const AntiLink = () => { return `*LINK DETECTADO 📢*` }
const AntiLink2 = () => { return `Você será removido deste grupo` }
const AntiToxic = (m, isToxic) => { return `ei @${m.sender.split('@')[0]} diga essa palavra *(${isToxic})* Proibido neste grupo, não seja tóxico\n\nAVISO` }
const AntiToxic2 = () => { return `Se você exceder 4 avisos, você será removido deste grupo 😐....` }
const viewOnce = () => { return `Não há nada a esconder aqui.` }

//autosticker
const smsAutoSicker = () => { return `🤡 Ei, onde diabos você viu um pedaço de pau que dura tanto, estúpido 🤣. (Máximo 15 segundos)` }

//autonivel
const smsAutonivel = () => { return `*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\n🥳 Felicidades` }
const smsAutonivel2 = () => { return `👏 Você subiu de nível, continue assim 👏\n` }
const smsAutonivel3 = () => { return `*❐ NÍVEL :*` }
const smsAutonivel4 = () => { return `*❐ NÍVEL ANTERIOR :* ` }
const smsAutonivel5 = () => { return `*❐ NÍVEL ATUAL :*` }
const smsAutonivel6 = () => { return `*❐ FAIXA :*` }
const smsAutonivel7 = () => { return `*❐ DATA :*` }
const smsAutonivel8 = () => { return `_*Para saber qual é a sua porta superior, digite o comando #lb*_` }
const smsAutonivel9 = () => { return `*🥳 PARABÉNS POR ALCANÇAR UM NOVO NÍVEL 🎊*\n\n` }

//info
const nivel = () => { return `[ ❇️ ] Preciso do nível` }
const nivel2 = () => { return `Para poder usar este comando verifique seu nível atual com o comando` }
const admin = () => { return `*⚠️ Vocês não são administradores 🤡 apenas administradores podem usar este comando*` }
const botAdmin = () => { return `*⚠️ Ei, primeiro o bot, quero dizer (eu), preciso ser um administrador para usar este comando*` }
const propietario = () => { return `*⚠️ Este comando só pode ser usado por mim ou pelo meu chefe*` } 
const prem = () => { return `*💠 Este comando é apenas para usuários VIP e meu proprietário*` }
const group = () => { return `*⚠️ Idiota, esse comando só pode ser usado pelo grupo*` }
const private = () => { return `*⚠️ Este comando só pode ser usado em chat privado*` }
const bot = () => { return `*⚠️ Este comando só pode ser usado por (ME)*` }
const error = () => { return `⪨╼╼≪⚠️ ERRO ⚠️≫╾╼⪩\n\nOCORREU DE ERRO INESPERADO, (API DOWN 😢)` }
const AvisoMG = () => { return `⪨╼╼≪⚠️ AÇÃO MAL UTILIZADA ⚠️≫╾╼⪩\n\n` }
const advertencia = () => { return `[ ⚠️ AVISO ]` }
const registra = () => { return `*[ 🔴 Ei, pare, você não está cadastrado 🔴 ]*\n\nVOCÊ NÃO APARECE NO MEU BANCO DE DADOS ✋\n\nPara poder usar o bot você precisa estar cadastrado:\n\n#reg name.age` }
const limit = () => { return `*ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴜsᴀᴅᴏ*` }
const AntiNsfw = () => { return `*O comando +18 está desativado*\nSe você é um administrador e deseja ativá-los, use:\n• modocaliente on` }
const endLimit = () => { return `*😢 NÃO TEM MAIS DIAMANTE 💎*\n\nVocê pode comprar mais usando o comando: #buy` }
const exito = () => { return `*BEM-SUCEDIDO ✅*` }
const result = () => { return `*resultados de :*` }

//Buscadores
const lengua = { 
ejem: `Exemplo :`, 
ejemplo: `*O que é este mecanismo de pesquisa?\n*Exemplo:*`, 
opcion: `OPÇÃO :`, 
tipo: ` TIPO :`, 
id: ` ID DO VÍDEO :`, 
titulo: `TITULO :`, 
Peso: `*PESO :*`, 
artista: `𝘈𝘙𝘛𝘐𝘚𝘛𝘈`, 
album: `𝘈𝘓𝘉𝘜𝘔`, 
vista: `VISUALIZAÇÕES :`, 
publi: `𝘗𝘜𝘉𝘓𝘐𝘊𝘈𝘋𝘖`, 
dura: `DURACIÓN :`, 
subidos: `CARREGADO :`, 
calidad: `QUALIDADE :`, 
desc: `DESCRIÇÃO :`, 
text: ` Insira um link para encurtar!`, 
trad: `🔸 Tradução`, 
text2: `*E O TEXTO?*`, 
ia: `*⚠️ DIGITE O TEXTO DE QUEM QUER PESQUISAR?*\n\n*• EXEMPLO :*\n`, 
ia2: `*⚠️ DIGITE O TEXTO PARA CRIAR UMA IMAGEM PARA USAR A FUNÇÃO DALL-E*\n\n*• EXEMPLO:*\n`,
espere: `⏳ *Aguarde un momento....*`, 
aguarde: `⏳ *PROCESSANDO A IMAGEM, ESPERE UM MOMENTO....*`, 
responde: `*[ ⚠️ ] Envie/responda a uma imagem com o comando :`, 
incorrecto: `*[ ⚠️ ] O formato do arquivo não pode ser compartilhado. Envie/responda a uma foto*`, 
hd: `*AQUI ESTÁ A IMAGEM HD*\n\nCaso a imagem não apareça, o HD responde novamente à imagem com o comando`, 
error: `Não foi possível baixar seu vídeo, tente novamente` 
}

//convertidores
const sms = {
text: `*Responda ao áudio que deseja alterar com o comando:*`, 
text2: `*Responder a uma imagem/vídeo para converter o URL`, 
text3: `*[ ⚠️ ] Responder a um áudio*`, 
text4: `*E o adesivo?*\n*Responde ao chefe dos adesivos*`, 
text5: `*🕔 𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖....*\n convertendo imagem em designs de anime, tenha paciência enquanto envio o resultado`, 
text6: `*Verifique se o rosto de uma pessoa está visível na imagem*`, 
text7: `E a imagem? Responder ou marcar uma imagem*`
}

const info = {
text: `COMIDO PELO BOT`, 
text2: `➢ Filial do servidor :`, 
text3: `➢ Plataforma :`, 
text4: `➢ Em outras palavras :`, 
text5: `➢ Cpu usando :`, 
text6: `➢ Memória total :`, 
text7: `➢ Usuários :`, 
text8: `➢ Ativo :`, 
text9: `➢ Caminho :`, 
text10: `➢ Bots secundários ativos :`, 
text11: `➢ Eu sou um SubBots :`,
text12: `Este bot está em desenvolvimento se quiser entre em contato com meu criador aqui deixo o número deles\n\nNão envie spam para meu criador nem o bloqueie`, 
text13: `*Olá queridos usuários 👋🏻, Convido você a ingressar nos grupos oficiais das famílias The-LoliBot-MD e NovaBot-MD, para conviver com a comunidade :ᴠ*\n\n*➤ Grupos oficiais do bot:*`, 
text14: `*➤ grupo de colaboração:*`, 
text15: `*➤ Grupos de teste para testes de bot:*`, 
text16: `*➤ Descubra mais sobre novas atualizações de bot aqui:*`, 
text17: `*➤ Grupo de ajuda sobre o bot:*`, 
text18: `• Grupos de amigos onde o bot está`, 
text19: `Se você quiser que seus grupos apareçam aqui, fale com meu criador`, 
text20: `╭─────────────┈⊷
│ \`\`\`COMO INSTALAR ESTE BOT?\`\`\`
╰┬────────────┈⊷
┌┤\`\`\`📌 REQUERIMENTOS DE INSTALAÇÃO\`\`\`
┌┤❇️ _Dúvidas: wa.me/5492266466080_
┌┤❇️ _Tutorial: https://youtu.be/OhbJjp0L2QA?si=ZqRgG3SGTRFSW6CH_
┌┤❇️ _1 GB de armazenamento_
┌┤❇️ _Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file_
┌┤❇️ _GitHub: https://github.com/elrebelde21/NovaBot-MD_
┌┤❇️ _um WhatsApp imune (secundário)_
┌┤❇️ _um número virtual (outro número)_
┌┤❇️ _2 dispositivos ou um PC para digitalizar_
╰────────────┈⊷

 \`\`\`📌 COMANDO DE INSTALAÇÃO TERMUX\`\`\`

> termux-setup-storage

> apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn

> git clone https://github.com/elrebelde21/NovaBot-MD && cd NovaBot-MD && yarn && npm install

> npm start

(Digitalize o QR rapidamente)

🚩 --------[ Infinity-Host ]--------- 🚩
*🆕 Novo host auto-hospedado*

*🔰 Tutorial de como criar uma conta no Dashboard e criar um servidor:*
https://youtu.be/o6ZSpMOsvHs?si=fzwZIDN5LPE1w0pI

*📍Painel:*
https://dashboard.infinitywa.xyz

*✅Painel:*
https://live.panel-infinitywa.store

*🧰 Support Bot: exclusivo para hosts*
wa.me/message/FETBF7YBO37CG1

*⚙️Grupo de Apoio:*
> Dúvidas *SOMENTE SOBRE O ANFITRIÃO*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

🚀 --------[ Vortexuscloud host ]--------- 🚀
💞 Graças a: mauro 

• https://youtube.com/@vortexuscloud

• Página Oficial:
https://vortexuscloud.com

• painel:
https://dash.vortexuscloud.com

• painel:
https://panel.vortexuscloud.com

• Canal WhatsApp sobre informações do anfitrião
• https://whatsapp.com/channel/0029Va8ZD6O3mFXxTPl1m13A

🚀 --------[ Anfitrião dos Cafirexos ]--------- 🚀

*Página Oficial:*
https://www.cafirexos.com/

*Painel:*
https://panel.cafirexos.com/

*painel:*
https://dash.cafirexos.com/home

*Dúvidas SOMENTE SOBRE O ANFITRIÃO:*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ 
(Peça pelo Diego: caferexos)

*Canal WhatsApp:*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q`, 
text21: `*Digite o comando com falha*\n\n*Exemplo:`, 
text22: `O relato foi enviado ao meu criador, entraremos em contato se necessário, se for falso será ignorado e bloqueado do bot*`, 
text23: `*╼╼╼╼╼╼╼[ 💖 doação 💖 ]╾╾╾╾╾╾╾╾*\n\n*Olá 👋, se você quiser apoiar este projeto, você pode fazê-lo através de doações voluntárias através do PayPal, Mercado Pago ou Naranja X.*\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️ PayPal:*\nhttps://paypal.me/OfcGB\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️ Mercado de pagamentos:*\n*• Alias :* OficialGB\n*• CVU :* 0000003100059201491917\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️ Laranja:*\n*• Alias :* OficialGL\n*• CVU :* 4530000800017922067114`, 
text24: `*💖 Você também pode compartilhar o seguinte como uma demonstração de apoio 💕*\n\n*💖 Apoie o repositório com uma estrelinha, obrigado 🙏💕*`, 
text25: `┗❴ ⚠ AVISO ⚠ ❵┛\n\nÉ proibido marcar meu criador/desenvolvimento. Se você tiver alguma sugestão sobre o Bot, escreva para mim em particular.`, 
text26: `*⚡Você está procurando hots de qualidade que caibam no seu bolso?*

⚡ Seu bot precisa de um impulso? A Cafirexos tem a solução perfeita! Nossa hospedagem de alto desempenho manterá seu bot ativo 24 horas por dia, 7 dias por semana, por um preço incrivelmente baixo. Esqueça os problemas de memória e mantenha seu bot ativo 24 horas por dia, 7 dias por semana, por um preço aceitável. Junte-se à nossa comunidade e dê ao seu bot o impulso que ele merece.

*🔵 \`\`\`Informações do anfitrião\`\`\`*

💻 *Página*
• https://www.cafirexos.com

✨ *Painel*
• https://dash.cafirexos.com

⚙️ *Painel*
• https://panel.cafirexos.com

📢 *Canal WhatsApp*
• https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

💥 *Grupo de WhatsApp*
• https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ 

📧 *Correo*
• contacto@cafirexos.com

🧑‍💻 *Contato (Diego Flores)*
_(Dúvidas SOMENTE SOBRE O ANFITRIÃO)_
• https://wa.me/50497150165` }

const menu = {
text: `❐ Prefixo`, 
text2: `❐ Data :`, 
text3: `❐ Hora :`, 
text4: `❐ Versão :`, 
text5: `❐ Usuários :`, 
text6: `❐ Atividade :`, 
text7: `❐ Caminho :`, 
text8: `❐ Limite :`, 
text9: `❐ Nível : `, 
text10: `❐ Classificações:`, 
text11: `❐ Registrado :`, 
textt: `❐ Bot Oficial: este é o Bot oficial`, 
texttt: `❐ Eu sou um SubBots :`, 
text12: `\`\`\`LISTA DE COMANDOS\`\`\`
\`\`\`Bot simples com poucos comandos\`\`\``, 
text13: `*Palavras específicas para o bot interagir com você*`, 
text14: `_*Olhinhos escrevem como está na mensagem*_`,
text15: (vs) => `🤔 *O que há de novo?* 🤗\n\n*🌐 Nova versão:* [ ${vs} ]\n\n*Novo comando:*

👾 Novo RPG:
• #crime 

⚡ Estabilidade do bot melhorada

🟢 Multi idioma agora você pode escolher o idioma ao qual deseja que o bot responda:
• #idioma
• #lenguaje 

🔸O bot responderá apenas a estes prefixos: (#./*) 

Mais comandos, versões futuras querem que eu adicione algum comando especial, escreva para meu criador`, 
text16: `*🌐 REGRAS DO BOT 🌐*

*• Não envie comandos de spam*

Use os comandos a cada 5 segundos, caso contrário o bot pode ficar saturado ou o número do bot pode ir para o suporte devido a spam.

*• Não envie o link do grupo para o bot participar*

Fale com meu criador e ele entrará no seu grupo

*• Não ligue para o bot ou para o criador*

Se você fizer isso, você será banido do bot e bloqueado` }

//jadibot.js
const jadibot = {
text: `Digitalize este QR para se tornar um bot temporário

1) Clique nos três pontos no canto superior direito
2) Toque em WhatsApp Web
3) Digitalize este QR
*O QR expira após 45 segundos*\n\n`, 
text2: `NOVA MANEIRA DE SE TORNAR UM SUB BOT

1) Clique nos três pontos no canto superior direito
2) Toque em WhatsApp Web
3) Clique no link com o código do telefone
4) Cole o código abaixo\n\n`, 
text3: `*⚠️ Este comando foi desabilitado pelo criador*`, 
text4: `*✅ Você já está conectado, seja paciente, as mensagens estão carregando...*`, 
text5: `*Conectado com sucesso*`, 
text6: `× bot :`, 
text7: `× Proprietário :`, 
text8: `*OBS: * o bot poderá ser reiniciado caso pare de receber comandos, utilize: #serbot ou o id que será enviado abaixo, para reconectar`, 
text9: `*⚠️ Dispositivo desconectado com o qual você terá que se reconectar #jadibot*`, 
text10: `*⚠️ Reenviar o comando....*`, 
text11: `[ ⚠️ ] Reinicio requerido, Reiniciando...`, 
text12: `*⚠️ Dispositivo desconectado*\n\n*Você terá que fazer login novamente (use .deljadibot)*`, 
text13: `*⚠️ Conexão encerrada*\n*Tente reconectar com:`, 
text14: `[ ⚠️ ] Conexão perdida com o servidor, reconexão forçada`, 
text15: `*[ ⚠️ ] Sua conexão é inválida*\n*você não será reconectado*`, 
text16: `[ ⚠️ ] A conexão expirou.`, 
tex17: `[ ⚠️ ] Erro desconhecido:\n`, 
text18: `*𝘚𝘜𝘉𝘉𝘖𝘛𝘚 𝘊𝘖𝘕𝘌𝘊𝘛𝘈𝘋𝘖𝘚:*` }

//descargar.js
const descargar = {
text: `*O que está procurando? insira o nome do tema*\n\nExemplo:`, 
text1: `*O que você está procurando?\n\nInsira o nome do tópico ou o link do YouTube para baixar o áudio/vídeo\n\nExemplo:`, 
text2: `         *⌜Música encontrada ✅⌟*`,
text3: `         *⌜Video Encontrado ✅⌟*`, 
text4: `*Aqui estão seus vídeos 👌*`, 
text5: `          *⌜ Audio Encontrado ✅⌟*`, 
text6: `*AGUARDE ENVIANDO SEU ARQUIVO MP3 ⚠*

*Serviços prestados pela NovaBot*`,  
text7: `*AGUARDE ENVIANDO SEU ARQUIVO MP4 ⚠*

*Serviços prestados pela NovaBot*`, 
text8: `*O que você está procurando?*\n*Digite o nome de uma música do Spotify.*`, 
text9: `*Onde está o link do github?*\n\n*Exemplo :*`, 
text10: `*𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖...*\n\nSe o arquivo não chegar, o repositório é muito pesado.`, 
text11: `*O que está procurando? Digite o título/nome da música para procurar a letra*\n*Exemplo:*`, 
text12: `*Nome*`, 
text13: `*Tamanho*`, 
text14: `*Extensão*`, 
text15: `Não consigo baixar o arquivo excede o limite de 900 MB\n`, 
text16: `*🎥 AQUI ESTÁ SEU VÍDEO NO FACEBOOK*`, 
text17: `*Digite o nome de usuário*\n\n*Exemplo:*`, 
text19: `*Nome de usuário :*`, 
text20: `*Seguidores :*`, 
text21: `*Seguindo :*`, 
text22: `*Biografía :*`, 
text23: `*Publicações :*`, 
text24: `*[ ⚠️ ] Qual apk você está procurando??*`, 
text25: `*Downloader do Aptoide*`, 
text26: `*Última atualização`, 
text27: `*Tamanho`, 
text28: `[ ⛔ ] O arquivo é muito grande e não será enviado.`, 
title: `*Título:*`, 
duracion: `*Duração:*`,
ago: `*Publicado:*`, 
autor: `*Autor:*`,
views: `*Visualizações:*`, 
letra: `*Letra:*`, 
music: `*• Áudio baixado 🔊, Aguarde un momento....*`, 
vid: `*• Vídeo baixado 🎥, Aguarde un momento....*`, 
espere: `*🕔 EM PROCESSAMENTO....*`,  
audio: `*⏳ EM PROCESSAMENTO....*\n\n_Baixei seu áudio, aguarde um momento, por favor_`, 
video: `*⏳EM PROCESSAMENTO....*\n\n_Baixei seu video, aguarde um momento, por favor_`,
descargado: `_Descargo archivo aguarde un momento...._` }

//enable.js
const enable = {
text: `⪨╼╼≪⚠️ AÇÃO MAL UTILIZADA ⚠️≫╾╼⪩\n\n*Use esta forma como exemplo:*`, 
text1: `*Foi ativado com sucesso*`, 
text2: `*Está desligado!*`, 
text3: `*Atenção a todos os membros ativos deste grupo 📣*\n\n*O antilink está ativo*\n\n*E somente os administradores deste grupo poderão passar o link*\n\nSe algum participante que não seja um administrador enviar um link de outro grupo será banido deste grupo imediatamente`, 
text4: `O Bot responderá apenas aos administradores do grupo.`, 
text5: `Agora o bot funciona para todos os participantes do grupo 🥳` }

//grupo.js
const grupos = {
text: `*e o texto?*`, 
text1: `*GRUPO ABERTO DE SUCESSO✅*`, 
text2: `*GRUPO FECHADO COM SUCESSO✅*`, 
text3: `*INSIRA O LINK DO GRUPO*\n\n*📌 EXEMPLO:*`, 
text4: `*JÁ PARTICIPEI 😼*`, 
text5: `📧 *APLICAÇÃO PARA UM GRUPO*\n\n*👤 SOLICITANTE*`, 
text6: `*🔮 LINK*`, 
text7: `*✅ Seu link foi enviado para meu proprietário*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Seu grupo será avaliado e caberá ao meu proprietário decidir se o Bot ingressará ou não no grupo..*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *Sua inscrição poderá ser rejeitada pelos seguintes motivos::*\n*1️⃣ O bot está saturado.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *O bot foi removido do grupo.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *O grupo não cumpre os regulamentos do bot*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *O link do grupo foi restaurado.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *Não adicionado a grupos de acordo com meu proprietário*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n📧 *A solicitação pode levar horas para ser respondida. Por favor, seja paciente, obrigado*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n*Você pode apoiar o bot com uma estrela em nosso repositório oficial e se inscrever em nosso canal no YouTube enviar uma captura de tela para meu criador para que ele adicione o bot ao seu grupo 💫*`, 
text8: (md, yt, nn7, fb) => `*[ Um bot no seu grupo ]*

Você pode solicitá-lo fazendo uma doação voluntária através do PayPal ou Mercado Pago arg.

🚀 O bot estará ativo 24 horas por dia, 7 dias por semana para o seu grupo.

*⚡ Onde posso doar?*
Através do nosso Paypal, Mercado Pago ou Naranja X.

*❇️PayPal:* 
https://paypal.me/OfcGB

*❇️ Mercado de pagamentos:*
*• Alias :* OficialGB
*• CVU :* 0000003100059201491917

*❇️ Laranja X:*
*• Alias :* OficialGL
*• CVU :* 4530000800017922067114

*⚡ Não posso doar, existe outra opção de conseguir um bot para meu Grupo?*
Você pode apoiar nosso repositório oficial com uma estrelinha 🌟
• ${md}
• https://github.com/elrebelde21/LoliBot-MD

🔔 Inscreva-se em nosso canal oficial no YouTube
• ${yt}

*⏩ Próxima etapa ⏩*

Assim que o pagamento for efetuado, você pode informar meu criador e enviar o comprovante de envio do dinheiro (captura de tela) para que eu possa adicionar o bot ao seu grupo 👇.
• ${nn7}
• ${fb}

*⚡ O bot estará ativo 24 horas por dia, 7 dias por semana?*
Sim, nosso bot está hospedado em um servidor pago para mantê-lo funcionando 24 horas por dia, 7 dias por semana (é por isso que também pedimos doações para mantê-lo funcionando).`, 
text9: `*⚠️ E a imagem?*`, 
text10: `*⚠️ Responder a uma imagem com :*`, 
text11: `*✅ O nome do grupo foi alterado corretamente*`, 
text12: `*✅ A descrição do grupo foi alterada com sucesso*`, 
text13: `*[ ⚠️ ] DIGITE O NÚMERO DA PESSOA QUE DESEJA ADICIONAR*\n*EXEMPLO:*`, 
text14: `*⚠️ DIGITE O NÚMERO SEM ELE (+)*`, 
text15: `≡ *CONVITE*\n\nOlá, usuário, convido você a participar deste grupo.`, 
text16: `*[ ⚠️ ] QUEM DIABOS EU ELIMINO? MARQUE ALGUM USUÁRIO NÃO SOU PREVISÃO 😯*`, 
text17: `*[ ⚠️ ] A QUEM DEVO ADMINISTRAR? MARQUE A PESSOA OU RESPONDA SUAS MENSAGENS*`, 
text18: `*[ ⚠️ ] DE QUEM REMOVI OS ADMINISTRADORES? MARQUE A PESSOA OU RESPONDA SUAS MENSAGENS*`, 
text19: `*DESLIGADO*`, 
text20: `*BOT ONLINE JÁ ESTOU DISPONÍVEL ✅*`, 
text21: `❑ Mensagem :`, 
text22: `*[ ⚠ ️] Use este comando somente quando for uma emergência*`, 
text23: ` Informações do grupo`, 
text24: `*🔸️ Nome* :`, 
text25: `*🔸️ Membros* :`, 
text26: ` Participantes`, 
text27: `*🔸️ Criador do grupo:*`, 
text28: `*🔸️ Configurações de grupo:*`, 
text29: `*🔸️ Descrição* :`, 
text30: `[ ⚠️ ] Marcar/mencionar alguém\n\n📌 Exemplo :`, 
text31: `✳️ O usuário não foi encontrado em meu banco de dados`, 
text32: `⚠️ *USUÁRIOS AVISADOS* ⚠️`, 
text33: `*Usuários:*`, 
text34: `*Aviso:*`, 
text35: `*Razão:*`, 
text36: `⚠️ *Aviso* ⚠️
Você recebeu um aviso de um administrador`, 
text37: ` Se você receber o aviso *4* você será automaticamente removido do Grupo`, 
text38: `⛔ O usuário excedeu *4* avisos e será removido`, 
text39: `⚠️ *Um aviso foi removido* ⚠️`, 
text40: ` Aviso completo:`, 
text41: `🔸️ Um administrador reduziu seu aviso, agora você tem`, 
text42: `🔸️ O usuário não tem aviso` }

//juegos.js
const juegos = {
text: `*e a pergunta?*\n\n*Exemplo:*`, 
text1: `*• Perguntar:*`, 
text2: `*• Responder:*`, 
text3: `você deveria se casar`, 
text4: `Eles formam um belo casal 💕`, 
text5: `*Digite o @ ou o nome da pessoa*`, 
text6: `🤤👅🥵 *VOCÊ APENAS FODEU COM ELE!*🥵👅🤤

Você acabou de foder a vadia`, 
text7: `De quatro enquanto ela gemia para você como uma maldita vadia "Aahh, aaahh, continue, não pare, não pare" e você a deixou tão quebrada que a maldita vadia não consegue nem segurar o próprio corpo .!`, 
text8: `🤤🥵 *¡ELES JÁ TE FODERAM!* 🥵🤤`, 
text9: `Já pensou em fazer um trio? vocês três fazem um bom trio 😳😏`, 
text10: `*_😍 Os 5 melhores casais do grupo 😍_*`, 
text11: `- Este casal está destinado a ficar junto 💙`, 
text12: `- Este casal são dois pombinhos apaixonados ✨`, 
text13: `- Ufff e o que dizer desse casal, eles deveriam até ter uma família🤱🧑‍🍼`, 
text14: `- Eles já se casaram secretamente 💍`, 
text15: `- Este casal está em lua de mel ✨🥵😍❤️`, 
text16: `*[ ⚠️ ] Escreva o nome de duas pessoas para calcular seu amor*`, 
text17: `*Ei, escreva o nome da segunda pessoa*`,
text18: `*Insira o nome?*`, 
text19: `*[ ⚠️ ] INSIRA A @tag DE ALGUM USUÁRIO*`, 
text20: `*[ ⚠️ ] Digite o valor que deseja apostar*\n\n*📌 Exemplo:*`, 
text21: `⏳ ter esperança`, 
text22: ` Para apostar novamente`, 
text23: `*✳️ A aposta mínima é 100 experiência*`, 
text24: `*✳️ Você não tem XP suficiente*`, 
text25: `🎁 Vencer você`, 
text26: `*🔮 Você quase conseguiu!! Continue tentando*\n*Leve +20 XP*`, 
text27: `😔 Você perdeu`, 
text28: `🥌 Pedra 📄 Papel ✂️ Tesoura\n\n• Você pode usar esses comandos:\n🥌 #ppt piedra\n📄 #ppt papel\n✂️ #ppt tijera\n\n• Usar letras minúsculas\n*Exemplo:* #ppt papel` }

//nsfw.js 
const nsfw = {
text: `😐 Você é menor de idade! vá jogar free fire 😆`, 
text1: `*Aqui está meu pacote 🥵*`, 
text2: `*🥵 Aproveite o vídeo 🥵` }

//propietario.js
const owner = {
text: `*Digite o texto que deseja transmitir*`, 
text1: `*Enviando mensagens oficiais por um momento*`, 
text2: `「 ✅ *𝘊𝘖𝘔𝘜𝘕𝘐𝘊𝘈𝘋𝘖 𝘖𝘍𝘐𝘊𝘐𝘈𝘓* ✅ 」`, 
text3: `Transmissão realizada com sucesso ✅ Total:`, 
text4: `Bate-papos em grupo\nTempo total de envio:`, 
text5: `*O usuário foi bloqueado no bot*`, 
text6: `*O usuário foi desbloqueado*`, 
text7: `*[ ⚠️ ] Responda ao adesivo ou imagem à qual deseja adicionar um comando ou texto*`, 
text8: `*⚠️ Mencionar na mensagem*`, 
text9: `*[ ⚠️ ] Erro de uso, texto ausente*\n\n* Exemplo de uso correto do comando:*`, 
text10: `*[ ⚠️ ] Você não tem permissão para alterar este comando de adesivo*`, 
text11: `*[ ✔ ] O texto/comando atribuído ao adesivo/imagem foi adicionado corretamente ao banco de dados*`, 
text12: `*Este ID de adesivo não existe*`, 
text13: `*[ ⚠️ ] Você não tem permissão para alterar este comando de adesivo*`, 
text14: `*𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂*\n▢ *Informações:* Se estiver em *Negrito* está bloqueado`, 
text15: `*[ ⚠️ ] Marque um usuário com o @𝚝𝚊𝚐*`, 
text16: `*[ ⚠️ ] Digite a quantidade de diamante que deseja adicionar*`, 
text17: `*[ ⚠️ ] Símbolo não suportado, apenas número!*`, 
text18: `*[ ⚠️ ] O número mínimo de diamantes a serem adicionados é 𝟷*`, 
text19: `*Foi adicionado*`, 
text20: `*[ ⚠️ ] Insira a quantidade de experiência (XP) que você deseja adicionar*`, 
text21: `*[ ⚠️ ] O número mínimo de experiência (XP) para adicionar é 𝟷*`, 
text22: `*O usuário foi banido e não poderá mais usar meus comandos*`, 
text23: `*O usuário foi desbanido com sucesso ✅ agora ele pode usar o bot*`, 
text24: `✅ Mudança bem-sucedida para uso público`, 
text25: `✅ Mudança bem-sucedida para uso privado`, 
text26: `*Adeus, foi um prazer, você está aqui até breve 👋*`, 
text27: `*Enviando Backup, Backup por um momento*`, 
text28: `_🔄 Reiniciando Bot..._` }

//randow.js
const ramdow = {
text: `*você está com tesão 🥵🔥*`, 
text2: `_Sua religião é ser um simplório!!_`, 
text3: `*Chame a polícia!!* 😱`, 
text4: `*Você comentou no YouTube!!* 😳` }

//rpg.js
const rpg = {
text: `[ 💤 Não os rotule 💤 ]\n\n Este usuário que menciona este AFK`, 
text1: `*Ficou inativo por : `, 
text2: `*🕔 Você parou esse AFK 🕔*`, 
text3: `ENTRE OS MELHORES`, 
text4: `Esses usuários`, 
text5: `Está inativo 😴\n💤 Não os rotule 💤\n☣️ Motivos :`, 
text6: `*🚓 Ele volta*`, 
text7: `*Nome :*`, 
text8: `*Usar :*\n║ Você pode comprar 💎 diamante\n║ Usando o seguinte comando:`, 
text9: `[ ⏳ ] Espere`, 
text10: `para o meu novamente`, 
text11: `⚒️ Genial eu`, 
text12: `*Você já trabalhou muito por hoje*`, 
text13: `*para volver a chambea*`, 
text14: `🎁 *Você já coletou sua recompensa diária*\n\n🕚 volte para dentro :`, 
text15: `*🎁 Você ganha um presente de Natal 🎁*

• *Recebeu:*`, 
text16: `*🎁 E você pegou seu peito*\n🕚 Ele volta:`, 
text17: `🛒 Pegue um baú`, 
unreg: `*✳️ Digite o número de série, verifique seu número de série com o comando:* #myns`, 
myns: `*⚠️ Número de série incorreto, use:* #myns`, 
delreg: `*✅ ᴿᵉᵍᶦˢᵗʳᵒ ᵉˡᶦᵐᶦⁿᵃᵈᵒ*`, 
myns2: `👇 Este é o seu número de série:`, 
rob: `*⚠️ MARQUE A PESSOA BOBO*`, 
rob2: `*😔 Os usuários*`, 
rob3: `*Tem menos de 15 diamantes, não roube de pobre*`, 
rob4: `Tem menos de 10 exp, não roube de pobre* v:`, 
rob5: `*Você saqueou ⚔️ ᴀ*`, 
rob6: `Roubado por:`, 
rob7: `*🚓🚓🚓 Você não poderia roubá-lo porque a polícia protege esse usuário 👮 (AFK)*`, 
buy: `*nota de pagamento*`, 
buy2: `*Comprou :*`, 
buy3: `*você gastou :*`, 
buy4: `🔶 Você não tem XP suficiente para comprar`, 
buy5: `Diamante 💎 você pode obter *XP* usando o comando #minar`, 
pp: `              *⪨ ＰＥＲＦＩＬ ⪩*`, 
pp2: `*💫 NOME :*`, 
pp3: `*📱 NÚMERO :*`, 
pp4: `*💎 DIAMANTES :*`, 
pp5: `*🆙 NÍVEL :*`, 
pp6: `*🏆 FAIXA :*`, 
pp7: `*📇 REGISTRADOS :*`, 
level: `*💫 SUAS ESTATÍSTICAS 🆙*`, 
level2: `『 Suas estatísticas em tempo real 🕐 』`, 
level3: `💫 *NOME:*`, 
level4: `🎊 você está faltando`, 
level5: `*XP* para subir de nível`, 
level6: `Felicidades\n├ Você alcançou um novo nível 』`, 
level7: `*💫 Quanto mais você interage com os bots, maior será o seu nível.*` }

//sticker.js
const sticker = {
text: `⏳ *Espere um minuto, estou criando seus adesivos....*`, 
text1: `_[ ❌ ] Máximo 20 segundos!_`, 
text2: `*E A IMAGEM?*`, 
text3: `*Responda a um adesivo para roubar`, 
text4: `digite algo para convertê-lo em um adesivo :v`, 
text5: `_*Calma crack, estou transformando seu texto em um adesivo 👏*_\n\n_*Isso pode levar alguns minutos....*_` }

const idioma = (prefix) => { return `*✳️ Usar:*\n${prefix}idioma 1 ( Espanhol)\n${prefix}idioma 2 ( Inglês)\n${prefix}idioma 3 ( árabe)\n${prefix}idioma 4 ( Indonésia)\n${prefix}idioma 5 (Português)\n${prefix}idioma 6 (Rússia)\n\n*❗Exemplo:*\n• ${prefix}idioma 1` } 
const idioma2 = () => { return `✅ Idiomas alterados com sucesso para ` }

const smsReg = () => { return `*Você já está registrado 🧐*` }
const smsReg1 = (prefix) => { return `*❌ Forma incorreta*\n\nuse desta forma\nExemplo: ${prefix}reg name.age` }
const smsReg2 = () => { return `O nome não pode ficar vazio` }
const smsReg3 = () => { return `A idade não pode estar vazia (Números)` }
const smsReg4 = () => { return 'É velho (。-`ω´-)' }
const smsReg5 = () => { return `🚼  Com base em, os bebês sabem escrever.✍️😳` }
const smsReg6 = () => { return `🐈 Fua que baseado, o nome é muito longo que quer uma ponte como nome😹` }
const smsReg7 = (name, user, age, time, date, sender, sn, prefix, rtotalreg) => { return `[ ✅ INSCRIÇÃO CONCLUÍDA ]\n\n ◉ *Nome:* ${name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''}\n ◉ *Idade:* ${age} anos\n ◉ *Hora:* ${time}\n ◉ *Data:* ${date}\n ◉ *Número:* wa.me/${sender.split("@")[0]}\n ◉ *Número de série*\n ⤷ ${sn}\n\n 🎁 *Recompensa:*\n ⤷ 2 diamante 💎\n ⤷ 200 exp\n\n *◉ Para ver os comandos do bot, use:*
 ${prefix}menu\n\n ◉ *Total de usuários registrados:* ${rtotalreg}` }
const smsReg8 = () => { return `*💬 Escolha seu idioma com:* #idioma` }
 
const cuenta = (nna, md, yt, tiktok, fb) => { return `*Bem-vindo às contas oficiais ✨*

*👑 Número oficial do bot:*
• wa.me/51910628581 

*✨ Canal WhatsApp / Atualização:*
• ${nna}

*✨ github:*
• ${md}

*✨ YOUTUBE:*
• ${yt}

*✨ TIK TOK:*
• ${tiktok}

*✨ FACEBOOK:*
• ${fb}

*Se você tiver dúvidas, sugestões ou perguntas, pode me escrever no Facebook*` }

const game = { 
text1: `*\`🎮 TRÊS EM UMA CAUDA 🎮\`*`, 
text2: `*VOCÊ GANHOU 🎉*\n*🎁 GANHE*`, 
text3: `*UMA GRAVATA 😹*`, 
text4: ` Desligar:`, 
text5: `*Resposta correta 🎉*\n\n*Ganhando você:*`, 
text6: `⚠️ Ainda há perguntas sem resposta neste chat`, 
text7: `🧮 Dificuldades disponíveis:`, 
text8: ` MATEMÁTICA`, 
text9: `¿Quanto isso custa :`, 
text10: ` Tempo`, 
text11: `*Responda a esta mensagem com a resposta*`, 
text12: `⏳ *O tempo acabou! A resposta é:*`, 
text13: `⚠️ Você ainda está no jogo`, 
text14: `*\`🕹 TRÊS EM UMA CAUDA 🎮\`*\n\n🎮👾 Esperando por`, 
text15: ` Como o primeiro jogador`, 
text16: `*SALA DE ESTAR :*`, 
text17: `*REGRAS :*\n\n*Faça 3 linhas de símbolos verticais, horizontais ou diagonais para ganhar*\n Escreve *rendirse* render-se e admitir a derrota`, 
text18: `*⏳ Esperando pelo próximo jogador*`, 
text19: `*Escreva o seguinte comando:`, 
text20: ` Recompensa:`, 
text21: `✅ A sessão foi reiniciada *ᴛɪᴄᴛᴀᴄᴛᴏᴇ 🎮*`, 
text22: `⚠️ Você não está no jogo ᴛɪᴄᴛᴀᴄᴛᴏᴇ 🎮` }

const transfer = {
text1: `⚠️ Cancelado, a transferência não será realizada.`, 
text2: `✅ Eles foram transferidos corretamente`, 
text3: ` Erro ao transferir`, 
text4: `⚠️ você está fazendo uma transferência*`, 
text5: (prefix, command) => `*⚠️ uso correto do comando :*\n*${prefix + command}* [tipo] [cantidad] [@user]\n\n> * Exemplo :*\n• ${prefix + command} exp 100 @0\n\n📍 Itens transferíveis\n╔═════ೋೋ═════╗\n● *limit* = diamante\n● *exp* = Experiência\n● *money* = moedas\n╚════ ≪ •❈• ≫ ════╝`, 
text6: `⚠️ *Marque o usuário que deseja fazer a transferência.*`, 
text7: `❌ *O usuário não está no meu banco de dados*`, 
text8: (type) => `*⚠️ Você não tem o suficiente ${type} transferir*`, 
text9: `¿TEM CERTEZA QUE QUER TRANSFERIR`, 
text10: `> *Você tem 60 segundos para confirmar*\n\n*• Escriba:*\n* si = *acertar*\n* no = *cancelar*`, 
text11: `⚠️ *O tempo acabou, nenhuma resposta foi recebida. Transferência cancelada.*` }

module.exports = { lenguaje, exito, tmp, session, errorsession, archivo, AvisoMG, archborrado, archivoborrado, purgesessions, purgesubbots, purgeoldfiles, smscall, smscall2, smsAvisos, smsAvisos2, smsAvisos3, smsAvisos4, smsAvisos5, smsAvisos6, smsAvisos7, smsAvisos8, smsAvisos9, smsWel, smsWel2, smsWel3, smsWel4, smsWel5, smsWel6, smsWel7, smsWel8, smsWel9, smsWel10, smsWel11, smsBye, smsBye2, smsBye3, smsBye4, smsBye5, smsConexion, smsEscaneaQR, smsConectado,  smsConexionOFF, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, nivel, nivel2, admin, botAdmin, propietario, group, private, bot, error, advertencia, registra, limit, AntiNsfw, endLimit, result, lengua, sms, Bio, smsAntiFake, smsAntiArabe, smsAntiLink, smsAntiLink2, smsAntiLink3, smsAntiLink4, smsAntiLink5, smsAntiLink6, smsAutoSicker, smsAutonivel, smsAutonivel2, smsAutonivel3, smsAutonivel4, smsAutonivel5, smsAutonivel6, smsAutonivel7, smsAutonivel8, smsAutonivel9, smsAntiPv, info, menu, jadibot, descargar, demote, promote, enable, grupos, juegos, nsfw, owner, ramdow, rpg, sticker, idioma, idioma2, smsReg, smsReg1, smsReg2, smsReg3, smsReg4, smsReg5, smsReg6, smsReg7, smsReg8, cuenta, consola, console, AntiLink, AntiLink2, viewOnce, AntiToxic, AntiToxic2, game, transfer, prem}
