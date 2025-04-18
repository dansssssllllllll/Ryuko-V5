module.exports.config = {
  name: "Daniel", // Command name
  version: "1.0.0", // Command version
  permission: 0, // Permission level (0: all, 1: group admins, 2: bot admins, 3: bot operators)
  credits: "Ryuko Developer", // Creator of the code
  description: "An example command", // Command description
  prefix: false, // Use prefix (true/false)
  premium: false, // Enable premium feature (true/false)
  category: "daniel", // Command category
  usages: "daniel", // Command usage
  cooldowns: . // Cooldown in seconds
};

module.exports.run = async ({ api, event, args, Threads, Users, getText }) => {
  // Send a simple message when the command is executed
  api.sendMessage('are you looking for my owner? sorry busy sya sa bebetime nya', event.threadID, event.messageID);
                  }
