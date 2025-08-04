//  Created By Sadeesha Coder ⛇

const crypto = require("crypto")
const yts = require("yt-search")
const { Client } = require('ssh2');
const { ytmp3, ytmp4 } = require("ruhend-scraper")

const seller = JSON.parse(fs.readFileSync("./data/reseller.json"))
const ownplus = JSON.parse(fs.readFileSync("./data/owner.json"))
const list = JSON.parse(fs.readFileSync("./data/list.json"))

module.exports = async (lara, m, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
	
const budy = (typeof m.text == 'string' ? m.text : '') 
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await lara.decodeJid(lara.user.id)
const isOwner = m.sender.split("@")[0] == global.owner ? true : m.fromMe ? true : ownplus.includes(m.sender)
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isBot = botNumber.includes(m.sender)
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize, sleep } = require('./system/function.js')

m.isGroup = m.chat.endsWith("g.us")
m.metadata = m.isGroup ? (await lara.groupMetadata(m.chat).catch(_ => {}) || {}) : {}
m.isAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == m.sender) || false) : false
m.isBotAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == botNumber) || false) : false


// >~~~~~~~~~ Database ~~~~~~~~~~~< //

if (m.isGroup) {
const chat = db.groups[m.chat]
if (chat) {
if (!("antilink" in chat)) chat.antilink = false
if (!("antilink2" in chat)) chat.antilink2 = false
} else {
db.groups[m.chat] = {
antilink: false, 
antilink2: false
}
}}

if (!isCmd) {
let check = list.find(e => e.cmd == budy.toLowerCase())
if (check) {
await m.reply(check.respon)
}}

// >~~~~~~~~ Database User ~~~~~~~~< //

const isReseller = seller.includes(m.sender) ? true : isOwner

// >~~~~~~~~ Fake Quoted ~~~~~~~~~~< //

const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `0@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${namaowner}`, inviteExpiration: 0 }}}

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Powered By ${namabot}`}}}

const qcmd = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `WhatsApp Bot By ${namaowner}`, "description": null, "currencyCode": "IDR", "priceAmount1000": "99999999999999999", "retailerId": `P`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

// >~~~~~~~~~~ Function ~~~~~~~~~~~< //

const example = async (teks) => {
const commander = ` *Contoh Penggunaan :*\n*${cmd}* ${teks}`
return m.reply(commander)
}

const capital = (string) => {
return string.charAt(0).toUpperCase() + string.slice(1);
}

if (isCmd) {
console.log(chalk.white.bgCyan.bold(namabot), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`DARI`), chalk.blue.bold(`${m.sender.split("@")[0]}`), chalk.blue.bold(`Text :`), chalk.blue.bold(`${cmd}`))
}
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(budy) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await lara.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await lara.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

\`\`\`@${m.sender.split("@")[0]} Maaf pesan kamu saya akan saya hapus, karena admin atau ownerbot telah menyalakan fitur antilink grup lain!\`\`\``, mentions: [m.sender]}, {quoted: m})
await lara.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await lara.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(budy) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await lara.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await lara.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

\`\`\`@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin atau ownerbot telah menyalakan fitur antilink grup lain!\`\`\``, mentions: [m.sender]}, {quoted: m})
await lara.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
//await lara.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

const whitelistid = JSON.parse(fs.readFileSync("./data/whitelistid.json"));

    
    const { createCanvas, loadImage } = require('canvas');
  
    const axios = require('axios');
const FormData = require('form-data');
const { Readable } = require('stream');

async function catbox(buffer) {
  const form = new FormData();
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null); // end of stream

  form.append('reqtype', 'fileupload');
  form.append('fileToUpload', stream, {
    filename: 'image.jpg',
    contentType: 'image/jpeg'
  });

  const res = await axios.post('https://catbox.moe/user/api.php', form, {
    headers: form.getHeaders()
  });

  return res.data;
}
  
 const qs = require('qs')
 
async function ephoto(url, text) {
  let { data } = await axios.get(url)
  let $ = cheerio.load(data)
  let token = $('input[name="token"]').val()
  let build_server = $('#form_value').attr('action')
  let params = {
    text_1: text,
    login: 'OK',
    token
  }

  let res = await axios.post(url + build_server, qs.stringify(params), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  let $$ = cheerio.load(res.data)
  let img = $$("div.thumbnail > img").attr("src")

  if (!img) throw "Gagal mengambil gambar dari server."
  return img.startsWith("http") ? img : `https://en.ephoto360.com${img}`
}  

function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}
function toCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
    
    function msToTime(ms) {
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return `${h} jam ${m} menit ${s} detik`
}
 
 function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}
function toCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
    
 
function getNamaBulan(bulan) {
  const bln = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return bln[parseInt(bulan) - 1];
}
  
 
const autoresFile = path.join(__dirname, 'system', 'res.json');
let autoresData = { autores: [] };

try {
  if(fs.existsSync(autoresFile)) {
    autoresData = JSON.parse(fs.readFileSync(autoresFile));
  }
} catch (e) {
  console.error('[Autores Load Error]', e);
}

// Atur No Owner Nanti Ketik  .autores
const ownerSambutanTimers = global.ownerSambutanTimers || (global.ownerSambutanTimers = {});
const ownerNumber = '923350963366@s.whatsapp.net';
const stickerUrl = 'https://c.termai.cc/i94/LOhp8fH';


if (m.isGroup && m.sender === ownerNumber && autoresData.autores.includes(m.chat)) {
  const now = Date.now();
  const lastTime = ownerSambutanTimers[m.chat] || 0;

  if (now - lastTime >= 8 * 60 * 1000) {
    ownerSambutanTimers[m.chat] = now;

     
    const nowUTC = new Date();
    const wibHour = (nowUTC.getUTCHours() + 7) % 24;
    let ucapan;
    if (wibHour >= 4 && wibHour < 10) {
      ucapan = 'Selamat pagi... 🌄';
    } else if (wibHour >= 10 && wibHour < 15) {
      ucapan = 'Selamat siang... ☀️';
    } else if (wibHour >= 15 && wibHour < 18) {
      ucapan = 'Selamat Sore... 🌇';
    } else if (wibHour >= 18 && wibHour <= 23) {
      ucapan = 'Selamat malam... 🌃';
    } else {
      ucapan = 'Kamu gak tidur? 🙃';
    }

  
    const sambutanTambahan = [
      'King Kyy lara datang 🔥',
      'Waw Kyy famofc Datang Semua Minggir',
      'Kyy famofc Kembali Setelah Melawan Para Kroco',
      'famofc online!',
      'Waktunya membakar semangat! 🔥',
      'Dia datang tanpa undangan 😲',
      'Aura mistis terasa... 🌌',
      'Woi owner hadir!!! 🤴',
      'Gerbang dunia lain terbuka 👁️',
      'Guncangan terjadi... owner muncul! 🌪️',
    ];
    const randomUcapan = sambutanTambahan[Math.floor(Math.random() * sambutanTambahan.length)];

    
    await lara.sendMessage(m.chat, {
      text: `👋 *${ucapan}*\n${randomUcapan}`,
    }, { quoted: m });

    await lara.sendMessage(m.chat, {
      sticker: { url: stickerUrl }
    }, { quoted: m });
  }
}

    
 


const mutePath = path.join(__dirname, 'system', 'mute.json')
let muteData = { muted: [] }

if (fs.existsSync(mutePath)) {
  muteData = JSON.parse(fs.readFileSync(mutePath))
}

if (m.isGroup && muteData.muted.includes(m.chat) && !isOwner) return
 
    //
 
    function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
    
   function generateDreamWorld(name) {
  const levels = ['Lucid', 'Vivid', 'Chaotic', 'Ethereal', 'Dark Realm', 'Celestial'];
  const elements = ['Air', 'Fire', 'Water', 'Earth', 'Light', 'Shadow'];
  const events = ['Melihat cermin', 'Terbang di langit', 'Tersesat di hutan', 'Berbicara dengan hewan'];
  const encounters = ['Dewa misterius', 'Bayangan masa lalu', 'Roh penjaga'];
  const powers = ['Mengendalikan waktu', 'Terbang', 'Melihat masa depan', 'Menghilang'];
  const messages = ['Ikuti intuisimu.', 'Ada rahasia yang belum kamu tahu.', 'Perubahan besar akan datang.'];

  return {
    level: levels[Math.floor(Math.random() * levels.length)],
    core: `Inti mimpi tentang ${name}`,
    elements: shuffle(elements).slice(0, 3),
    events: shuffle(events).slice(0, 3),
    encounters: shuffle(encounters).slice(0, 2),
    powers: shuffle(powers).slice(0, 2),
    message: messages[Math.floor(Math.random() * messages.length)],
    quality: `${Math.floor(Math.random() * 51) + 50}%`
  };
}

