import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/039c66c8394b3ad5be7bb.jpg'
let info = `
╭━━━━「 *SEWA* 」
┊• *1 Minggu:* 6K
┊• *1 Bulan:* 20K
┊• *Permanen:* 90K
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊• *1 Bulan:* 30K
╰═┅═━––––––๑

*PAYMENT:*

• *Ovo:* [${povo}]
BY ® LELIA-2024
`
conn.sendButton(m.chat, info, wm, pay, ['Order',`.order Min Saya Mau Order Botnya`], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
