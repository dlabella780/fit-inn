import React, {useState} from "react";
import { gql, useQuery } from "@apollo/client";


const UserListings = (props) => {
    
    if (props.loading) return "Loading...";

    return (
        <div className="user-listings"> 
            {props.data.list_GymItems._GymItems.map((val) => {
                return(
                    <>
                        Title: {val.title}<br/>
                        Cost: {val.cost}<br/>
                        Address: <br/>
                        Street1: {val.address.street1} <br/>
                        Street2: {val.address.stree2} <br/>
                        City: {val.address.City} <br/>
                        State: {val.address.State} <br/>
                        Country: {val.address.Country} <br/>
                        Zipcode: {val.address.zipcode} <br/>
                        Rating: {val.rating} Stars<br/>
                    </>
                )
            })}
        </div>
    );
}
export default UserListings;