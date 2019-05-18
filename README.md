[![Build Status](https://travis-ci.com/nyu-software-engineering/food-finder.svg?branch=master)](https://travis-ci.com/nyu-software-engineering/food-finder)

# Food Finder

## Project Description

Food Finder is a web app that aims to make finding restaurants more efficient. Users can filter through restaurants using criteria
such as distance from current location, cuisine type, and price, compile a list of all restaurants that they have visited, and even
explore new restaurants in the area through a randomized restaurant selection feature.

## Project History

The concept for Food Finder came about through a desire to just find a place to eat. People waste a lot of time trying to decide where
they want to get food and the entire affair can be painful and irritating. That's when we came in,
a group of Computer Science students attempting to do what software developers do best: automate the process.

## How to Contribute

[Contributing to Food Finder](https://github.com/nyu-software-engineering/food-finder/blob/master/CONTRIBUTING.md)

## Building and Testing

### To Run The App After Downloading the Repository

#### Section 1: Setting up the database
1. Make sure you have MongoDB installed on your computer. Ensure you know how to load data into MongoDB and query it on your computer. 
2. Navigate to **food-finder/Data** and make sure you save the complete paths to **Restaurant-Data.json** and **User-Data.json**
3. Open up a Terminal/Command Prompt window and import the data in with the following commands:

`mongoimport --db restaurants --collection restaurantData --drop --file <the complete path to Restaurant-Data.json from your computer>`

Followed by

`mongoimport --db restaurants --collection userData --drop --file <the complete path to User-Data.json from your computer>`

Here is an example: 
`mongoimport --db restaurants --collection restaurantData --drop --file C:\Users\EnemyField\Documents\Desktop\Agile\Food-Finder\Data\Restaurant-Data.json`

Followed by

`mongoimport --db restaurants --collection userData --drop --file C:\Users\EnemyField\Documents\Desktop\Agile\Food-Finder\Data\User-Data.json`

4. You should now have the database loaded up. Please open up the **restaurants** database and keep it open. 

#### Section 2: Downloading dependencies and running the app
1. Make sure you have Node.js and npm installed on your computer. (npm installation should come with Node.js).
2. Open up a Terminal/Command Prompt window and navigate to the directory that the application is installed in. This should be called **food-finder**.
3. Once you are in the directory, type:
   `npm install`
   This will install the dependencies.
4. After the dependencies have been installed, type:
   `npm start`
5. The development environment should now be started at localhost:3000.

### Testing

#### Testing Items in the "Test" Folder

1. Make sure you have Node, Mocha, and Chai installed
2. Open up a Terminal/Command Prompt window and type:
   `npm install nyc`
   to download and install the code coverage tool. The package.json file should already be updated with this.
3. Download the repository and make sure the "test" folder as well as the validateText.js files are directly in the "Test" folder.
4. Open up a Terminal/Command Prompt window and navigate to the "Test" directory
5. Type in the command:
   `npm test`
6. The test results as well as the code coverage should run.

**Notes:** the function being tested is validateText.js and the unit test is test/validateTest.js

### Check out some other links

[Food Finder Requirements](https://github.com/nyu-software-engineering/food-finder/blob/master/REQUIREMENTS.md)
