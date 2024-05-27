var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var http = require('http');
const bodyParser = require("body-parser");
const compression = require('compression');

var app = express();
var server = http.createServer(app);
var port = 3001;
app.set('port', port);
//app.set('view engine', 'ejs');


// Sincronizacao com o banco de dados
const db = require('../src/config/db');
//{ force: true }
db.sequelize.sync({ alter: true })
    .then(() => {
        console.log('Synced db.')
    }).catch(err => {
        console.log('Failed to sync db: ' + err.message)
    })


//require('./config/db')
//todo retirar e estudar melhor forma para isso
// todo nao quero ficar executando toda hora esse comando


// Routes

/*

var routeRequirements = require('./routes/requirementsAPI');
var routeGym = require('./routes/gymAPI');
var routeStudent = require('./routes/studentAPI');
var routeCategory = require('./routes/categoryApi');
var routeImage = require('./routes/image');

*/



var routeLogin = require('./routes/login');
var routePayment = require('./routes/paymentAPI');
var routeFprj = require('./routes/fprjAPI');
var routeEvent = require('./routes/eventAPI');
var routeCategory = require('./routes/categoryApi');
var routeAddress = require('./routes/addressAPI');
var routeGym = require('./routes/gymAPI');
var routeAthlet = require('./routes/athletAPI');

const routerToken = require('./routes/tokenTest');

var routerJeans = require('./routes/gyms');
const { controllAccess } = require('./middleware/Auth');
//require('./uploads')


// Configurando o body-parser para analisar corpos de requisição codificados em URL

app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "uploads")));
//app.use(express.static(path.join(__dirname, "public")));


//todo 1. Posso colocar os middlewares diretos aqui. (ROTAS COM TODOS middlewares)


/*

app.use('/login', routeLogin);
app.use('/events', controllAccess, routeEvent);
app.use('/students', routeStudent);
app.use('/requirements', routeRequirements);
app.use('/upload', routeImage);
app.use('/jeans', controllAccess, routerJeans);
app.use('/fprj', routeFprj);
app.use('/category', routeCategory);

*/


app.use('/payment', routePayment);
app.use('/category', routeCategory);
app.use('/events', routeEvent);
app.use('/address', routeAddress);
app.use('/gym', routeGym);
app.use('/athlets', routeAthlet);
app.use('/fprj', routeFprj);
app.use('/login', routeLogin);
app.use('/athlet', routeAthlet);


app.use('/token', routerToken);


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


