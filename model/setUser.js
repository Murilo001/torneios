const db = require('./db')

function salvarUsuario(dadosUsuario, callback) {
	db.run('INSERT INTO usuario(id, nome, idade, ativo) VALUES(?, ?, ?, ?)', [dadosUsuario.id, dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.ativo], (any, err) => {
		callback(err);
	});
}

module.exports = salvarUsuario;