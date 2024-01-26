const express=require("express")
const router=express.Router()
const User=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const Product = require("../models/product")

//Get products
router.get('/Products',(req,res)=>{
    res.send(product)
})

//Add products
router.post("/add",async(req,res)=>{
    const {name,description,price}=req.body

    const newproduct=new Product({
        name,description,price
    })

  const product= await newproduct.save()

  res.send({msg:"Product added",product})

})

//Delete product
router.delete("/delete/:_id",async(req,res)=>{
    const {_id}=req.params
    const product= await Product.findOneAndDelete({_id})
    res.send({msg:"Product deleted",product})
})

//Edit product
router.put("/edit/:_id",async(req,res)=>{
    const{_id}=req.params
    const product=await Product.findByIdAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:"Product edited",product})
})

//fetch all
router.get("/getall",async(req,res)=>{
    const product=await Product.find()
    res.send({msg:"contact fetched",product})
})

module.exports=router
