const { user } = require('../config/mongoose');
const User = require('../models/users');
module.exports.profile=function(req,res){
   if(req.cookies.user_id){
       User.findById(req.cookies.user_id,function(err,user){
           if(user){
               return res.render('user_profile',{
                   title:"User Profile",
                   user:user
               })
           }
           else{
               return res.redirect('/users/sign-in');
           }
       });
   }
   else{
       return res.redirect('users/sign-in');
   }
}

//render the user_sign_in
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{ //ejs file to be rendered
        title:"Codial || Sign In"
    })
}

//render the user_sign_up
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// get the sign up data
module.exports.create = function(req, res){
    console.log("req.body --->",req.body);
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


//sign in and create session for user
module.exports.session=function(req,res){
    //steps to authenticatie
    //step1 : Find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log(`Error in finding user`);return;}
         //step 2 : handle user found
        if(user){
            //step 3 : handle password which do not match
              if(user.password!=req.body.password){
                  return res.redirect('back');
              }
              //step 4 :handle create session
              res.cookie('user_id',user.id);
              return res.redirect('/users/profile');
        }
        else{
            return res.redirect('back');
        }
    })
    //step 2 : handle user found
    //step 3 : handle password which do not match
    //step 4 :handle create session
    //step 5 :handle usrr not found
}