console.log("server workss!!!");

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

//setting
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')//Motor de plantilla integrado en express

//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes/index.js'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//escuchando en puerto
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto', app.get('port'));
});



