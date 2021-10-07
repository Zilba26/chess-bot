const { Client, Collection } = require('discord.js');
const { readdirSync } = require("fs");

const client = new Client();
require("./mongodb/functions")(client);
client.config = require("./config");
client.mongoose = require("./mongodb/mongoose");
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log (`Commande chargée: ${getFileName.help.name}`);
    };
  });
};

const loadEvents = (dir = "./events/") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      client.on(evtName, evt.bind(null, client));
      console.log(`Evenement chargée: ${evtName}`);
    };
  });
};

loadCommands();
loadEvents();

client.mongoose.init();

client.login("ODY2MDQxMTU5NTQ0MzQwNDgw.YPMxrg.6f3BwLSO8yljQLQ5mOdRG17wSqE");