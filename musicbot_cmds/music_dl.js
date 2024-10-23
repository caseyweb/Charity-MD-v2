if (!text) return m.reply('Please provide a song name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
   const yts = require("yt-search");
    let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await zyn.sendMessage(m.chat, {
 audio: {url: kyuu.result.mp3}, 
 mimetype: 'audio/mpeg',
 contextInfo: {
        externalAdReply: {
          title:  `Vampire Killer`,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
  }
break;
