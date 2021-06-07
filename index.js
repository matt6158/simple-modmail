const {Client, Collection} = require("discord.js");
const fs = require('fs');

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/")
client.config = require('./config.json');

client.login(client.config.token).then((token) => {
    ["command", "events"].forEach(handler => {
        require(`./handlers/${handler}`)(client);
    })
}).catch((e) => {
    console.log(e)
});