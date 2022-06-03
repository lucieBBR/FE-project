const cors = require('cors');  // add at the top 
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//for image upload
var fileUpload = require("express-fileupload")
 

var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var animalsRouter = require('./routes/animals');
var regionsRouter = require('./routes/regions');
// var filesRouter = require('./routes/files');  // import/require the routes for files

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());  // add after 'app' is created

// Init express-fileupload and tell it where to temporarily store uploaded files
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/'
    })
);

// Tell Express to serve all public files from the server's 'public' folder
// This does NOT get included in the URL
app.use( express.static('public') );

app.use('/', indexRouter);
// app.use('/files', filesRouter);

app.use('/animals', animalsRouter);
app.use('/regions', regionsRouter);
app.use('/users', usersRouter);
app.use('/', authRouter); 

module.exports = app;
