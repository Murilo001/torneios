const db = require('./db')

function listarUsuario(req, callback) {
  let sql = `SELECT DISTINCT id,
                  nome, idade, ativo
           FROM usuario
           ORDER BY nome`;

  db.all(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    callback(row);
  });

}

module.exports = listarUsuario;