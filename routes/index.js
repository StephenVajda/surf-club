var express = require('express');
var router = express.Router();

/* GET posts index page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Surf Shop - Home' });
});

module.exports = router;
