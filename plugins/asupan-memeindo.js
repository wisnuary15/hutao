import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/memeindo.json')
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButton(m.chat, 'Meme Random', wm, await (await fetch(url.image)).buffer(), [['Makasih', '.makasih']], m)
}
handler.command = /^(memeindo)$/i
handler.tags = ['asupan']
handler.help = ['memeindo']
handler.limit = true
export default handler
