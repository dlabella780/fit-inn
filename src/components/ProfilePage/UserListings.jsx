import React, {useState} from "react";
import { gql, useQuery } from "@apollo/client";


const UserListings = (props) => {
    
    const GET_GYMS = gql`
    query MyQuery($eq: String = "018054b3-f513-06be-ba11-5726fa2b1052") {
        list_GymItems(filter: {ownerId: {eq: $eq}}) {
          _GymItems {
            address
            cost
            description
            title
            rating
          }
        }
      }
      
    `;

    const { error, data, loading } = useQuery(GET_GYMS);

    return (
        <div className="user-listings"> 
            {!loading ? data.list_GymItems._GymItems.map((val) => {
                return(
                    <>
                        Title: {val.title}<br/>
                        Cost: {val.cost}<br/>
                        Address: {val.address.split("$$")}<br/>
                        Rating: {val.rating} Stars<br/>
                    </>
                )
            }) : <b>Loading...</b>}
        </div>
    );
}
export default UserListings;