let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
const owned = `254743518481@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *ʟɪsᴛ - ᴘᴀɴᴇʟ* )▭▬▭

┏━━━━━━━━━━━━━━━━━━━━━━━
┣ *ʀᴀᴍ 𝟷ɢʙ/ ᴅɪsᴋ 𝟷ɢʙ/ᴄᴘᴜ 𝟹𝟶%*
┃◦ ksh: 30
┣ *ʀᴀᴍ 𝟸ɢʙ/ᴅɪsᴋ 𝟸ɢʙ/ᴄᴘᴜ 𝟼𝟶%*
┃◦ Ksh: 40
┣ *ʀᴀᴍ 𝟹ɢʙ/ᴅɪsᴋ 𝟹ɢʙ/ᴄᴘᴜ 𝟿𝟶%*
┃◦ Ksh: 50
┣ *ʀᴀᴍ 𝟺ɢʙ/ᴅɪsᴋ 𝟺ɢʙ/ᴄᴘᴜ 𝟷𝟸𝟶%*
┃◦ Ksh: 60
┣ *ʀᴀᴍ 𝟺ɢʙ/ᴅɪsᴋ 𝟻ɢʙ/ᴄᴘᴜ 𝟷𝟻𝟶%*
┃◦ Ksh: 70
┣ *ʀᴀᴍ 𝟼ɢʙ/ᴅɪsᴋ 𝟼ɢʙ/ᴄᴘᴜ 𝟷𝟿𝟶%*
┃◦ Ksh: 80
┣ *ʀᴀᴍ 𝟽ɢʙ/ᴅɪsᴋ 𝟽ɢʙ/ᴄᴘᴜ 𝟸𝟸𝟶%*
┃◦ Ksh: 90
┣ *ʀᴀᴍ 𝟾ɢʙ/ᴅɪsᴋ 𝟾ɢʙ/ᴄᴘᴜ 𝟸𝟻𝟶%*
┃◦ Ksh: 100
┣ *ʀᴀᴍ 𝟿ɢʙ/ᴅɪsᴋ 𝟿ɢʙ/ᴄᴘᴜ 𝟸𝟾𝟶%*
┃◦ Ksh: 120
┣ *ʀᴀᴍ 𝟷𝟶ɢʙ/ᴅɪsᴋ 𝟷𝟶ɢʙ/ᴄᴘᴜ 𝟹𝟷𝟶%*
┃◦ Ksh: 140
┣ *ʀᴀᴍ ᴜɴʟɪ/ᴅɪsᴋ ᴜɴʟɪ/ᴄᴘᴜ ᴜɴʟɪ*
┃◦ Ksh: 160
┗━━━━━━━━━━━━━━━━━━━━━━━
• want to ʙᴜʏ? ᴄʜᴀᴛ : ${global.nomorown}
• ᴘᴏᴡᴇʀᴇᴅ ʙʏ *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
await conn.relayMessage(m.chat,  {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: text12
                        }
                    }, {})
                }
handler.help = ['listpanel']
handler.tags = ['listpanel']
handler.command = /^(listpanel|panel)$/i

export default handler
