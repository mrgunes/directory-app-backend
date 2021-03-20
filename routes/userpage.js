let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');

let UserModel=require('../models/User')

router.get('/:userId', (req,res,next)=>{
    UserModel.aggregate([
        {$match:{_id:mongoose.Types.ObjectId(req.params.userId)}},
        {$lookup:{
            from:'contacts',
            localField:'_id',
            foreignField:'user_id',
            as:'contacts'
        }}
    ])
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
})

module.exports=router;