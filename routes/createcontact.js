const { response } = require('express');
let express=require('express');
let router=express.Router();
let ContactModel=require('../models/Contact');

router.post('/',(req,res,next)=>{
    let {nameLastName, email, phone, address, social, company, job, note}=req.body;
    let newContact=new ContactModel({
        nameLastName, email, phone, address, social, company, job, note
    })
    newContact.save()
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
});

module.exports=router