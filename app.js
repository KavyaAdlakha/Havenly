const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const Listing = require("../Havenly/models/listing");
const path = require("path");   
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils(extra)/wrapAsync.js")
const ExpressError = require("./utils(extra)/ExpressError.js");
const {listingSchema} = require("./schema.js");

main().then(() => {
    console.log("connected to DB")
})
.catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/havenly")
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
    res.send("hello")
});

// app.get("/testListing", async (req,res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the lake",
//         price: 1200,
//         location: "Calangute Goa",
//         country: "India"
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing")
// });

const validatelisting = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else{
        next();
    }
}

//index route------------------------------>

app.get("/listings", wrapAsync(async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
})
);

//new route----------------------------->

app.get("/listings/new", (req,res) => {
    res.render("listings/new.ejs")
})

//create route-------------------------->

app.post("/listings", validatelisting,  wrapAsync(async (req,res,next) => {
    // let {title, description, image, price, location, country} = req.body;
        const newListing  = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
})
);

//show routee------------------------>

app.get("/listings/:id", wrapAsync(async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing})
})
);

//edit route---------------------------->

app.get("/listings/:id/edit", wrapAsync(async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing})
})
);

//update route------------------------------>

app.put("/listings/:id", validatelisting, wrapAsync(async (req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
})
);

//delete route---------------------------->

app.delete("/listings/:id", wrapAsync(async (req,res) => {
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing)
    res.redirect("/listings");
})
);

//error handling to random all pages othe rthan websites 
app.use((req,res,next) => {
    next(new ExpressError(404, "Page Not Found!"));
});


// custom error handling middleware

app.use((err,req,res,next) => {
    let {status=500, message="Something Went Wrong"} = err;
    res.status(status).render("error.ejs", {err});
})

app.listen(8080, () => {
    console.log("server is listening to port 8080");
})
