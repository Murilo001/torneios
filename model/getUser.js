const db = require('./db')

function pegarUsuarioPorId(idUsuario, callback) {
  console.log(idUsuario);
  let sql = `SELECT id,
                  nome, idade, ativo
           FROM usuario
           WHERE id = ?`;

  db.each(sql, [idUsuario], (err, row) => {
    if (err) {
      throw err;
    }
    callback(row);
  });

  db.each(sql, ['USA'], (err, row) => {
    if (err) {
      throw err;
    }
    console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
  });

}

module.exports = pegarUsuarioPorId;