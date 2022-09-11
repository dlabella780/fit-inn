import React, { Component, Fragment } from "react";
import HowTo from "../components/Descriptions/HowTo";

class HomePage extends Component {
    render() { return (
        <Fragment>
            <span id = "HowTo">
              <HowTo/>
            </span>
        </Fragment>
    );}
}
export default HomePage;