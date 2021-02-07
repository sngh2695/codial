module.exports.home=function(req,res){
    return res.render('home',{
        title:"Home" //this title we are sending to the ejs from our backend controller
    })
}