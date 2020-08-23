const superagent = require('superagent');
const chalk = require('chalk');
const util = require("util");

module.exports = async (client) => {

    client.user.setActivity('DMs | Donut Development', { type: 'LISTENING' });
    
     console.log(`Running as ${client.user.tag}`);

}
