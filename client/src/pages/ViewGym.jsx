import React, { Component, Fragment } from "react";
import { useTheme } from '@mui/material/styles';
import sampleImage from '../components/ViewGym/gym1.jpg';
import sampleImage2 from '../components/ViewGym/gym2.jpeg';
import sampleImage3 from '../components/ViewGym/gym3.1.jpg';
import { Typography } from "@material-ui/core";
import Axios from 'axios';
import Box from '@mui/material/Box';


export const ViewGyms = () => {

    const theme = useTheme();
    const [gymInfo, setGymInfo] = React.useState([]);
    React.useEffect(() => {
        let str = 'http://localhost:3001/api/getGym/' + '0183a53e-399f-d6d0-7138-547fc0f424c6';
        Axios.get(str).then((response) => {
        setGymInfo(response.data);

    })},[]);
    console.log(gymInfo);

    //Temporary fill-in values if no valid gymInfo is loaded
    return(
        <div className="row-product" style={{}}>
            {gymInfo.length == 0 ?
                <Box sx={{}}>
                    <Typography variant="h4" align="left" style={{padding: 15, color:"black"}}>Title</Typography>
                    <Typography variant="h5" align="left" style={{padding: 5, color:"black"}}>Description Here....</Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Rating: 5</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Zip Code: 99999</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Up to 999 guests allowed</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Host will be home</Typography>
                    </Box>
                    <span id = "images">
                        <Box display="flex" justifyContent="space-between">
                            <img src={sampleImage} alt="Sample Img" height="300" />
                            <Box display="flex" margin="10px">
                                <img src={sampleImage}  alt="Sample Img" height="150" />
                                <img src={sampleImage2}  alt="Sample Img" height="150" />
                                <img src={sampleImage3}  alt="Sample Img" height="150" />
                            </Box>
                        </Box>
                    </span>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Bathroom Available</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Wifi Available</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Speakers Available</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Smart TV Available</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>$87/hr</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Book 99 hours in advance</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Cancel 99 hours in advance</Typography>
                    </Box>
                    <Box display="flex" border="solid" borderRadius="10px">
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Equipment Available:</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Barbells</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Leg Press</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Bench Press</Typography>
                    </Box>
                </Box>
                :
                <Box sx={{}}>
                    <Typography variant="h4" align="left" style={{padding: 15, color:"black"}}>{gymInfo.title}</Typography>
                    <Typography variant="h5" align="left" style={{padding: 5, color:"black"}}>{gymInfo.description}</Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Rating: {gymInfo.rating}</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Zip Code: {gymInfo.zipCode}</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Up to {gymInfo.maxGuests} guests allowed</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Host will {gymInfo.isHostHome === 'false' ? "NOT" : ""} be home</Typography>
                    </Box>
                    <span id = "images">
                        <Box display="flex" justifyContent="space-between">
                            <img src={gymInfo.image} alt="Sample Img" height="300" />
                            <Box display="flex" margin="10px">
                                <img src={gymInfo.image}  alt="Sample Img" height="150" />
                                <img src={gymInfo.image}  alt="Sample Img" height="150" />
                                <img src={gymInfo.image}  alt="Sample Img" height="150" />
                            </Box>
                        </Box>
                    </span>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Bathroom {gymInfo.hasBathroom === 'true' ? "Available" : "Unavailable"}</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Wifi {gymInfo.hasWifi === 'true' ? "Available" : "Unavailable"}</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Speakers {gymInfo.hasSpeakers === 'true' ? "Available" : "Unavailable"}</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>{gymInfo.tvType}</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>${gymInfo.hourlyCost}/hr</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Book {gymInfo.bookHoursAhead} hours in advance</Typography>
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Cancel {gymInfo.cancelHoursAhead} hours in advance</Typography>
                    </Box>
                    <Box display="flex" border="solid" borderRadius="10px">
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Equipment Available: {gymInfo.equipment}</Typography>
                    </Box>
                </Box>
            }
        </div>
    )
}