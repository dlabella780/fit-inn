import React, { Component, Fragment } from "react";
import UploadTab from "../components/GymUpload/UploadTab";
import { useLocation } from "react-router-dom";

const GymUploadPage = (props) => {
    
    const location = useLocation();
    const { state } = location;
    

    return (
        <Fragment>
            { state.gymId ? <UploadTab gymId={state.gymId} userId={props.userId}/>: <UploadTab userId={props.userId}/>}
        </Fragment>
    );
};

export default GymUploadPage;
