let handler = async (m, { conn }) => {
	let user = global.db.data.users[m.sender];
	conn.reply(m.chat, `*Done Sayang RATU LELIA>,<*`, m);
	global.db.data.users[m.sender].money = 100000000000;
	global.db.data.users[m.sender].limit = 100000000000;
	global.db.data.users[m.sender].level = 10000;
	global.db.data.users[m.sender].exp = 1000000000;
};
handler.command = /^(unlimitedlimit)$/i;
handler.owner = true

export default handler;
