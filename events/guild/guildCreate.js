module.exports = async (client, guild) => {
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  guild.owner.createDM().then(dm => {
    dm.send(`Merci de m'avoir ajouté à ton serveur ${guild.owner}. Pour commencer à utiliser toutes mes fonctionalités, configure les données de ton serveur, tu peux faire \`?config\` pour plus d'infos. \nSi tu as un quelconque problème, tu peux mp mon créateur: Zilba#7609`);
  })

  await client.createGuild(newGuild);
};