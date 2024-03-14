let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Pesannya?`
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan Terkirim Kepemilik Lelia, Jika ${command.toLowerCase()} Hanya Main-Main Tidak Akan Ditanggapi._`)
}
handler.help = ['order']
handler.tags = ['info']
handler.command = /^(order|pesan)$/i
export default handler