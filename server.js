const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const setUser = require('./model/setUser');
const getUser = require('./model/getUser');
const listUser = require('./model/listUser');
const cors = require('cors');
const deleteUser = require('./model/deleteUser');
const app = express();

app.use(cors());

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

// FUNCIONANDO - LISTAGEM GERAL
app.get('/usuario', (req, res) => {
    listUser('req.params', (data) => {
        if (data) {
            res.send(data);
        }
    });
})

// FUNCIONANDO - GET BY ID
app.get('/usuario/:userId', (req, res) => {
    console.log(req.params.userId);
    getUser(req.params.userId, (data) => {
        if (data) {
            res.send(data);
        }
    });
})

// Adiciona Usuário
app.post('/usuario/adicionar', (req, res) => {
    console.log(req.body);
    setUser(req.body, (err) => {
        if (err) {
            res.send(`Erro ao cadastrar o usuário: ${req.body.nome}`);
        } else {
            res.send(`Usuário ${req.body.nome} cadastrado com sucesso.`)
        }
    });
});

//Edita usuário
app.post('/usuario/editar/:userId', (req, res) => {
    res.render('index.ejs')
})
 
// Apaga usuário
app.post('/usuario/delete/:userId', (req, res) => {
    console.log(req.params.userId);
    deleteUser(req.params.userId, (data) => {
        if (data) {
            res.send(data);
        }
    });
})

app.listen(3000);
