module.exports.run = async (client, message, args, settings, dbUser) => {
    if (dbUser.game.length == 0) return message.reply("Tu ne peux pas abandonner une game puisque tu n'en as pas commencé une");
    else {
        message.reply(`Tu as abandonné ta partie contre ${message.guild.member(dbUser.game[0])} qui gagne donc`)
        client.updateUser(message.guild.member(dbUser.game[0]), { game: []});
        client.updateUser(message.member, { game: []});
    };
};

module.exports.help = {
    name: 'resign',
    description: 'Abandonne une partie d\'échec',
    category: 'echecs',
    cooldown: 5,
    usage:'',
    args: false,
    isUserAdmin: false,
    permissions: false,
    channel: false
    };