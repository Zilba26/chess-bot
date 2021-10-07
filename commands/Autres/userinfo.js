const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.run = (client, message, args) => {
    let member = message.member;
    if (args[0]) member = message.guild.member(message.mentions.users.first());
    let user = member.user;

    const embed = new MessageEmbed()
        .setColor("C016FF")
        .setThumbnail(user.displayAvatarURL())
        .addField(
            `Plus d'informations à propos de ${user.username}`,
            `Nom: ${user.tag}
            Créé le: ${moment(user.createdAt).format("DD/MM/YYYY")} (il y a ${Math.floor((Date.now() - moment(user.createdAt)) / (1000*60*60*24))} jours)
            Statut: ${user.presence.status.toUpperCase()}
            A rejoint le serveur le: ${moment(member.joinedAt).format("DD/MM/YYYY")} (il y a ${Math.floor((Date.now() - moment(member.joinedAt)) / (1000*60*60*24))} jours)`
        )
    
    message.channel.send(embed);
}


module.exports.help = {
    name: 'userinfo',
    description: 'Renvoie le nom d un utilisateur',
    category: 'autres',
    cooldown: '',
    usage: '<nom d\'un utilisateur>',
    args: false,
    isUserAdmin: false,
    permissions: false,
    channel: true
    };