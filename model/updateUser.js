const db = require('./db')

function alterarUsuario(idUsuario, dadosUsuario, callback) {
    db.run(`UPDATE usuario SET nome = ?, idade = ?, ativo = ? WHERE id = ?`, [dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.ativo, idUsuario], (err) => {
            console.log(err);
            callback(err);
    });
}

module.exports = alterarUsuario;