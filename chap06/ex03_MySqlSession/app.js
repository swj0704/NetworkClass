var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon')
var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')))

//console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, process.env.DATABASE )

//#region express-mysql-session
var options = {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE
};

var sessionStore = new MySQLStore(options);

app.use(session({
  HttpOnly:true,
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: true     // 세션이 필요하기 전까지는 세션을 구동시키지 않는다(true)
}));

// session 테스트
app.use(function (req, res, next) {
  // 해당 페이지를 몇 번 방문했는지를 기억시킬 객체 생성
  if (!req.session.views){ req.session.views = {} }
 
  // count the views
  req.session.views[req.url] = (req.session.views[req.url] || 0) + 1
  console.log(`req.session.views[req.url]: ${req.session.views[req.url]}`)
  next()
})
//#endregion

app.use('/', indexRouter);
app.use('/users', usersRouter);

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