
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3000;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://localhost/restaurants"
// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});



// this is our create methid
// this method adds new data in our database


// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


var restaurantSchema = mongoose.Schema({
   name: String,
   borough: String,
   building_number: String,
   address: String,
   zipcode: String,
   phone_number:String,
   cuisine_type: String,
   grade: String
});
var Restaurant = mongoose.model("Restaurant", restaurantSchema);


Restaurant.find({zipcode: App.onSubmit().fields.location, cuisine_type: App.onSubmit().fields.foodPreference}.limit(5), 
   function(err, response){
      console.log(response);
});