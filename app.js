const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const controllers = require('./controllers');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', controllers.getIndex);

app.get('/selectEditPA', controllers.getSelectEditPA);

app.post('/selectEditPA', controllers.postSelectEditPA);

app.get('/editPA', controllers.getEditPA);

app.post('/editPA', controllers.postEditPA);

app.post('/dose', controllers.postDose);

app.post('/resultados', controllers.calculoDose);

app.get('/resultados', controllers.getResultados);








app.listen(port, () => console.log('Node server initialized on port ' + port));