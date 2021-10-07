const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');

    if (!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas muté!");

    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> n'est plus muté!`);

    

    const embed = new MessageEmbed()
       .setAuthor(`${user.user.username} (${user.id})`)
       .setColor("ffa500")
       .setDescription(`**Action**: unmute`)
       .setThumbnail(user.user.avatarURL())
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('729690548545388584').send(embed)
};

module.exports.help = {
    name: 'unmute',
    description: 'Unmute un membre du serveur',
    category: 'moderation',
    cooldown: 10,
    usage:'<@user>',
    args: true,
    isUserAdmin: true,
    permissions: true,
    channel: true
    };