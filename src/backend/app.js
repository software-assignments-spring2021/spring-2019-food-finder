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
//const state = require('./Form.js');

// this is the first test route
app.get("/test", function(request, response){

    const location = request.query.location;

    // our query!
    const query = {
        zipcode: request.query.location,
        cuisine_type: request.query.foodPreference,
        //walkingTime: request.query.walkingTime,  
    
    };
    console.log(query);
    // where we query the user inputs in db
   
    //Based on whether the user enters info in zipcode or food preference fields
    //Handle the query search in db
    if(query.zipcode == "" && query.cuisine_type == "" ){
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

    else if(query.zipcode == "" && query.cuisine_type == "No Preference" ){
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
    
    else if(query.zipcode == "" && query.cuisine_type != ""){
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

    else if(query.zipcode != "" && query.cuisine_type == ""){
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

    else if(query.zipcode != "" && query.cuisine_type == "No Preference"){
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

    else{
        db.collection("restaurantData").aggregate([{$match: query}, {$sample: {size: 5}}]).toArray(function(err, docs)
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

// this should always be at the bottom of the file, listening on the port that we define
app.listen(PORT, function(){
    console.log("Running on port: " + PORT);
})
