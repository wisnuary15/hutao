import fetch from 'node-fetch'
import axios from 'axios';

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
let startTime = new Date();
  if (!text) throw `*example:* .${command} nakano miku, (gotoubun no hayanome)
`
  conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
let res = await (await fetch(`https://api.miftahganzz.my.id/api/ai/animediffusion?prompt=${text}&apikey=skynkt`)).buffer()
await conn.sendFile(m.chat, res, 'hd.jpg', `*Fetching:* ${(new Date() - startTime) / 1000} seconds`, m)
};
handler.help = ['animediff'];
handler.tags = ['ai','premium'];
handler.command = /^(diffusion|animediff|wibudiff)$/i;
handler.register = true;
handler.premium = true;
handler.limit = true;

export default handler;