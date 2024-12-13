var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var http = require("http");
const bodyParser = require("body-parser");
const compression = require("compression");
const morgan = require("morgan");
const { rateLimit } = require("express-rate-limit");
const { controllAccess } = require("./middleware/Auth");
// Middleware Controll And Response
const { fail } = require("./helpers/response");
// Synchronize with the database
const db = require("../src/config/db");
const cron = require('node-cron');
const backupMySQL = require('./utils/backupMySQL');

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Syncked db.");
  })
  .catch((err) => {
    console.log("Error connecting to database. Error -> " + err);
    process.exit(1);
  });
const app = express();
const server = http.createServer(app);
const initServer = async () => {
  const getPort = (await import("get-port")).default;
  const defaultPort = 3001;
  const port = await getPort({ port: [defaultPort, 3002, 3003] });
  app.set("port", port);
  // Configuration for Rate Limiting
  const limiter = rateLimit({
    windowMs: 105 * 60 * 1000,
    limit: 10000,
    message: "Too many requests from this IP, please try again later.",
  });
  // 15/09 - Futuramente, estabelecer regras de cors.
  const corsOptions = {
    origin: "*", // Permite todas as origens. Para mais segurança, especifique as origens.
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    credentials: true,
  };
  app.use(limiter);
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(cors(corsOptions));
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "uploads")));


  var routeLogin = require("./routes/login");
  var routePayment = require("./routes/registrationAPI");
  var routeFprj = require("./routes/fprjAPI");
  var routeEvent = require("./routes/eventAPI");
  var routeCategory = require("./routes/categoryApi");
  var routeGym = require("./routes/gymAPI");
  var routeAthlet = require("./routes/athletAPI");
  var routeVoucher = require("./routes/voucherAPI");
  var routerToken = require("./routes/tokenTest");
  var routeTypeEvent = require("./routes/typeEventAPI");
  var routeRequest = require("./routes/requestAPI");
  var routerResetPassword = require("./routes/resetPasswordAPI");


  app.use("/registration", routePayment);
  app.use("/category", routeCategory);
  app.use("/events", routeEvent);
  app.use("/gym", routeGym);
  app.use("/fprj", routeFprj);
  app.use("/login", routeLogin);
  app.use("/athlet", routeAthlet);
  app.use("/voucher", controllAccess, routeVoucher);
  app.use("/request", routeRequest);
  app.use("/typeEvent", routeTypeEvent);
  app.use("/resetPassword", routerResetPassword);
  app.use("/token", routerToken);
  app.use("/mail", require("./routes/mailAPI"));

  // Middleware to catch Multer errors
  app.use((err, req, res, next) => {
    if (err.code === "INVALID_FILE_TYPE") {
      return res.status(400).json(fail("Invalid file type"));
    }
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json(fail("File size limit exceeded"));
    }
    next(err);
  });
  app.use((req, res, next) => {
    res.setHeader("Cache-Control", "public, max-age=0");
    next();
  });
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res
      .status(err.status || 500)
      .json(fail("Internal server error. Error -> " + err));
  });

  cron.schedule('0 3 * * 1', () => {
    console.log('Iniciando o backup semanal...');
    backupMySQL();
  });

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

initServer();

module.exports = app;


























 // Schedule task to run every minute
  /*
    cron.schedule('* * * * *', () => {
        console.log('Running task every minute')
        cleanObsoletAthlets({ XDays: 10 });
    });
    */

  // Error handling middleware

/*
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
var port = 3001;

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
app.use('/gym', routeGym);
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

*/

//Configuração do Rate Limiting
//Limita por IP a 100 requisicoes em uma janela de 15 minutos
//https://github.com/express-rate-limit/express-rate-limit
