module.exports.run = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }
 
  if (message.author.id !== "320075078962511872") return (message.channel.send("Seul mon créateur (Zilba#7609) peut utiliser cette commande"));
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

module.exports.help = {
  name: 'eval',
  description: 'Test du code js (seul mon créateur (Zilba#7609) peut utiliser cette commande)',
  category: 'admin',
  cooldown: 5,
  usage:'<code-to-test>',
  args: true,
  isUserAdmin: false,
  permissions: true,
  channel: true
  };