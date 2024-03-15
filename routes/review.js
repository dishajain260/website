const express=require("express");
const router=express.Router({mergeParams:true});
const Review=require("../models/review.js");
const Listing = require("../models/listing.js");
// reviews
// post  reviewrpute
router.post(("/"),async(req,res)=> {
    let listing= await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","nEW review created");
   res.redirect(`/listings/${listing._id}`)

})

// delete reivew route
router.delete(
   ("/:reviewId") ,
    async(req,res)=>{
        let{ id,reviewId }=req.params;
        await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success","nEW LISTING deleted");
        res.redirect(`/listings/${id}`);
    }
)
module.exports=router;