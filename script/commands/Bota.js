module.exports.config = {
  name: "bot", // Command name
  version: "1.0.0", // Command version
  permission: 3, // Permission level (0: all, 1: group admins, 2: bot admins, 3: bot operators)
  credits: "Ryuko Developer", // Creator of the code
  description: "An example command", // Command description
  prefix: false, // Use prefix (true/false)
  premium: false, // Enable premium feature (true/false)
  category: "nothing", // Command category
  usages: "bot", // Command usage
  cooldowns: 0 // Cooldown in seconds
};

module.exports.run = async ({ api, event, args, Threads, Users, getText }) => {
  // Send a simple message when the command is executed
  api.sendMessage('yes boss Daniel?', event.threadID, event.messageID);
  }