function interpretDream(data) {
  const meanings = [
    "Menandakan pencarian jati diri.",
    "Pertanda perubahan besar dalam hidup.",
    "Simbol ketidakpastian yang harus dihadapi.",
    "Refleksi ketakutan tersembunyi.",
    "Tanda potensi luar biasa yang belum digali."
  ];
  return meanings[Math.floor(Math.random() * meanings.length)];
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
 


    
    
//  Base YT : @YASSxOFC 
//  Recode By Kyy 
//  90% Fitur By Kyy  
  
  
 

            
switch (command) {
case 'menu': {
  // Send loading reaction
  await lara.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  // Prepare thumbnail image
  const thumbImage = 'https://fam-official.serv00.net/script12/fampng/Fambot.jpg';

  // Determine user status
  const userStatus = isOwner ? 'Owner 🥇' : isReseller ? 'Reseller 💼' : 'User 😎';

  // Welcome message in English
  let teks = `
🌟 *Welcome to FamOFC Bot* 👋

> *FamOFC Bot* is a versatile WhatsApp bot designed to make your day more exciting!  
Cool features include:  
- 📥 Download media from TikTok, YouTube, and more.  
- 🎮 Play fun games directly in WhatsApp.  
- 🖼️ Create stickers, memes, and awesome edits.  
- 📚 Check weather, Wikipedia, or SIM data.  
- 💸 Exclusive features for resellers and owners.  

All features are neatly organized in this menu, pick one that matches your vibe! 😎

📌 *Your Status:* ${userStatus}  
🛠️ The bot is actively being developed. If you find any bugs, please report to the owner!  
Thanks for your support! ❤️

\`🔥 Powered by FamOFC\`
`;
 
 
  // Button message configuration
  let buttonMessage = {
    document: { url: 'https://fam-official.serv00.net/script12/fampng/Fambot.jpg' },
    mimetype: 'image/png',
    fileName: ucapan(), // Using ucapan function from famofc.js for greeting
    fileLength: 69420,
    pageCount: 404,
    jpegThumbnail: await getBuffer(thumbImage), // Fetch thumbnail
    caption: teks,
    footer: `😎 Bot by: ${global.namaowner || 'FamOFC'}`,
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        title: 'FamOFC Bot',
        body: '🔥 Powered by FamOFC',
        thumbnailUrl: thumbImage,
        mediaType: 1,
        renderLargerThumbnail: true,
        previewType: 0,
        mediaUrl: 'https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C',
        sourceUrl: 'https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C'
      },
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363390114292114@newsletter',
        newsletterName: 'FamOFC'
      }
    },
    buttons: [
      {
        buttonId: '.camerhackbot',
        buttonText: { displayText: '📸Camer hack bot' }
      },
      {
        buttonId: '.hackingtool',
        buttonText: { displayText: '👑 famofc VIP tool' }
      }
    ],
    viewOnce: true,
    headerType: 8
  };

  // Flow menu for interactive command selection
  const flowActions = [{
    buttonId: 'action',
    buttonText: { displayText: '🔍 Explore Features' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: '🌟 Pick a Menu',
        sections: [
          {
            title: '🔥 Popular Features',
            highlight_label: '⚡ TOP PICKS',
            rows: [
              {
                header: '🌐 All Commands',
                title: 'View all FamOFC Bot features',
                id: '.allmenu'
              },
              {
                header: '🔧 Maker Menu',
                title: 'Create stickers, memes, and more',
                id: '.makermenu'
              },
              {
                header: '👥 Group Menu',
                title: 'Manage your WhatsApp groups',
                id: '.groupmenu'
              },
              {
                header: '🔍 Search Menu',
                title: 'Search for info and media',
                id: '.searchmenu'
              },
              {
                header: '👑 Owner Menu',
                title: 'Exclusive owner commands',
                id: '.ownermenu'
              }
            ]
          },
          {
            title: '📥 Download Features',
            rows: [
              {
                header: '🎵 Play Music/Video',
                title: 'Download songs or videos from YouTube',
                id: '.play'
              },
              {
                header: '🎥 TikTok Downloader',
                title: 'Download TikTok videos without watermark',
                id: '.tt'
              },
              {
                header: '📦 GitHub Clone',
                title: 'Download GitHub repos as ZIP',
                id: '.gitclone'
              },
              {
                header: '📱 SIM Data',
                title: 'Check data by phone number',
                id: '.simdata'
              }
            ]
          },
          {
            title: '🖼️ Content Creation',
            rows: [
              {
                header: '🖌️ Sticker Maker',
                title: 'Create stickers from images or videos',
                id: '.sticker'
              },
              {
                header: '😂 Meme Generator',
                title: 'Make funny memes with custom text',
                id: '.smeme'
              },
              {
                header: '📸 Fake TikTok Profile',
                title: 'Create a fake TikTok profile',
                id: '.faketiktok'
              },
              {
                header: '🌟 Pornhub Logo',
                title: 'Generate a Pornhub-style logo',
                id: '.ph'
              },
              {
                header: '📝 Quote Image',
                title: 'Create a quote image with custom text',
                id: '.qc'
              },
              {
                header: '📸 Image Quote 2',
                title: 'Create a quote image with dual text',
                id: '.qcimg2'
              },
              {
                header: '😍 Emoji Mix',
                title: 'Combine emojis into stickers',
                id: '.emojimix'
              },
              {
                header: '🔞 Fake XNXX',
                title: 'Generate a fake XNXX screenshot',
                id: '.fakexnxx'
              },
              {
                header: '🧑‍💼 SDM Tinggi',
                title: 'Create a high-SDM profile picture',
                id: '.ppsdmtinggi'
              },
              {
                header: '💬 Request Quote',
                title: 'Send a quote request to channel',
                id: '.req'
              },
              {
                header: '👩 Wife Check',
                title: 'Check if an image is "wife material"',
                id: '.wifecek'
              },
              {
                header: '🎨 Brat Sticker',
                title: 'Create animated Brat sticker',
                id: '.brat'
              },
              {
                header: '🎨 Brat Video Sticker',
                title: 'Create animated Brat video sticker',
                id: '.bratvid'
              },
              {
                header: '🎨 Brat Anime Sticker',
                title: 'Create animated Brat anime sticker',
                id: '.bratanime'
              },
              {
                header: '🎨 Brat 2 Sticker',
                title: 'Create another animated Brat sticker',
                id: '.brat2'
              }
            ]
          },
          {
            title: '📚 Information Tools',
            rows: [
              {
                header: '🌤️ Weather Check',
                title: 'Check weather forecast for a location',
                id: '.cuaca'
              },
              {
                header: '📖 Wikipedia Search',
                title: 'Search for information on Wikipedia',
                id: '.wikipedia'
              },
              {
                header: '📅 National Holidays',
                title: 'Check upcoming national holidays',
                id: '.harilibur'
              },
              {
                header: '📢 WhatsApp Channel Info',
                title: 'Check details of a WhatsApp channel',
                id: '.idch'
              },
              {
                header: '👤 TikTok Stalk',
                title: 'Get TikTok user profile info',
                id: '.tiktokstalk'
              }
            ]
          },
          {
            title: '👥 Group Management',
            rows: [
              {
                header: '👋 Kick User',
                title: 'Remove a user from the group',
                id: '.kick'
              },
              {
                header: '🔗 Group Link',
                title: 'Get or reset group invite link',
                id: '.linkgc'
              },
              {
                header: '🔄 Reset Group Link',
                title: 'Revoke and generate new group link',
                id: '.resetlink'
              },
              {
                header: '⬆️ Promote Member',
                title: 'Make a member an admin',
                id: '.promote'
              },
              {
                header: '⬇️ Demote Admin',
                title: 'Remove admin status from a member',
                id: '.demote'
              },
              {
                header: '👤 Who Is',
                title: 'Check user info in group',
                id: '.whois'
              },
              {
                header: '🔇 Hide Tag',
                title: 'Send message with hidden tags',
                id: '.hidetag'
              },
              {
                header: '🔓 Open Group',
                title: 'Allow all members to send messages',
                id: '.opengc'
              },
              {
                header: '🔒 Close Group',
                title: 'Restrict messages to admins only',
                id: '.closegc'
              }
            ]
          },
          {
            title: '👑 Owner-Only Commands',
            rows: [
              {
                header: '➕ Add Seller',
                title: 'Add a reseller to the bot',
                id: '.addseller'
              },
              {
                header: '➖ Remove Seller',
                title: 'Remove a reseller from the bot',
                id: '.delseller'
              },
              {
                header: '➕ Add Owner',
                title: 'Add a new owner to the bot',
                id: '.addowner'
              },
              {
                header: '➖ Remove Owner',
                title: 'Remove an owner from the bot',
                id: '.delowner'
              },
              {
                header: '📋 List Groups',
                title: 'View all groups the bot is in',
                id: '.listgrup'
              },
              {
                header: '📨 Broadcast',
                title: 'Send message to all groups',
                id: '.jpm'
              },
              {
                header: '🔇 Mute Group',
                title: 'Mute a group chat',
                id: '.onmute'
              },
              {
                header: '🔊 Unmute Group',
                title: 'Unmute a group chat',
                id: '.offmute'
              },
              {
                header: '🔄 Public Mode',
                title: 'Set bot to public mode',
                id: '.public'
              },
              {
                header: '🔒 Self Mode',
                title: 'Set bot to self mode',
                id: '.self'
              },
              {
                header: '➕ Add Whitelist',
                title: 'Add ID to whitelist',
                id: '.addwl'
              },
              {
                header: '➖ Remove Whitelist',
                title: 'Remove ID from whitelist',
                id: '.delwl'
              },
              {
                header: '📋 List Whitelist',
                title: 'View all whitelisted IDs',
                id: '.listwl'
              },
              {
                header: '🗑️ Auto Delete Admin',
                title: 'Delete non-whitelisted admins',
                id: '.autodeladmin'
              }
            ]
          },
          {
            title: 'ℹ️ Bot Info & Utilities',
            rows: [
              {
                header: '🤖 Bot Info',
                title: 'Get info about FamOFC Bot',
                id: '.infobot'
              },
              {
                header: '📤 Image to URL',
                title: 'Convert image to shareable URL',
                id: '.tourl'
              },
              {
                header: '🏠 Back to Menu',
                title: 'Return to main menu',
                id: '.menu'
              }
            ]
          }
        ]
      })
    },
    viewOnce: true
  }];

  // Add flow actions to buttons
  buttonMessage.buttons.push(...flowActions);

  // Send the menu
  await lara.sendMessage(m.chat, buttonMessage, { quoted: m });

  // Send success reaction
  await lara.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
case 'camerhackbot':{
m.reply(`

*📸Camera hack📸*


🤖*https://t.me/FamCamerahackbot*

Telegram Camera hack bot
Capture👇

Photo ✅
Video ✅
Live Location✅
Device info✅

#famofc`)}
break;
case 'hackingtool':{
m.reply(`
✦ Sim Database 
✦ Camera Hack 
✦ Location Hack 
✦ PHP Hacking RAT 
✦ Android RAT 
✦ WhatsApp Boomer
✦ Card Bin 
✦ Bug Bot 
✦ SMS Boomer
✦ CC Generator
✦ Website Copper
✦ Website Source Code Downloader
✦ AI Image Generator 
✦ JS Encrypt & Decrypt

*Toolkit-url* https://fam-official.serv00.net`)}
break;
/*case 'menu': {
  try {
    const teksHasil = `
  

*ʟɪsᴛᴍᴇɴᴜ*
✦ .allmenu 
✦ .ownermenu
✦ .groupmenu
✦ .searchmenu
✦ .funmenu

ʀᴜɴᴛɪᴍᴇ ᴘʀᴏsᴇs : *${runtime(process.uptime())}*`;


    await famofc.sendMessage(m.chat, {
      text: teksHasil,
      contextInfo: {
        isForwarded: true,
        forwardingScore: 19,
        externalAdReply: {
          title: "famofc Bot",
          body: "Mod_By_Famofc",
          thumbnailUrl: "https://fam-official.serv00.net/script12/fampng/fam.jpg",
          mediaUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
          renderLargerThumbnail: false,
          mediaType: 2
        }
      }
    });

    await famofc.sendMessage(m.chat, {
      audio: { url: "./media/fam.mp3" },
      mimetype: "audio/mpeg",
      ptt: true
    });

  } catch (e) {
    console.error("❌ Gagl kirim info:", e);
    await famofc.sendMessage(m.chat, {
      text: " Gagal mengirim info Shiro."
    });
  }
}
break;*/
    
    
case 'allmenu': {
  const teksHasil = `



╭──『 *ᴍᴇɴᴜ sᴇᴀʀᴄʜ* 』
│ ✦ .simdata 
│ ✦ .tt
│ ✦ .ig
│ ✦ .fb
│ ✦ .gitclone 
│ ✦ .play
│ ✦ .cekrute
│ ✦ .tiktokstalk
│ ✦ .cuaca
│ ✦ .wikipedia
│ ✦ .harilibur
│ ✦ .idch
╰────────────

╭──『 *ᴍᴇɴᴜ ɢʀᴏᴜᴘ* 』
│ ✦ .req
│ ✦ .opengc
│ ✦ .closegc
│ ✦ .kick
│ ✦ .linkgc
│ ✦ .whois
│ ✦ .promote
│ ✦ .demote
│ ✦ .resetlinkgc
│ ✦ .setppgc
│ ✦ .listadmin
│ ✦ .creategc
│ ✦ .tagboom
│ ✦ .tagme
│ ✦ .tag
│ ✦ .absen
│ ✦ .req1
│ ✦ .req2
│ ✦ .totalfitur
╰────────────


╭──『 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 』
│ ✦ .addseller  
│ ✦ .listgrup
│ ✦ .delseller  
│ ✦ .listseller  
│ ✦ .addwl  
│ ✦ .delwl  
│ ✦ .listwl  
│ ✦ .autodeladmin  
│ ✦ .addowner  
│ ✦ .delowner  
│ ✦ .listowner  
│ ✦ .self  
│ ✦ .public 
│ ✦ .poling
│ ✦ .onmute
│ ✦ .offmute
│ ✦ .playch
╰────────────

╭──『 *ᴍᴇɴᴜ ᴍᴀᴋᴇʀ* 』
│ ✦ .sticker
│ ✦ .vv
│ ✦ .qc
│ ✦ .brat
│ ✦ .brat2
│ ✦ .bratanime
│ ✦ .bratvid
│ ✦ .smeme
│ ✦ .ph
│ ✦ .iqc
│ ✦ .faketiktok
│ ✦ .emojimix
│ ✦ .wm
│ ✦ .wifecek
│ ✦ .qcimg
│ ✦ .ppsdmtinggi
│ ✦ .fakexnxx
│ ✦ .balogo
│ ✦ .sitolol
│ ✦ .qcimg2
│ ✦ .katasiti
│ ✦ .fakengl
│ ✦ .fakengl2
│ ✦ .img2ios
╰────────────


`;

  await lara.sendMessage(m.chat, {
    video: { url: 'https://c.termai.cc/v73/Aiu6iM' },
    caption: teksHasil,
    gifPlayback: true,
    contextInfo: {
      externalAdReply: {
        title: "✦ ⏤͟͟͞͞ FAM OFC=",
        body: "Nama Faheem",
        thumbnailUrl: "https://fam-official.serv00.net/script12/fampng/fam.jpg",
        mediaUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
        renderLargerThumbnail: false,
        mediaType: 2
      },
      forwardingScore: 19,
      isForwarded: true
    }
  }, { quoted: m });
}
break;   
   

 case 'makermenu': {
  await lara.sendMessage(m.chat, {
    image: { url: 'https://fam-official.serv00.net/script12/fampng/Fambot.jpg' }, // gambar utama 16:9
    caption: `
 

╭──『 *ᴍᴇɴᴜ ᴍᴀᴋᴇʀ* 』
│ ✦ .sticker
│ ✦ .vv
│ ✦ .qc
│ ✦ .brat
│ ✦ .brat2
│ ✦ .bratanime
│ ✦ .bratvid
│ ✦ .smeme
│ ✦ .ph
│ ✦ .iqc
│ ✦ .faketiktok
│ ✦ .emojimix
│ ✦ .wm
│ ✦ .wifecek
│ ✦ .qcimg
│ ✦ .ppsdmtinggi
│ ✦ .fakexnxx
│ ✦ .balogo
│ ✦ .sitolol
│ ✦ .qcimg2
│ ✦ .katasiti
│ ✦ .fakengl
│ ✦ .fakengl2
│ ✦ .img2ios
╰────────────
*Total Fitur* *23*`.
 trim(),
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        title: "⏤͟͟͞͞𝑲𝒚𝒚𝑫͢͠𝒆 𝑳𝒖𝒄𝒊𝒇𝒆𝒓𝒛",
        body: "✦ ⏤͟͟͞͞ lara ⛧",
        mediaType: 1,
        thumbnailUrl: 'https://fam-official.serv00.net/script12/fampng/fam.jpg',
        sourceUrl: 'https://chat.whatsapp.com'
      },
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363390114292114@newsletter',
        newsletterName: 'FamOfc'
      }
    }
  })
  break
}


case 'ownermenu': {
  await lara.sendMessage(m.chat, {
    image: { url: 'https://fam-official.serv00.net/script12/fampng/Fambot.jpg' }, 
    caption: `
 


╭──『 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 』
│ ✦ .addseller  
│ ✦ .listgrup
│ ✦ .delseller  
│ ✦ .listseller  
│ ✦ .addwl  
│ ✦ .delwl  
│ ✦ .listwl  
│ ✦ .autodeladmin  
│ ✦ .addowner  
│ ✦ .delowner  
│ ✦ .listowner  
│ ✦ .self  
│ ✦ .public 
│ ✦ .poling
│ ✦ .onmute
│ ✦ .offmute
│ ✦ .playch
╰┈
*Total Fitur* *16*
    `.trim(),
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        title: "⏤͟͟͞͞𝑲𝒚𝒚𝑫͢͠𝒆 𝑳𝒖𝒄𝒊𝒇𝒆𝒓𝒛",
        body: "✦ ⏤͟͟͞͞ famofc ⛧",
        mediaType: 1,
        thumbnailUrl: 'https://fam-official.serv00.net/script12/fampng/fam.jpg',
        sourceUrl: 'https://chat.whatsapp.com'
      },
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363390114292114@newsletter',
        newsletterName: 'FamOfc'
      }
    }
  })
  break
}


