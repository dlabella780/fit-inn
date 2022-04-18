import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from '@mui/material/Box';
import "./UserReservations.css";
class UserReservations extends Component {
    render() { return (
        <>
            <div className="GymReserveTitle">
                <h1>Gym Reservations</h1>
            </div>
            <div className="CurrentPastSelection">
            <button className="Button">Current</button>
            <button className="Button">Past</button>
            </div>
            <div className="GuestPanel">  
                <h1>Guest</h1>
                <div className="ReservationPanel">
                    <div className="ReserveComps">
                        <h2>Gym Name</h2>
                        <h2>Date/Time</h2>
                    </div>
                    <div className="ReserveComps">
                        <button className="Button">View Gym</button>
                        <button className="Button">Directions</button>
                        <button className="Button">Manage Reservation</button>
                    </div>
                </div>
                <div className="ReservationPanel">
                    <div className="ReserveComps">
                        <h2>Gym Name</h2>
                        <h2>Date/Time</h2>
                    </div>
                    <div className="ReserveComps">
                        <button className="Button">View Gym</button>
                        <button className="Button">Directions</button>
                        <button className="Button">Manage Reservation</button>
                    </div>
                </div>
                <div className="ReservationPanel">
                    <div className="ReserveComps">
                        <h2>Gym Name</h2>
                        <h2>Date/Time</h2>
                    </div>
                    <div className="ReserveComps">
                        <button className="Button">View Gym</button>
                        <button className="Button">Directions</button>
                        <button className="Button">Manage Reservation</button>
                    </div>
                </div>
            </div>
            <div className="HostPanel">  
            <h1>Host</h1>
                <div className="ReservationPanel">
                    <div className="ReserveComps">
                        <h2>Gym Name</h2>
                        <h2>Date/Time</h2>
                    </div>
                    <div className="ReserveComps">
                        <button className="Button">View Gym</button>
                        <button className="Button">Manage Reservation</button>
                    </div>
                </div>
                <div className="ReservationPanel">
                    <div className="ReserveComps">
                        <h2>Gym Name</h2>
                        <h2>Date/Time</h2>
                    </div>
                    <div className="ReserveComps">
                        <button className="Button">View Gym</button>
                        <button className="Button">Manage Reservation</button>
                    </div>
                </div>
                <div className="ReservationPanel">
                    <div className="ReserveComps">
                        <h2>Gym Name</h2>
                        <h2>Date/Time</h2>
                    </div>
                    <div className="ReserveComps">
                        <button className="Button">View Gym</button>
                        <button className="Button">Manage Reservation</button>
                    </div>
                </div>
            </div>           
        </>
    );}
}
export default UserReservations;
