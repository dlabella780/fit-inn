import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class UserGymListingEntry extends Component {
    render() { return (
        <div>
            <div>
                <NavLink to="/gyma">Gym A</NavLink>
            </div>
             <div>
                Price: $19/hr<br></br>
                Location: Sacramento, CA<br></br>
                Next Booking: May 14th, 2022<br></br>
            </div>
        </div>
    );}
}
export default UserGymListingEntry;