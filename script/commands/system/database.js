const fs = require('fs');
const dbFile = './database';

if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, '{}');

const getDB = () => JSON.parse(fs.readFileSync(dbFile));
const saveDB = (db) => fs.writeFileSync(dbFile, JSON.stringify(db));

module.exports = {
  getBalance: (userID) => getDB()[userID] || 0,
  setBalance: (userID, amount) => {
    let db = getDB();
    db[userID] = amount;
    saveDB(db);
  },
  addBalance: (userID, amount) => {
    let db = getDB();
    db[userID] = (db[userID] || 0) + amount;
    saveDB(db);
  },
  subtractBalance: (userID, amount) => {
    let db = getDB();
    db[userID] = (db[userID] || 0) - amount;
    saveDB(db);
  }
};
