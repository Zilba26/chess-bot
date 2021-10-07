module.exports = async (client, member) => {
    const settings = await client.getGuild(member.guild);
    console.log(settings)
    let msg = settings.welcomeMessage;

    if (msg.includes("{user}")) msg = msg.replace("{user}", member);
    if (msg.includes("{server}")) msg = msg.replace("{server}", member.guild);
    if (msg.includes("{memberCount}")) msg = msg.replace("{memberCount}", member.guild.memberCount);


    client.channels.cache.get("731861119144165436").send(msg);

    await client.createUser({
        guildID: member.guild.id,
        guildName: member.guild.name,
        userID: member.id,
        username: member.user.tag,
        game: [],
    });
}