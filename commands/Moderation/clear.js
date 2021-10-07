const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
    if (isNaN(args[0]) || (args[0] < 1 || (args[0] > 100))) return message.reply('Il faut préciser un nombre entre 1 et 100!');

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100),
        before: message.id,

    });

    await message.channel.bulkDelete(messages);

    message.delete();


    const embed = new MessageEmbed()
       .setAuthor(message.author.username, message.author.avatarURL())
       .setColor("dc143c")
       .setDescription(`**Action**: clear\n**Nombre de messages**: ${args[0]}\n**Salon**: ${message.channel}`);

    client.channels.cache.get(settings.logChannel).send(embed);
};

module.exports.help = {
    name: 'clear',
    description: 'Clear un nombre de message',
    category: 'moderation',
    cooldown: 2,
    usage:'<nombre>',
    args: true,
    isUserAdmin: false,
    permissions: true,
    channel: false
    };