import { Checkbox, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Axios from 'axios';
import { send } from "emailjs-com";
import React, { Component, useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Fireworks from '../components/Particles/Fireworks.js';

export default function SuccessPaymentPage(props) {
    const location = useLocation();
    // Parameters to be used in the confirmation e-mail that gets sent.
    // If you add anything to this list, be sure to account for it in the EmailJS template.
    const [emailParam, setEmailParam] = useState('');

    // useEffect(() => {
    //     try {
    //     if (location.state.gymInfo !== undefined) {
    //         Axios.post('http://localhost:3001/api/AddReservation', {
    //             gymId: location.state.gymInfo._id,
    //             gymName: location.state.gymInfo.title,
    //             guestId: location.state.userId,
    //             timeSlot: location.state.date,
    //             duration: 60, //hard coded value, change if we allow for dynamically setting # of hours
    //             numGuests: location.state.numGuests
    //         })
    //             .then((response) => {
    //                 if (!response.data) {
    //                     console.log("ERROR found in Payment Success Page!"); alert("Payment not processed");
    //                 }
    //             })
    //     }}catch (error) { console.log(error); alert("No Gym Selected");}
    // }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        if (location.state.gymInfo !== undefined) {

            send('service_gxe5x7j', 'template_djood08', {
                to_address: emailParam,
                gym_name: location.state.gymInfo.title,
                hourly_rate: location.state.gymInfo.cost,
                duration: (60 / 60), //hard coded value, change if we allow for dynamically setting # of hours
                total_cost: (location.state.gymInfo.cost * (60 / 60)), //same as above, replace (60 / 60) with (duration / 60) as needed
                num_guests: location.state.numGuests
            }, 'ycOoL0tly-4oK2Lej')
                .then((response) => {
                    console.log('Confirmation e-mail sent!', response.status, response.text);
                })
                .catch((error) => {
                    console.log('Error in sending confirmation e-mail.', error);
                });
        }

        
    };

    const handleChange = (e) => {
        setEmailParam(e.target.value);
    }

    // getDirection
    const getDirections = (gymId) => {
        var directionsString = '';
        directionsString += location.state.gymInfo.address.street1 +'+'+ location.state.gymInfo.address.City +'+'+ location.state.gymInfo.address.State +'+'+ location.state.gymInfo.address.zipcode ;
             //redirect with the directions string here
             var link = `https://www.google.com/maps/dir//`+ directionsString
             window.open(link, "_blank");
 
             console.log(directionsString)
             console.log(link)
         
     }


    // Sparticles
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="row-product">
            <Fireworks
                particlesLoaded={particlesLoaded}
                particlesInit={particlesInit}
            />
            <Box sx={{
                backgroundColor: 'dark'
            }}>
                <Typography variant="h2" align="center" style={{padding: 15, color:"white"}}>Payment Successful</Typography>
                <Typography variant="h4" align="center" style={{padding: 15, color:"white"}}>You booking of {location.state.gymInfo.title}</Typography>
                <Typography variant="h5" align="center" style={{padding: 15, color:"white"}}>Has been confirmed for {new Date(location.state.date).toLocaleString()}</Typography>
                {location.state.gymInfo.address.Country === "United States" ? 
                    <Typography variant="h5" style={{padding: 15, color:"white"}}> Located at {location.state.gymInfo.address.street1} {location.state.gymInfo.address.street2} {location.state.gymInfo.address.City}, {location.state.gymInfo.address.State} {location.state.gymInfo.address.zipcode}</Typography>
                    :
                    <Typography variant="h5" style={{padding: 15, color:"white"}}> Located at {location.state.gymInfo.address.street1} {location.state.gymInfo.address.street2} {location.state.gymInfo.address.City}, {location.state.gymInfo.address.Country} {location.state.gymInfo.address.zipcode}</Typography>
                } 
                <Box align="center" >
                    <NavLink to="/">
                        <Button onClick={getDirections}>Link for Directions</Button>
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