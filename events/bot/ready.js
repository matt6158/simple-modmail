const superagent = require('superagent');
const chalk = require('chalk');
const util = require("util");

module.exports = async (client) => {

    client.user.setActivity('DMs', { type: 'LISTENING' });

client.on('ready', () => {
     console.log(`Running as ${client.user.tag}`);
});

}
