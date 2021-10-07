module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.cache.get("728008093073670184").send("Le bot est on!");
    client.user.setPresence({status: 'online', activity: {name: 'with Zilba (?help)', type: 'PLAYING'}});
};