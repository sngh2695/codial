const express = require('express');
const router=express.Router();

//including controller
const homeController=require('../controllers/home_controller');

console.log("Router loaded");

router.get('/',homeController.home);

//any route with /users will be routed to this file
//notice when we redirect to some other route we use "use" ,else we use router.get or router.post etc
router.use('/users',require('./users'));

module.exports=router;