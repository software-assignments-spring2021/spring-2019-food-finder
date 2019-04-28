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

app.get("/test2", function(request, response){

    const userInfo = {
        username: request.userInfo.username,
        email: request.userInfo.email,
        password: request.userInfo.password,
    }
    
    console.log(userInfo);
    console.log("hello world");
})

// this is the first test route
app.get("/test", function(request, response){

    const location = request.query.location;

    // our query!
    const query = {
        zipcode: request.query.location,
        cuisine_type: request.query.foodPreference,
        borough: request.query.walkingTime,  
    
    };

    // where we query the user inputs in db
   
    //User enters their zipcode, which is not immediately used to search the query
    //Based on whether the user enters info in zipcode or food preference fields
    //Handle the query search in db

    //This is if there's no zipcode, no preference/nothing for cuisine type, no walking Time
    if(query.zipcode == "" && (query.cuisine_type == "" || query.cuisine_type == "No Preference") && query.borough == "No Preference"){
        db.collection("restaurantData").find().limit(5).toArray(function(err, docs)
        {
            if (err)
            {
                console.log("err");
            }
            else{ // if no error is encountered
                // response object that is sending back the db info
            console.log("Server encountered no errors");
            //console.log(docs);
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
                //console.log(docs);
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
                //console.log(docs);
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
                //console.log(docs);
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
                //console.log(docs);
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
                //console.log(docs);
                response.status(200).json(docs);
            }
        });
    }

    //This is going to be obsolete, but until we figure out the nearby/zipcode thing, 
    //this allows for freeform entry and reminds the user to make sure zipcode is in borough
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
                //console.log(docs);
                //console.log(docs.size);
                if(docs.size == undefined){
                    console.log("Make sure that the zipcode is in your borough!");
                }
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
