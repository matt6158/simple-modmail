const Discord = require("discord.js");

module.exports = {
    name: "reply",
    aliases: ["reply"],
    category: "modmail",
    description: "Reply to a message",
    usage: "reply {user <@id>} {msg content}",
    run: async (client, message, args) => {
        const userr = message.mentions.users.first();
        const user = message.guild.member(userr);

        if (message.member.roles.cache.some(role => role.id == `${client.config.modmailRole}`)) {

            const argse = message.content.slice(`${client.config.prefix}reply ${userr}`.length).split();

            const replyMessage = argse;

            const embed = new Discord.MessageEmbed()
                .setTitle(`Message Sent!`)
                .setDescription(`Successfully sent the message to <@${user.id}> (${userr.tag})`)
                .addField("Message:", replyMessage)
                .setColor("62c95d")
            await message.channel.send(embed).then(g => {
                const replyEmbed = new Discord.MessageEmbed()
                    .setTitle(`New Reply!`)
                    .setDescription(`You have received a reply from ${message.author.tag}`)
                    .addField("Message:", replyMessage)
                    .setColor("4f8edb")
                user.send(replyEmbed).catch(e => {
                    const errorEmbed = new Discord.MessageEmbed()
                        .setTitle(`Error`)
                        .setDescription(`\`${e}\``)
                        .setColor("RED")

                    g.edit("", errorEmbed)
                })
            })

        } else {
            message.reply(`Error Code 403 ||| Solution: You must have the <@&${client.config.modmailRole}> role`);
        }
    }
}