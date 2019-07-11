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

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
    console.log(req.body);
})

console.log('Esse é o servidor.');