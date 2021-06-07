const Discord = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["help"],
    category: "modmail",
    description: "Help command",
    usage: "help",
    run: async (client, message, args) => {
        let help = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('**Modmail Commands:**')
            .addFields(
                {name: 'Start', value: 'm+start', inline: true},
                {name: 'Reply', value: 'm+reply <@id> (content)', inline: true}
            )
            .setColor('DARK_GREEN')

        await message.channel.send(help);
    }
}