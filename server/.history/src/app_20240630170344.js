
async function getPortFree() {
    return new Promise(res => {
        const srv = net.createServer();
        srv.listen(0, () => {
            const port = srv.address().port
            srv.close((err) => res(port))
        });
    })
}

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var http = require('http');

const bodyParser = require("body-parser");
const compression = require('compression');
const morgan = require('morgan');
const cron = require('node-cron');

const { rateLimit } = require('express-rate-limit');


const { controllAccess } = require('./middleware/Auth');
const { permissionBothEntities, permissionFRPj, permissionGym } = require('./middleware/permission');

var app = express();
var server = http.createServer(app);
var port = getPortFree();

app.set('port', port);

//Routes
var routeLogin = require('./routes/login');
var routePayment = require('./routes/registrationAPI');
var routeFprj = require('./routes/fprjAPI');
var routeEvent = require('./routes/eventAPI');
var routeCategory = require('./routes/categoryApi');
var routeAddress = require('./routes/addressAPI');
var routeGym = require('./routes/gymAPI');
var routeAthlet = require('./routes/athletAPI');
var routeVoucher = require('./routes/voucherAPI');
var routerToken = require('./routes/tokenTest');
var routeTypeEvent = require('./routes/typeEventAPI');
var routeRequest = require('./routes/requestAPI');
var routerResetPassword = require('./routes/resetPasswordAPI');

//Midleware Controll And Response
const { fail } = require('./helpers/response');

// Sincronizacao com o banco de dados
const db = require('../src/config/db');
//{ force: true }
db.sequelize.sync({ alter: true })
    .then(() => {
        console.log('Syncked db.');
        null;
    }).catch(err => {
        console.log("Error connection database. Error -> " + err)
        process.exit(1)
    })


//Configuração do Rate Limiting
//Limita por IP a 100 requisicoes em uma janela de 15 minutos
//https://github.com/express-rate-limit/express-rate-limit

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: "Too many requests from this IP, please try again later."
});

//require('./uploads')
app.use(limiter);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "uploads")));
//app.use(express.static(path.join(__dirname, "public")));


app.use('/registration', routePayment);
app.use('/category', routeCategory);
app.use('/events', routeEvent);
//app.use('/address', controllAccess, routeAddress); // caiu fora
app.use('/gym', routeGym);
//app.use('/athlets', controllAccess, routeAthlet);
app.use('/fprj', routeFprj); // controllAcess
app.use('/login', routeLogin);
app.use('/athlet', routeAthlet);
app.use('/voucher', controllAccess, routeVoucher);
app.use('/request', routeRequest);
app.use('/typeEvent', routeTypeEvent);
app.use('/resetPassword', routerResetPassword);
app.use('/token', routerToken);
app.use('/mail', require('./routes/mailAPI'));
// Middleware para captura de erros do Multer
app.use((err, req, res, next) => {
    if (err.code === 'INVALID_FILE_TYPE') {
        return res.status(400).json(fail("Invalid file type"));
    }
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json(fail("File size limit exceeded"));
    }
    next(err);
});


//Tarefa a ser executa a cada minuto
//Payment

cron.schedule('* * * * *', () => {
    console.log('Running a task every minute');
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json(fail("Internal server error. Error -> " + err));
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;


