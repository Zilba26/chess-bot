module.exports.run = (client, message, args) => {
    message.channel.send('Pong!');
};

module.exports.help = {
    name: 'ping',
    description: 'Renvoie pong',
    category: 'autres',
    cooldown: 10,
    usage:'',
    args: false,
    isUserAdmin: false,
    permissions: false,
    channel: true
    };