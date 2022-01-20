const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const PostSchema=new Schema({
title:String,
price:String,
description:String,
images:[string],
location:string,
lat:Number,
lng:Number,
author: {
    type:Schema.Types.ObjectId,
    Ref:'User'
},
reviews:[{
    type:Schema.Types.ObjectId,
    ref: 'Review'
}],
 
});

module.exports=mongoose.model('Post',PostSchema);