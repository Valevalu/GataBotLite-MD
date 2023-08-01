import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'

let handler = async(m, { conn, text }) => {
if (!text) throw `*Falta texto*`
let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&lc=es&apikey=uwgflzFEh6`)
let anu = await res.json()
anu = anu.data.map((v) => `Título: ${v.title}\n*Leídos:* ${v.reads}\n*Votos:* ${v.vote}\n*Capítulos:* ${v.chapter}\n*Enlace:* ${v.link}\n*Description:* ${v.desc}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
// let akuariapiresult2 = await translate(`${anu}`, { to: 'es', autoCorrect: true })
  
await conn.sendFile(m.chat, anu[0].thumb, 'dorrat.jpg',  anu, m)
}
handler.command = /^(wattpad)$/i

export default handler