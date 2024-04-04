var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')



var app = express();

// view engine setup
// view engine setup
var mustacheExpress = require("mustache-express");
var engine = mustacheExpress();
app.engine("mustache", engine);


// const teste = require('./public')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');


