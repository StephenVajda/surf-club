const Post=require('../models/post');
const Review=require('../models/review');


module.exports={
    async reviewCreate(req,res,next){
       //find the post by its id
       let post=await Post.findById(req.params.id);
      //create the post
      //req.body.review.author=req.user._id;
      let review= await Review.create(req.body.review);
      //assign review to post
      post.reviews.push(review);
       //save the post
       post.save(review);
       //redirect to the post
       req.session.success="Review created successfully!";
       res.redirect(`/posts/${post.id}`);
      },
      async reviewUpdate(req,res,next){
       
    },
    async reviewDestroy(req,res,next){
       
    },
    
}