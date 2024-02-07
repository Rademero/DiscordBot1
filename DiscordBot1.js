const config = require('./config.json'); // Retrieves the Config file from active directory 

const { Client, GatewayIntentBits } = require('discord.js'); // runs the discord.js script for activating bot

const client = new Client({ // set premissons of bot
	intents: [
		GatewayIntentBits.Guilds, //Allows changing of roles, and updating roles, making/removing channels 
		GatewayIntentBits.GuildMessages, //Allows sending messages 
		GatewayIntentBits.MessageContent, // Allows reading messages
		GatewayIntentBits.GuildMembers, // Adding and Removing members 
	],

    //For more info go here: https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits
});

//Runs when bot Starts Up
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


//whenever a message is posted in a server, run contents 
client.on('messageCreate', msg => {

    //If message is ping, respond with pong, messages like ping pong or like my ping will not trigger 
    if (msg.content === 'ping') { 

        msg.reply('pong');
    }

});

//Start up bot using the Config file to get token 
client.login(config.token);
