import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./LandingPage.css";
import SampleOne from "./SamplePageOne";
import SampleTwo from "./SamplePageTwo";
import SampleThree from "./SamplePageThree.jsx";
import NotFound from "./404";
import NavBarTop from "../components/navbar/NavBarTop.jsx";

class LandingPage extends Component {  
  render() {
    return (
        <div>
            <span id = "topNavBar">
                <NavBarTop />
            </span>
            <span id = "content">
                <Switch>
                    <Route path={`/pages/SamplePageOne`}>
                        <SampleOne />
                    </Route>
                    <Route path={`/pages/SamplePageTwo`}>
                        <SampleTwo />
                    </Route>
                    <Route path={`/pages/SamplePageThree`}>
                        <SampleThree />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>            
            </span>
            <span id = "bottomrNavBar">
                
            </span>
        </div>
    );
  }
}
export default withRouter(LandingPage);