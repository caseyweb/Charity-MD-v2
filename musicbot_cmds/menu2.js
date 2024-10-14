const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu2", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
╭────❦︎𝗠𝗨𝗦𝗜𝗖𝗕𝗢𝗧❦︎ ────
┴  ╭─────────────
│ꨄ︎│ *𝗢𝗪𝗡𝗘𝗥* : ${s.OWNER_NAME}
│ꨄ︎│⁠⁠⁠⁠ *CALENDER* : ${date}
│ꨄ︎│⁠⁠⁠⁠ *𝗣𝗥𝗘𝗙𝗜𝗫* : ${s.PREFIXE}
│ꨄ︎⁠⁠⁠⁠│⁠⁠⁠ *𝗠𝗢𝗗𝗘* : ${mode} mode
│ꨄ︎│⁠⁠⁠⁠ *𝗣𝗟𝗨𝗚𝗜𝗡𝗦* : ${cm.length} 
│ꨄ︎│⁠⁠⁠⁠ *𝗥𝗔𝗠* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❦︎│⁠⁠⁠⁠ *𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠* : ${os.platform()}
│❦︎│⁠⁠⁠⁠ *𝗧𝗛𝗘𝗠𝗘* : *𝗠𝗨𝗦𝗜𝗖𝗕𝗢𝗧♫︎*
┬  ╰──────────────
╰─── ··❦︎𝗠𝗨𝗦𝗜𝗖𝗕𝗢𝗧❦︎··──\n`;
    
let menuMsg = `
 ─────────
  *♫︎𝗠𝗨𝗦𝗜𝗖𝗕𝗢𝗧♫︎* 
 ─────────


 *𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*
`;

    for (const cat in coms) {
        menuMsg += ` ╭─ꨄ︎ *${cat}* ఌ︎─`;
        for (const cmd of coms[cat]) {
            menuMsg += `
♫︎│▸ *${cmd}*`;
        }
        menuMsg += `
  ╰────────────·· \n`
    }

    menuMsg += `

|❦︎𝕬𝖗𝖑𝖔𝖉𝖗𝖆𝖌𝖔𝖓 𝖎𝖘 𝖒𝖞 𝖔𝖜𝖓𝖊𝖗
*❒⁠⁠⁠⁠—————————— ❒⁠⁠⁠⁠——————————❒⁠⁠⁠⁠*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *kavishanmd*, déveloper kavishan Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *kavishanmd*, déveloper kavishan Tech" }, { quoted: ms });
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
