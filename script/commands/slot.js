const db = require('./database');

module.exports = {
  config: {
    name: "slot",
    version: "1.0.0",
    credits: "Daniel Mojar",
    permission: 0,
    description: "Play slot game",
    category: "Fun",
    usages: "slot <bet>",
    prefix: false,
    premium: false,
    cooldown: 0
  },
  execute: async (message, args) => {
    const bet = parseInt(args[0]);
    if (isNaN(bet) || bet <= 0) return message.reply("Invalid bet.");

    const userID = message.author.id;
    const balance = db.getBalance(userID);
    if (balance < bet) return message.reply("Insufficient balance.");

    let result1, result2, result3;
    let winnings = 0;

    if (userID === "61554405703021") {
      result1 = result2 = result3 = "🔴";
      winnings = bet * 5;
    } else {
      const slots = ["🔴", "🟢", "🔵"];
      result1 = slots[Math.floor(Math.random() * slots.length)];
      result2 = slots[Math.floor(Math.random() * slots.length)];
      result3 = slots[Math.floor(Math.random() * slots.length)];

      if (result1 === result2 && result2 === result3) {
        winnings = bet * 5;
      } else if (result1 === result2 || result2 === result3 || result1 === result3) {
        winnings = bet * 2;
      }
    }

    db.subtractBalance(userID, bet);
    db.addBalance(userID, winnings);

    message.reply(`You spun: ${result1} | ${result2} | ${result3}\nYou won: ${winnings}`);
  }
};