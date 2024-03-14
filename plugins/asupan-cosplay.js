import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomimage/cosplay?apikey=zenzkey_e44726d4da'
	conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
	conn.sendFile(m.chat, await(await fetch(url)).buffer(), 'nih.jpg', "*Here ur image.*", m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['anime','asupan']
handler.help = ['cosplay']
handler.register = true
handler.premium = false
handler.limit = true

export default handler