import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class UserGymReservationEntry extends Component {
    render() { return (
        <div>
            <div>
                <NavLink to="/gymb">Gym B</NavLink>
            </div>
             <div>
                Price: $19/hr<br></br>
                Location: Sacramento, CA<br></br>
                Date: May 14th, 2022<br></br>
            </div>
        </div>
    );}
}
export default UserGymReservationEntry;