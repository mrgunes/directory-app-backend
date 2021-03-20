let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let ContactSchema=new Schema({
    user_id:Schema.Types.ObjectId,
    nameLastName:{type:String, required:true},
    email:{type:String},
    phone:{type:String, required:true},
    address:{type:String},
    website:{type:String},
    social:{type:String},
    company:{type:String},
    job:{type:String},
    note:{type:String}
});

module.exports=mongoose.model('contact', ContactSchema)