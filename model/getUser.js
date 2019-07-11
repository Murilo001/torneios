const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'model/torneio.db')
let db = new sqlite3.Database(dbPath);

 
let sql = `SELECT id,
                  nome
           FROM usuario
           WHERE id  = ?`;
let userid = 1;
 
// first row only
db.get(sql, [userid], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row.id, row.name)
    : console.log(`No user found with the id ${userid}`);
 
});
 
// close the database connection
db.close();