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
### To Run NodeJS stuff in the Test folder
1. Make sure you have NodeJS installed on your computer
2. Open up a Terminal/Command Prompt window and make sure that your current directory is "Test"
3. Type:
`node test.js`
4. Open up a web browser and type: localhost:3000

### To Run ReactJS stuff in the Test/my-app folder
1. Make sure you have NodeJS AND ReactJS installed on your computer
2. Open up a Terminal/Command Prompt window and make sure that your current directory is "Test"
3. Type:
`npx create-react-app my-app`
4. Then type:
`cd my-app`
5. Go to the "src" folder in "my-app" and delete the contents.
6. Put the contents of "Test/src" into the "my-app/src" folder
7. Go back ype:
`npm start`
8. The window should automatically load on your web browser.

### Testing 

#### Testing Items in the "Test" Folder
1. Make sure you have Node, Mocha, and Chai installed.
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
