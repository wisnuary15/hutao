import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Mau Cari Apa? syg`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*Hasil Pencarian*
${text}
`.trim(), m)
}
handler.help = ['pin']
handler.tags = ['search']
handler.command = /^(pin)$/i

export default handler