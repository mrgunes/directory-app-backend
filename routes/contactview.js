let express=require('express');
let router=express.Router();
let ContactModel=require('../models/Contact');

router.get('/:user_id/:id', (req, res) => {
    ContactModel.findById(req.params.user_id, req.params.id)
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
});

router.put('/:user_id/:id',(req,res,next)=>{
    let {nameLastName, email, phone, address, social, company, job, note}=req.body;
    ContactModel.findByIdAndUpdate(req.params.user_id, req.params.id, nameLastName, email, phone, address, social, company, job, note, {new:true})
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
})