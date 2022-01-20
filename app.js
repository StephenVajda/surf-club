const createError = require('http-errors');
const express = require('express');
const mongo = require('./middleware/mongo');
const mongoose=require('mongoose');
const app=express();
mongo()
/*
const uri = process.env.MONGODB_URI
try {
  mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
  console.log("connected"));    
  }catch (error) { 
  console.log("could not connect");    
  }
*/
const path = require('path');
//const bodyParser=require('body-parser');
const session = require('express-session');


const passport=require('passport');
const User=require('./models/user');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//Configure passport and sessions
app.use(session({
  secret: 'Shane',
  resave: false,
  saveUninitialized: true
 }));
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Require Routes
const index = require('./routes/index');
const posts = require('./routes/posts');
const reviews = require('./routes/reviews');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mount routes
app.use('/', index);
app.use('/posts', posts);
app.use('/posts/:id/reviews', reviews);
 
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
