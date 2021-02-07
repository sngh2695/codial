//Setting up our express server
const express =require('express');
const app = express();
const port=8000;

//setting up our layouts
const expressLayouts=require('express-ejs-layouts');
//to use static files
app.use(express.static('./assets'));
app.use(expressLayouts);


//use express router ,the path from where our home route will be routed.

//setting up our view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the code : ${err}`) // This is called interpolation
    }
    else{
        console.log(`Server is running at ${port} `); 
    }
})