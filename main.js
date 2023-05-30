const Discord = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ]
  })



client.once('ready',() =>{
console.log('X6 is online!');
});

client.on("messageCreate", (message) => {
    if (message.content.substring(0, 1) === "!") {
        message.channel.send("Hello! Myself X6tence :) \n\n[MY YT CHANNEL] \n https://www.youtube.com/@x6_uo841\n\n[UTOPIA ORIGIN FB PAGE]\nhttps://www.facebook.com/utopiaorigin/?mibextid=ZbWKwL\n" ); //reply if message has "!" as first character
    }
    
});


client.login('MTA3NzQ4OTgxODY1MDU1NDM3OA.Gvnplc.im68d4OWWB-O6NS_3QUE9_Bi7uE82dbG60Mi6A');

//...Discord Bot Code Above ^^

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//okok