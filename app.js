const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');

const app = express();


// Configuração do EJS

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// Para servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));


// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('pages/index');
});

// Rota para a página de login
app.get('/login', (req, res) => {
  res.render('pages/login');
});

// Rota para a página de registro
app.get('/register', (req, res) => {
  res.render('pages/register');
});

app.get('/teste', (req, res) => {
  res.render('pages/teste');
});



// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando no link localhost:3000');
});

