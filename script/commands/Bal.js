module.exports.config = {
  name: "bal",
  version: "1.0.0",
  permission: 0,
  credits: "Ryuko Developer",
  description: "Check your coin balance",
  prefix: false,
  premium: false,
  category: "fun",
  usages: "bal",
  cooldowns: 5
};

let userBalance = {
  "123456789": 1000 // Example user ID and balance
};

module.exports.run = async ({ api, event }) => {
  let userID = event.senderID;
  let balance = userBalance[userID] || 0;
  api.sendMessage(`💵₱${balance}`, event.threadID, event.messageID);
};
