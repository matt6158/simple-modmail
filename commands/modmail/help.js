const Discord = require("discord.js");
//packges or const here!
module.exports = {
    name: "help",//aka the folder name without js
    aliases: ["help"],
    category: "modmail",//this is what ever ever dir you are in (dev, info, moderation, music)
    description: "Help command",
    usage: "help",
    dev: false,//if it is for the dev the true;
    run: async (client, message, args) => {
//your code goes here!

let help = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('**Modmail Commands:**')
            .addFields(
	      	    { name: 'Start', value: 'm+start', inline: true },
              { name: 'Reply', value: 'm+reply <@id> (content)', inline: true }
	          )
            .setColor('#00AE86')

message.channel.send(help);
      
//end code
  }
}