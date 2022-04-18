import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import UserGymReservationEntry from "./UserGymReservationEntry";

class UserReservations extends Component {
    render() { return (
        <Fragment>
            <UserGymReservationEntry />
        </Fragment>
    );}
}
export default UserReservations;