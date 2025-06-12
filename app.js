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
  res.render('pages/index', {
    bodyClass: 'home-page'
  });
});

// Rota para a página de login
app.get('/login', (req, res) => {
  res.render('pages/login', {
    bodyClass: 'login-page'
  });
});

// Rota para a página de registro
app.get('/register', (req, res) => {
  res.render('pages/register', {
    bodyClass: 'register-page'
  });
});

app.get('/teste', (req, res) => {
  res.render('pages/teste', {
    bodyClass: 'teste-page'
  });
});


// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando no link localhost:3000');
});

