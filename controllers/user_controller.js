module.exports.profile=function(req,res){
   return res.render('users',{
       posts:"Ths is a sunny day"
   })
}

//render the user_sign_in
module.exports.sign_in=function(req,res){
    return res.render('user_sign_in',{ //ejs file to be rendered
        title:"Codial || Sign In"
    })
}

//render the user_sign_up
module.exports.sign_up=function(req,res){
    return res.render("user_sign_up",{ //ejs file name to be rendered
        title:"Codial || Sign Up"
    })
}

//for user create
module.exports.create=function(req,res){
    //TODO LATER
}

//sign in and create session for user
module.exports.session=function(req,res){
    //TODO LATER
}