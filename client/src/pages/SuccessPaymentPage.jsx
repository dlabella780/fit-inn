import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { send } from "emailjs-com";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';

import { loadFull } from "tsparticles";
import Fireworks from '../components/Particles/Fireworks.js';
import Swal from 'sweetalert2'

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
        Swal.showLoading();
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
                    Swal.close();
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

    return (
        <div className="row-product">
            <Fireworks />
            <Box sx={{
                backgroundColor: 'dark'
            }}>
                {console.log(location)}
                <Typography variant="h2" align="center" style={{padding: 15, color:"black"}}>Payment Successful!</Typography>
                <Typography variant="h4" align="center" style={{padding: 15, color:"black"}}>Your booking of {location.state.gymInfo.title}</Typography>
                <Typography variant="h5" align="center" style={{padding: 15, color:"black"}}>Has been confirmed for {new Date(location.state.date).toLocaleString()}</Typography>
                {location.state.gymInfo.address.Country === "United States" ? 
                    <Typography variant="h5" style={{padding: 15, color:"black"}}> Located at {location.state.gymInfo.address.street1} {location.state.gymInfo.address.street2} {location.state.gymInfo.address.City}, {location.state.gymInfo.address.State} {location.state.gymInfo.address.zipcode}</Typography>
                    :
                    <Typography variant="h5" style={{padding: 15, color:"black"}}> Located at {location.state.gymInfo.address.street1} {location.state.gymInfo.address.street2} {location.state.gymInfo.address.City}, {location.state.gymInfo.address.Country} {location.state.gymInfo.address.zipcode}</Typography>
                } 
                <Box align="center" >
                    <Typography variant="h5" align="center" style={{ padding: 15, color: "black" }}>Need a confirmation e-mail? Enter your e-mail address: </Typography>
                    <TextField id="outlined-basic" variant="outlined" placeholder='yourname@example.com' value={emailParam} onChange={handleChange}/>
                    <p></p><Button size = "large" variant="contained" onClick={onSubmit}>Submit</Button><p></p>
                </Box>
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