const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "sc", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *𝕿𝖍𝖊𝖘𝖊 𝖕𝖗𝖔𝖏𝖊𝖈𝖙 𝖎𝖘 𝖕𝖗𝖎𝖛𝖆𝖙𝖊* 
╭─────────────────
│♫︎╭─────────────
│⁠⁠⁠⁠♫︎│▸ *𝖈𝖍𝖆𝖓𝖓𝖊𝖑* https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q
│♫︎│▸⁣⣿⣿⡿⠋⠄⡀⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⣉⣉⣉⡉⠙⠻
│♫︎│▸╔╦╦╦══╦══╗
║♫︎╔╣╠╝╔╬╝╔╣ 𝕲𝖊𝖙 𝖙𝖍𝖊 𝖗𝖊𝖕𝖔 𝖎𝖓 𝖙𝖍𝖊 𝖈𝖍𝖆𝖓𝖓𝖊𝖑.
╚♫︎╝╚╩══╩══╝
│⁠⁠⁠⁠♫︎╰──────────────
│♫︎│▸ *𝖈𝖍𝖆𝖓𝖓𝖊𝖑* : https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q
│♫︎│▸╔╦╦╦══╦══╗
║♫︎╔╣╠╝╔╬╝╔╣
╚♫︎╝╚╩══╩══╝
│♫︎│▸ *𝖞𝖙* :https://youtube.com/@cardhero-xs9ny?si=gTq7y0L7RAUvvKJz
│♫︎╰──────────────
╰──────────────────\n─
  `;
    
let menuMsg = `
     > 𝖒𝖚𝖘𝖎𝖈𝖇𝖔𝖙 𝖒𝖆𝖉𝖊 𝖇𝖞 𝕬𝖗𝖑𝖔𝖉𝖗𝖆𝖌𝖔𝖓

♫︎────────────────────♫︎`;
    
   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *andbad*, déveloper andbad" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
