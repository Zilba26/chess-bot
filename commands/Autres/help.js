const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs")
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args, settings) => {
    console.log(client.commands.filter(cat => cat.help.category === "Autres".toLowerCase()).map(cmd => cmd.help.name).join(', '))
    console.log(client.commands.filter(cat => cat.help.category === "Echecs".toLowerCase()).map(cmd => cmd.help.name).join(', '))

    if (!args.length) {
        const embed = new MessageEmbed()
            .setColor("#36393F")
            .addField("Liste des commandes", `Pour plus d'informations sur une commande, tapez \`?help <command_name>\``);

        for (const category of categoryList) {
            console.log(client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', '))
            embed.addField(
                `${category}`,
                `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
            );
        };
        return message.channel.send(embed);
    }   else {
        const command = client.commands.get(args[0])
        if (!command) return message.reply("Cette commande n'existe pas");

        const embed = new MessageEmbed()
            .setColor("36393F")
            .setTitle(`\`${command.help.name}\``)
            .addField("Description", `${command.help.description}`)
            .addField("Utilisation", command.help.usage ? `?${command.help.name} ${command.help.usage}` : `?J${command.help.name}`, true)
            .setFooter("Pour tout problème, contactez mon créateur sur Discord: Zilba#7609");

        return message.channel.send(embed);
    }
};

module.exports.help = {
    name: 'help',
    description: "Envoie l'aide du bot (commandes)",
    category: 'autres',
    cooldown: 5,
    usage:'<> *ou* <command_name>',
    args: false,
    isUserAdmin: false,
    permissions: false,
    channel: true
    };