const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349138916225";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_09_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODksXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICA3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMjVBbU1WbVJGZDBjN1UxSjJnSVUwc1FSaVNMUGxJdlR0ckJlb1QxTXREaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVlF6WUhHYndTeC1hdE9NMFo1dTRyUVwiLFxuICBcInBob25lSWRcIjogXCI2NDYwZDJlMi03NGMxLTQ4ZWMtYTNmOC01MjRjNTBmNmUyMTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDIyMSxcbiAgICAgIDYsXG4gICAgICAxMzYsXG4gICAgICAxMjEsXG4gICAgICAyNDQsXG4gICAgICAzMSxcbiAgICAgIDIwNyxcbiAgICAgIDE0NyxcbiAgICAgIDMwLFxuICAgICAgNzMsXG4gICAgICA4NyxcbiAgICAgIDIwMCxcbiAgICAgIDE4MyxcbiAgICAgIDE2LFxuICAgICAgNDQsXG4gICAgICAyMjAsXG4gICAgICAzOCxcbiAgICAgIDIwNCxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDM3LFxuICAgICAgMTg3LFxuICAgICAgMzYsXG4gICAgICA2NSxcbiAgICAgIDYsXG4gICAgICAyMjEsXG4gICAgICAzNyxcbiAgICAgIDE3NCxcbiAgICAgIDY4LFxuICAgICAgMTksXG4gICAgICAxODQsXG4gICAgICAyMjksXG4gICAgICA0OSxcbiAgICAgIDIzOCxcbiAgICAgIDM5LFxuICAgICAgMjI5LFxuICAgICAgMTIxLFxuICAgICAgMjEwLFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEVDU1FaWjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzg5MTYyMjU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3MTkyNzgyNjQ3NDg0OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWJVb01zSEVOS1F5TG9HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsOUVSU1VuQjlRWnJjZDczdUJ5dS84RmFQTmRIUWkwZlk0TFhyNjRvbldvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRCVnJ2NTNUUnRuUTMvdHJmRmhEY3JtVmlLQThTVmUzMExJOEl1WitwMkN4V0Y3Z0k3a3F0V29tUWNzOHZRbWZKTWhpSnJUaEZMT2t5UDBvQTBuR0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJqYW9YUFpVWVFLT3ZyQ0NudDZ6OVg2NXNVRmdrQXMyOVUzM1RyS1dUNjVhR05RZkM3dU1YZVZoK2VoUFpDYmZncDRvdmtTa2RTcmJjMUVFdEtEMURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzg5MTYyMjU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0MjkzMzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKNFZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo0Vi5qc29uIjogIntcImtleURhdGFcIjpcIitCemVwajFzdGpuSm51bjIydWJNMWJrRy8xUHNaU0g3MlE0M05ncSthWWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAzNjg2OTYzOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIxNzMzNDI5MTUzMjg2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ":",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SMILE-MD",
  ownername:process.env.OWNER_NAME|| "Smile-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
