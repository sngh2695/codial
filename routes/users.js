const express= require('express');
const router=express.Router();

const userController=require('../controllers/user_controller');
const post_controller=require('../controllers/post_controller');

//any get request coming to this route will be controlled by usercontroller
router.get('/profile',userController.profile);

//for users/posts
router.get('/posts',post_controller.posts);


module.exports=router;