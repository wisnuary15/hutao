import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*where is title?*`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw '*umurmu segini gaboleh nonton bokep ya adekk:).*';
	try {
		let res = await fetch(`https://bokepindo13.pro/?s=${text}`)
		let cap = `Hasil Pencarian Dari ${text}\n`
	 cap += `Link: https://bokepindo13.pro/?s=${text}
`
cap +=  '\n' + '================' + '\n'
  
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ['bkpindo', 'bkpsearch'].map(v => v + ' *query*')
handler.tags = ['internet','premium']
handler.command = /^bkp(s?earch)?$/i

handler.register = true
handler.premium = true
handler.limit = true

export default handler