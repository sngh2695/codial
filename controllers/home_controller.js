module.exports.home=function(req,res){
    //accessing cookies
    console.log(req.cookies);
    //we can modify the cookie in the response as well
    return res.render('home',{
        title:"Home" //this title we are sending to the ejs from our backend controller
    })
}