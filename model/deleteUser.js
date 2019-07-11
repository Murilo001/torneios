const db = require('./db')

function deletarUsuario(idUsuario, callback) {
    db.run(`UPDATE usuario SET ativo = ? WHERE id = ?`, [0, idUsuario], (err) => {
            console.log(err);
            callback(err);
        });
}

module.exports = deletarUsuario;