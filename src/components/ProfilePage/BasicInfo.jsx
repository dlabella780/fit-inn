import React, { useState, Fragment } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";


function BasicInfo() {

    const GET_USER = gql`
        query userQuery {
            get_User(id: "018054b3-f513-06be-ba11-5726fa2b1052") {
                address
                email
                fname
                lname
                password
                phoneNumber
                profilePicture
            }
        }
    `;

    const { error, data, loading } = useQuery(GET_USER);

    console.log({ loading, error, data });

    if (loading) return "Loading...";
    if (error) console.log(error);

    /* <img src={data.get_User.profilePicture} height="100" width="100" display="flex" /> <br /> */

    return (
        <div>
            Name: {data.get_User.fname} {data.get_User.lname} <br />
            Password (TESTING ONLY): {data.get_User.password} <br />
        <br />
        Phone Number: {data.get_User.phoneNumber} <br />
        E-mail: {data.get_User.email} <br />
            Address: {data.get_User.address}
        </div>
    );
}
export default BasicInfo;