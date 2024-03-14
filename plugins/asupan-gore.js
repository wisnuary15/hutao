import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
  let res = `https://api-xcoders.site/api/random/gore?apikey=${global.xcode}`
  let cap = `Tcihh Dasar Psycopath -_-`
 await conn.sendButton(m.chat, cap, wm, res,[['\nSaya Psikopat',`huuu`]], m)
}
handler.help = ['gore']
handler.tags = ['asupan']
handler.command = /^(gore)$/i
export default handler