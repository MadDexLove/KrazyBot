const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTA4MDMyMDQ5NjgxMTM3NjY1.Dr7qaw.8Auido-7qADUTVyJZIsU7wO_Y9o);
