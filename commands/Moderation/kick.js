const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas!");

    const embed = new MessageEmbed()
       .setAuthor(`${user.username} (${user.d})`)
       .setColor("ffa500")
       .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
       .setThumbnail(user.avatarURL())
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('729690548545388584').send(embed)
};

module.exports.help = {
    name: 'kick',
    description: 'Kick un membre du serveur',
    category: 'moderation',
    cooldown: 10,
    usage:'<@user> <raison>',
    args: true,
    isUserAdmin: true,
    permissions: true,
    channel: true
    };