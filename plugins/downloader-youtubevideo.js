import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Linknya?`
  let res = await fetch(`https://api.zeltoria.my.id/api/download/ytmp4?url=${text}&apikey=${global.zeltoria}`)
  let yt = await res.json()
  let cap = `• *ID:* ${yt.id}\n• *Title:* ${yt.title}\n• *Size:* ${yt.size}`
  let anu = `_Sedang Di Proses, Mohon Tunggu_`
  m.reply(`${anu}`)
  conn.sendMessage(m.chat, { video : { url : yt.download }, caption : cap }, m)
}
handler.help = ['ytv','ytmp4']
handler.tags = ['downloader']
handler.command = /^(ytv|ytmp4|ytvideo)$/i
export default handler