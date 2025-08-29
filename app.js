const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const path = require("path");   
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils(extra)/ExpressError.js"); 

const listings = require("./routes/listing.js")
const reviews = require("./routes/review.js")

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

app.use("/listings", listings);

app.use("/listings/:id/reviews", reviews)


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
