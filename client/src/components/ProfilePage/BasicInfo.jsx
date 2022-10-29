import React from "react";


function BasicInfo(props) {

    if (props.loading) return "Loading...";

    return (
        <div className="user-basic-info">
            <br/><img src={props.data.get_User.profilePicture} height="200" width="200" display="flex"/><br/>
            Name: {props.data.get_User.fname} {props.data.get_User.lname} <br />
            Phone Number: {props.data.get_User.phoneNumber} <br />
            E-mail: {props.data.get_User.email} <br />
            Street1: {props.data.get_User.address.street1} <br/>
            Street2: {props.data.get_User.address.stree2} <br/>
            City: {props.data.get_User.address.City} <br/>
            State: {props.data.get_User.address.State} <br/>
            Country: {props.data.get_User.address.Country} <br/>
            Zipcode: {props.data.get_User.address.zipcode} <br/>
        </div>
    );
}
export default BasicInfo;