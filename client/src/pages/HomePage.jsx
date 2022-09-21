import React, { Component, Fragment } from "react";
import HowTo from "../components/Descriptions/HowTo";
import SupportEngine from "../components/SupportEngine"

class HomePage extends Component {
    render() { return (
        <Fragment>
            <span id = "HowTo">
              <HowTo/>
            </span>
            <SupportEngine />
        </Fragment>
    );}
}
export default HomePage;