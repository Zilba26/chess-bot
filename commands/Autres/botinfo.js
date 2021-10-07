const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor("C016FF")
    .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
    .addFields(
      {name: 'Mémoire', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0)}MB`, inline: true},
      {name: 'Uptime', value: `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, inline: true},
      {name: '\u200b', value: `\u200b`, inline: true},
      {name: 'Serveurs', value: `${client.guilds.cache.size.toString()}`, inline: true},
      {name: 'Utilisateurs', value: `${client.guilds.cache.map(g => g.memberCount).reduce((a,b) => a + b)}`, inline: true},
      {name: 'Support', value: `mp Zilba#7609`, inline: true},
    )
  
  message.channel.send(embed);
};

module.exports.help = {
  name: 'botinfo',
  description: 'Renvoie les stats du bot/serveur',
  category: 'autres',
  cooldown: 10,
  usage:'',
  args: false,
  isUserAdmin: false,
  permissions: false,
  channel: true
  };