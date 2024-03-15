const express=require("express");
const router=express.Router();
// posts
// index user
router.get("/",(req,res)=>{
    res.send("GET for posts.")
})
// show
router.get("/:id",(req,res)=>{
    res.send("GET for  post id.")
})
// post
router.post("/",(req,res)=>{
    res.send("GET for posts.")
})
// delete
router.delete("/:id",(req,res)=>{
    res.send("DELETE for post id.")
})
    module.exports=router;