// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const restaurantSchema = new Schema({
    name: String,
    borough: String,
    building_number: String,
    address: String,
    zipcode: String,
    phone_number:String,
    cuisine_type: String,
    grade: String
 });

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Restaurant", restaurantSchema);