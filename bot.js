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

client.login(process.env.Mzk4Mzk5NzUyMjcxODIyODQ4.DcjTBw.bYwmaB8sU4v-mLepBWLYZ24wV9Q)
