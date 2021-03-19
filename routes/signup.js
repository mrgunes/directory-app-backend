let express = require('express');
let router = express.Router();
let UserModel=require('../models/User')

router.post('/', (req,res,next)=>{
    let name=req.body.name;
    let lastName=req.body.lastName
    let email=req.body.email;
    let password=req.body.password;
    
    let newUser=new UserModel({name, lastName, email, password});
    newUser.save()
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})  
})

module.exports = router;