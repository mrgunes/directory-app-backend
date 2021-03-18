let mongoose=require('mongoose');
require('dotenv').config();
let password=process.env.PASSWORD

module.exports=()=>{
    mongoose.connect(`mongodb+srv://${password}@cluster0.oerex.mongodb.net/directoryapp`, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.on("open",()=>{console.log("MongoDB connected.")});
    mongoose.connection.on("error",(err)=>{console.log("MongoDB connection failed:",err)});
}