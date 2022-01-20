const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(
            `Connected to Mongo!`,
        );
            
        return mongoose;
    } catch(err){
       console.log("This was the error: " + err);
    }
    
};