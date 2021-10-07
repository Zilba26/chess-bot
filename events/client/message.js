const { Collection } = require('discord.js');
const { PREFIX } = require('../../config')

module.exports = async (client, message) => {
  if (message.channel.type === "dm") return client.emit("directMessage", message);
  
  if (message.author.bot) return;

  const settings = await client.getGuild(message.guild);
  const dbUser = await client.getUser(message.member);

  if (!dbUser) await client.createUser({
    guildID: message.member.guild.id,
    guildName: message.member.guild.name,
    userID: message.member.id,
    username: message.member.user.tag,
    game: [],
  })

  if (!message.content.startsWith(settings.prefix)) return;

  const args = message.content.slice(1).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  if (!client.commands.has(commandName))return;
  const command = client.commands.get(commandName);

  //if (command.help.channel) {
    //if (!(settings.commandsChannel).includes(message.channel.id)) {
      //return
    //};
  //};

  //if (message.channel != settings.commandsChannel && command.help.channel) return;

  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("Tu n'as pas les permissions pour écrire cette commande!");
  
  if (command.help.args && !args.length) {
    let noArgsReply = `Il nous faut des arguments pour cette commande ${message.author}!`;

    if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande: ?\`${command.help.name} ${command.help.usage}\``
    return message.channel.send(noArgsReply);
  }
  
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission("BAN_MEMBERS")) return message.reply("Tu ne peux pas utiliser cette commande sur cet utilisateur");

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 1) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime ) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name}\`.`);
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount); 

  command.run(client, message, args, settings, dbUser);
}