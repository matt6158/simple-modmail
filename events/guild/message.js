const Discord = require('discord.js');

module.exports = async (client, message) => {
  
  const args = message.content.slice(``.length).split( );
  
  const member = message.author;
  
  const memberI = message.author.id;
  
  if(message.channel.type == "dm") {

    if (message.author.bot) return;
    
  const replyEmbed = new Discord.MessageEmbed()
    .setTitle(`Message Sent!`)
    .setDescription(`Successfully sent the message!`)
    .addField("Message:", args)
    .setColor("62c95d")
  member.send(replyEmbed)
    
    //member.send(`We have recieved your message of: ${args}`);

  const modmailEmbed = new Discord.MessageEmbed()
    .setTitle(`New message from: ${member.tag}`)
    .setDescription(`Content: ${args}`)
    .addFields(
	      	    { name: 'Member ID', value: `${member.id}`, inline: true },
              { name: 'Mention', value: `<@${member.id}>`, inline: true }
	          )
    .setFooter(`To reply, please use: m+reply <@${member.id}> (message content)`)
    .setColor("4f8edb")
    
    
  client.channels.cache.get('746875750707232879').send(modmailEmbed)

    }
}