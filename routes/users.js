const express= require('express');
const router=express.Router();

const userController=require('../controllers/user_controller');

//any get request coming to this route will be controlled by usercontroller
router.get('/profile',userController.profile);

module.exports=router;