const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.run = (client, message, args) => {
  const guild = message.guild

  const embed = new MessageEmbed()
    .setColor("C016FF")
    .setThumbnail(guild.iconURL())
    .addField(`Plus d'informations à propros de ${guild.name}`,
      `- ID: ${guild.id}
      - Owner: ${guild.owner}
      - Membres: ${guild.memberCount}
      - Créé le ${moment(guild.createdAt).format('DD/MM/YYYY')} (il y a ${Math.floor((Date.now() - moment(guild.createdAt)) / (1000*60*60*24))} jours)
      `
    );
  
  message.channel.send(embed);
};

module.exports.help = {
  name: 'serverinfo',
  description: 'Renvoie les stats du bot/serveur',
  category: 'autres',
  cooldown: 10,
  usage:'',
  args: false,
  isUserAdmin: false,
  permissions: false,
  channel: true
  };