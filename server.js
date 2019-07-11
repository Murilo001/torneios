const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
//const bootstrap = require('bootstrap');
const path = require('path');
const uri = "<!-- Aqui é a url do banco -->";
const app = express();

MongoClient.connect(uri, (err, client) => {
    // ,,, START SERVER
    app.listen(3000, function() {
        console.log('Estou ouvindo na porta 3000');
    })    
})

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



console.log('Esse é o servidor.');