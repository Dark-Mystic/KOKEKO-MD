/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'Arxzy' // AMBIL DI LOLHUMAN
global.rosekey = 'Rs-Arxzy.Dev' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'ᴋᴏɴᴇᴋᴏ-ᴍᴅ'
global.namaowner = '• 𝙰𝚜𝚒𝚏'
global.wagc = "https://chat.whatsapp.com/E2GcOH4xsTrLs1PaJ6P7Ku"

//—————「 Setting Owner 」—————//
global.owner = ['923474187615']
global.nomerowner = '923474187615'
global.premium = ['923474187615']

//—————「 Set Wm 」—————//
global.packname = 'ᴋᴏɴᴇᴋᴏ-ᴍᴅ'
global.author = '• ɪɴғɪɴɪᴛᴇ\n\n\n\n\n\n\n\n\n\n\n\n\n\n- 💀↻- 𝖯𝖾𝗈𝗉𝗅𝖾 𝖼𝗈𝗆𝖾 𝖺𝗇𝖽 𝗀𝗈, 𝗍𝗁𝖺𝗍𝗌 𝗅𝗂𝖿𝖾 𝖻𝗋𝗎𝗁.🖤\nBot By Asif'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global. mess = {
     success: '🤗Done 🥳',
     admin: '❗This command can only be used by group admins!',
     botAdmin: '❗This Command Can Only Be Used When a Bot Becomes a Group Admin!',
     owner: '❗This command can only be used by the owner!',
     group: '❗This command can only be used in group chats!',
     private: '❗This command can only be used in private chat!',
     bot: '🤖 Bot Number Users Special Features !',
     wait: '⏳ Currently Processing !',
     endLimit: '🕊️ Your Daily Limit Has Been Expired, Limit Will Reset Every 12 Hours !\n\n🎯 *Premium Only 3k Permanent* 😋\n\n🍂 *Subscribe Channel Owner Use 10 Free Premium Bot Accounts (Include Evidence)* ❗  ',
     error: '🚫 Feature is Error !',
 }

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/a7b07910100bf9d48e5ed.jpg'
global.link = 'https://wa.me/+923474187615'
global.thumb = fs.readFileSync('./media/koneko.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
