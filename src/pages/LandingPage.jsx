import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./LandingPage.css";
import HomePage from "./HomePage";
import GymSearchPage from "./GymSearchPage.jsx";
import GymUploadPage from "./GymUploadPage.jsx";
import HelpPage from "./HelpPage.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import TermsPage from "./TermsPage.jsx";
import NotFound from "./404";
import NavBarTop from "../components/NavBar/NavBarTop.jsx";
import NavBarBottom from "../components/NavBar/NavBarBottom.jsx";
import {ViewGyms} from "./ViewGym"
import { GymA, GymB } from "./GymPages";
import ViewGym from "./ViewGym.jsx"
import HostsPage from "./HostsPage.jsx";
import GymUsersPage from "./GymUsersPage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import CommunityGuidelinesPage from "./CommunityGuidelinesPage.jsx";
import ContactInfoPage from "./ContactInfoPage.jsx";
import PolicyForGymUsersPage from "./PolicyForGymUsersPage.jsx";
import PolicyForHostsPage from "./PolicyForHostsPage.jsx";
import ProtectionAndInsurancePage from "./ProtectionAndInsurancePage.jsx";
import CreateAccount from "../components/createAccount/createAccount.jsx";

<com></com>

class LandingPage extends Component {  
    render() { 
        return (
    <div>
        <span id = "topNavBar">
            <NavBarTop />
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
                    <GymUploadPage />
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
                <Route path="/ViewGym">
                    <ViewGyms />
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
                 <Route path={'/Profile'}>
                    <ProfilePage />
                 </Route>
                <Route path={'/Register'}>
                    <CreateAccount />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </span>
        <span id = "bottomrNavBar">
            <NavBarBottom />
        </span>
    </div>
    );}
}
export default withRouter(LandingPage);