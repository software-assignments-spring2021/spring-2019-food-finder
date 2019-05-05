//import React from "react";
//import axios from "axios";

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = (5000);
const app = express();
var cors = require('cors');
app.use(cors());
let db;
const router = express.Router();
const Schema = mongoose.Schema;
//const state = require('./Form.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var whitelist = ['http://localhost:3000', 'http://localhost:5000']
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  app.use(cors(corsOptions));

// this is the first test route
app.get("/test", function(request, response){
    console.log('in get /test');
    const location = request.location;

    // our query!
    const query = {
        zipcode: request.query.location,
        cuisine_type: request.query.foodPreference,
        borough: request.query.walkingTime,  
    
    };
    console.log(query);
    // where we query the user inputs in db
   
    //User enters their zipcode, which is not immediately used to search the query
    //Based on whether the user enters info in zipcode or food preference fields
    //Handle the query search in db

    //This is if there's no zipcode, no preference/nothing for cuisine type, no walking Time
    if(query.zipcode == "" && (query.cuisine_type == "" || query.cuisine_type == "No Preference") && (query.borough == "" || query.borough == "No Preference")){
        db.collection("restaurantData").find().limit(5).toArray(function(err, docs)
        {
            if (err)
            {
                console.log("err");
            }
            else{ // if no error is encountered
                // response object that is sending back the db info
            console.log("Server encountered no errors");
            console.log(docs);
                response.status(200).json(docs);
            }
        });
    }

    //This is if there's no zipcode, no preference/nothing for cuisine type, a borough specified
    else if(query.zipcode == "" && (query.cuisine_type == "" || query.cuisine_type == "No Preference") && (query.borough != "No Preference" && query.borough != "Nearby")){
        const newQuery ={
            borough: request.query.walkingTime,
        };
        db.collection("restaurantData").aggregate([{$match: newQuery}, {$sample: {size: 5}}]).toArray(function(err, docs)
        {
            if (err)
            {
                console.log("err");
            }
            else{ // if no error is encountered
                // response object that is sending back the db info
                console.log("Server encountered no errors");
                console.log(docs);
                response.status(200).json(docs);
            }
        });
    }
    
    //This is if there's no zipcode, a food pref, and no borough pref
    else if(query.zipcode == "" && (query.cuisine_type != "" && query.cuisine_type != "No Preference") && query.borough == "No Preference"){
        const newQuery ={
            cuisine_type: request.query.foodPreference,
        };
        db.collection("restaurantData").aggregate([{$match: newQuery}, {$sample: {size: 5}}]).toArray(function(err, docs)
        {
            if (err)
            {
                console.log("err");
            }
            else{ // if no error is encountered
                // response object that is sending back the db info
                console.log("Server encountered no errors");
                console.log(docs);
                response.status(200).json(docs);
            }
        });
    }

    //This is if there's no zipcode, a food pref, and a borough pref
    else if(query.zipcode == "" && (query.cuisine_type != "" && query.cuisine_type != "No Preference") && query.borough != "No Preference"){
        const newQuery ={
            cuisine_type: request.query.foodPreference,
            borough: request.query.walkingTime,
        };
        db.collection("restaurantData").aggregate([{$match: newQuery}, {$sample: {size: 5}}]).toArray(function(err, docs)
        {
            if (err)
            {
                console.log("err");
            }
            else{ // if no error is encountered
                // response object that is sending back the db info
                console.log("Server encountered no errors");
                console.log(docs);
                response.status(200).json(docs);
            }
        });
    }

    //This is if there's a zipcode, no food pref, and nearby
    //Nearby and zipcode should always go together
    else if(query.zipcode != "" && (query.cuisine_type == "" || query.cuisine_type == "No Preference") && query.borough == "Nearby"){
        const newQuery ={
            zipcode: request.query.location,
        };
        db.collection("restaurantData").aggregate([{$match: newQuery}, {$sample: {size: 5}}]).toArray(function(err, docs)
        {
            if (err)
            {
                console.log("err");
            }
            else{ // if no error is encountered
                // response object that is sending back the db info
                console.log("Server encountered no errors");
                console.log(docs);
                response.status(200).json(docs);
            }
        });
    }

    //This is for zipcode and food pref, and nearby
    else if(query.zipcode != "" && (query.cuisine_type != "" && query.cuisine_type != "No Preference") && query.borough == "Nearby"){
        const newQuery ={
            cuisine_type: request.query.foodPreference,
            zipcode: request.query.location,
            //borough: request.query.walkingTime,
        };
        db.collection("restaurantData").aggregate([{$match: newQuery}, {$sample: {size: 5}}]).toArray(function(err, docs)
        {
            if (err)
            {
                console.log("err");
            }
            else{ // if no error is encountered
                // response object that is sending back the db info
                console.log("Server encountered no errors");
                console.log(docs);
                response.status(200).json(docs);
            }
        });
    }

    //This is for zipcode and food pref, and no preference
    else if(query.zipcode != "" && (query.cuisine_type != "" && query.cuisine_type != "No Preference") && query.borough == "No Preference"){
        const newQuery ={
            cuisine_type: request.query.foodPreference,
            zipcode: request.query.location,
            //borough: request.query.walkingTime,
        };
        db.collection("restaurantData").aggregate([{$match: newQuery}, {$sample: {size: 5}}]).toArray(function(err, docs)
        {
            if (err)
            {
                console.log("err");
            }
            else{ // if no error is encountered
                // response object that is sending back the db info
                console.log("Server encountered no errors");
                console.log(docs);
                response.status(200).json(docs);
            }
        });
}

    //This is going to be obsolete, but until we figure out the nearby/zipcode thing, 
    //this allows for freeform entry and reminds the user to make sure zipcode is in borough
    // else{
    //     db.collection("restaurantData").aggregate([{$match: query}, {$sample: {size: 5}}]).toArray(function(err, docs)
    //     {
    //         if (err)
    //         {
    //             console.log("err");
    //         }
    //         else{ // if no error is encountered
    //             // response object that is sending back the db info
    //             console.log("Server encountered no errors");
    //             console.log(docs);
    //             response.status(200).json(docs);
    //         }
    //     });
    // }
});

