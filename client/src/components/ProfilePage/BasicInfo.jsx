import React from "react";


function BasicInfo(props) {

    if (props.loading) return "Loading...";

    return (
        <div className="user-basic-info">
            <br/><img src={props.data.get_User.profilePicture} height="200" width="200" display="flex"/><br/>
            Name: {props.data.get_User.fname} {props.data.get_User.lname} <br />
            Phone Number: {props.data.get_User.phoneNumber} <br />
            E-mail: {props.data.get_User.email} <br />
            Address: {props.data.get_User.address} <br/>
        </div>
    );
}
export default BasicInfo;