let express=require('express');
let router=express.Router();
let ContactModel=require('../models/Contact');

router.post('/:user_id',(req,res,next)=>{
    let user_id=req.params.user_id
    let {nameLastName, email, phone, address, social, company, job, note}=req.body;
    let newContact=new ContactModel({
        user_id, nameLastName, email, phone, address, social, company, job, note
    })
    newContact.save()
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
});

module.exports=router