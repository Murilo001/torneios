const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'model/torneio.db')
const db = new sqlite3.Database(dbPath);

db.run('INSERT INTO usuario(id, nome, idade, ativo) VALUES(?, ?, ?, ?)', [2, 'Mario Andrade', '10/09/2019', 1], (err) => {
	if(err) {
		return console.log(err.message); 
	}
	console.log(`Row was added to the table: ${this.lastID}`);
})

// close the database connection
db.close();