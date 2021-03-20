let express = require('express');
let router = express.Router();
let bcrypt=require('bcrypt');
let UserModel=require('../models/User');

router.post('/',(req,res,next)=>{
    let email=req.body.email;
    let password=req.body.password;

    UserModel.findOne({email})
    .then((firstRes)=>{
        if(!firstRes){
            res.json({email:false})
          } else{
            Promise.all([
                firstRes, (bcrypt.compare(password, firstRes.password))
                ])
                .then(([firstResponse, secondResponse])=>{
                    console.log(firstResponse);
                    console.log(secondResponse)
                    res.json([firstResponse,secondResponse])
                })  
          }
    })
    .catch((err)=>{res.json(err)})
})

module.exports = router;
