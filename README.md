# Fit-Inn - Team Jonathan

![banner](https://raw.githubusercontent.com/dlabella780/fit-inn/main/public/fitinn_vendia.png)

# Table of Contents
- [Synopsis](#synopsis)
- [Vendia](#vendia)
- [Features Implemented in CSC 190](#features-implemented-in-csc-190)
- [Testing](#testing)
- [Deployment](#deployment)
- [Developer](#developer)
- [Agile Timeline For CSC 191](#agile-timeline-for-191)
- [Credits](#credits)

# Synopsis

Fit-Inn is a web-based home gym rental service, designed to allow owners of home gym equipment to rent their space and equipment for financial compensation as well as allowing other users to reserve a time slot at owner's home gyms. The service will facilitate payment, scheduling, and keep track of every user's information via user profiles. Users will log into their profiles using Single Sign-On.

This project also serves as a design reference for developing a full stack web application using Vendia as its database.


# Vendia

Vendia is a proprietary database based on blockchain technology. Projects are labeled as "Universal Applications" or "Unis“. 

Unis are "cross-cloud, cross-party, cross-account, cross-region data and code sharing applications powered by Vendia's serverless distributed ledger technology. A Uni is composed of nodes modeling participants, each of which possesses an ordered, replicated data model in the form of a distributed ledger." 

-Vendia

# Features Implemented in CSC 190

## Functional Features

- Website with redirects to all required pages.
- User profile page that reads information from Vendia database.
- Gym upload page to add a new gym to the database.
- Edit profile page to update user information in the database.

## Frameworks Established

- User account creation.
- Login/Logout capability.
- Gym search page with sorting options.
- Gym listing page displaying relevant gym information.
- Help page with searchable FAQs and links to additional documents.



<img src="https://raw.githubusercontent.com/dlabella780/fit-inn/main/client/public/fitinn_homepage.png" width="1000">

**Home Page shown here with top and bottom navigation bars and quick guide.**

# Testing

Testing was not done during CSC 190; will be expanded upon during CSC 191.

# Deployment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Running this project requires [Node JS](https://nodejs.org/en/).

### `npm install`

This will install all necessary dependencies which are listed in the package.json file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Developer

Website pages can be found in the /src/pages directory. Page components will be located in the /src/components directory in their respective folders. New pages will require a routing be created in the /src/directory/LandingPage.jsx file. Calls to the Vendia database are currently being accomplished using an apollo wrapper on the react application. Database calls will be migrated to a node js backend before or at the start of CSC 191.

# Agile Timeline For 191
 
This is the current timeline for our project. By the end of these sprints we plan to have the following accomplished:

### `Sprint 5 : 8/29 - 9/12`

- Google Maps API implemented.
- Gym upload page completed.
- User profile page completed.

### `Sprint 6 : 9/12 - 9/26`

- Calendar API implemented to manage dates.
- Listed gyms will be updatable.
- Gym search page will be finalized.

### `Sprint 7 : 9/26 - 10/10`

- Users will be able to book gyms.
- Hosts will be able to approve bookings.
- Users will be able to review the gyms they have rented.

### `Sprint 8 : 10/10 - 10/24`

- Host and Users can view and manage reservations.
- Stripe payment API implemented.
- Privacy Policy and terms and coniditions pages implemented.

### `Potential Extra Features`

- Track workout progress.
- Host ability to add tutorials for equipment.

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
### California State University, Sacramento 2022







