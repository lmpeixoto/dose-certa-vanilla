const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const controllers = require('./controllers');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', controllers.getIndex);

app.post('/submit', controllers.calculoDose);

app.get('/resultados', controllers.getResultados);






app.listen(port, () => console.log('Node server initialized on port ' + port));