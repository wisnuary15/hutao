import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${global.lolkey}&text=${text}&user=user-unique-id`)
    let komcol = await res.json()
   m.reply(komcol.result)
}
handler.help = ['ai','openai']
handler.tags = ['ai']
handler.command = /^(ai|openai|lia)$/i
handler.limit = true
export default handler