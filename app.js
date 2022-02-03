require('dotenv').config();
const express = require('express');
const engine = require('ejs-mate');  
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/user');
const session = require('express-session');
const methodOverride = require('method-override');

// require routes
const index 	= require('./routes/index');
const posts 	= require('./routes/posts');
const reviews = require('./routes/reviews');

const app = express();
const mongo = require('./middleware/mongo');
// connect to the database
mongo();

//use ejs-locals for all ejs templates
app.engine('ejs', engine);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//set up public assets directory
app.use(express.static('public'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Configure Passport and Sessions
app.use(session({
  secret: 'hang ten dude!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// set default local variables
app.use(function(req,res,next){
  req.user={ //mike:61faf6a0fe8c56f35a82a1c7
    //steve:61f93c04741f577d04f5126c
    '_id':'61faf6a0fe8c56f35a82a1c7',
    password:'abc123' 
  }
  res.locals.currentUser=req.user;
  res.locals.title="Surf Shop";
  //set sucess flash message;
  res.locals.success=req.session.success || '';
  delete req.session.success;
  //set delete flash message
  res.locals.error=req.session.error || '';
  delete req.session.error;
  next();
});
// Mount routes
app.use('/', index);
app.use('/posts', posts);
app.use('/posts/:id/reviews', reviews);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  /*
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');*/
  
  req.session.error=err.message;
  res.redirect('back');

});

module.exports = app;
