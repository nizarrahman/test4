const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

Hai 👋
𝐈𝐧𝐢 𝐥𝐢𝐬𝐭 𝐬𝐞𝐰𝐚 𝐤𝐚𝐦𝐢 𝐬𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐝𝐢𝐩𝐢𝐥𝐢𝐡

┏━━━•❅•°•❈〔 𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 〕
┣★ミ Premium : 10k/Bulan
┣★ミ Premium : 15k/2bulan
┣➲ Scan Barcod Qrisnya diatas🤗
┗━━━•❅•°•❈

┏━━━•❅•°•❈𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧 𝐌𝐞𝐦𝐛𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦
┣➲ Jadibot
┣➲ Unlock Fitur Premium
┣➲ limit didapat tiap hari dengan claim
┣➲ bisa invite bot ke grup
┗━━━•❅•°•❈
Contact person Owner:
wa.me/62895604670507 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/df81f6ad526d8d0df96a2.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📸 Instagram',
               url: 'https://instagram.com/nizarrrahman.t_'
             }

           },
               {
             callButton: {
               displayText: 'pulsa',
               phoneNumber: '+62 813-8694-5391'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['sewa']
handler.tags = ['donasi']
handler.command = /^sewa$/i

module.exports = handler
