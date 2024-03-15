const express=require("express");
const router=express.Router();
const Listing = require("../models/listing.js");

const Review=require("../models/review.js");
//Index Route
router.get("/", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  });
  
  //New Route
  router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
  });
  
  //Show Route
  router.get("/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","Listing you requested for does not exist.");
        res.redirect("/listings");
    };
    res.render("listings/show.ejs", { listing });
  });
//Create Route
router.post("/", async (req, res) => {
  const newListing = new Listing(req.body.listing);

  await newListing.save();
  req.flash("success","nEW LISTING created");
  res.redirect("/listings");
});

//Edit Route
router.get("/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error","Listing you requested for does not exist.");
    res.redirect("/listings");
}
  res.render("listings/edit.ejs", { listing });
});

//Update Route
router.put("/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success","listing updated");
  res.redirect(`/listings/${id}`);
});

//Delete Route
router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","NEW LISTING deleted");
  res.redirect("/listings");
});  
module.exports=router;