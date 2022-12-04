# Fit-Inn - Team Jonathan
![banner](https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_vendia.png)

# Table of Contents
- [Synopsis](#Synopsis)
- [Vendia](#Vendia)
- [Features Implemented](#Features-Implemented)
- [Testing](#Testing)
- [User Manual](#User-Manual)
- [Deployment](#Deployment)
- [Developer](#Developer)
- [Credits](#credits)

# Synopsis
Fit-Inn is a web-based home gym rental service, designed to allow owners of home gym equipment to rent their space and equipment for financial compensation as well as allowing other users to reserve a time slot at owner's home gyms. The service will facilitate payment, scheduling, and keep track of every user's information via user profiles. Users will log into their profiles using Single Sign-On.

This project also serves as a design reference for developing a full stack web application using Vendia as its database.

# Vendia
Vendia is a proprietary database based on blockchain technology. Projects are labeled as "Universal Applications" or "Unis“. 

Unis are "cross-cloud, cross-party, cross-account, cross-region data and code sharing applications powered by Vendia's serverless distributed ledger technology. A Uni is composed of nodes modeling participants, each of which possesses an ordered, replicated data model in the form of a distributed ledger." - Vendia

# Features Implemented
REWORK HERE
### Functional Features
- Website with redirects to all required pages.
- User profile page that reads information from Vendia database.
- Gym upload page to add a new gym to the database.
- Edit profile page to update user information in the database.

REWORK HERE
### Frameworks Established
- User account creation.
- Login/Logout capability.
- Gym search page with sorting options.
- Gym listing page displaying relevant gym information.
- Help page with searchable FAQs and links to additional documents.

<img src="https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_homepage2.png" width="1000">

**Home Page shown here with top and bottom navigation bars and quick guide.**

# Testing
Due to the nature and large scope of our project, we decided that the best and most efficient way to conduct testing was to utilize Selenium IDE to perform automated testing. 

Selenium scripting made the process of testing itself much more streamlined and also benefits any potential future users of Fit-Inn due to the fact that Selenium scripts can be exported and used by multiple programming languages. 

While Fit-Inn was tested utilizing the Selenium IDE, all tests performed were also exported as JavaScript files for integration with other JS testing libraries. 
- These files, along with the raw Selenium (.side) file, are found under `/tests` in the project directory. 
- For more detailed information on testing, please see the System Test Report Document.

# User Manual
PUT USER MANUAL STUFF/DEPLOYMENT/HOW TO RUN HERE

# Deployment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Running this project requires [Node JS](https://nodejs.org/en/).

### `npm install`
This will install all necessary dependencies which are listed in the package.json file.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Developer
Client-side files can be found in the `/client/src` directory broken up into pages and components. 
- Pages can be found in the `/client/src/pages` directory. 
- Components can be found in the `/client/src/components` directory.

Server-side files can be found in the `/server` directory broken up into different endpoints along with our database schema.
- Endpoints can be found in the `/server/endpoints` directory. 
- Fit-Inn's database schema can be found under `/server/fitinn-schema.json`. 

REWORK/REMOVE HERE
New pages will require a routing be created in the /src/directory/LandingPage.jsx file. Calls to the Vendia database are currently being accomplished using an apollo wrapper on the react application. Database calls will be migrated to a NodeJS backend before or at the start of CSC 191.

# Credits
### Fit-Inn was created and developed by *Team Jonathan*:
### `Brett Davis`
### `Dakota LaBella`
### `Matthew Caldwell`
### `Matthew Klaus`
### `Peter Tai Nguyen`
### `Tan Anh Huy Pham`
### `Tony Borsh`
### for Professor Chris Grove and CSC 190-191. 

# California State University, Sacramento 2022