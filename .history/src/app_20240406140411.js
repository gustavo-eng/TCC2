var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var http = require('http');


//require('./config/db')
//todo retirar e estudar melhor forma para isso
// todo nao quero ficar executando toda hora esse comando
//Syncronizado todos os modelos de uma vez so
// Alterar essa execucao para a rota principal
/*
(async () => {
    console.log(`funcao imediatamente invocada`)
    const database = await require('./config/db');
    const event = require('./model/event');
    await database.sync();
})();
*/

// Routes
var routeLogin = require('./routes/login');
var routeGym = require('./routes/gyms');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//todo 1. Posso colocar os middlewares diretos aqui. (ROTAS COM TODOS middlewares)
app.use('/login', routeLogin);
app.use('/gym', routeGym); // nessa rota sera colocado middleware p/ professor





// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


/* Executing   backend development */
//var port = normalizePort(process.env.PORT || '3333');

var port = 3001;
app.set('port', port);
var server = http.createServer(app);
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

/* Executing   backend development */


module.exports = app;


