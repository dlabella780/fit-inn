import React, { Component, Fragment } from "react";
import Descriptions from "../components/Descriptions/Descriptions"
import SimpleSearch from "../components/HomePage/SimpleSearch";

class HomePage extends Component {
    render() { return (
        <Fragment>
            <SimpleSearch/>
            <Descriptions/>
        </Fragment>
    );}
}
export default HomePage;