const mongoose=require('mongoose');

const postSchema=new Mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type :mongoose.Schema.Types.ObjectId,
        // reference to the user schema , i.e one user can have multiple posts
        ref:'User'
    }
},{
    timestamps:true
});

const Post=mongoose.model('Post',postSchema);
module.exports=Post;

