const { get } = require("mongoose");

module.exports.run = async (client, message, args, settings) => {
  if (!args.length) {
    message.channel.send(`
    Il existe plusieurs choses à configurer pour le bot, les voici en détail:
      - Prefix: Pour le remplacer, il suffit de faire \`${settings.prefix}config prefix <new_prefix>\`. Le prefix de base étant \`?\`
      - Channel des logs: pour configurer le channel de logs, il vous suffit de faire \`${settings.prefix}config logchannel <logchannel_id>\`.
      - Channel message de bienvenue: très simple, pour configurer ce channel \`${settings.prefix}config welcomechannel <welcome_channel_id>\`

      **Pour les channels, indiquez bien l'__*id*__ des channels**
    `)
  }

  const getSettings = args [0];
  const newSetting = args.slice(1).join(" ");

  switch(getSettings) {
    case"prefix": {
      if (newSetting) {
        await client.updateGuild(message.guild, { prefix: newSetting });
        return message.channel.send(`Prefix mis à jour \`${settings.prefix}\`->\`${newSetting}\``);
      }
      message.channel.send(`Prefix actuel: \`${settings.prefix}\``);
      break;
    }
    case"logchannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, { logChannel: newSetting });
        return message.channel.send(`Channel de logs mis à jour \`${settings.logChannel}\`->\`${newSetting}\``);
      }
      message.channel.send(`Channel de logs actuel: \`${settings.logChannel}\``);
      break;
    }
    case"welcomeMessage": {
      if (newSetting) {
        await client.updateGuild(message.guild, { welcomeMessage: newSetting });
        return message.channel.send(`Message de bienvenue mis à jour \`${settings.welcomeMessage}\`->\`${newSetting}\``);
      }
      message.channel.send(`Message de bienvenue actuel: \`${settings.welcomeMessage}\``);
      break;
    }
    case"leaveMessage": {
      if (newSetting) {
        await client.updateGuild(message.guild, { leaveMessage: newSetting });
        return message.channel.send(`Message de départ mis à jour \`${settings.leaveMessage}\`->\`${newSetting}\``);
      }
      message.channel.send(`Message de départ actuel: \`${settings.leaveMessage}\``);
      break;
    }
  }
};

module.exports.help = {
  name: 'config',
  description: 'Congig un serveur',
  category: 'admin',
  cooldown: 5,
  usage:'<key> <value>',
  args: false,
  isUserAdmin: false,
  permissions: true,
  channel: false
  };