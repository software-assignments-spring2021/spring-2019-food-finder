//import React from "react";
//import axios from "axios";

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const PORT = (5000);
const app = express();
let db;
const router = express.Router();

// this is the first test route
app.get("/test", function(request, response){

    const location = request.query.location;

    // our query!
    const query = {
        "name": "THINK COFFEE",
        "borough":"MANHATTAN",
        "cuisine_type":"Cafe/Coffee/Tea",
        "zipcode":  "10003"
    }

    // where we query the user inputs in db
    db.collection("restaurantData").find(query).toArray(function(err, docs)
    {
        if (err)
        {
            console.log("err");
        }
        else{ // if no error is encountered
            // response object that is sending back the db info
            response.status(200).json(docs);
        }
    });

    /*
    const testObject = {
        name: "Joe's Pizza",
        zipcode: 10003,
        cuisine: "American"
    }

    // this is where we make a request to the database to retrieve data
     response.status(200).json(testObject);
     */

});

const url = "mongodb://localhost/restaurant";
mongoose.connect(url, function(error, database)
{
    if (error)
    {
        console.log(error);
    } else { // if no error was detected
        db = database;
        console.log("database is good to go!");
    }
});

// this is our get method
// this method fetches all available data in our database
router.get("/test", (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

// componentDidMount() {
//     axios.get('/test/')
//         .then(res => {
//             const query = res.data;
//             this.setState({ query });
//         })
// }

// this should always be at the bottom of the file, listening on the port that we define
app.listen(PORT, function(){
    console.log("Running on port: " + PORT);
})