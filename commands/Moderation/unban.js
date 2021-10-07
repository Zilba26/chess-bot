const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    let user = await client.users.fetch(args[0]);
    if (!user) return message.reply("L'utilisateur n'existe pas!");
    message.guild.members.unban(user);

    const embed = new MessageEmbed()
       .setAuthor(`${user.username} (${user.d})`)
       .setColor("dc143c")
       .setDescription(`**Action**: unban`)
       .setThumbnail(user.avatarURL())
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('729690548545388584').send(embed)
};

module.exports.help = {
    name: 'unban',
    description: 'Unban un utilisateur',
    category: 'moderation',
    cooldown: 10,
    usage:'<user_id>',
    args: true,
    isUserAdmin: false,
    permissions: true,
    channel: true
    };