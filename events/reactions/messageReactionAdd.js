module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.channel;
    //console.log(emoji);

    if (member.user.bot) return;

    //roles

    //if ((emoji === "✅") && message.channel.id === channelTest.id) {
        //switch (emoji) {
            //case "✅":
                //member.roles.add(autoroleTestRole);
                //break;    
        //};
    //};
};