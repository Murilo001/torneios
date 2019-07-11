const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.join(__dirname, './torneio.db');
console.log(dbPath)

module.exports = new sqlite3.Database(dbPath)
