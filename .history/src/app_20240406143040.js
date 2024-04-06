var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var http = require('http');

var app = express();
var server = http.createServer(app);
var port = 3001;
app.set('port', port);

//require('./config/db')
//todo retirar e estudar melhor forma para isso
// todo nao quero ficar executando toda hora esse comando


// Routes
var routeLogin = require('./routes/login');
var routeGym = require('./routes/gyms');
var routeEvent = require('./routes/eventAPI');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//todo 1. Posso colocar os middlewares diretos aqui. (ROTAS COM TODOS middlewares)
app.use('/login', routeLogin);
app.use('/gym', routeGym); // nessa rota sera colocado middleware p/ professor
//app.use('/events', routeEvent);




// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});



module.exports = app;


