import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image/random'
	if (!res.ok) throw await res.text()
        let json = await res.json()
        conn.sendButton(m.chat, 'Random Meme', wm, json.data.url, [['Makasih', `.makasih`]], m)
}
handler.command = /^(randommeme)$/i
handler.tags = ['asupan']
handler.help = ['randommeme']

export default handler
