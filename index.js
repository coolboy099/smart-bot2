const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('🤖 Bot is Alive!'));
app.listen(3000, () => console.log('🌐 Web Server Running on 3000'));

function startBot() {
  const bot = mineflayer.createBot({
    host: 'dttyagi-lol10110.aternos.me',
    port: 40234,
    username: 'BETA', // cracked username
  });

  bot.on('spawn', () => {
    console.log('✅ Bot joined server!');

    // Move and act like player
    let sneaking = false;

    setInterval(() => {
      sneaking = !sneaking;
      bot.setControlState('sneak', sneaking);
      if (sneaking) {
        bot.chat('I am here!');
      }
    }, 10000); // every 10 sec toggle sneak & chat
  });

  bot.on('error', err => {
    console.log('❌ Error:', err);
  });

  bot.on('end', () => {
    console.log('🔁 Disconnected, reconnecting...');
    setTimeout(startBot, 10000);
  });
}

startBot();
