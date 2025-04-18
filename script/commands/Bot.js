module.exports.config = {
  name: "bot", // Command name
  version: "1.0.0", // Command version
  permission: 4, // Permission level (0: all, 1: group admins, 2: bot admins, 3: bot operators)
  credits: "Ryuko Developer", // Creator of the code
  description: "hahaha", // Command description
  prefix: false, // Use prefix (true/false)
  premium: false, // Enable premium feature (true/false)
  category: "bot", // Command category
  usages: "bot", // Command usage
  cooldowns: 1 // Cooldown in seconds
};

module.exports.run = async ({ api, event, args, Threads, Users, getText }) => {
  // Send a simple message when the command is executed
  api.sendMessage('ano boss?', event.threadID, event.messageID);
  }
