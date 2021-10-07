module.exports.run = async (client, message, args, settings, dbUser) => {
    const player1 = message.member
    const player2 = message.guild.member(dbUser.game[0])
    const filter = (reaction, user) => (reaction.emoji.name == "✅" || reaction.emoji.name == "❎") && user.id == player2.id;

    if (dbUser.game.length == 0) return message.reply("Tu ne peux pas demander nulle à une game puisque tu n'en as pas commencé une");
    else {
        message.channel.send(`${player2}, ${player1} te propose une nulle, acceptes-tu?`).then(async msg => {
            await msg.react("✅")
            await msg.react("❎")
            msg.awaitReactions(filter, { max: 1, time: 30000}).then(collected => {
                if (collected.first() == undefined) return message.channel.send(`${player1}, ta demande a été décliner, ${player2} n'a pas répondu à temps`);
                if (collected.first()._emoji.name == "❎") return message.channel.send(`${player2} a refusé ta demande ${player1}, il veut jouer la gagne !!!`)
                else {
                    message.channel.send(`${player2} a accepter ta demande ${player1}, nulle signée, la game est terminée`)
                    client.updateUser(player1, { game: []});
                    client.updateUser(player2, { game: []});
                }
            });
        })
    };
};

module.exports.help = {
    name: 'draw',
    description: 'Demande une égalité à une partie d\'échec',
    category: 'echecs',
    cooldown: 5,
    usage:'',
    args: false,
    isUserAdmin: false,
    permissions: false,
    channel: false
    };