const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); // indicamos que usaremos ejs
app.set('views',path.join(__dirname,'views'));
//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));






app.listen(app.get('port'), ()=> {
    console.info(`Servidor en el puerto ${app.get('port')}`.green);
});

