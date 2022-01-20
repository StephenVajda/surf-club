const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ReviewSchema=new Schema({
body:String,
author: {
    type:Schema.Types.ObjectId,
    Ref:'User'
},
reviews:[{
    type:Schema.Types.ObjectId,
    ref: 'Review'
}],
 
});

module.exports=mongoose.model('Review',ReviewSchema);