const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');
const db=mongoose.connection;

db.on('error',console.error.bind("Error in connecting to MongoDb"));

db.once('open',function(){
    console.log('Connected to Database : MongoDB');
})

module.exports=db;