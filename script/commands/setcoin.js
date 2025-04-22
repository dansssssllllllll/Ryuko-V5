const db = require('./database');

module.exports = {
  config: {
    name: "setcoin",
    version: "1.0.0",
    credits: "Daniel Mojar",
    permission: 2,
    description: "Set user's coin balance",
    category: "Admin",
    usages: "setcoin <uid> <amount>",
    prefix: false,
    premium: false,
    cooldown: 0
  },
  execute: async (message, args) => {
    if (args.length < 2) return message.reply("Invalid usage. Please use setcoin <uid> <amount>");

    const userID = args[0];
    const amount = parseInt(args[1]);

    if (isNaN(amount)) return message.reply("Invalid amount.");
    if (amount > 99999999999999999999999) return message.reply("Amount exceeds maximum balance.");

    db.setBalance(userID, amount);
    message.reply(`Set ${userID}'s balance to ${amount}`);
  }
};