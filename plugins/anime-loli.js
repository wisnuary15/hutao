import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/loli?apikey=${global.lolkey}`
conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
    conn.sendFile(m.chat, await(await fetch(nyenye)).buffer(), 'nih.jpg', '*Nih Lolinya😔...*', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
handler.register = true
handler.premium = false
handler.limit = true

export default handler