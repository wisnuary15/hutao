function handler(m) {
    const kontak = {
        displayName: 'My owner',
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: Akio Zamr\nitem1.TEL;waid=628551000185:628551000185\nitem1.X-ABLabel:\n*Note:* Jangan Spam Kak\nURL;Email Owner:akio.zamr@gmail.com\nORG: Masih pemula🧢\nEND:VCARD`
    }
    conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler