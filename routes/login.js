let express = require('express');
let router = express.Router();
let bcrypt=require('bcrypt');
let UserModel=require('../models/User');

router.post('/',(req,res,next)=>{
    let email=req.body.email;
    let password=req.body.password;

    UserModel.findOne({email})
    .then((result)=>{
        bcrypt.compare(password, result.password)
        .then((data)=>{res.json(data)})
    })
    .catch((err)=>{res.json(err)})
})

module.exports = router;
