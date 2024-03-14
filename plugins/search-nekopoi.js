import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Mau Cari Apa?`
  let anu = await fetch(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${global.lolkey}&query=${text}`)
  let res = await anu.json()
  let cap = `*Hasil Pencarian Dari ${text}*\n\n• *Title:* ${res.result[0].title}\n• *Link:* ${res.result[0].link}\n\n• *Title:* ${res.result[1].title}\n• *Link:* ${res.result[1].link}\n\n• *Title:* ${res.result[2].title}\n• *Link:* ${res.result[2].link}\n\n• *Title:* ${res.result[3].title}\n• *Link:* ${res.result[3].link}`
  conn.sendButton(m.chat, cap, wm, await( await fetch(res.result[0].thumbnail)).buffer(), [['\nJadi Sange :v', 'huuu']], m)
}
handler.help = ['nekopoisearch', 'nekosearch']
handler.command = /^(nekopoisearch|nekosearch)$/i
handler.tags = ['search']
handler.premium = true

export default handler