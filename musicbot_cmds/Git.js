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
   *𝗧𝗛𝗜𝗦 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗜𝗦 𝗣𝗥𝗜𝗩𝗔𝗧𝗘* 
╭─────────────────
│♫︎╭─────────────
│⁠⁠⁠⁠♫︎│▸ *𝐂𝐇𝐀𝐍𝐍𝐄𝐋* https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E
│♫︎│▸⁣⣿⣿⡿⠋⠄⡀⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⣉⣉⣉⡉⠙⠻
│♫︎│▸╔╦╦╦══╦══╗
║♫︎╔╣╠╝╔╬╝╔╣ 𝐆𝐞𝐭 𝐫𝐞𝐩𝐨 𝐢𝐧 𝐭𝐡𝐞 𝐜𝐡𝐚𝐧𝐧𝐞𝐥.
╚♫︎╝╚╩══╩══╝
│⁠⁠⁠⁠♫︎╰──────────────
│♫︎│▸ *𝐂𝐇𝐀𝐍𝐍𝐄𝐋* : https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E
│♫︎│▸╔╦╦╦══╦══╗
║♫︎╔╣╠╝╔╬╝╔╣
╚♫︎╝╚╩══╩══╝
│♫︎│▸ *𝐘𝐎𝐔𝐓𝐔𝐁𝐄* :https://youtube.com/@Caseyrhodes01
│♫︎╰──────────────
╰──────────────────\n─
  `;
    
let menuMsg = `
     > 𝗖𝗛𝗔𝗥𝗜𝗧𝗬 𝗠𝗗 𝗠𝗔𝗗𝗘 𝗕𝗬 𝗖𝗔𝗦𝗘𝗬𝗥𝗛𝗢𝗗𝗘𝗦🌟

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
