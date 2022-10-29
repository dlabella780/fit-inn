import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Checkbox, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import { Link, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';


export default function SuccessPaymentPage(props) {
    const location = useLocation();
    return (
        <div className="row-product">
            <Box>
                <Typography variant="h1" align="center" style={{padding: 15, color:"black"}}>Payment Successful</Typography>
                <Typography variant="h4" align="center" style={{padding: 15, color:"black"}}>You booking of {location.state.gymInfo.title}</Typography>
                <Typography variant="h5" align="center" style={{padding: 15, color:"black"}}>Has been confirmed for {new Date(location.state.date).toLocaleString()}</Typography>
                {location.state.gymInfo.address.Country === "United States" ? 
                    <Typography variant="h5" style={{padding: 15, color:"black"}}> Located at {location.state.gymInfo.address.street1} {location.state.gymInfo.address.street2} {location.state.gymInfo.address.City}, {location.state.gymInfo.address.State} {location.state.gymInfo.address.zipcode}</Typography>
                    :
                    <Typography variant="h5" style={{padding: 15, color:"black"}}> Located at {location.state.gymInfo.address.street1} {location.state.gymInfo.address.street2} {location.state.gymInfo.address.City}, {location.state.gymInfo.address.Country} {location.state.gymInfo.address.zipcode}</Typography>
                } 
                <Box align="center" >
                    <NavLink to="/">
                        <Button>Link for Directions</Button>
                    </NavLink>
                    <NavLink to="/">
                        <Button>Back To Homepage</Button>
                    </NavLink>
                </Box>
            </Box>
        </div>
    );
}

//TODO give page for directions 