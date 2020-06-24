const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/herlpers');

const port = process.env.PORT || 3000;

//definimos un directorio publico
app.use(express.static(__dirname + '/public'));

//Espress hbs engine
app.set('view engine', 'hbs');

//Los Partials son trozos de HTML que se reutilizan en los archivos hbs
//Estos archivos se renderizan como html gracias a node hbs
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'fernando',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
