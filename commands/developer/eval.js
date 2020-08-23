const { MessageEmbed } = require('discord.js');

const util = require('util');

module.exports = {
    name:"eval",
    aliases: ["eval", "e"],
    category: "developer",
    description: "Evaulates code",
    dev: false,
    run: async (client, message, args) => {
    
    try{
      if(client.config.developers.some(ID => ID == message.author.id) == false) return;
      if(args.join(' ').length == 0) return message.channel.send('I need something to evaluate')
      let str = args.join(' ').replace(/msg/g, 'message').replace(/bot/g, 'client')
      let evaled = util.inspect(eval(str))
      message.channel.send(`\`\`\`js\n${evaled}\`\`\``)
    }catch(e){
      return message.channel.send(`\`\`\`coffee\n${e.message}\`\`\``)
    }
      
    }
  }