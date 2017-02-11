var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var ss_data = require();
//var users = require('./routes/users');

var app = express();



app.use(logger('dev'));       //will show logs of express
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



//express midle ware
app.use(express.static(path.join(__dirname, 'public')));

app.use('/data', require('./routes/uiData.js'));    
console.log(__dirname);

//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

const port	= process.env.PORT || 7120;
const hostname	= process.env.NODE_ENV || 'localhost';

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
