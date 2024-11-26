const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
╭═══✧〈 *𝙲𝙷𝙰𝚁𝙸𝚃𝚈 𝙼𝙳* 〉 ✧═══⊷❍ ◆
│
│❍╭════════════════⊷❍
│❍│▸ *𝙼𝙴𝙽𝚄* 
│❍│▸ *𝙼𝙴𝙽𝚄𝟸* 
│❍│▸ *𝙰𝙻𝙻𝙼𝙴𝙽𝚄*
│❍╰════════════════⊷❍ 
│❍│▸ *𝙿𝙻𝚄𝙶𝙸𝙽𝚂* : ${cm.length} 
│❍│▸ *𝚁.𝙰.𝙼* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❍│▸ *𝚂𝙴𝚁𝚅𝙴𝚁* : ${os.platform()}
│❍│▸ *𝙾𝚆𝙽𝙴𝚁* : *𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂 𝚃𝙴𝙲𝙷*
│❍╰════════════════⊷❍ 
╰════════════════════⊷❍ \n`;
    
let menuMsg = ` *COMMANDS* `;

    for (const cat in coms) {
        menuMsg += `╭════════🌟 *${cat}* ❥︎`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│🍀│▸ ${cmd}`;
        }
        menuMsg += `
╰════════════════⊷❍ \n`
    }

    menuMsg += `> 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂
`;                     

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *☹︎ CASEYRHODES*, déveloper CASEYRHODES TECH" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *CASEYRHODES*, déveloper CASEYRHODES TECH" }, { quoted: ms });
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
