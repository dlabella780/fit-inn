import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import UserGymListingEntry from "./UserGymEntry"

class UserListings extends Component {
    render() { return (
        <Fragment>
            <UserGymListingEntry />
        </Fragment>
    );}
}
export default UserListings;