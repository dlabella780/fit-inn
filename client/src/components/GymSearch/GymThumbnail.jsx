import React from "react";

const GymThumbnail = (props) => {
    return ( <div> 
        {props.data.list_GymItems._GymItems.map((val) => {
            return( <>
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
            </> )
        })} 
    </div> );
}
export default GymThumbnail;