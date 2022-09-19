import React, { Component, Fragment } from "react";
import UploadForm from "../components/GymUpload/UploadForm";
import UploadTab from "../components/GymUpload/UploadTab";

class GymUploadPage extends Component {
    render() { return (
        <Fragment>
            {/* <UploadForm /> */}
            <UploadTab/>
        </Fragment>
    );}
}

export default GymUploadPage;
