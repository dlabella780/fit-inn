import React, { Component, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import HomePage from "./HomePage";
import GymSearchPage from "./GymSearchPage.jsx";
import GymUploadPage from "./GymUploadPage.jsx";
import HelpPage from "./HelpPage.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import TermsPage from "./TermsPage.jsx";
import NotFound from "./404";
import NavBarTop from "../components/NavBar/NavBarTop.jsx";
import NavBarBottom from "../components/NavBar/NavBarBottom.jsx";
import { ViewGyms } from "./ViewGym"
import { GymA, GymB } from "./GymPages";
import HostsPage from "./HostsPage.jsx";
import GymUsersPage from "./GymUsersPage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import CommunityGuidelinesPage from "./CommunityGuidelinesPage.jsx";
import ContactInfoPage from "./ContactInfoPage.jsx";
import PolicyForGymUsersPage from "./PolicyForGymUsersPage.jsx";
import PolicyForHostsPage from "./PolicyForHostsPage.jsx";
import ProtectionAndInsurancePage from "./ProtectionAndInsurancePage.jsx";
import CreateAccount from "../components/CreateAccount/CreateAccount.jsx";
import Login from "../components/Login/Login.jsx";
import PaymentPage from "./PaymentPage.jsx";
import StripePayment from "../components/PaymentForm/StripeContainer.jsx";
import ReservationsPage from "./ReservationsPage.jsx";
import ContactUsPage from "./ContactUsPage.jsx";
import FAQPage from "./FAQPage.jsx";
import SuccessPaymentPage from "./SuccessPaymentPage.jsx"
import {
    signOut,
    getAuth,
  } from "firebase/auth";
  import Axios from 'axios';

const LandingPage = (props) => {   
    const auth = getAuth();
    const user = auth.currentUser;

  
    useEffect(() => {
        if (props.userId) {
            let userEmail = user.email;
            let userPhoto = user.photoURL;
          let str = 'http://localhost:3001/api/getUser/' + props.userId
          try{
          Axios.get(str).then((response) => {
            if(response.data.get_User.email == ''){
                console.log("No Email")
                Axios.post('http://localhost:3001/api/updateProfile', {
                    street1: response.data.get_User.street1, 
                    street2: response.data.get_User.street2,
                    city: response.data.get_User.city,
                    state: response.data.get_User.state,
                    country: response.data.get_User.country,
                    zipcode: response.data.get_User.zipcode,
                    email: userEmail, 
                    fname: response.data.get_User.fname,
                    lname: response.data.get_User.lname,  
                    phoneNumber: response.data.get_User.phoneNumber,
                    profilePicture: response.data.get_User.profilePicture,
                    id: props.userId 
                }).then(() => {    
            })
            }
                console.log("Updating Profile picture")
                Axios.post('http://localhost:3001/api/updateProfile', {
                    street1: response.data.get_User.street1, 
                    street2: response.data.get_User.street2,
                    city: response.data.get_User.city,
                    state: response.data.get_User.state,
                    country: response.data.get_User.country,
                    zipcode: response.data.get_User.zipcode,
                    email: response.data.get_User.email, 
                    fname: response.data.get_User.fname,
                    lname: response.data.get_User.lname,  
                    phoneNumber: response.data.get_User.phoneNumber,
                    profilePicture: userPhoto,
                    id: props.userId 
            })
          })} catch (error) { console.log(error); alert("Error on Page");}
        } else{console.log("Not Logged In")}
      });

//console.log(props.userData.get_User.email);

    return ( <div>
        <span classnam = "top-nav-bar">
            <NavBarTop userId={props.userId}/>
        </span>
        <span id = "content">
            <Switch>
                <Route exact path={`/`}>
                    <HomePage />
                </Route>
                <Route path={`/GymSearch`}>
                    <GymSearchPage />
                </Route>
                <Route path={`/GymUpload`}>
                    <GymUploadPage userId={props.userId}/>
                </Route>
                <Route path={'/Help'}>
                    <HelpPage />
                </Route>
                <Route path={'/Terms'}>
                    <TermsPage />
                </Route>
                <Route path={'/Privacy'}>
                    <PrivacyPage />
                </Route>
                <Route path={'/pages/ContactUs'}>
                    <ContactUsPage />
                </Route>
                <Route path={'/FAQ'}>
                    <FAQPage />
                </Route>
                <Route path="/ViewGym">
                    <ViewGyms props={props} userId={props.userId}/>
                </Route>
                <Route path="/gyma">
                    <GymA />
                </Route>
                <Route path="/gymb">
                    <GymB />
                </Route>
                <Route path={`/pages/Hosts`}>
                    <HostsPage />
                </Route>
                <Route path={`/pages/GymUsers`}>
                    <GymUsersPage />
                </Route>
                <Route path={`/pages/PolicyForHosts`}>
                    <PolicyForHostsPage />
                </Route>
                <Route path={`/pages/PolicyForGymUsers`}>
                    <PolicyForGymUsersPage />
                </Route>
                <Route path={`/pages/CommunityGuidelines`}>
                    <CommunityGuidelinesPage />
                </Route>
                <Route path={`/pages/ProtectionAndInsurance`}>
                    <ProtectionAndInsurancePage />
                </Route>
                <Route path={`/pages/ContactInfo`}>
                    <ContactInfoPage />
                </Route>
                <Route path={`/Payment`}>
                    <PaymentPage />
                </Route>
                <Route path={'/Profile'}>
                    <ProfilePage userId={props.userId}/>
                </Route>
                <Route path={'/Payments'}>
                    <StripePayment />
                </Route>
                <Route path={'/Register'}>
                    <CreateAccount />
                </Route>
                <Route path={'/Reservations'}>
                    <ReservationsPage />
                </Route>
                <Route path={'/Login'}>
                    <Login userId={props.userId} />
                    </Route>
                <Route path={'/PaymentSuccess'}>
                        <SuccessPaymentPage/>
                 </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </span>
        <span className = "bottom-nav-bar">
            <NavBarBottom />
        </span>
    </div>);
}

export default withRouter(LandingPage);