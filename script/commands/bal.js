const db = require('./database');

module.exports = {
  config: {
    name: "bal",
    version: "1.0.0",
    credits: "Daniel Mojar",
    permission: 0,
    description: "Check your balance",
    category: "Fun",
    usages: "bal",
    prefix: false,
    premium: false,
    cooldown: 3
  },
  execute: async (message) => {
    const userID = message.author.id;
    const balance = db.getBalance(userID);
    message.reply(`balance mo oh: ${balance}`);
  }
};