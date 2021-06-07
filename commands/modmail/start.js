const Discord = require("discord.js");

module.exports = {
    name: "start",
    aliases: ["start"],
    category: "modmail",
    description: "Start a modmail thread",
    usage: "start",
    run: async (client, message, args) => {
const start = new Discord.MessageEmbed()
  .setTitle(`Start Message Thread`)
  .setDescription(`To start a message thread, please DM me and we will forward your message to the staff team!`)
  .setFooter(`Requested by: ${message.author.tag}`)
  .setColor("RANDOM")

await message.channel.send(start)
  }
}