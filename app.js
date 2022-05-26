const cors = require('cors');  // add at the top 
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 


var indexRouter = require('./routes/index');
var animalsRouter = require('./routes/animals');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());  // add after 'app' is created

app.use('/', indexRouter);
app.use('/animals', animalsRouter);

module.exports = app;
