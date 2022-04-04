import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./LandingPage.css";
import SampleOne from "./SamplePageOne";
import SampleTwo from "./SamplePageTwo";
import SampleThree from "./SamplePageThree.jsx";
import GymSearchPage from "./GymSearchPage.jsx";
import GymUploadPage from "./GymUploadPage.jsx";
import HelpPage from "./HelpPage.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import TermsPage from "./TermsPage.jsx";
import NotFound from "./404";
import NavBarTop from "../components/navbar/NavBarTop.jsx";
import NavBarBottom from "../components/navbar/NavBarBottom.jsx";

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
                        <SampleOne />
                    </Route>
                    <Route path={`/pages/GymSearch`}>
                        <GymSearchPage />
                    </Route>
                    <Route path={`/pages/GymUpload`}>
                        <GymUploadPage />
                    </Route>
                    <Route path={'/pages/Help'}>
                        <HelpPage />
                    </Route>
                    <Route path={'/pages/Terms'}>
                        <TermsPage />
                    </Route>
                    <Route path={'/pages/Privacy'}>
                        <PrivacyPage />
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
    );
  }
}
export default withRouter(LandingPage);