const db = require('./db')

function salvarUsuario(dadosUsuario, callback) {
	db.run('INSERT INTO usuario(nome, idade, ativo) VALUES(?, ?, ?)', [dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.ativo], (err) => {
		console.log(err);
		callback(err);
	});
}

module.exports = salvarUsuario;