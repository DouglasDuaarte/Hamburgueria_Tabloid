const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Para servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Para ler dados do formulário (POST)
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('pages/index');
});

// Rota para a página de login
app.get('/login', (req, res) => {
  res.render('/views/pages/login');
});

// Rota para a página de registro
app.get('/login', (req, res) => {
  res.render('/views/pages/register');
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});