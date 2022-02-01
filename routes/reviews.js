var express = require('express');
var router = express.Router({mergeParams:true});
const {asyncErrorHandler} = require('../middleware');
const {
  reviewCreate,
  reviewUpdate,
  reviewDestroy

}=require('../controllers/reviews');

router.post('/',asyncErrorHandler(reviewCreate));
router.put('/:review_id', reviewUpdate); 

router.delete('/:review_id',reviewDestroy);  

module.exports = router;