case 'groupmenu': {
  await lara.sendMessage(m.chat, {
    image: { url: 'https://fam-official.serv00.net/script12/fampng/Fambot.jpg' }, // gambar utama 16:9
    caption: `


╭──『 *ᴍᴇɴᴜ ɢʀᴏᴜᴘ* 』
│ ✦ .req
│ ✦ .opengc
│ ✦ .closegc
│ ✦ .kick
│ ✦ .linkgc
│ ✦ .whois
│ ✦ .promote
│ ✦ .demote
│ ✦ .resetlinkgc
│ ✦ .setppgc
│ ✦ .listadmin
│ ✦ .creategc
│ ✦ .tagboom
│ ✦ .tagme
│ ✦ .tag
│ ✦ .absen
│ ✦ .req1
│ ✦ .req2
│ ✦ .totalfitur
╰┈

Total Fitur* *19*

    `.trim(),
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        title: "⏤͟͟͞͞𝑲𝒚𝒚𝑫͢͠𝒆 𝑳𝒖𝒄𝒊𝒇𝒆𝒓𝒛",
        body: "✦ ⏤͟͟͞͞ famofc ⛧",
        mediaType: 1,
        thumbnailUrl: 'https://fam-official.serv00.net/script12/fampng/fam.jpg',
        sourceUrl: 'https://chat.whatsapp.com'
      },
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363390114292114@newsletter',
        newsletterName: 'FamOfc'
      }
    }
  })
  break
}

case 'searchmenu': {
  await lara.sendMessage(m.chat, {
    image: { url: 'https://fam-official.serv00.net/script12/fampng/Fambot.jpg' }, // gambar utama 16:9
    caption: `


╭──『 *ᴍᴇɴᴜ sᴇᴀʀᴄʜ* 』
│ ✦ .simdata 
│ ✦ .tt
│ ✦ .ig
│ ✦ .fb
│ ✦ .gitclone 
│ ✦ .play
│ ✦ .cekrute
│ ✦ .tiktokstalk
│ ✦ .cuaca
│ ✦ .wikipedia
│ ✦ .harilibur
│ ✦ .idch
╰────────────
*Total Fitur* *11*
    `.trim(),
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        title: "⏤͟͟͞͞𝑲𝒚𝒚𝑫͢͠𝒆 𝑳𝒖𝒄𝒊𝒇𝒆𝒓𝒛",
        body: "✦ ⏤͟͟͞͞ famofc ⛧",
        mediaType: 1,
        thumbnailUrl: 'https://fam-official.serv00.net/script12/fampng/fam.jpg',
        sourceUrl: 'https://chat.whatsapp.com'
      },
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363390114292114@newsletter',
        newsletterName: 'FamOfc'
      }
    }
  })
  break
}
        case 'iqc': {
  const { createCanvas, loadImage } = require('canvas');

  const raw = text?.split('|');
  const pesan = raw?.[0]?.trim();
  const posisi = raw?.[1]?.toLowerCase() === 'kanan' ? 'right' : 'left';

  if (!pesan) return m.reply('Mana teksnya? Gunakan format: *.iqc famofc');
  if (pesan.length > 50) return m.reply('Teks maksimal 50 karakter ya ');

  const templateUrl = 'https://files.catbox.moe/twko3b.jpg';
  const templateImg = await loadImage(templateUrl);

  const canvas = createCanvas(templateImg.width, templateImg.height);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(templateImg, 0, 0);

  
  ctx.font = '24px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.lineWidth = 1.2;

  const maxWidth = 390;
  const xStart = posisi === 'right' ? canvas.width - maxWidth - 45 : 45;
  let y = 412;

  function wrapTextAny(text, x, y, maxWidth, lineHeight) {
    let line = '';
    for (let i = 0; i < text.length; i++) {
      line += text[i];
      const width = ctx.measureText(line).width;

      if (width > maxWidth) {
        const output = line.slice(0, -1);
        ctx.strokeText(output, x, y);
        ctx.fillText(output, x, y);
        line = text[i];
        y += lineHeight;
      }
    }
    ctx.strokeText(line, x, y);
    ctx.fillText(line, x, y);
  }

  wrapTextAny(pesan, xStart, y, maxWidth, 32);

  const buffer = canvas.toBuffer('image/jpeg');

  await lara.sendMessage(m.chat, {
    image: buffer,
    caption: `Iqc By famofc`
  }, { quoted: m });
}
break;
      
case 'harilibur': {
  try {
    const res = await fetch('https://api.siputzx.my.id/api/info/liburnasional');
    if (!res.ok) return m.reply('❌ Gagal menghubungi API libur.');

    const json = await res.json();
    if (!json.status) return m.reply('❌ Data tidak tersedia saat ini.');

    const mendatang = json.data.mendatang;
    const liburMendatang = mendatang.hari_libur.slice(0, 5).map((x, i) =>
      `📆 ${x.date} - ${x.event} (${x.daysUntil} hari lagi)`
    ).join('\n');

    const eventNasional = mendatang.event_nasional.slice(0, 5).map((x, i) =>
      `📌 ${x.date} - ${x.event} (${x.daysUntil} hari lagi)`
    ).join('\n');

    const teks = `\`[ LIBUR NASIONAL ]\`\n\n` +
      `🗓️ *Hari Libur Mendatang:*\n${liburMendatang}\n\n` +
      `🇮🇩 *Event Nasional Mendatang:*\n${eventNasional}\n`;

    m.reply(teks);
  } catch (e) {
    console.error(e);
    m.reply(`Gagal mendapatkan data libur nasional\n\n• *Error*:\n${e.message}\n\n> Segera lapor ke owner`);
  }
}
break;   

    // 
  case 'idch':
case 'cekidch': {
  if (!text) return m.reply(`📌 *استعمال:* ${prefix + command} <channel_link>\nمثال: ${prefix + command} https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C`);
  if (!text.includes("https://whatsapp.com/channel/")) return m.reply("❌ *غلط لنک:* براہ کرم ایک درست واٹس ایپ چینل لنک فراہم کریں۔");

  try {
    await lara.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    const result = text.split('https://whatsapp.com/channel/')[1];
    const res = await lara.newsletterMetadata("invite", result);

    const teks = `📢 *واٹس ایپ چینل کی معلومات*\n\n` +
                 `• *آئی ڈی:* ${res.id}\n` +
                 `• *نام:* ${res.name}\n` +
                 `• *کل سبسکرائبرز:* ${res.subscribers}\n` +
                 `• *حالت:* ${res.state}\n` +
                 `• *تصدیق شدہ:* ${res.verification === "VERIFIED" ? "✅ تصدیق شدہ" : "❌ غیر تصدیق شدہ"}\n\n` +
                 `🔥 *Powered by FAM OFC*`;

    const msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: {
            body: { text: teks },
            footer: { text: "🔥 Powered by FAM OFC" },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_copy",
                  buttonParamsJson: `{"display_text":"📋 آئی ڈی کاپی کریں","copy_code":"${res.id}"}`
                }
              ]
            }
          }
        }
      }
    };

    await lara.relayMessage(m.chat, msg, { quoted: m });
    await lara.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("Cekidch Command Error:", error);
    await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ *خرابی:* چینل کی معلومات حاصل کرنے میں ناکامی۔ ${error.message || "غلط لنک یا سرور کا مسئلہ۔"}`);
  }
}
break;    
case 'rvo':
case 'readviewonce':
case 'vv': {
  if (!m.quoted) return m.reply(`❌ Reply to a view-once image, video, or audio with: ${prefix}${command}`);

  await lara.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

  try {
    const mimeType = m.quoted.mtype;
    if (!/imageMessage|videoMessage|audioMessage/.test(mimeType)) {
      return m.reply(`❌ Only view-once images, videos, or audio are supported.`);
    }

    const mediaBuffer = await m.quoted.download();
    if (!mediaBuffer) {
      return m.reply(`❌ Failed to download media. Ensure it's a view-once message.`);
    }

    const messageOptions = {};
    if (mimeType === 'audioMessage') {
      messageOptions.audio = mediaBuffer;
      messageOptions.mimetype = 'audio/mp4';
      messageOptions.ptt = true;
    } else {
      messageOptions[mimeType.replace('Message', '').toLowerCase()] = mediaBuffer;
      if (text) messageOptions.caption = text;
    }

    // Send to current chat and bot's number
    await lara.sendMessage(m.chat, messageOptions, { quoted: m });
    await lara.sendMessage(lara.user.id, messageOptions, { quoted: m });

    await lara.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (err) {
    console.error("ReadViewOnce Error:", err);
    await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Failed to process view-once media.`);
  }
}
break;
     case 'wikipedia':
case 'wiki': {
  const axios = (await import('axios')).default;
  if (!q) return m.reply('❗ Contoh: .wikipedia Perang Dunia Kedua');

  try {
    const searchURL = `https://id.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&format=json`;
    const searchRes = await axios.get(searchURL);
    const results = searchRes.data.query?.search;
    if (!results?.length) return m.reply('❌ Topik tidak ditemukan di Wikipedia.');

    const title = results[0].title;

    const infoURL = `https://id.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro=true&explaintext=true&redirects=true&titles=${encodeURIComponent(title)}&format=json&pithumbsize=600`;
    const infoRes = await axios.get(infoURL);

    const pages = infoRes.data.query.pages;
    const page = Object.values(pages)[0];

    let extract = page.extract || '🔍 Artikel ditemukan tapi tidak ada ringkasan.';
    if (extract.length > 800) {
      extract = extract.slice(0, 800).trim() + '…';
    }

    const thumb = page.thumbnail?.source;
    const pageURL = `https://id.wikipedia.org/wiki/${encodeURIComponent(title)}`;
    const caption = `📚 *${title}*\n\n${extract}\n\n🌐 *Baca selengkapnya:* ${pageURL}`;

    if (thumb) {
      await lara.sendMessage(m.chat, {
        image: { url: thumb },
        caption
      }, { quoted: m });
    } else {
      await lara.sendMessage(m.chat, {
        text: caption
      }, { quoted: m });
    }

  } catch (err) {
    console.error("Wikipedia Error:", err?.response?.data || err);
    m.reply('🚫 Gagal mengambil data dari Wikipedia.');
  }
}
break;
         

case 'cuaca':
case 'cekcuaca': {
  const axios = (await import('axios')).default;
  if (!q) return m.reply('❌ Masukkan nama lokasi!\nContoh: .cuaca Jakarta');

  const apiKey = '07a2b10512dc32968ed9a9e812ef625a';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&appid=${apiKey}&units=metric&lang=id`;

  await lara.sendMessage(m.chat, { react: { text: "⛅", key: m.key } });

  try {
    const { data } = await axios.get(apiUrl);
    const cuaca = data.weather[0];
    const icon = `https://openweathermap.org/img/wn/${cuaca.icon}@4x.png`;

    const hasil = `☁️ *Perkiraan Cuaca - ${data.name}, ${data.sys.country}*\n\n` +
      `• Cuaca: ${cuaca.description}\n` +
      `• Suhu: ${data.main.temp}°C\n` +
      `• Kelembapan: ${data.main.humidity}%\n` +
      `• Angin: ${data.wind.speed} m/s\n` +
      `• Tekanan Udara: ${data.main.pressure} hPa\n` +
      `• Zona Waktu: GMT+${data.timezone / 3600}`;

    await lara.sendMessage(m.chat, {
      image: { url: icon },
      caption: hasil
    }, { quoted: m });

  } catch (e) {
    console.error('CUACA ERROR:', e?.response?.data || e);
    m.reply('❌ Gagal mengambil data cuaca. Cek lokasi atau coba lagi nanti.');
  }
}
break;   

  
 case 'simdata': {
  if (!text) {
    return m.reply(`❌ Please provide a phone number!\nExample: ${prefix}simdata 03325809154`);
  }

  // Clean input: remove non-digits, preserve leading +
  const cleanedNumber = text.replace(/[^\d+]/g, '').replace(/^\+?(\d+)$/, '$1');

  // Validate phone number (10-13 digits, optional +)
  if (!/^\+?\d{10,13}$/.test(cleanedNumber)) {
    await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    return m.reply(`❌ Invalid phone number! Example: 03325809154 or +923325809154`);
  }

  await lara.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const response = await axios.get(`https://fam-official.serv00.net/sim/famdata.php?num=${encodeURIComponent(cleanedNumber)}`, {
      timeout: 10000
    });

    const data = response.data;
    if (data.status !== 'success' || !Array.isArray(data.data) || data.data.length === 0) {
      await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply(`❌ No data found for number ${text}. Try another number.`);
    }

    let formattedResponse = `✅ *SIM Database Results*\n\n`;
    data.data.forEach((userData, index) => {
      formattedResponse += `📌 *Record ${index + 1}:*\n`;
      formattedResponse += `🔹 Name: ${userData.name || 'Unknown'}\n`;
      formattedResponse += `🔹 Number: ${userData.mobile || 'Unknown'}\n`;
      formattedResponse += `🔹 CNIC: ${userData.cnic || 'Unknown'}\n`;
      formattedResponse += `🔹 Address: ${userData.address?.trim() || 'Unknown'}\n`;
      formattedResponse += `━━━━━━━\n`;
    });
    formattedResponse += `🔍 Powered by `;

    await lara.sendMessage(m.chat, { text: formattedResponse }, { quoted: m });
    await lara.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("SIM Data Error:", { message: error.message, code: error.code });
    await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(error.code === 'ECONNABORTED' ? `❌ Timeout. Please try again later.` : `❌ Failed to retrieve SIM data.`);
  }
}
break;
      
 case 'tt':
