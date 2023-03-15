
const express = require("express")
const mongoose = require("mongoose");

const User = require("../models/userModel")

const router = express.Router();

router.get("/",async (req,res)=>{

    const users = await User.find()
    res.status(200).send(users)
})

router.post("/", async (req,res)=>{
   try{
    const user = await User.create(req.body)
    res.status(200).send(user)
   }
   catch(err){
            res.send(err.message);
   }
})

router.delete("/:id",async (req,res)=>{
    try{
    var id = new mongoose.Types.ObjectId(req.params)
    const user = await User.findByIdAndDelete({_id:id})
    res.send(user)
}catch(err){
    res.send(err.message)
}
})
router.put("/:id",async (req,res)=>{
    try{
        var id = new mongoose.Types.ObjectId(req.params)
    data = req.body
    const user = await User.findByIdAndUpdate({_id:id},
        data,{new:true}
    )
    
    res.send(user)
}catch(err){
    res.send(err.message)
}
})



module.exports = router;