var express = require('express');
var router = express.Router({mergeParams:true});

router.get('/', (req, res, next) => {
  res.send('INDEX posts/:id/reviews');
});

router.post('/', (req, res, next) => {
  res.send('CREATE/reviews');
});

router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT posts/:id/reviews/review_id/edit');
});

router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE posts/:id/reviews/:review_id');
});

router.delete('/:review_id', (req, res, next) => {
  res.send('DELETE posts/:id/reviews/:review_id');
});

module.exports = router;
