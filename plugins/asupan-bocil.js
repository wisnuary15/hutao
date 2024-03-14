import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json')
  //if (!res.ok) throw await res.json()
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
  //if (!json.url) throw 'Error!'
  await conn.sendMessage(m.chat, {
			video:await(await fetch(json.url)).buffer(),
			caption: "*Here ur asupan.*"
		}, { quoted: m })
}
handler.help = ['bocil']
handler.tags = ['asupan']
handler.register = true
handler.premium = false
handler.limit = true
handler.command = /^(bocil)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler