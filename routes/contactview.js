let express=require('express');
let router=express.Router();
let ContactModel=require('../models/Contact');

router.get('/:id', (req, res) => {
    ContactModel.findById(req.params.id)
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
});

router.put('/:id',(req,res,next)=>{
    ContactModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
})

router.delete('/:id',(req,res,next)=>{
    ContactModel.findByIdAndRemove(req.params.id) 
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
});

module.exports=router;