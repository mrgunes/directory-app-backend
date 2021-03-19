let express = require('express');
let router = express.Router();
let bcrypt=require('bcrypt');
let UserModel=require('../models/User')

router.post('/', (req,res,next)=>{
    let name=req.body.name;
    let lastName=req.body.lastName
    let email=req.body.email;
    let password=req.body.password;

    bcrypt.hash(password,10)
    .then((hash)=>{
        let newUser=new UserModel({name, lastName, email, password:hash});
        newUser.save()
        .then((data)=>{res.json(data)})
        .catch((err)=>{res.json(err)})
    }) 
})

module.exports = router;