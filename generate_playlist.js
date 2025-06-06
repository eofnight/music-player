// 用 Node.js 產生 playlist.json
const fs = require('fs');
const path = require('path');

const musicDir = path.join(__dirname, 'music');
const files = fs.readdirSync(musicDir).filter(file => file.endsWith('.mp3'));

const playlist = files.map(file => ({
  name: file.replace('.mp3', ''),
  url: `music/${file}`
}));

fs.writeFileSync('playlist.json', JSON.stringify(playlist, null, 2), 'utf8');
console.log('✅ 已自動產生 playlist.json');