// template for user information
const userSchema = new Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
})

const User = mongoose.model("User", userSchema, "userData");

// make a post request for registration
app.post("/test2", (req, res) => {
    //console.log("hi");
    console.log("req: " + JSON.stringify(req.body));
    const userObject = {
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password
    };
    
    // finding a username in collection with the given username
    User.findOne({username: userObject.username}, (error, user) => {   
        if (error){
            console.log("Error!");
        } else if (user){ // username already exists
            console.log("User with username " + userObject.username + " already exists inside the collection!");
        } else { // new user! this should add the new user to collection
            const newUser = new User({
                username: userObject.username,
                email: userObject.email,
                password: userObject.password
            })

            newUser.save((error, savedUser) => {
                if (error)
                {
                    console.log('failed' + error);
                }
                
                res.json({
                    user: savedUser // now have access to user
                })
            })
        }
    });

})

// const loginSchema = new Schema({
//     email: {type: String},
//     password: {type: String},
// });

//const oldUser = mongoose.model("oldUser", loginSchema, "userData");
app.get("/test3", function(request, response){
    //console.log(request.loginSchema.email);
    const loginObject = {
        email: request.body.email,
        password: request.body.password,
    };
    console.log(loginObject);
    // db.collection("userData").find().limit(7).toArray(function(err, docs)
    // {
    //     if (err)
    //     {
    //         console.log("err");
    //     }
    //     else{ // if no error is encountered
    //         // response object that is sending back the db info
    //         // console.log("Server encountered no errors");
    //         console.log(docs);
    //         response.status(200).json(docs);
    //     }
    // });

    db.collection("userData").findOne({email: loginObject.email}, (error, user) => {
        if(error){
            console.log("err");
        }

        else if(user){
            console.log("this is the current user's email: " + loginObject.email);
        }
        else{
            console.log("Could not find user");
        } 
    });
    // console.log(userSearch);
    
    // if(userSearch){
    //     const userSearchName = userSearch;
    //     console.log(userSearchName);
    // }


});

const url = "mongodb://localhost/restaurants";
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

// this should always be at the bottom of the file, listening on the port that we define
app.listen(PORT, function(){
    console.log("Running on port: " + PORT);
})
