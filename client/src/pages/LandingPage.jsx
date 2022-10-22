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

const LandingPage = (props) => {  
        
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
    </div>);}
//}
export default withRouter(LandingPage);