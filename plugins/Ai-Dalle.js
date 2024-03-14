import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `*example:* .dalle skyline gtr`
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${text}`
  	await conn.sendMessage(m.chat, {
			image:await(await fetch(res)).buffer(),
			caption: "*Here ur image.*"
		}, { quoted: m })
}

handler.help = ['dalle *query*','aiimage *query*']
handler.tags = ['ai']
handler.command = /^(dalle|aiimage)$/i

handler.register = true
handler.premium = false
handler.limit = true

export default handler