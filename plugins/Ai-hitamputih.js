import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `reply/send ur image with caption .${command}`
m.reply(md)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/filter/moon?apikey=Maslent&img=${url}`)).buffer()
await conn.sendMessage(m.chat, {
			image: hasil,
			caption: "*Here ur image.*"
		}, { quoted: m })
}
handler.help = ['hitamputih']
handler.tags = ['ai']
handler.command = /^(hitamputih)$/i
handler.register = true
handler.premium = false
handler.limit = true

export default handler