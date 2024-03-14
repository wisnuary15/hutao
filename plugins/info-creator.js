function handler(m) {
    const kontak = {
        displayName: 'My owner',
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: Wisnu\nitem1.TEL;waid=6282245754509:6282245754509\nitem1.X-ABLabel:\n*Note:* Jangan Spam Kak\nURL;Email Owner:aryswadanawisnu@gmail.com\nORG: Masih pemula🧢\nEND:VCARD`
    }
    conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler