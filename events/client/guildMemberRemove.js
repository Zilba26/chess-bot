module.exports = async (client, member, settings) => {
    //const settings = await client.getGuild(member.guild);
    let msg = settings.leaveMessage;

    if (msg.includes("{user}")) msg = msg.replace("{user}", member);
    if (msg.includes("{server}")) msg = msg.replace("{server}", member.guild);
    if (msg.includes("{memberCount}")) msg = msg.replace("{memberCount}", member.guild.memberCount);


    client.channels.cache.get(leaveMessage).send(msg);

    await client.createUser({
        guildID: member.guild.id,
        guildName: member.guild.name,
        userID: member.id,
        username: member.user.tag,
    });
}