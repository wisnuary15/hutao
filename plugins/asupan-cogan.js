import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.lolhuman.xyz/api/random/cogan?apikey=${global.lolkey}`
	conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
await conn.sendMessage(m.chat, {
			image:await(await fetch(url)).buffer(),
			caption: "*Here ur image.*"
		}, { quoted: m })
}
handler.command = /^(cogan)$/i
handler.tags = ['asupan']
handler.help = ['cogan']
handler.register = true
handler.premium = false
handler.limit = true
export default handler