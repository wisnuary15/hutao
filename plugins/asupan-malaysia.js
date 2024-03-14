import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zeltoria.my.id/api/cecan/malaysia?apikey=${global.zeltoria}`
	conn.sendButton(m.chat, `Nih Kak`, wm, await(await fetch(url)).buffer(), [['Makasih',`.makasih`]],m)
}
handler.command = /^(malaysia)$/i
handler.tags = ['asupan']
handler.help = ['malaysia']
handler.premium = false
handler.limit = true

export default handler