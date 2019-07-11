const sqlite3 = require('sqlite3').verbose();
const dbPath = './model/torneio.db';

module.exports = new sqlite3.Database(dbPath)