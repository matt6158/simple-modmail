const Discord = require('discord.js');

module.exports = async (client, message) => {
    if (message.author.bot) return;

    const args = message.content.slice(``.length).split();
    const member = message.author;

    if (message.channel.type == "dm") {
        const replyEmbed = new Discord.MessageEmbed()
            .setTitle(`Message Sent!`)
            .setDescription(`Successfully sent the message!`)
            .addField("Message:", args)
            .setColor("62c95d")
        member.send(replyEmbed).then(g => {
            const modmailEmbed = new Discord.MessageEmbed()
                .setTitle(`New message from: ${member.tag}`)
                .setDescription(`Content: ${args}`)
                .addFields(
                    {name: 'Member ID', value: `${member.id}`, inline: true},
                    {name: 'Mention', value: `<@${member.id}>`, inline: true}
                )
                .setFooter(`To reply, please use: m+reply <@${member.id}> (message content)`)
                .setColor("4f8edb")

            client.channels.cache.get(client.config.messagesChannel).send(modmailEmbed).catch(e => {
                let errorEmbed = new Discord.MessageEmbed()
                    .setTitle("Error")
                    .setDescription("Looks like there was an error sending a message to the staff team! Check with a server admin that I have permission to send to the specified modmail channel.")
                    .setColor("RED")

                g.edit("", errorEmbed)
            });
        });
    }
}