case 'tiktok': {
  if (!text) {
    return m.reply(`❌ Please provide a TikTok video link!\nExample: ${prefix}tt https://www.tiktok.com/@username/video/123456789`);
  }

  const url = text.trim();
  if (!/^(https?:\/\/)/i.test(url) || !url.includes('tiktok.com')) {
    return m.reply(`❌ Invalid TikTok URL! Example: https://www.tiktok.com/@username/video/123456789`);
  }

  await lara.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const apiUrl = `https://rest-lily.vercel.app/api/downloader/tiktok?url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl, { headers: { Accept: '*/*' }, timeout: 10000 });
    const data = response.data;

    if (data.status !== true || !data.data) {
      await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply(`❌ Failed to fetch TikTok media: ${data.message || 'No media found for the provided URL.'}`);
    }

    const { no_watermark, music, title, creator } = data.data;
    if (!no_watermark || !music) {
      await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply(`❌ No downloadable media found. Ensure the video is public and try again.`);
    }

    // Send No-Watermark Video
    await lara.sendMessage(m.chat, {
      video: { url: no_watermark },
      caption: `✅ *TikTok Video*\n\n` +
               `📝 *Title*: ${title || 'Unknown'}\n` +
               `👤 *Creator*: ${creator || 'Unknown'}\n` +
               `🔍 *Powered by FamOFC*`
    }, { quoted: m });

    // Send Audio
    await lara.sendMessage(m.chat, {
      audio: { url: music },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m });

    await lara.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("TikTok Downloader Error:", error.message);
    await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Error: ${error.message || 'Failed to download TikTok media. Please try again later.'}`);
  }
}
break;
case 'ttstalk':
case 'tiktokstalk': {
  if (!args[0]) return m.reply(
    "🔍 *TikTok Stalk*\n" +
    "──────────────────\n" +
    "Masukkan username TikTok yang ingin di-stalk\n\n" +
    "Contoh: .ttstalk mrbeast"
  );

  try {
    const username = args.join(' ');
    const res = await fetch(`https://api.siputzx.my.id/api/stalk/tiktok?username=${username}`);
    const json = await res.json();

    if (!json.status) return m.reply("❌ Username tidak ditemukan!");

    const user = json.data.user;
    const stats = json.data.stats;

    let teks = `✨ *TIKTOK USER INFO*\n`;
    teks += `─────────────────────\n\n`;
    teks += `📛 *Nama:* ${user.nickname || '-'}\n`;
    teks += `🔗 *Username:* @${user.uniqueId}\n`;
    teks += `📝 *Bio:* ${user.signature || '-'}\n`;
    teks += `🌐 *Region:* ${user.region || '-'}\n`;
    teks += `\n`;
    teks += `📊 *Statistik Akun:*\n`;
    teks += `• 👥 *Followers:* ${stats.followerCount.toLocaleString()}\n`;
    teks += `• 🔁 *Following:* ${stats.followingCount.toLocaleString()}\n`;
    teks += `• ❤️ *Total Likes:* ${stats.heartCount.toLocaleString()}\n`;
    teks += `• 🎞️ *Jumlah Video:* ${stats.videoCount}\n`;
    teks += `\n`;
    teks += `🔒 *Akun Privat:* ${user.privateAccount ? 'Ya' : 'Tidak'}\n`;
    teks += `✅ *Verified:* ${user.verified ? 'Ya' : 'Tidak'}\n`;
    teks += `\n`;
    teks += `🌟 *Link Profil:*\nhttps://www.tiktok.com/@${user.uniqueId}`;

    lara.sendMessage(m.chat, {
      image: { url: user.avatarThumb },
      caption: teks
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('⚠️ Gagal mengambil data. Coba lagi nanti.');
  }
}
break;      
        
        
        
case 'gitclone': {
  // Check if user is premium or owner


  // Check if URL is provided
  if (!text) {
    return m.reply(`📌 *استعمال:* ${prefix + command} <github_url>\nمثال: ${prefix + command} https://github.com/Skyzodev/Simplebot\n\n🔥 *Powered by FAM OFC*`);
  }

  // Validate URL
  const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
  if (!regex.test(text)) {
    return m.reply(`❌ *غلط GitHub یو آر ایل!* براہ کرم ایک درست ریپوزٹری یو آر ایل فراہم کریں (مثال: https://github.com/Skyzodev/Simplebot)۔\n\n🔥 *Powered by FAM OFC*`);
  }

  try {
    // Send loading reaction
    await lara.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    const [, user, repo] = text.match(regex) || [];
    const cleanRepo = repo.replace(/.git$/, '');
    const url = `https://api.github.com/repos/${user}/${cleanRepo}/zipball`;

    // Fetch ZIP file metadata
    const response = await axios.head(url, {
      headers: { Accept: "*/*" },
      timeout: 10000
    });
    if (response.status !== 200) throw new Error("ریپوزٹری نہیں ملی یا ناقابل رسائی ہے۔");

    const filename = response.headers['content-disposition']?.match(/attachment; filename=(.*)/)?.[1] || `${cleanRepo}.zip`;

    // Send ZIP file as document
    await lara.sendMessage(m.chat, {
      document: { url: url },
      mimetype: 'application/zip',
      fileName: filename,
      caption: `📦 *GitHub ریپوزٹری ڈاؤن لوڈ ہوئی*\n` +
               `👤 *صارف:* ${user}\n` +
               `📂 *ریپو:* ${cleanRepo}\n\n` +
               `🔥 *Powered by FAM OFC*`,
      contextInfo: {
        mentionedJid: [m.sender],
        isForwarded: true,
        forwardingScore: 19,
        externalAdReply: {
          showAdAttribution: true,
          title: "GitHub ڈاؤنلوڈر",
          body: `بذریعہ ${global.botname || "FAM OFC"}`,
          thumbnailUrl: global.ppuser || "https://fam-official.serv00.net/script12/fampng/Fambot.jpg",
          sourceUrl: global.website || "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });

    // Send success reaction
    await lara.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("Gitclone Command Error:", error);
    await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ *خرابی:* ریپوزٹری ڈاؤن لوڈ کرنے میں ناکامی۔ ${error.message || "ریپوزٹری نہیں ملی یا ناقابل رسائی ہے۔"}\n\n🔥 *Powered by FAM OFC*`);
  }
}
break;
    



    
        case 'totalfitur': {
  try {
    const fs = require('fs');
    const path = './lara.js'; // Ganti jika file kamu beda nama/lokasi

    const content = fs.readFileSync(path, 'utf-8');

    // Ambil semua case
    const caseRegex = /case ['"`]([^'"`]+)['"`]/g;
    let match;
    const caseList = [];

    while ((match = caseRegex.exec(content)) !== null) {
      caseList.push(match[1]);
    }

    const total = caseList.length;

    // Hitung case yang paling sering dipakai
    const countMap = {};
    for (const name of caseList) {
      const cmd = name.split(' ')[0]; // pisah jika pakai: case 'cmd1': case 'cmd2':
      countMap[cmd] = (countMap[cmd] || 0) + 1;
    }

    // Urutkan berdasarkan paling sering
    const sortedCommands = Object.entries(countMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10) // ambil top 10
      .map(([cmd], i) => `${i + 1}. *.${cmd}*`)
      .join('\n');

    const teksHasil = `*Total Fitur Dalam Bot Saat Ini:* *${total} fitur*\n\n*Top Fitur Paling Sering Digunakan:*\n${sortedCommands}`;

    await lara.sendMessage(m.chat, {
      text: teksHasil,
      contextInfo: {
        externalAdReply: {
          title: "✦ ⏤͟͟͞͞ FAM OFC=",
          body: "Analisis Total dan Top Fitur",
          thumbnailUrl: "https://c.termai.cc/i27/Ecfy",
          mediaUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
          renderLargerThumbnail: false,
          mediaType: 2
        },
        forwardingScore: 19,
        isForwarded: true
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('Gagal membaca fitur: ' + err.message)
  }
}
break;
 
      
     
                    
        
        
  
case 'onmute': {
  if (!m.isGroup) return m.reply('❗ Hanya bisa di grup.')
  if (!isOwner) return m.reply('❌ Khusus owner.')

  if (!muteData.muted.includes(m.chat)) {
    muteData.muted.push(m.chat)
    fs.writeFileSync(mutePath, JSON.stringify(muteData, null, 2))
    m.reply('✅ Grup ini telah dimute. Bot tidak akan merespon.')
  } else m.reply('Sudah dalam keadaan mute.')
}
break

case 'offmute': {
  if (!m.isGroup) return m.reply('❗ Hanya bisa di grup.')
  if (!isOwner) return m.reply('❌ Khusus owner.')

  if (muteData.muted.includes(m.chat)) {
    muteData.muted = muteData.muted.filter(id => id !== m.chat)
    fs.writeFileSync(mutePath, JSON.stringify(muteData, null, 2))
    m.reply('✅ Grup ini telah di-unmute. Bot aktif kembali.')
  } else m.reply('Grup ini tidak dalam keadaan mute.')
}
break  
    
         
  

case 'fakengl': {
  const sharp = (await import('sharp')).default
  const axios = (await import('axios')).default

  if (!text) return m.reply('❗ Masukkan teks!\n\nContoh:\n.fakengl Mana premium gw')

  await lara.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } })

  try {
    const bgUrl = 'https://files.catbox.moe/lbyyov.jpg'
    const bgBuffer = await axios.get(bgUrl, { responseType: 'arraybuffer' }).then(res => res.data)

    const maxCharsPerLine = 27
    const words = text.split(' ')
    let lines = ['']
    for (const word of words) {
      const lastLine = lines[lines.length - 1]
      if ((lastLine + ' ' + word).trim().length <= maxCharsPerLine) {
        lines[lines.length - 1] += (lastLine ? ' ' : '') + word
      } else {
        lines.push(word)
      }
    }

    const svgText = `
      <svg width="1440" height="1164" xmlns="http://www.w3.org/2000/svg">
        <style>
          .title {
            fill: black;
            font-size: 65px;
            font-weight: bold;
            font-family: "Poppins", sans-serif;
            dominant-baseline: middle;
            text-anchor: middle;
          }
        </style>
        ${lines.map((line, i) => {
          const lineHeight = 85
          const yPos = 705 + (i - (lines.length - 1) / 2) * lineHeight
          return `<text x="50%" y="${yPos}" class="title">${line}</text>`
        }).join('\n')}
      </svg>
    `

    const textBuffer = Buffer.from(svgText)

    const final = await sharp(bgBuffer)
      .composite([{ input: textBuffer, top: 0, left: 0 }])
      .resize(1440, 1164)
      .png()
      .toBuffer()

    await lara.sendMessage(m.chat, {
      image: final,
      caption: '✅ *Berhasil membuat Fake NGL!*'
    }, { quoted: m })

  } catch (err) {
    console.error('[FAKENGL ERROR]', err)
    m.reply(`❌ Gagal membuat fake ngl\n\n• *Error:* ${err.message}`)
  }
}
break;
    
  case 'insta':
case 'ig': {
  // Set command description (if your bot uses metadata)
  command.description = 'downloads';

  // Check if URL is provided
  if (!text) {
    return m.reply(`📌 *استعمال:* ${prefix + command} <instagram_url>\nمثال: ${prefix + command} https://www.instagram.com/reel/123456789/\n\n🔥 *Powered by FAM OFC*`);
  }

  // Validate URL
  const url = text.trim();
  if (!/^(https?:\/\/)/i.test(url) || !url.includes("instagram.com")) {
    return m.reply(`❌ *غلط یو آر ایل!* براہ کرم ایک درست انسٹاگرام ویڈیو یو آر ایل فراہم کریں (مثال: https://www.instagram.com/reel/123456789/)۔\n\n🔥 *Powered by FAM OFC*`);
  }

  try {
    // Send loading reaction
    await lara.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    // Fetch media from API
    const api = `https://rest-lily.vercel.app/api/downloader/igdl?url=${encodeURIComponent(url)}`;
    const response = await axios.get(api, {
      headers: { Accept: "*/*" },
      timeout: 10000
    });
    const data = response.data;

    if (data.data && data.data.length > 0) {
      const videoData = data.data[0];
      const videoUrl = videoData.url;
      const thumb = videoData.thumbnail;

      // Caption for the video
      const caption = `🎥 *انسٹاگرام ویڈیو*\n\n` +
                      `🔗 *یو آر ایل:* ${url}\n\n` +
                      `🔥 *Powered by FAM OFC*`;

      // Send video
      await lara.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: caption,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 19,
          externalAdReply: {
            showAdAttribution: true,
            title: "انسٹاگرام ڈاؤنلوڈر",
            body: `بذریعہ ${global.botname || "FAM OFC"}`,
            thumbnailUrl: thumb || global.ppuser || "https://fam-official.serv00.net/script12/fampng/Fambot.jpg",
            sourceUrl: global.website || "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
            mediaType: 2,
            renderLargerThumbnail: false
          }
        }
      }, { quoted: m });

      // Send success reaction
      await lara.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else {
      await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply(`❌ *ویڈیو نہیں ملی!* براہ کرم اپنا انسٹاگرام لنک چیک کریں۔\n\n🔥 *Powered by FAM OFC*`);
    }
  } catch (error) {
    console.error("Instagram Downloader Error:", error);
    await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ *خرابی:* ڈاؤن لوڈنگ کے دوران کچھ غلط ہو گیا۔ ${error.message || "براہ کرم دوبارہ کوشش کریں۔"}\n\n🔥 *Powered by FAM OFC*`);
  }
}
break;
 

   case 'req3': {
  const waifuImages = [
    'https://files.catbox.moe/3rtvux.jpg',
    'https://files.catbox.moe/lo2ykk.jpg',
    'https://files.catbox.moe/v5ks10.jpg',
    'https://files.catbox.moe/oawwlm.jpg',
    'https://files.catbox.moe/jgf5gm.jpg',
    'https://files.catbox.moe/c2kief.jpg'
  ];

  let [topText, bottomText, thirdText] = text.split("|").map(v => v?.trim());

  if (!topText) return m.reply(`⚠️ Teks tidak boleh kosong!\n\nContoh:\n.qcimg Asep Murid Kyy|lara|©famofcGithub`);

  try {
    const randomBg = waifuImages[Math.floor(Math.random() * waifuImages.length)];
    const bg = await loadImage(randomBg);
    const canvas = createCanvas(bg.width, bg.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.drawImage(bg, 0, 0);

    // Teks utama
    ctx.font = 'bold 34px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(topText, 450, 215);

    // Teks kedua
    if (bottomText) {
      ctx.font = 'italic bold 24px Arial';
      ctx.fillText(bottomText, 450, 265);
    }

    // Teks ketiga
    if (thirdText) {
      ctx.font = 'normal 20px Arial';
      ctx.fillText(thirdText, 450, 295);
    }

    const buffer = canvas.toBuffer();

    // Kirim ke saluran
    await lara.sendMessage('120363390114292114@newsletter', {
      image: buffer,
      caption: "🖼️ *Berhasil Req*"
    });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Gagal membuat gambar:\n${e.message}`);
  }
}
break;
      
 
  
   case 'qcimg': {
  const waifuImages = [
    'https://files.catbox.moe/3rtvux.jpg',
    'https://files.catbox.moe/lo2ykk.jpg',
    'https://files.catbox.moe/v5ks10.jpg',
    'https://files.catbox.moe/oawwlm.jpg',
    'https://files.catbox.moe/jgf5gm.jpg',
    'https://files.catbox.moe/c2kief.jpg'
  ];

  let [topText, bottomText, thirdText] = text.split("|").map(v => v?.trim());

  if (!topText) return m.reply(`⚠️ Teks tidak boleh kosong!\n\nContoh:\n.qcimg Aku kuat|Tapi lelah|Wkwkwk`);

  try {
    const randomBg = waifuImages[Math.floor(Math.random() * waifuImages.length)];
    const bg = await loadImage(randomBg);
    const canvas = createCanvas(bg.width, bg.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.drawImage(bg, 0, 0);

    // Teks utama
    ctx.font = 'bold 34px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(topText, 450, 215);

    // Teks kedua
    if (bottomText) {
      ctx.font = 'italic bold 24px Arial';
      ctx.fillText(bottomText, 450, 265);
    }

    // Teks ketiga
    if (thirdText) {
      ctx.font = 'normal 20px Arial';
      ctx.fillText(thirdText, 450, 295);
    }

    const buffer = canvas.toBuffer();
    await lara.sendMessage(m.chat, {
      image: buffer,
      caption: "🖼️ *Berhasil membuat gambar quote!*"
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Gagal membuat gambar:\n${e.message}`);
  }
}
break;

        case 'clearbug': {
  if (!isOwner) return m.reply('❌ Hanya Owner yang bisa menggunakan perintah ini!')
  if (!text) return m.reply('❗ Format: *.clearbug <idgrup>*\nContoh: *.clearbug 120xxxxxx@g.us*')

  try {
    await lara.sendMessage(text.trim(), {
      text: "clearbug\n" + "\n".repeat(500)
    })
    m.reply(`✅ Pesan *clearbug* berhasil dikirim ke grup:\n*${text.trim()}*`)
  } catch (e) {
    console.error('[CLEARBUG]', e)
    m.reply('❌ Gagal mengirim pesan ke grup. Mungkin bot belum join atau ID salah.')
  }
}
break
      
        case 'poling': {
  if (!isOwner) return m.reply('Khusus Owner Kak 🗿');

  if (!text || !text.includes('|') || !text.includes('.'))
    return m.reply(`Format salah!\nContoh: .poling Pilih Karakter|2|lara.Shiro`);

  let [judul, jumlah, opsiStr] = text.split('|');
  let opsinya = opsiStr.split('.');
  let jumlahOpsi = parseInt(jumlah.trim());

  if (opsinya.length !== jumlahOpsi)
    return m.reply(`Jumlah opsi tidak sesuai dengan jumlah yang disebutkan.`);

  let pilihan = opsinya.map((v, i) => ({
    optionName: v.trim(),
    optionDescription: `Pilih opsi ini`,
    optionVoteCount: 0
  }));

  await lara.sendMessage(
    '120363390114292114@newsletter',
    {
      poll: {
        name: judul.trim(),
        values: opsinya.map(v => v.trim())
      }
    },
    { quoted: m }
  );

  m.reply(`Polling berhasil dikirim ke saluran.`);
}
break;
       
  
    

  
    


      
    
   
    case 'katasiti': {
  const { createCanvas, loadImage } = require('canvas');
  const axios = require('axios');

  if (!text) return m.reply('📌 Contoh:\n.katasiti lebih baik hidup bersama xavier daripada menderita.');

  try {
    const bgUrl = 'https://files.catbox.moe/szc3hz.jpg';
    const { data: bgBuffer } = await axios.get(bgUrl, { responseType: 'arraybuffer' });
    const bgImg = await loadImage(bgBuffer);

    const canvas = createCanvas(bgImg.width, bgImg.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bgImg, 0, 0);

    const fontSize = 32;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const maxWidth = canvas.width * 0.8;
    const x = canvas.width / 2;

    const yStart = canvas.height * 0.13; 
    const lineHeight = fontSize + 10;
    const lines = wrapText(ctx, text, maxWidth);
    const totalHeight = lines.length * lineHeight;

    const rectPadding = 24;
    const rectY = yStart - 15;
    const rectX = canvas.width * 0.1;
    const rectW = canvas.width * 0.8;
    const rectH = totalHeight + rectPadding;

    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(rectX, rectY, rectW, rectH);

    
    ctx.fillStyle = '#ffffff';
    lines.forEach((line, i) => {
      ctx.fillText(line, x, yStart + i * lineHeight);
    });

    const buffer = canvas.toBuffer();
    await lara.sendMessage(m.chat, {
      image: buffer,
      caption: ' *Kata Siti by l!*'
    }, { quoted: m });

  } catch (e) {
    console.error('[katasiti ERROR]', e);
    m.reply('❌ Gagal membuat gambar Kata Siti.');
  }

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (let word of words) {
      const testLine = line + word + ' ';
      if (ctx.measureText(testLine).width > maxWidth) {
        lines.push(line.trim());
        line = word + ' ';
      } else {
        line = testLine;
      }
    }
    if (line) lines.push(line.trim());
    return lines;
  }
}
break;
    
    
    
    
        
    
 case 'fakengl2': {
  const { createCanvas, loadImage } = require('canvas');
  const axios = require('axios');

  if (!text) return m.reply('📌 Contoh:\n.fakengl famofc Wibu');

  try {
    const bgUrl = 'https://files.catbox.moe/lbyyov.jpg';
    const { data: bgBuffer } = await axios.get(bgUrl, { responseType: 'arraybuffer' });
    const bgImg = await loadImage(bgBuffer);

    const canvas = createCanvas(bgImg.width, bgImg.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bgImg, 0, 0);

    const fontSize = 64; 
    ctx.font = `bold ${fontSize}px "Arial Black", Arial, sans-serif`;
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';

    const maxWidth = canvas.width * 0.8;
    const x = canvas.width / 2;
    const yStart = canvas.height * 0.595; 

    const lines = wrapText(ctx, text, maxWidth);
    const lineHeight = fontSize + 12;

    lines.forEach((line, i) => {
      ctx.fillText(line, x, yStart + i * lineHeight);
    });

    const buffer = canvas.toBuffer();
    await lara.sendMessage(m.chat, {
      image: buffer,
      caption: '*Fake Ngl By l Berhasil*'
    }, { quoted: m });

  } catch (err) {
    console.error('[fakengl ERROR]', err);
    m.reply('❌ Gagal membuat gambar Fake NGL.');
  }

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (let word of words) {
      const testLine = line + word + ' ';
      if (ctx.measureText(testLine).width > maxWidth) {
        lines.push(line.trim());
        line = word + ' ';
      } else {
        line = testLine;
      }
    }
    if (line) lines.push(line.trim());
    return lines;
  }
}
break;  
case 'fb': {
  let url = text.trim();

  // Extract URL from quoted message in group if no URL provided
  if (!url && m.quoted && m.chat.endsWith('@g.us')) {
    url = m.quoted.text?.trim() || '';
  }

  // Validate URL
  if (!url) {
    return m.reply(`❌ Please provide a Facebook video link!\nExample: ${prefix}fb https://fb.watch/xyz`);
  }

  if (!url.includes('facebook.com') && !url.includes('fb.watch')) {
    return m.reply(`❌ Invalid URL! Must be a Facebook link (facebook.com or fb.watch).`);
  }

  await lara.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const apiUrl = `https://tcs-demonic2.vercel.app/api/fbdownloader?url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl, { headers: { Accept: '*/*' }, timeout: 10000 });
    const data = response.data;

    if (!data.success || !data.data.success) {
      throw new Error(data.message || 'Failed to fetch video links.');
    }

    const { hdlink, sdlink } = data.data;
    const videoUrl = hdlink || sdlink;

    if (!videoUrl) {
      throw new Error('No video links available.');
    }

    // Fetch video as buffer
    const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const videoBuffer = Buffer.from(videoResponse.data);

    // Check file size (WhatsApp limit ~100MB)
    const fileSizeMB = videoBuffer.length / (1024 * 1024);
    if (fileSizeMB <= 100) {
      await lara.sendMessage(m.chat, {
        video: videoBuffer,
        caption: `✅ *Facebook Video Downloaded!*\n\n` +
                 `📽 *Quality*: ${hdlink ? 'HD' : 'SD'}\n` +
                 `🔗 *URL*: ${url}\n` +
                 `🔍 *Powered by l*`
      }, { quoted: m });
    } else {
      let message = `⚠ *Video too large (${fileSizeMB.toFixed(2)} MB)!*\n\n` +
                    `🎥 *Facebook Video Links:*\n`;
      if (hdlink) message += `📽 *HD*: ${hdlink}\n`;
      if (sdlink) message += `📽 *SD*: ${sdlink}\n`;
      message += `\n🔗 *URL*: ${url}\n🔍 *Powered by FamOFC*`;
      await m.reply(message);
      await lara.sendMessage(m.chat, { react: { text: '⚠', key: m.key } });
    }

    await lara.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("Facebook Downloader Error:", error.message);
    await lara.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Error: ${error.message || 'Failed to download video. Please try again.'}`);
  }
}
break;
  case 'absen':
case 'absensi': {
  if (!m.isGroup) return lara.sendMessage(m.chat, { text: "Fitur ini hanya bisa digunakan di dalam grup." }, { quoted: m })
  if (!m.isAdmin && m.isGroup) return lara.sendMessage(m.chat, { text: "Hanya admin yang bisa menggunakan fitur ini." }, { quoted: m })

  const metadata = await lara.groupMetadata(m.chat)
  const namaGroup = metadata.subject || 'Grup Tidak Diketahui'
  const peserta = metadata.participants.map(p => p.id).filter(Boolean)

  // Format waktu lokal Asia/Jakarta
  const now = new Date()
  const parts = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(now)

  const hari = parts.find(p => p.type === 'weekday')?.value || '-'
  const tanggal = parts.filter(p => ['day', 'month', 'year'].includes(p.type)).map(p => p.value).join(' ')
  const jam = parts.filter(p => ['hour', 'minute'].includes(p.type)).map(p => p.value).join(':') + ' WIB'

  const teksAbsen = `*ABSEN HARIAN!!*\n*SILAHKAN ISI ABSEN DIBAWAH INI 📢*

🏠 *GROUP:* ${namaGroup}
🌏 *HARI:* ${hari}
📆 *TANGGAL:* ${tanggal}
🕒 *JAM:* ${jam}`

  await lara.sendMessage(m.chat, {
    text: teksAbsen,
    mentions: peserta
  }, { quoted: m })

  await lara.sendMessage(m.chat, {
    poll: {
      name: "Absen Hari Ini ✅",
      values: [
        "Hadir ✋",
        "Izin 📄",
        "Sakit 🤒",
        "Alpha ❌"
      ],
      selectableCount: 1
    }
  }, { quoted: m })

  break
}
   case 'tagme':
case 'tag': {
  if (!m.isGroup) return m.reply('❗ Fitur ini hanya bisa digunakan di grup!')

  if (command == 'tag') {
    if (!text) return m.reply('❗ Masukkan nomor yang ingin ditag!')

    const nomor = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await lara.sendMessage(m.chat, {
      text: `Woi bujang @${nomor.split('@')[0]}`,
      mentions: [nomor]
    }, { quoted: m })

  } else {
    const sender = m.sender
    await lara.sendMessage(m.chat, {
      text: `@${sender.split('@')[0]}`,
      mentions: [sender]
    }, { quoted: m })
  }
}
break
      case 'onautores':
  if (!autoresData.autores.includes(m.chat)) {
    autoresData.autores.push(m.chat)
    fs.writeFileSync(autoresFile, JSON.stringify(autoresData, null, 2))
    m.reply('✅ Auto Respon Owner diaktifkan!')
  } else m.reply('Sudah aktif.')
  break

case 'offautores':
  if (autoresData.autores.includes(m.chat)) {
    autoresData.autores = autoresData.autores.filter(id => id !== m.chat)
    fs.writeFileSync(autoresFile, JSON.stringify(autoresData, null, 2))
    m.reply('❎ Auto Respon Owner dimatikan!')
  } else m.reply('Belum aktif.')
  break
        
        
        case 'tagboom': {
  if (!m.isAdmin && !isOwner) return m.reply('Fitur ini hanya untuk admin grup!')

  if (!text.includes('|')) return m.reply('❗ Format salah.\nContoh: *.tagboom @user|5*')

  let match = text.match(/@(\d{9,15})\|(\d+)/)
  if (!match) return m.reply('❗ Format tag tidak sesuai.\nContoh: *.tagboom @user|5*')

  let target = match[1] + '@s.whatsapp.net'
  let jumlah = parseInt(match[2])

  if (isNaN(jumlah) || jumlah < 1 || jumlah > 20) return m.reply('❗ Jumlah harus antara 1 - 20.')

  for (let i = 0; i < jumlah; i++) {
    await lara.sendMessage(m.chat, {
      text: `💥 𝑩𝒐𝒐𝒎 𝒃𝒐𝒐𝒎 𝒕𝒂𝒈!!\n@${match[1]}`,
      mentions: [target]
    })
    await delay(1500)
  }
}
break
        
   
  

     case 'creategc':
case 'buatgc': {
  if (!isOwner && !m.isAdmin) return m.reply('❌ Fitur ini hanya untuk admin grup atau owner bot!');
  if (!text) return m.reply('⚠️ Masukkan nama grup yang ingin dibuat!\nContoh: *.creategc Nama Grup Baru*');
  if (typeof lara.groupCreate !== "function") return m.reply('❌ groupCreate tidak tersedia di objek koneksi.');

  try {
    // Buat grup dengan user sebagai satu-satunya anggota awal
    const group = await lara.groupCreate(text, [m.sender]);
    const invite = await lara.groupInviteCode(group.id);

    await m.reply(
      `✅ *Grup berhasil dibuat!*\n\n` +
      `📛 *Nama:* ${group.subject}\n` +
      `🔗 *Link:* https://chat.whatsapp.com/${invite}\n\n` +
      `⏳ *Masuk dalam 30 detik agar dipromosikan sebagai admin.*`
    );

    // Tunggu 30 detik, lalu promote user jadi admin
    await sleep(30000);
    await lara.groupParticipantsUpdate(group.id, [m.sender], 'promote');
    await lara.sendMessage(group.id, { text: '✅ Anda telah dijadikan admin grup.' });
  } catch (err) {
    console.error(err);
    m.reply(`❌ Gagal membuat grup!\n\n${err.message}`);
  }
  break;
}
      
   
       
case 'img2ios':
case 'iosstyle': {
  if (!m.quoted || !m.quoted.mimetype || !m.quoted.mimetype.includes('image')) {
    return m.reply('❗Balas gambar dengan perintah *img2ios*')
  }

  try {
    const axios = require('axios')
    const { createCanvas, loadImage } = require('canvas')
    const moment = require('moment-timezone')

    const mediaData = await lara.downloadMediaMessage(m.quoted)

    const templateURL = 'https://files.catbox.moe/4j4xaj.jpg'
    const templateBuffer = (await axios.get(templateURL, { responseType: 'arraybuffer' })).data
    const template = await loadImage(templateBuffer)
    const image = await loadImage(mediaData)

    const canvas = createCanvas(template.width, template.height)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(template, 0, 0)

    const bubbleX = 36
    const bubbleY = 363
    const bubbleW = 616
    const bubbleH = 860
    const radius = 21

    const imgRatio = image.width / image.height
    const bubbleRatio = bubbleW / bubbleH
    let drawW, drawH

    if (imgRatio > bubbleRatio) {
      drawH = bubbleH
      drawW = drawH * imgRatio
    } else {
      drawW = bubbleW
      drawH = drawW / imgRatio
    }

    const offsetX = bubbleX - (drawW - bubbleW) / 2
    const offsetY = bubbleY - (drawH - bubbleH) / 2

    ctx.save()
    ctx.beginPath()
    ctx.moveTo(bubbleX + radius, bubbleY)
    ctx.lineTo(bubbleX + bubbleW - radius, bubbleY)
    ctx.quadraticCurveTo(bubbleX + bubbleW, bubbleY, bubbleX + bubbleW, bubbleY + radius)
    ctx.lineTo(bubbleX + bubbleW, bubbleY + bubbleH - radius)
    ctx.quadraticCurveTo(bubbleX + bubbleW, bubbleY + bubbleH, bubbleX + bubbleW - radius, bubbleY + bubbleH)
    ctx.lineTo(bubbleX + radius, bubbleY + bubbleH)
    ctx.quadraticCurveTo(bubbleX, bubbleY + bubbleH, bubbleX, bubbleY + bubbleH - radius)
    ctx.lineTo(bubbleX, bubbleY + radius)
    ctx.quadraticCurveTo(bubbleX, bubbleY, bubbleX + radius, bubbleY)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(image, offsetX, offsetY, drawW, drawH)
    ctx.restore()

    const waktu = moment().tz('Asia/Jakarta').format('HH.mm')
    ctx.font = '25px sans-serif'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'right'
    ctx.shadowColor = 'rgba(0,0,0,0.4)'
    ctx.shadowBlur = 3
    ctx.fillText(waktu, bubbleX + bubbleW - 20, bubbleY + bubbleH - 30)

    const buffer = canvas.toBuffer()

    await lara.sendMessage(m.chat, {
      image: buffer,
      caption: '✅ Gaya iOS telah diterapkan.'
    }, { quoted: m })

  } catch (err) {
    console.error('[IMG2IOS ERROR]', err)
    m.reply('❌ Gagal membuat gaya iOS.\n' + err.message)
  }
}
break

    
        
  case 'playch': {
  if (!isOwner) return m.reply(mess.owner)
  if (!args[0]) return m.reply('⚠️ Masukkan link audio MP3!\n\nContoh: .playch https://example.com/audio.mp3')

  const query = args.join(' ')
  if (!query.endsWith('.mp3')) return m.reply('❌ Link yang diberikan bukan file MP3.')

  const idChannel = '120363390114292114@newsletter' // ← Ganti sesuai channel kamu

  try {
    await lara.sendMessage(idChannel, {
      audio: { url: query },
      mimetype: 'audio/mpeg',
      ptt: true,
      contextInfo: {
        externalAdReply: {
          title: "✦ ⏤͟͟͞͞ FAM OFC=",
          body: "🌀 playch",
          thumbnailUrl: "https://c.termai.cc/i46/Ezr",
          mediaUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
          renderLargerThumbnail: false,
          mediaType: 2
        },
        forwardingScore: 1999,
        isForwarded: true
      }
    })

    let teksHasil = '✅ `Audio berhasil dikirim ke channel.`'
    await lara.sendMessage(m.chat, {
      text: teksHasil,
      contextInfo: {
        externalAdReply: {
          title: "✦ ⏤͟͟͞͞ FAM OFC=",
          body: "🌀 playch",
          thumbnailUrl: "https://fam-official.serv00.net/script12/fampng/fam.jpg",
          mediaUrl: "https://chat.whatsapp.com/HrkwWzIrhHI8ANbUNUz2iq?mode=r_",
          renderLargerThumbnail: false,
          mediaType: 2
        },
        forwardingScore: 19,
        isForwarded: true
      }
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('❌ Gagal mengirim audio ke channel.')
  }
}
break
			
	
	case 'listpc': {
	if (!m.isGroup && !m.isAdmin && !isOwner) return m.reply('❌ Fitur ini hanya untuk *Admin Group* atau *Owner*!')

	let anu = Object.keys(store.messages).filter(a => a.endsWith('.net') || a.endsWith('.lid'));
	let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`;

	if (anu.length === 0) return m.reply(teks);

	for (let i of anu) {
		if (store.messages?.[i]?.array?.length) {
			let nama = lara.getName(i) || 'Tidak Diketahui';
			teks += `➤ *Nama :* ${nama}\n➤ *User :* @${i.split('@')[0]}\n➤ *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`;
		}
	}
	m.reply(teks, null, {
		mentions: anu.map(j => j)
	});
}
break;		
			
  

case 'listadmin':
case 'admin':
case 'atmin': {
  if (!m.isGroup) return m.reply('❌ Fitur ini hanya bisa digunakan di dalam grup!');
  
  try {
    await lara.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    const metadata = await lara.groupMetadata(m.chat);
    const participants = metadata.participants;
    const botNumber = lara.user.id;

    const admins = participants.filter(p => p.admin);
    const mentions = admins.map(p => p.id);

    const owner = admins.find(p => p.id === metadata.owner);
    const bot = admins.find(p => p.id === botNumber);
    const others = admins.filter(p => ![metadata.owner, botNumber].includes(p.id));

    let text = `╭━━〔 *List Admin Grup* 〕\n┃    ${metadata.subject}\n┃\n`;
    let no = 1;

    if (owner) text += `┃ ${no++}. 👑 Owner: @${owner.id.split('@')[0]}\n`;
    if (bot) text += `┃ ${no++}. 🤖 Bot: @${bot.id.split('@')[0]}\n`;
    for (const p of others) {
      text += `┃ ${no++}. 👤 Admin: @${p.id.split('@')[0]}\n`;
    }

    text += `┃\n╰━━━━━━━━━━─⊷\n> famofc [吉田 四郎]`;

    await lara.sendMessage(m.chat, {
      text,
      mentions
    }, { quoted: m });

  } catch (err) {
    console.error('❌ List Admin Error:', err);
    m.reply('⚠️ Gagal mengambil data admin. Pastikan bot tidak dibatasi akses metadata.');
  }
  break;
}
        
        


    

  

     case 'setppgc':
    case 'ppgc': {
  if (!m.isGroup) return m.reply('❌ Hanya bisa digunakan di dalam grup.');
  if (!m.isAdmin) return m.reply('❌ Bot bukan admin grup!');
  if (!m.isAdmin) return m.reply('❌ Kamu bukan admin grup!');
  if (!quoted || !/image/.test(mime)) return m.reply('❌ Reply gambar yang ingin dijadikan foto profil grup.');

  let media = await quoted.download();
  await lara.updateProfilePicture(m.chat, media).then(() => {
    m.reply('✅ Foto profil grup berhasil diubah.');
  }).catch((err) => {
    console.error(err);
    m.reply('❌ Gagal mengubah foto profil grup.');
  });
  break;
}
  

      
    
case 'promote': {
  if (!m.isGroup) return m.reply('❌ Hanya untuk grup!');
  if (!m.isAdmin) return m.reply('❌ Hanya admin yang bisa promote orang.');
  if (!m.isAdmin) return m.reply('❌ Bot harus jadi admin.');

  if (!m.quoted) return m.reply('❌ Reply pesan user yang ingin dipromote.');

  let target = m.quoted.sender;
  await lara.groupParticipantsUpdate(m.chat, [target], 'promote');
  m.reply(`✅ Berhasil promote: @${target.split('@')[0]}`, null, { mentions: [target] });
}
break;

            
case 'demote': {
  if (!m.isGroup) return m.reply('❌ Hanya untuk grup!');
  if (!m.isAdmin) return m.reply('❌ Hanya admin yang bisa demote orang.');
  if (!m.isAdmin) return m.reply('❌ Bot harus jadi admin.');

  if (!m.quoted) return m.reply('❌ Reply pesan user yang ingin didemote.');

  let target = m.quoted.sender;
  await lara.groupParticipantsUpdate(m.chat, [target], 'demote');
  m.reply(`✅ Berhasil demote: @${target.split('@')[0]}`, null, { mentions: [target] });
}
break;
  

case 'resetlink':
case 'revokeinvitelink':
case 'revokelink': {
  if (!m.isGroup) return m.reply('❌ Fitur ini hanya untuk grup.');
  if (!m.isAdmin) return m.reply('❌ Bot harus menjadi admin untuk mereset link grup.');

  await lara.groupRevokeInvite(m.chat);
  m.reply('✅ Link grup berhasil di-reset.\nKetik *.linkgc* untuk melihat link baru.');
}
break;
 
   case 'linkgc':
case 'linkgrup': {
  if (!m.isGroup) return m.reply('❌ Perintah ini hanya bisa digunakan di dalam grup!')
  if (!m.isAdmin) return m.reply('❌ Bot bukan admin grup!')

  let response = await lara.groupInviteCode(m.chat)
  let metadata = await lara.groupMetadata(m.chat)

  if (!metadata.announce) {
    m.reply(`🔗 Link Grup:\nhttps://chat.whatsapp.com/${response}`)
  } else {
    m.reply('❌ Grup ini bersifat tertutup, link tidak tersedia.')
  }
}
break
    

case 'whois': {
  if (!m.isGroup) return m.reply('❌ Fitur ini hanya bisa digunakan di dalam grup.');

  let target;
  if (m.mentionedJid && m.mentionedJid.length > 0) {
    target = m.mentionedJid[0];
  } else if (m.quoted && m.quoted.sender) {
    target = m.quoted.sender;
  } else {
    return m.reply('❌ reply salah satu anggota yang ingin kamu cek.\nContoh: *.whois reply pesan*');
  }

  const user = await lara.onWhatsApp(target);
  const pp = await lara.profilePictureUrl(target, 'image').catch(() => 'https://telegra.ph/file/6880771c1b3fa5b4dfb3e.jpg');
  const name = await lara.getName(target);
  const bio = (await lara.fetchStatus(target).catch(() => {}))?.status || '-';

  const text = `❏ *Informasi Pengguna*
- Nama: ${name}
- Nomor: wa.me/${target.split("@")[0]}
- Bio: ${bio}`;

  lara.sendMessage(m.chat, {
    image: { url: pp },
    caption: text
  }, { quoted: m });
}
break;
  
        case 'listgcp':
case 'listgrup':
case 'listgc': {
  if (!isOwner) return m.reply('❌ Fitur ini hanya untuk Owner.');

  try {
    const groups = Object.values(await lara.groupFetchAllParticipating());
    if (!groups || groups.length === 0) return m.reply('❌ Bot tidak tergabung di grup manapun.');

    let teks = `┌──⭓ *📋 DAFTAR GRUP YANG DIJOIN*\n│\n`;
    let total = 0;

    for (let i = 0; i < groups.length; i++) {
      const g = groups[i];
      teks += `│ *${i + 1}. ${g.subject}*\n`;
      teks += `│ ├ 🆔 ID: ${g.id}\n`;
      teks += `│ ├ 👥 Member: ${g.participants.length} orang\n`;
      teks += `│ ├ 🔐 Status: ${g.announce ? '🔒 Tertutup' : '🔓 Terbuka'}\n`;
      teks += `│ └ 👤 Pembuat: ${g.owner ? '@' + g.owner.split('@')[0] : 'Tidak diketahui / sudah keluar'}\n│\n`;
      total++;
    }

    teks += `└──⭓ *Total Grup:* ${total} grup`;

    m.reply(teks);
  } catch (err) {
    console.error(err);
    m.reply('❌ Gagal mengambil daftar grup.');
  }
}
break;
    
    
  
  
      
 

   
    


     

  
    
      

  
     
      

   case 'ppsdmtinggi': {
  if (!m.quoted || !/image/.test(mime)) return m.reply('Reply gambar dengan caption *.ppsdmtinggi*');

  try {
    await lara.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

    const buffer = await lara.downloadMediaMessage(m.quoted);
    const link = await catbox(buffer);
    const hasil = `https://zenzxz.dpdns.org/maker/tosdmtinggi?url=${encodeURIComponent(link)}`;

    await lara.sendMessage(m.chat, {
      image: { url: hasil },
      caption: "Selamat anda telah menjadi orang dengan SDM tinggi 😳🥶🥶🥶🤓"
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Gagal membuat pp sdm tinggi\n\n• *Error:*\n${e.message}\n\n> Segera lapor ke owner`);
  }
  break;
}

  
case 'fakexnxx': {
  if (!text.includes('|')) return m.reply(`❌ Format salah!\n\nContoh:\n.fakexnxx Yoshi|BuKaTiTiJozZ|69|420`);

  try {
    let [name, quote, likes, dislikes] = text.split('|').map(v => v.trim());

    if (!name || !quote || !likes || !dislikes)
      return m.reply(`❌ Format tidak lengkap!\n\nGunakan:\n.fakexnxx Nama|Quote|Likes|Dislikes`);

    await lara.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    const apiURL = `https://api.siputzx.my.id/api/canvas/fake-xnxx?name=${encodeURIComponent(name)}&quote=${encodeURIComponent(quote)}&likes=${encodeURIComponent(likes)}&dislikes=${encodeURIComponent(dislikes)}`;

    await lara.sendMessage(m.chat, {
      image: { url: apiURL },
      caption: `✅ *Fake-XNXX Generated:*\n\n👤 *Name:* ${name}\n💬 *Quote:* ${quote}\n👍 *Likes:* ${likes}\n👎 *Dislikes:* ${dislikes}`
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Gagal membuat gambar!\n\n• *Error:*\n${e.message || e}\n\n> Coba lagi nanti.`);
  }
  break;
}




   
    
   

  
    
case 'qcimg2': {
  if (!text) return m.reply(`Kirim perintah seperti\n.qcimg Teksnya`);

  const { createCanvas, loadImage } = require('canvas');

  try {
    const background = await loadImage('https://c.termai.cc/i86/rj9');
    const canvas = createCanvas(background.width, background.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(background, 0, 0);

    const lines = text.split(/[\n|]+/);
    const topText = lines[0]?.trim() || '';
    const bottomText = lines[1]?.trim() || '';

    const x = 540;       // geser ke kiri dari 560 → 540
    const topY = 215;    // posisi lebih atas
    const bottomY = 265;

    // Top text
    ctx.font = 'bold 34px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(topText, x, topY);

    // Bottom text
    if (bottomText) {
      ctx.font = 'italic 24px Arial';
      ctx.fillStyle = '#cccccc';
      ctx.fillText(bottomText, x, bottomY);
    }

    const buffer = canvas.toBuffer();
    await lara.sendMessage(m.chat, { image: buffer }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Gagal membuat gambar:\n${e.message}`);
  }

  break;
}
    
        

     
        
    case 'wifecheck':
case 'wifecek': {
  const qmsg = m.quoted ? m.quoted : m;
  const mime = (qmsg.msg || qmsg).mimetype || qmsg.mimetype || '';

  if (!mime.includes('image')) {
    return m.reply('❌ Kirim atau reply gambar dengan caption *wifecheck*');
  }

  try {
    await lara.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

    const buffer = await lara.downloadMediaMessage(qmsg);
    const userImg = await loadImage(buffer);
    const template = await loadImage('https://files.catbox.moe/ns0e1n.jpg');

    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(template, 0, 0);

    const boxX = 740;
    const boxY = 380;
    const boxWidth = 600;
    const boxHeight = 600;

    const aspect = userImg.width / userImg.height;
    let srcX, srcY, srcW, srcH;

    if (aspect > boxWidth / boxHeight) {
      srcH = userImg.height;
      srcW = srcH * (boxWidth / boxHeight);
      srcX = (userImg.width - srcW) / 2;
      srcY = 0;
    } else {
      srcW = userImg.width;
      srcH = srcW / (boxWidth / boxHeight);
      srcX = 0;
      srcY = (userImg.height - srcH) / 2;
    }

    ctx.shadowColor = '#00FFFF';
    ctx.shadowBlur = 25;

    ctx.drawImage(
      userImg,
      srcX, srcY, srcW, srcH,
      boxX, boxY, boxWidth, boxHeight
    );

    const result = canvas.toBuffer('image/png');

    await lara.sendMessage(m.chat, {
      image: result,
      caption: '✅ Wife detector aktif!'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply(`❌ Gagal membuat gambar.\n\n• *Error:* ${err.message}`);
  }

  break;
}
    
  
    
    
    

    

    
    
   
  

        
  case 'emojimix': {
  if (!text.includes('+')) return m.reply(`Contoh: ${prefix}emojimix 😍+😭`)
  let [emoji1, emoji2] = text.split('+')

  try {
    let code1 = emoji1.codePointAt(0).toString(16)
    let code2 = emoji2.codePointAt(0).toString(16)
    let res = await fetch(`https://emojik.vercel.app/s/${code1}_${code2}?size=128`)
    let buffer = await res.buffer()

    const { Sticker, StickerTypes } = require('wa-sticker-formatter')
    const sticker = new Sticker(buffer, {
      pack: packname,
      author: author,
      type: StickerTypes.FULL
    })

    const stickerBuffer = await sticker.toBuffer()
    await lara.sendMessage(m.chat, {
      sticker: stickerBuffer
    }, { quoted: m })

  } catch (err) {
    m.reply(`❌ Terjadi kesalahan:\n${err.message}`)
  }
}
break

 
  
      
      
      
  

    

        
        
       
  
      
case 'req': {
  if (!text) {
    await lara.sendMessage(m.chat, {
      text: '❗ Format salah!\nContoh: .req pesan kamu|kanan'
    }, { quoted: m })
    break
  }

  const [pesan, posisiRaw] = text.split('|').map(v => v?.trim())
  const posisi = posisiRaw?.toLowerCase() === 'kanan' ? 'right' : 'left'

  if (!pesan) {
    await lara.sendMessage(m.chat, {
      text: '❌ Pesannya kosong!'
    }, { quoted: m })
    break
  }

  if (pesan.length > 60) {
    await lara.sendMessage(m.chat, {
      text: '❌ Maksimal 60 karakter ya!'
    }, { quoted: m })
    break
  }

  const now = new Date()
  const jam = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now)

  const apiUrl = `https://velyn.mom/api/maker/iqc?message=${encodeURIComponent(pesan)}&position=${posisi}&jam=${encodeURIComponent(jam)}`

  // Kirim ke saluran
  await lara.sendMessage("120363390114292114@newsletter", {
    image: { url: apiUrl },
    caption: `🆕 *Request Baru!*\n\n💬 Pesan: *${pesan}*\n📍 Posisi: *${posisi === 'right' ? 'kanan' : 'kiri'}*\n⏰ Jam: *${jam}*`
  })

  // Balas ke pengirim
  await lara.sendMessage(m.chat, {
    text: `✅ Request kamu sudah dikirim ke saluran!\nPesan: *${pesan}*\nPosisi: *${posisi === 'right' ? 'kanan' : 'kiri'}*`
  }, { quoted: m })

  break
}

  
      
        
     
// Fitur Maker
        
  
 case 'ph':
case 'pornohub': {
  if (!text || !text.includes('|')) {
    await lara.sendMessage(m.chat, { text: `Contoh: .${command} Kyy|hub` }, { quoted: m })
    break
  }

  let [text1, text2] = text.split('|').map(v => v.trim())
  if (!text1 || !text2) {
    await lara.sendMessage(m.chat, { text: '❗ Kedua teks tidak boleh kosong!\nContoh: .ph yoshi|hub' }, { quoted: m })
    break
  }

  try {
    let api = `https://apikey.sazxofficial.web.id/api/imagecreator/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    let res = await fetch(api)
    let json = await res.json()

    if (!json.status || !json.result) {
      await lara.sendMessage(m.chat, { text: '❌ Gagal mengambil gambar dari API.' }, { quoted: m })
      break
    }

    await lara.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })
    await lara.sendMessage(m.chat, {
      image: { url: json.result },
      caption: `✅ *Berhasil membuat logo Pornhub!*\n\n• *Text1:* ${text1}\n• *Text2:* ${text2}`
    }, { quoted: m })

  } catch (err) {
    await lara.sendMessage(m.chat, { text: '❌ Terjadi kesalahan saat memproses permintaan.' }, { quoted: m })
  }

  break
}

  


        
        
        

     
  case 'smeme': {
  if (!m.quoted) return m.reply(`Balas gambar dengan perintah:\n${prefix + command} <teks atas>|<teks bawah>`);

  const fs = require('fs');
  const path = require('path');
  const axios = require('axios');
  const FormData = require('form-data');
  const { Sticker } = require('wa-sticker-formatter');

  let [atas, bawah] = text.split('|');
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime.startsWith('image/')) return m.reply("❌ Hanya bisa digunakan untuk gambar!");

  // Download gambar dari chat
  let media = await q.download();
  let ext = mime.split('/')[1] || 'jpg';
  let temp = path.join(__dirname, `tmp_${Date.now()}.${ext}`);
  fs.writeFileSync(temp, media);

  try {
    // Upload ke uguu.se
    const form = new FormData();
    form.append('files[]', fs.createReadStream(temp));
    const upload = await axios.post('https://uguu.se/upload', form, {
      headers: form.getHeaders()
    });

    let imageUrl = upload.data.files[0].url;

    // Buat URL MemeGen
    let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas || " ")}`
                + `/${encodeURIComponent(bawah || " ")}.png?background=${imageUrl}`;

    // Convert jadi stiker
    let sticker = new Sticker(memeUrl, {
      pack: 'lara Meme',
      author: '© laraBot',
      type: 'full',
      quality: 100
    });

    await lara.sendMessage(m.chat, { sticker: await sticker.toBuffer() }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('❌ Gagal membuat meme. Coba lagi nanti.');
  } finally {
    // Hapus file sementara
    fs.unlinkSync(temp);
  }
}
break;

   
 
  
    
  case "brat2":
case "brat2": {
  if (!text) return m.reply(example('teksnya'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await lara.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Gagal bikin sticker animasi. Coba lagi nanti.');
  }
}
break
       
  
        
                    

            
            
   

case 'play': case 'play':
 if (!text) return m.reply('Masukkan judul lagu yang ingin dicari/link yt!');
 try {
 const axios = require('axios');
 const fs = require('fs');
 const path = require('path');
 await lara.sendMessage(m.chat, { react: { text: "🌿", key: m.key } });
 let apiUrl = `https://api.alvianuxio.eu.org/api/play?query=${encodeURIComponent(text)}&apikey=kayzuMD&format=mp3`;
 let { data } = await axios.get(apiUrl, { timeout: 15000 });
 if (!data || !data.data || !data.data.response) {
 return m.reply('Gagal menemukan lagu.');
 }
 let song = data.data.response;
 let caption = `🎵 *Judul:* ${song.title}\n`
 + `⏳ *Durasi:* ${song.duration}\n`
 + `📅 *Upload:* ${song.uploadDate}\n`
 + `👀 *Views:* ${song.views?.toLocaleString() || 'N/A'}\n`
 + `🎤 *Channel:* ${song.channel?.name || 'Unknown'}\n`
 + `🔗 *Video:* ${song.videoUrl}\n`
 + `🎧 *Download:* ${song.download}`;
 const videoId = song.videoUrl.includes('v=') ? song.videoUrl.split('v=')[1].split('&')[0] : null;
 const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
 await lara.sendMessage(m.chat, {
 text: caption,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: song.title,
 body: `Music Player`,
 mediaType: 1,
 thumbnailUrl: thumbnailUrl,
 sourceUrl: song.videoUrl
 }
 }
 }, { quoted: m });
 const sanitizedTitle = song.title.replace(/[^\w\s-]/gi, '_').substring(0, 50);
 let audioPath = path.join(__dirname, `temp_${Date.now()}_${sanitizedTitle}.mp3`);
 try {
 const response = await axios({
 method: 'get',
 url: song.download,
 responseType: 'arraybuffer',
 timeout: 60000,
 headers: {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
 }
 });
 if (!response.data || response.data.length === 0) {
 throw new Error('Empty response data');
 }
 fs.writeFileSync(audioPath, Buffer.from(response.data));
 try {
 await lara.sendMessage(m.chat, {
 audio: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });
 } catch (audioSendError) {
 await lara.sendMessage(m.chat, {
 document: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });
 }
 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 await lara.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
 } catch (downloadError) {
 try {
 const alternativeUrl = `https://api.akuari.my.id/downloader/youtube?link=${song.videoUrl}`;
 const altResponse = await axios.get(alternativeUrl);
 if (altResponse.data && altResponse.data.mp3) {
 const audioResponse = await axios({
 method: 'get',
 url: altResponse.data.mp3,
 responseType: 'arraybuffer',
 timeout: 60000
 });
 audioPath = path.join(__dirname, `temp_alt_${Date.now()}_${sanitizedTitle}.mp3`);
 fs.writeFileSync(audioPath, Buffer.from(audioResponse.data));
 await lara.sendMessage(m.chat, {
 document: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });

 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 await lara.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
 } else {
 throw new Error('Alternative API failed');
 }
 } catch (altError) {
 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 m.reply('Gagal mengunduh audio. Coba lagi nanti.');
 await lara.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
 }
 }
 } catch (error) {
 m.reply('Terjadi kesalahan saat mencari atau memproses lagu.');
 await lara.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
 }
 break                    
  
      
    
   
    
 
    


  
   case 'faketiktok': {
  if (!text || text.split('|').length < 10) {
    await lara.sendMessage(m.chat, {
      text: `❌ Format salah!\n\nContoh:\n.faketiktok shiro|yoshi.nnsi|https://c.termai.cc/i21/F9|true|6.6m|19|53m|no bio yet|false|true\n\nUntuk mengubah gambar jadi link: kirim gambar lalu reply dengan *.catbox*, lalu salin link-nya`
    }, { quoted: m })
    break
  }

  const [
    name, username, ppInput, verified,
    followers, following, likes,
    bio, dark, isFollow
  ] = text.split('|').map(v => v.trim());

  let ppUrl = ppInput || 'https://c.termai.cc/i21/F9';

  const apiUrl = `https://flowfalcon.dpdns.org/imagecreator/faketiktok?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(ppUrl)}&verified=${verified}&followers=${followers}&following=${following}&likes=${likes}&bio=${encodeURIComponent(bio)}&dark=${dark}&isFollow=${isFollow}`;

  try {
    await lara.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

    const res = await fetch(apiUrl)
    const buffer = await res.arrayBuffer()

    await lara.sendMessage(m.chat, {
      image: Buffer.from(buffer),
      caption: `✅ *Fake TikTok Profile*\n\n• *Name:* ${name}\n• *Username:* ${username}\n• *Followers:* ${followers}\n• *Following:* ${following}\n• *Likes:* ${likes}\n• *Verified:* ${verified}\n• *Dark Mode:* ${dark}\n• *Followed Back:* ${isFollow}\n• *Bio:* ${bio}`
    }, { quoted: m })

  } catch (err) {
    console.error('Error faketiktok:', err)
    await lara.sendMessage(m.chat, { text: '❌ Gagal membuat profil TikTok palsu.' }, { quoted: m })
  }

  break
}
    
        
  case "brat":
case "brat": {
  if (!text) return m.reply(example('teksnya'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://aqul-brat.hf.space/?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await lara.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Gagal bikin sticker animasi. Coba lagi nanti.');
  }
}
break

 

        
              
     
 
case "bratvid":
case "bratvideo": {
  if (!text) return m.reply(example('teksnya'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://brat.termai.cc/animate?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await lara.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Gagal bikin sticker animasi. Coba lagi nanti.');
  }
}
break
        
        
        


case "bratanim":
case "bratanime": {
  if (!text) return m.reply(example('teksnya'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://nirkyy-dev.hf.space/api/v1/bratnime?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await lara.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Gagal bikin sticker animasi. Coba lagi nanti.');
  }
}
break


// >   RPG MENU ~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

        


  




// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "addseller": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("6285XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("6285XX atau @tag")
if (seller.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai reseller panel!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai reseller panel!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai reseller panel!`)
await seller.push(input)
await fs.writeFileSync("./data/reseller.json", JSON.stringify(seller, null, 2))
return m.reply(`Sukses menjadikan ${input.split("@")[0]} sebagai *reseller panel*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "idgc": {
if (!m.isGroup) return m.reply(msg.group)
return m.reply(m.chat)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delseller": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("6285XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("6285XX atau @tag")
if (!seller.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai reseller panel!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai reseller panel!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai reseller panel!`)
const posi = seller.indexOf(input)
await seller.splice(posi, 1)
await fs.writeFileSync("./data/reseller.json", JSON.stringify(seller, null, 2))
return m.reply(`Sukses menghapus ${input.split("@")[0]} sebagai *reseller panel*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //



// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "addown": case "addowner": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("6285XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("6285XX atau @tag")
if (ownplus.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
await ownplus.push(input)
await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2))
return m.reply(`Sukses menjadikan ${input.split("@")[0]} sebagai *owner*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delown": case "delowner": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("6285XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("6285XX atau @tag")
if (!ownplus.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
const posi = ownplus.indexOf(input)
await ownplus.splice(posi, 1)
await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2))
return m.reply(`Sukses menghapus ${input.split("@")[0]} sebagai *owner*`)
}
break

case "addwl": {
    if (!isOwner) return m.reply("❌ Hanya owner yang bisa menambahkan whitelist ID!")
    if (!text || isNaN(text)) return example("Contoh: .addwl 12")

    let id = parseInt(text)
    if (whitelistid.includes(id)) return m.reply(`ID ${id} sudah ada di whitelist.`)

    whitelistid.push(id)
    fs.writeFileSync("./data/whitelistid.json", JSON.stringify(whitelistid, null, 2))
    m.reply(`✅ ID ${id} berhasil ditambahkan ke whitelist.`)
}
break

case "delwl": {
    if (!isOwner) return m.reply("❌ Hanya owner yang bisa menghapus whitelist ID!")
    if (!text || isNaN(text)) return example("Contoh: .delwl 12")

    let id = parseInt(text)
    if (!whitelistid.includes(id)) return m.reply(`ID ${id} tidak ditemukan di whitelist.`)

    whitelistid.splice(whitelistid.indexOf(id), 1)
    fs.writeFileSync("./data/whitelistid.json", JSON.stringify(whitelistid, null, 2))
    m.reply(`✅ ID ${id} berhasil dihapus dari whitelist.`)
}
break

case "listwl": {
    if (!isOwner) return m.reply("❌ Hanya owner yang bisa melihat whitelist.");

    if (whitelistid.length === 0) return m.reply("📭 Whitelist masih kosong.");

    let getUsers = await fetch(domain + "/api/application/users", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let result = await getUsers.json();
    let users = result.data;

    let list = whitelistid.map((id, i) => {
        let user = users.find(u => u.attributes.id === id);
        let username = user ? user.attributes.username : "Tidak ditemukan";
        return `• ${i + 1}. ID: ${id} | Username: ${username}`;
    }).join("\n");

    m.reply(`📋 Daftar Whitelist ID Admin Panel:\n\n${list}`);
}
break;

case "autodeladmin": {
    if (!isOwner) return m.reply("❌ Hanya owner yang bisa menjalankan perintah ini.");

    let getUsers = await fetch(domain + "/api/application/users", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let userResult = await getUsers.json();
    let users = userResult.data;
    let deleted = 0;

    for (let u of users) {
        let id = u.attributes.id;
        let isRoot = u.attributes.root_admin;

        if (isRoot && !whitelistid.includes(id)) {
            // Ambil semua server milik user
            let serverRes = await fetch(`${domain}/api/application/users/${id}/servers`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            });

            let serverData = await serverRes.json();
            if (serverData.data && serverData.data.length > 0) {
                for (let srv of serverData.data) {
                    let sid = srv.attributes.id;
                    await fetch(`${domain}/api/application/servers/${sid}`, {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + apikey
                        }
                    });
                    await sleep(1500); // Delay agar tidak overload API
                }
            }

            // Hapus akun admin
            await fetch(`${domain}/api/application/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            });
            deleted++;
            await sleep(1500);
        }
    }

    return m.reply(`✅ Autodelete selesai. Admin panel yang tidak di whitelist dan berhasil dihapus: ${deleted}`);
}
break;
// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "jpm": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("teksnya & foto (opsional)")
let rest
if (/image/.test(mime)) {
rest = await lara.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await lara.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const jid = m.chat
await m.reply(`Memproses ${rest !== undefined ? "jpm teks & foto" : "jpm teks"} ke ${res.length} grup chat`)
try {
await lara.sendMessage(global.idsaluran, pesancoy)
} catch {}

for (let i of res) {
try {
await lara.sendMessage(i, pesancoy, {quoted: qchannel})
count += 1
} catch {}
await sleep(4000)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await lara.sendMessage(jid, {text: `Jpm ${rest !== undefined ? "teks & foto" : "teks"} berhasil dikirim ke ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isOwner) return
let teks = ` *── List all group chat*\n`
let a = await lara.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //



case "tourl": {
if (!/image/.test(mime)) return example("dengan kirim/reply foto")
let media = await lara.downloadAndSaveMediaMessage(qmsg)
//m.reply("🚀 Memproses uploading image . . ")
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'imgtmp.png')
let teks = directLink.toString()
await lara.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //



case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!m.isBotAdmin) return m.reply(msg.botadmin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await lara.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await lara.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "kick": case "kik": {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!m.isBotAdmin) return m.reply(msg.botadmin)
if (text || m.quoted) {
const input = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await lara.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await lara.groupParticipantsUpdate(m.chat, [input], 'remove')
} else {
return example("@tag/reply")
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ht": case "hidetag": {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!text) return example("pesannya")
let member = m.metadata.participants.map(v => v.id)
await lara.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return example("dengan mengirim foto/vidio")
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await lara.downloadAndSaveMediaMessage(qmsg)
await lara.sendStimg(m.chat, media, m, {packname: "Whatsapp Bot 2025"})
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //



// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "public": {
if (!isOwner) return m.reply(msg.owner)
lara.public = true
m.reply("Berhasil mengganti mode bot menjadi *Public*")
}
break

case "self": {
if (!isOwner) return m.reply(msg.owner)
lara.public = false
m.reply("Berhasil mengganti mode bot menjadi *Self*")
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //



    
//  Base YT : @YASSxOFC 
//  Recode By Kyy lara
//  90% Fitur By Kyy

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

default:
if ((m.text).startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return lara.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return lara.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return lara.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return laa.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
lara.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
lara.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

}} catch (e) {
console.log(e)
laa.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})