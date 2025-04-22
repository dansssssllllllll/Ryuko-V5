module.exports.config = {
  name: "setcoin",
  version: "1.0.0",
  permission: 2,
  credits: "Ryuko Developer",
  description: "Set user's coin balance",
  prefix: false,
  premium: false,
  category: "Admin",
  usages: "setcoin <userID> <amount>",
  cooldowns: 5
};

let userBalance = {};
let maxBalance = 9999999999999999999999;

module.exports.run = async ({ api, event, args }) => {
  if (args.length < 2) {
    api.sendMessage("Invalid syntax. Please use: setcoin <userID> <amount>", event.threadID, event.messageID);
    return;
  }

  let userID = args[0];
  let amount = parseInt(args[1]);

  if (isNaN(amount)) {
    api.sendMessage("Invalid amount.", event.threadID, event.messageID);
    return;
  }

  if (amount > maxBalance) {
    api.sendMessage(`Amount exceeds maximum balance of ${maxBalance}.`, event.threadID, event.messageID);
    return;
  }

  if (amount < 0) {
    api.sendMessage("Amount cannot be negative.", event.threadID, event.messageID);
    return;
  }

  userBalance[userID] = amount;
  api.sendMessage(`Set balance of ${userID} to ${amount}.`, event.threadID, event.messageID);
};
