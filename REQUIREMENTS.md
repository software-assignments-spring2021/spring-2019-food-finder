# Food Finder Project Requirements 

## Functional Requirements

- Randomization system that prioritizes closest restaurants
- Provide a list of several randomized places to eat based on user-inputted criteria
- Provide a list of all restaurants that meet user criteria
	- User Criteria: Cuisine Type, Price, Distance, Dietary Restriction
- 1-5 star rating system for restaurants that allows users to leave ratings
- An account system with a log-in that allows users to track restaurants they have been to
- Personalized recommendations based on previous restaurants visited
- Choose between only new restaurants, only restaurants user has been to, or both


## Non-functional Requirements

- Application should maximize uptime (be online and functional at all times)
- Variables should represent purpose behind the name
- Framework:
	- Front End: React.js
	- Back End: Express.js and Node.js
	- Database: MySQL

		
## Stakeholder Interviews:

### Questions
These are the questions we used to guide our conversations with stakeholders:

**Stakeholder as a User Questions:**
- How do you usually decide where to go for food?
	* What do you like about your process?
	* What do you wish you could improve about it (if at all)?
- What are your criteria when searching for a restaurant?
- How long does it usually take you to find a place to eat?
- Are you more likely to stick to restaurants that you are familiar with or do you like to experiment with new places/food?

**Stakeholder as a Project Member Questions:**
- What do you think the objectives are for this project?
- What are some concerns you have for this project?
- What would you like to see from the project?
- Have you had experience with similar software? 
	* What was the experience like? 
	* Where did it help you? 
	* Where did it lack (if at all)?

### Amos Bloomberg
**Looking for Places**

Professor Bloomberg does not really need to look around for lunch, since he brings food from home. In the rare instances he does need to find something, he looks
around the area for food and sometimes asks his friends and colleagues for recommendations. He also sometimes consults Yelp.

**Restaurant Criteria**

The following are criteria that Professor Bloomberg places emphasis on when searching for restaurants:
- Word of mouth; first hand accounts from friends and colleagues
- How healthy the food is
- If the restaurant fits his current needs, depending on the context
	* For example, if he is with his children, is the restaurant child-friendly?

**Experience with Similar Softwares**

Professor Bloomberg has used apps like Yelp in the past and they are useful in the sense that they provide several options given the user's location. They also
have a large user base, so restaurants have reviews that he can browse through. However, Professor Bloomberg does not really like to consult apps like Yelp because 
they give him more options than he knows what to do with and the reviews may or may not be helpful. In this sense, finding a place to eat actually becomes a harder 
task.

In addition, Professor Bloomberg created a similar app in the past. This app took a list of restaurants from a text file and output one at random for the user.
Since working with databases was harder back in those days, there was not much one could really do with a web app, but now there are more capabilities.

**Advice**

Professor Bloomberg's advice to us is to basically consider what the **core functionality** of the web app will be. Once we have that down, then we can start to
plan out the other features. In addition, he advised us to consider Yelp as a competitor and create something that is faster and more direct, potentially even
making the decision for the user. 

**Technology Recommendations**

For our project's purposes, Professor Bloomberg recommends using a MERN Stack to develop it.
- **M**ongoDB for the database
- **E**xpressJS for the backend
- **R**eactJS for the user interface
- **N**odeJS for the backend

These packages are use a lot of JavaScript, but the structure is very widely used, so there is lots of community support available. He emphasizes that if we choose
this Stack, we need to commit time to learning it and understanding it. Perhaps the objective of Sprint 0 could be to set up our environment. 

### Wei-Kai
**Advice**

Wei-Kai advises us to really consider how we want to differentiate our web app from competitors such as Yelp. In addition, he told us to consider how we want to define 
the core functionalities such as the statistics, ranking system, and database schema. Here is what we fleshed out during the interview:
- **Statistics:** the types of restaurants near the user, as well as the types of restaurants in the neighboring areas.
- **Ranking System:** how a user indicates whether he or she enjoyed a restaurant. This will most likely be a star or number system with an option to comment.
- **Database Schema:** if we choose to go with static data, we eliminate a lot of difficulty in the project. The schema would have to include a table for restaurants,
a table for areas, and even a table for the user. 

Wei-Kai believes that the geolocation aspect will probably take us the longest to implement, so he recommends getting the app's other functionalities running first.
When we do get to the geolocation aspect, he recommends that we use GeoJSON.

**Technology Recommendations**

Wei-Kai encourages us to try out DevOps tools like Docker to help us streamline the programming process. He also recommends dedicating some time to learning MERN, if
that is what we wish to use for the project. 



## End-User Observations
We compiled these two personas based on observations of young professionals and college students as they searched for places to eat. Based on what we saw, as well
as what they told us about their food search process, we created the following sections:

- Food Search Process: how the user goes about finding a place to eat
- Criteria/Preferences: what the user is looking for in terms of food
- Goal: what the user wants from their meal experience
- Pains: what the user does not like about the current process
- Gains: what the user likes about their area
- Desires: what the user wishes he or she could do more efficiently

### End-User 1: The Young Professional

![alt text](https://github.com/nyu-software-engineering/food-finder/blob/master/Images/user2.png "Young Professional Persona")

### End-User 2: The College Student
![alt text](https://github.com/nyu-software-engineering/food-finder/blob/master/Images/user1.png "College Student Persona")

## Use Cases

### Use Case 1: 
- Title: Find Restaurant
- Actor: User
- Scenario: User will open Food Finder web application. User will enter his/her location, the maximum mile-radius he/she is willing to travel, price range, and cuisine preference, all presented through the form of drop-down menus. The option to choose “No Preference” for each category also exists. Once preferences are finalized, User enters submit. The web app will display a listing of restaurants that meet all specified criteria. User will select a restaurant from the given list.
Extension: If User logs into his/her account or registers for an account, User can choose the “Randomize” option. Food Finder will then randomly generate one restaurant based on the previous restaurants that the user has already visited.

### Use Case 2: 
- Title: Maintain Web Application
- Actor: System Administrator
- Scenario: Administrator will open and test different features of the web application to ensure that everything is working properly. If Administrator encounters a bug/error, Administrator will notify the developers to fix them as soon as possible.

## Domain Modeling
