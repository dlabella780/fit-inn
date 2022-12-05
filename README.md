# Fit-Inn - Team Jonathan
![banner](https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_vendia.png)

# Table of Contents
- [Synopsis](#Synopsis)
- [Vendia](#Vendia)
- [Features](#Features-Implemented)
- [Testing](#Testing)
- [User Manual](#User-Manual)
- [Deployment](#Deployment)
- [Developer](#Developer)
- [Credits](#credits)

# Synopsis
Fit-Inn is a web-based home gym rental service, designed to allow owners of home gym equipment to rent their space and equipment for financial compensation as well as allowing other users to reserve a time slot at owner's home gyms. The service will facilitate payment, scheduling, and keep track of every user's information via user profiles. Users will log into their profiles using Single Sign-On.

This project also serves as a design reference for developing a full stack web application using Vendia as its database.

<img src="https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_homepage2.png" width="1000">

**Home Page shown here with top and bottom navigation bars and quick guide.**

# [Vendia](https://www.vendia.com/)
Vendia is a proprietary database based on blockchain technology. Projects are labeled as "Universal Applications" or "Uni's“. 

Uni's are "cross-cloud, cross-party, cross-account, cross-region data and code sharing applications powered by Vendia's serverless distributed ledger technology. A Uni is composed of nodes modeling participants, each of which possesses an ordered, replicated data model in the form of a distributed ledger." - Vendia

# Features

## Single Sign-On

User's are able to login to our website using their Google accounts. This was done to improve security, and to make it easier for user's to have access to our services. This feature was implemented using Firebase.

## Listing a Gym

User's wishing to host a gym on our website are able to do so by navigating to our list a gym page. Here they will be met with numerous options to list their gym exactly as they have it. They will also be able to choose which days of the week, and which hours of the day they would like their gym to be available on. Once user's supply their information they will be redirected to a live preview of how their gym will look once it's uploaded.

<img src = "https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_gymupload.png" width="1000">

**Fit-Inn's list a gym page.**

## Renting a Gym

User's wishing to rent gyms will first navigate to the find a gym page. Here they will be able to search by either zipcode, available times, or both. They are also able to filter the results by cost per hour, or available equipment.

<img src = "https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_gymsearch.png" width="1000">

**Fit-Inn's find a gym page.**

Once a gym is chosen, they will be redirected to a page to see more detailed specifications of the gym. If like what they see, they can precede to pick a day and time when they would like to book the gym. After that they will be presented with a payment page using the Stipe api to accept their payment. After payment is confirmed they will be redirected to a receipt page with a link to directions and an option field if they would like a receipt sent to their email.

<img src = "https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_viewgym.png" width="1000">

**Fit-Inn's view gym page.**

## User Profile

On the user's profile page they will be able to view every aspect of their Fit-Inn account. There is a tab to view and edit their account details. A tab to manage all of their currently listed gyms, including how to update them or delete them. And a tab to view their current and past gym reservations as either a guest or a host. On this tab they can find navigation links, cancel upcoming reservations, and leave reviews for past reservations. 

<img src = "https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_userprofile.png" width="1000">

**Fit-Inn's user profile page.**

## Miscellaneous

Other features on the site include a help center, a terms of use page, and a privacy page. NOTE: as this project was done as a design reference, any information listed on these pages is merely there to give an example of what an actual owner of this website would need to include. The help center includes articles or guests and hosts, and some common FAQs.

<img src = "https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_helppage.png" width="1000">

**Fit-Inn's help page.**

# Testing
Due to the nature and large scope of our project, we decided that the best and most efficient way to conduct testing was to utilize Selenium IDE to perform automated testing. 

Selenium scripting made the process of testing itself much more streamlined and also benefits any potential future users of Fit-Inn due to the fact that Selenium scripts can be exported and used by multiple programming languages. 

While Fit-Inn was tested utilizing the Selenium IDE, all tests performed were also exported as JavaScript files for integration with other JS testing libraries. 
- These files, along with the raw Selenium (.side) file, are found under `/tests` in the project directory. 
- For more detailed information on testing, please see the [System Test Report](#Documentation).

# Documentation
### [User Manual](https://docs.google.com/document/d/1bM6vBDgiJsclOtrfwWa_AuBSh-aSLoHz8fyVeTTKD6I/edit?usp=sharing)
### [Maintenance Manual](https://docs.google.com/document/d/1xgWF1-b-dDoNSb19Drse4e_Te02qsZ3lUzcenvaSd4A/edit?usp=sharing)
### [System Test Report](https://docs.google.com/document/d/1CZP5cMNgEzrWZ4zrYSLBtM63fk7ONJtj/edit?usp=sharing&ouid=101379446449246529523&rtpof=true&sd=true)

# Deployment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Running this project requires [Node JS](https://nodejs.org/en/).

### `npm install`
This will install all necessary dependencies which are listed in the package.json file. This needs to be done in both the client and server directories.

### `npm start`
Runs the app in the development mode. Needs to be done in both the client and server directories.

Open http://localhost:3000 to view the client in your browser.

The server will be running on http://localhost:3001

The client will reload when you make changes.\
You may also see any lint errors in the console.

The server will need to be restarted everytime a change is made. Alternevtivly your can run the server with the command npm run devStart to automatically reload on changes. However, this may cause some database calls to be run multiple times.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Setting up Environment Files
Both the client and server will need properly labled .env files placed in their main directories.
### Client
- REACT_APP_BACKEND_APP \
This is the link to your back-end web server.
- REACT_APP_FIREBASE_API_KEY
- REACT_APP_FIREBASE_AUTH_DOMAIN
- REACT_APP_FIREBASE_PROJECT_ID
- REACT_APP_FIREBASE_STORAGE_BUCKET
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID
- REACT_APP_FIREBASE_APP_ID
- REACT_APP_FIREBASE_MEASUREMENT_ID \
These are all of the firebase variables you need to set for SSO. See [Firebase](#Firebase-Set-Up) for how to obtain them.
### Server
- GRAPHQL_ENDPOINT
- API_KEY \
These are the two Vendia variables you need to access the database. See [Vendia](#Vendia-Set-Up) for how to obtain them.
- CLIENT_URL
- CLIENT_URL_SECURE \
This is the URL to your front-end website. One is http:// and one is https://
- STRIPE_SK \
This is the key needed to utilize the stripe payment API. See [Stripe](#Stripe-Set-Up) for how to obtain it.
- YADDRESS_KEY \
This is the API key used to verify addresses. See [Yaddress](#Yaddress-Set-Up) for how to obtain it.

## Firebase Set Up
In order to allow Single Sign On, you will need to create a [FireBase Account](https://firebase.google.com/). After the account is created you will need to create a FireBase project for the application. After creating the project you will need to visit the Authentication menu and select the allowed authentication methods.

After this is set up you will need to visit the Project Settings general tab to locate the unique FireBase APIkeys and project ids required to link the application to the Firebase project. These values should be entered into the .ENV files

For more indepth information see Section 2.4 in the [Maintenance Manual](#Documentation)

## Vendia Set Up
First [Create an account with Vendia](https://share.vendia.net/signup). Next, you will need to create a universal application using the create your own template. After giving your application a name and choosing your node settings you will need to provide a JSON schema. Fit-Inn's database schema can be found [here](https://github.com/dlabella780/fit-inn/blob/main/server/fitinn-schema.json). Once your application is created, you can find the *GRAPHQL_ENDPOINT* in the node details tab. To get the *API_KEY* navigate to manage node -> authentication -> add API key.
NOTE: More detailed instructions can be found in Fit-Inn's [Maintenance Manual](#Documentation) in section 6.3.

## Stripe Set Up
In order to facilitate financial transactions, you will need to [create an account on Stripe](http://stripe.com) to receive a set of Stripe API keys, including a public "publishable" key and a "secret" key.
NOTE: See Sections 2.4 of Fit-Inn's [Maintenance Manual](#Documentation) for more details of acquiring keys.

Once you've acquired a set of API keys, you will need to connect them to the Fit-Inn app in order to use Stripe's functionality. While the public publishable key can be used directly in the code, the secret key will need to be populated in the server-side .ENV file. See section 3.2 in the [Maintenance Manual](#Documentation) for more detail about Fit-Inn's usage of .ENV files.

## Yaddress Set Up
Navigate to the [Yaddress API Website](https://www.yaddress.net/Pricing) to create an account and receive your API key. Note: You can get 1,000 free transactions by leaving the API key blank.

## Deploying with AWS
In order to deploy with AWS you will need to [create an account on AWS](https://aws.amazon.com). After creating the account you will want to navigate to AWS Amplify. From there you will link to the GitHub repository containing the cloned Fit-Inn application.

After the GitHub repository is linked you will need to modify the amplify.yml file to include the following commands; npm install env-cmd, and npm run build:prod. Once reviewed and saved, the application should build and deploy.

For more indepth information for deploying see section 4.0 in the [Maintenance Manual](#Documentation)

# Developer
Follow the steps in [Deployment](#Deployment) until the deploying with AWS section to get the project running on localhost.

Client-side files can be found in the `/client/src` directory broken up into pages and components. 
- Pages can be found in the `/client/src/pages` directory. 
- Components can be found in the `/client/src/components` directory.

Server-side files can be found in the `/server` directory broken up into different endpoints along with our database schema. All calls to the Vendia database are done on the server using the endpoints mentioned.
- Endpoints can be found in the `/server/endpoints` directory. 
- Fit-Inn's database schema can be found under `/server/fitinn-schema.json`. 

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
