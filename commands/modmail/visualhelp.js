const Discord = require("discord.js");
//packges or const here!
module.exports = {
    name: "visualhelp",//aka the folder name without js
    aliases: ["visualhelp"],
    category: "modmail",//this is what ever ever dir you are in (dev, info, moderation, music)
    description: "Visual help command",
    usage: "visualhelp",
    dev: false,//if it is for the dev the true;
    run: async (client, message, args) => {
//your code goes here!

const file = new Discord.MessageAttachment('https://cdn.glitch.com/5181f635-37dc-4d93-a255-2377ce1b5e3b%2FScreen%20Recording%202020-08-22%20at%207.21.01%20PM.mp4?v=1598144850068');

message.channel.send(`Here is your visual help!`)
return message.channel.send({ files: [file] });
      
//end code
  }
}