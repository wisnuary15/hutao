import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
let nyenye = `https://api.zahwazein.xyz/randomanime/v2/${command}?apikey=zenzkey_e44726d4da`
  try {
  conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
    conn.sendFile(m.chat, await(await fetch(nyenye)).buffer(), 'nih.jpg', '*Here ur image.*', m)
      } catch (e) {
    console.log(e)
    conn.reply(m.chat, '*Sorry there was an error accepting the request.*', m)
  }
}
handler.command = handler.help = [
'akira', 
'loli',
'akiyama', 
'ana', 
'asuna', 
'ayuzawa', 
'borutod', 
'chitanda', 
'chitoge', 
'deidara', 
'doraemon', 
'elaina', 
'emilia', 
'asuna', 
'erza', 
'gremory', 
'hestia', 
'hinata', 
'inori', 
'itachi', 
'isuzu', 
'itori', 
'kaga', 
'kagura', 
'kakasih', 
'kaori', 
'kaneki', 
'kosaki', 
'kotori', 
'kuriyama', 
'kuroha', 
'kurumi', 
'madara', 
'mikasa', 
'miku', 
'minato', 
'naruto', 
'natsukawa', 
'neko2', 
'nekohime', 
'nezuko', 
'nishimiya', 
'onepiece', 
'pokemon',
'rem', 
'rize',
'sagiri',
'sakura', 
'sasuke',
'shina',
'shinka',
'shizuka',
'shota',
'tomori',
'toukachan',
'tsunade',
'yatogami',
'yuki'
]
handler.tags = ['anime']
handler.register = true
handler.premium = false
handler.limit = true
export default handler