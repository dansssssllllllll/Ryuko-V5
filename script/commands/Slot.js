module.exports.config = {
  name: "slot",
  version: "1.0.0",
  permission: 0,
  credits: "Ryuko Developer",
  description: "Play a slot game",
  prefix: false,
  premium: false,
  category: "fun",
  usages: "slot <bet>",
  cooldowns: 5
};

let userBalance = {};

module.exports.run = async ({ api, event, args }) => {
  let userID = event.senderID;
  let balance = userBalance[userID] || 0;

  if (args.length < 1) {
    api.sendMessage("Please enter a bet amount.", event.threadID, event.messageID);
    return;
  }

  let bet = parseInt(args[0]);
  if (isNaN(bet) || bet < 50 || bet > 99999999999) {
    api.sendMessage("Invalid bet amount. Please enter a number between 50 and 99,999,999,999.", event.threadID, event.messageID);
    return;
  }

  if (balance < bet) {
    api.sendMessage("You don't have enough balance to place this bet.", event.threadID, event.messageID);
    return;
  }

  let symbols = ["🟢", "🔴", "🔵"];
  let result = [];
  for (let i = 0; i < 3; i++) {
    result.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  let message = `You bet ${bet} and got: ${result.join(" ")}\n`;

  if (result[0] === result[1] && result[1] === result[2]) {
    let winAmount = bet * 10;
    userBalance[userID] = balance + winAmount;
    message += `You won ${winAmount}! Your new balance is ${userBalance[userID]}.`;
  } else {
    userBalance[userID] = balance - bet;
    message += `You lost ${bet}. Your new balance is ${userBalance[userID]}.`;
  }

  api.sendMessage(message, event.threadID, event.messageID);
};
