const passport =require('passport');

const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/users')

//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){
    //find user and establish identity
     User.findOne({email:email},function(err,user){
         if(err){
             console.log("error in finding user --->Passport"); 
             done(err);
            }
            if(!user || user.password!=password){
                console.log(`Invalid Username/Password`);
                return done(null,false);
            }
            return done(null,user);

         
     })    

}
))

//serialize the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})

//deserialize the user from the keys in the cookies
passport.serializeUser(function(user,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("Error in finding user ---> Passport");
            return done(err);
        }
        return done(null,user);
    })
})

module.exports=passport;