import React, { useState, Fragment } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";


function UserPayment() {

    const GET_USER = gql`
        query userQuery {
            get_User(id: "018054b3-f513-06be-ba11-5726fa2b1052") {
                paymentMethod
            }
        }
    `;

    const { error, data, loading } = useQuery(GET_USER);

    console.log({ loading, error, data });

    if (loading) return "Loading...";
    if (error) console.log(error);


    return (
        <div>
            Payment Method: {data.get_User.paymentMethod}
        </div>
    );
}
export default UserPayment;