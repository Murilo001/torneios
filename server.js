const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
//const bootstrap = require('bootstrap');
const path = require('path');
const dbPath = path.resolve(__dirname, 'model/torneio.db')
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

// Precisa da url de cadastrar usuários, de editar, apagar, pegar por id  e listar
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// Lista todos
app.get('/usuario', (req, res) => {
    res.render('index.ejs')
})

// Lista por ID
app.get('/usuario/:userId', (req, res) => {
    console.log(`User id: ${req.params.userId}`);
    return res.send(`User id: ${req.params.userId}`);
    //return res.send(users[req.params.userId]);
})

//Edita usuário
app.get('/usuario/editar/:userId', (req, res) => {
    res.render('index.ejs')
})

// Apaga usuário
app.post('/usuario/delete/:userId', (req, res) => {
    console.log(req.body);
})


let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the torneio database.');
    }
});


db.serialize(function () {
    //db.get(`SELECT name FROM torneio WHERE type='table' AND name='usuario'`, function (err, row) {

    //});
    //db.run(`CREATE TABLE IF NOT EXISTS usuario(id INTEGER primary key, nome TEXT, idade TEXT, ativo INTEGER);`);
    // ALL - Carrega tudo para a memória, EACH - Faz várias requisições, GET - Primeiro registro
    db.each("SELECT id AS id, nome AS nome FROM usuario", function (err, row) {
        if (err) {
            console.error(err.message);    
        } else {
            if (row === undefined) {
                console.log('Não encontrado.');
            } else {
                console.log(row.id + ": " + row.nome);
            }
        }
    });
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});

console.log('Esse é o servidor.');
