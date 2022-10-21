import React from "react";
import { Typography } from "@material-ui/core";
import Axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ViewConfirmation from "../components/ViewConfirmation/ViewConfirmation";

export const ViewGyms = (props) => {
    const [gymInfo, setGymInfo] = React.useState([]);
    let gymID = '';

    // This allows a redirect from GymThubnail
    if (props.props.location.props !== undefined) 
        gymID = props.props.location.props._id;
    
    // This allows a redirect from Updating/Submiting a Gym
    else 
        gymID = props.props.location.state.props;

    React.useEffect(() => {
        let gym = 'http://localhost:3001/api/getGym/' + gymID;
        Axios.get(gym).then((response) => {
        setGymInfo(response.data.get_Gym);
        console.log(gymInfo);
    })},[]);

    return( <div className="row-product" style={{}}>
        {gymInfo.length === 0 ? 
            <Typography variant="h2" 
                align="left" 
                style={{padding: 15, margin: 10, color:"red"}}>
                Invalid Gym Info
            </Typography>
            :
            <Box sx={{}}>
                <Typography variant="h4" align="left" style={{padding: 15, color:"black"}}>{gymInfo.title}</Typography>
                <Typography variant="h5" align="left" style={{padding: 5, color:"black"}}>{gymInfo.description}</Typography>
                <Box display="flex" justifyContent="space-between">
                    {gymInfo.address.Country === "United States" ? 
                        <Typography variant="h5" style={{padding: 15, color:"black"}}> {gymInfo.address.street1} {gymInfo.address.street2} {gymInfo.address.City}, {gymInfo.address.State} {gymInfo.address.zipcode}</Typography>
                        :
                        <Typography variant="h5" style={{padding: 15, color:"black"}}> {gymInfo.address.street1} {gymInfo.address.street2} {gymInfo.address.City}, {gymInfo.address.Country} {gymInfo.address.zipcode}</Typography>
                    } 
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>This gym is {gymInfo.isActive = 'false' ? "not" : ""} active</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Rating: {gymInfo.rating}</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Up to {gymInfo.numGuestsAllowed} guests allowed</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Host will {gymInfo.isHostHome = 'false' ? "not" : ""} be home</Typography>
                </Box>
                <span id = "images">
                    <Box display="flex" justifyContent="space-between">
                        <img src={gymInfo.photos} alt="First" height="300" />
                        <Box display="flex" margin="10px">{
                                gymInfo.photos.map(photograph => <img src={photograph} alt="Other" height="150" />)
                            }
                        </Box>
                    </Box>
                </span>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Bathroom {gymInfo.hasBathroom = 'true' ? "Available" : "Unavailable"}</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Wifi {gymInfo.hasWifi = 'true' ? "Available" : "Unavailable"}</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Speakers {gymInfo.hasSpeakers = 'true' ? "Available" : "Unavailable"}</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>TV type available: {gymInfo.tvType}</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>${gymInfo.cost}/hr</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Book {gymInfo.bookingNotice} hours in advance</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Cancel {gymInfo.cancelationWarning} hours in advance</Typography>
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>To access: {gymInfo.accessInformation}</Typography>
                </Box>
                <Box display="flex" border="solid" borderRadius="10px" margin="10px" justifyContent="left">
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Available Times:</Typography>
                    {gymInfo.availability.map( date => <Typography variant="h5" style={{padding: 15, color:"black"}}>{date}</Typography>)}
                </Box>
                <Box display="flex" border="solid" borderRadius="10px" margin="10px" justifyContent="left">
                    <Typography variant="h5" style={{padding: 15, color:"black"}}>Equipment Available:</Typography>
                    {gymInfo.equipment.map( equip => <Typography variant="h5" style={{padding: 15, color:"black"}}>{equip.equipmentId} {equip.details}</Typography>)}
                </Box>
                
                <ViewConfirmation gymInfo={gymInfo}/>
            </Box>
        }           
    </div> )
}