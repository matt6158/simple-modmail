module.exports = async (client) => {
    await client.user.setActivity('users DM me for help!', {type: 'WATCHING'});
    console.log(`Running as ${client.user.tag}`);
}
