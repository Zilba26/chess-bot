module.exports.run = async (client, message, args, settings, dbUser) => {
    const p = dbUser.game[1]
    client.updateUser(message.member, { game: [dbUser.game[0], [args[0], p[1], p[2], p[3], p[4], p[5]], dbUser.game[2]]});
};

module.exports.help = {
    name: 'change_fen',
    description: 'Change la fen dans la bdd',
    category: 'echecs',
    cooldown: 5,
    usage:'<fen>',
    args: true,
    isUserAdmin: false,
    permissions: true,
    channel: false
    };