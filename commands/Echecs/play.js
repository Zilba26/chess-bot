module.exports.run = async (client, message, args, settings, dbUser) => {
    const player = message.guild.member(message.mentions.members.first());
    const dbUser2 = await client.getUser(player);
    const filter = (reaction, user) => (reaction.emoji.name == "✅" || reaction.emoji.name == "❎") && user.id == player.id;

    if (player == message.member) {
        return message.reply(`Vous ne pouvez pas jouer contre vous-même`);
    }
    
    if (dbUser.game.length != 0) {
        return message.channel.send(`${message.author}, vous êtes déjà en train de faire une partie avec quelqu'un, finissez là avant d'en relancer une`)
    };

    if (dbUser2.game.length != 0) {
        return message.channel.send(`${message.author}, ${player} a déjà commencé une partie avec quelqu'un d'autre, il faut qu'il l'a finisse pour que vous jouiez avec lui`)
    };

    message.channel.send(`${player}, ${message.author} veut jouer aux échecs avec toi, coches la réaction si tu veux accepter`).then(async msg => {
        await msg.react("✅")
        await msg.react("❎")
        msg.awaitReactions(filter, { max: 1, time: 30000}).then(collected => {
            if (collected.first() == undefined) return message.channel.send(`${message.author}, ta demande a expirée, ${player} n'a pas répondu à temps`);
            if (collected.first()._emoji.name == "❎") return message.channel.send(`Désolé ${message.author}, ${player} a refusé votre demande`)
            else {
                message.channel.send(`${message.author}, ${player} a accepter votre demande, vous pouvez commencer à jouer`)
                client.updateUser(player, { game: [message.member, ["tcfdrfct/pppppppp/11111111/11111111/11111111/11111111/PPPPPPPP/TCFDRFCT", "b", "RDrd", "-", "0", "1"], "n"]});
                client.updateUser(message.member, { game: [player, ["tcfdrfct/pppppppp/11111111/11111111/11111111/11111111/PPPPPPPP/TCFDRFCT", "b", "RDrd", "-", "0", "1"], "b"]});
            }
        });
    });
};

module.exports.help = {
    name: 'play',
    description: 'Propose une game à un membre du serveur',
    category: 'echecs',
    cooldown: 5,
    usage:'<user>',
    args: true,
    isUserAdmin: false,
    permissions: false,
    channel: false
    };