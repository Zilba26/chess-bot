const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');
    let muteTime = (args[1]);

    user.roles.add(muteRole.id);
    message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

    setTimeout(() => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime));
    

    const embed = new MessageEmbed()
       .setAuthor(`${user.user.username} (${user.id})`)
       .setColor("ffa500")
       .setDescription(`**Action**: mute\n**Temps**: ${ms(ms(muteTime))}`)
       .setThumbnail(user.user.avatarURL())
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('729690548545388584').send(embed)
};

module.exports.help = {
    name: 'mute',
    description: 'Mute un membre du serveur',
    category: 'moderation',
    cooldown: 10,
    usage:'<@user> <time>',
    args: true,
    isUserAdmin: true,
    permissions: true,
    channel: true
    };