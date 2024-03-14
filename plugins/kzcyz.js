import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = " ```🚩 Klik gambar di atas untuk mendownload script``` ";
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Click the image above to download the script📥`,
      body: 'Script Free 100%',
      thumbnailUrl: `https://telegra.ph/file/424d60163157a8c76d612.jpg`,
      sourceUrl: `https://t.me/sharingscbot`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sc|script)$/i;

export default handler;