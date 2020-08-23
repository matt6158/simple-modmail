const { Client, Collection, Discord } = require("discord.js");
const fs = require('fs');
const express = require('express');
var app = express();
const client = new Client({
  disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.queue = new Map();
client.categories = fs.readdirSync("./commands/")
client.config = require('./config.json');
// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

console.log(`Logged in!`);

client.login(client.config.token).then((token) => {

  ["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  })

}).catch((e) => {
  console.log(e)
});

//app.get("/ping", (req, res) => res.status(200).send({ ok: true }));

//app.get("/", (req, res) => res.status(200).send({ ok: true }));