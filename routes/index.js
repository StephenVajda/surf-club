var express = require('express');
var router = express.Router();

/* GET posts index page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Surf Shop - Home' });
});
router.get('/register', (req, res, next)=> {
  res.send('GET/register');
});
router.post('/register', (req, res, next)=> {
  res.send('POST/register');
});
router.get('/login', (req, res, next)=> {
  res.send('GET/login');
});
router.post('/login', (req, res, next)=> {
  res.send('POST/login');
});
router.get('/profile', (req, res, next)=> {
  res.send('GET/profile');
});
router.put('/profile/:user_id', (req, res, next)=> {
  res.send('PUT/profile/:user_id');
});
router.get('/forgot', (req, res, next)=> {
  res.send('GET/forgot');
});
router.put('/forgot', (req, res, next)=> {
  res.send('PUT/forgot');
});
router.get('/reset/:token', (req, res, next)=> {
  res.send('GET/reset/:token');
});
router.put('/reset/:token', (req, res, next)=> {
  res.send('PUT/reset/:token');
});
module.exports = router;
