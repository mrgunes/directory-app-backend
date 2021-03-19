let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let UserSchema=new Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, minlength:6}
});

module.exports=mongoose.model('user', UserSchema)