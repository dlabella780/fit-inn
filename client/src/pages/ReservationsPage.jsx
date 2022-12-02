import React, { Component, Fragment } from "react";
import AddReservation from "../components/ManageReservation/AddReservationPanel.jsx";
import CancelReservation from "../components/ManageReservation/CancelReservationPanel.jsx";

class ReservationsPage extends Component {
    render() { return (
        <Fragment>
        <div>
            <AddReservation/>
        </div>
        <div>
            <CancelReservation/>
        </div>  
        </Fragment>
    );}
}
export default ReservationsPage;