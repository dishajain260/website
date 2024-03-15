const express=require("express");
const router=express.Router();
// users
// index user
router.get("/",(req,res)=>{
    res.send("GET for users.")
})
// show
router.get("/:id",(req,res)=>{
    res.send("GET for  users id.")
})
// post
router.post("/",(req,res)=>{
    res.send("GET for users.")
})
// delete
router.delete("/:id",(req,res)=>{
    res.send("DELETE for users.")
})
module.exports=router;