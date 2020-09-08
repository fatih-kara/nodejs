const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const  fs  = require('fs');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

fs.readdir("./routes", (err, files) => {
  files.forEach(file => {
    app.use("/", require("./routes/" + file));
  });
});

const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerDocs = YAML.load('./swagger.yaml');

var options = {
  explorer: true
};

//swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//db connection
const db = require('./helpers/db.js')();

const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
