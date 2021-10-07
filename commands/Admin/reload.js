module.exports.run = async (client, message, args) => {
    await message.delete();
    await client.channels.cache.get('729690548545388584').send("Le bot redémarre");
    process.exit();
};

module.exports.help = {
    name: 'reload',
    description: 'Relance le bot',
    category: 'admin',
    cooldown: 5,
    usage:'',
    args: false,
    isUserAdmin: false,
    permissions: true,
    channel: true
    };