import React, {Component,Fragment,useState} from "react";
import { Checkbox, Typography } from "@material-ui/core";
import Axios from 'axios';
import { useLocation, NavLink, useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ViewConfirmation from "../components/ViewConfirmation/ViewConfirmation";
import AvailableTimes from "../components/ViewGym/AvailableTimes";
import { useEffect } from "react";

export const ViewGyms = (props) => {
    const location = useLocation();
    const history = useHistory();
    
    const [gymInfo, setGymInfo] = React.useState([]);
    const [notActive, setNotActive] = useState(false);
    

    useEffect(() => {
        if (location.state) {
            if (!location.state.isActive) setNotActive(true);
        }
    },[])
    
    const equipMap = new Map();
    const [equipmentMap, setEquipmentMap] = useState(new Map());

    const [date, setDate]=React.useState();
    let gymID = '';
    const timezoneOffset = ((new Date()).getTimezoneOffset())/60;

    // This allows a redirect from GymThubnail and Reservations 
    if (location.state)
        gymID = location.state.gymId
    
    else if (props.props.location.props) 
        gymID = props.props.location.props._id || props.props.location.props;
    
    // This allows a redirect from Updating/Submiting a Gym
    else if (props.props.location.state.props)
        gymID = props.props.location.state.props;

    React.useEffect(() => {
        let gym = 'http://localhost:3001/api/getGym/' + gymID;
        Axios.get(gym).then((response) => {setGymInfo(response.data.get_Gym);})
        Axios.get('http://localhost:3001/api/listEquipment').then((response) => {
            for (let i =0; i < response.data.list_EquipmentItems._EquipmentItems.length; i++) 
                equipMap.set(response.data.list_EquipmentItems._EquipmentItems[i]._id, response.data.list_EquipmentItems._EquipmentItems[i].name);
            setEquipmentMap(equipMap);
            })
    },[]);

    
    const submitGym = () => {
        Axios.post('http://localhost:3001/api/showGym', {
            id: location.state.gymId
        }).then(   
            alert('Gym Submitted'),
            history.push('/', {})
        )
    }
    

    return( <div className="row-product" style={{}}>
        {gymInfo.length === 0 ? 
            <Typography variant="h2" 
                align="left" 
                style={{padding: 15, margin: 10, color:"black"}}>
                Loading...
            </Typography>
            :
            <Box sx={{}}>
                {notActive ? 
                <><Button onClick={() => submitGym()}>Submit Gym</Button>
                <NavLink to={{pathname: '/GymUpload', state:{ gymId: location.state.gymId}}}>Go Back</NavLink></>
                : <></>}
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
                        <AvailableTimes setDate = {setDate} times={gymInfo.availability}></AvailableTimes>
                </Box>
                <Box display="flex" border="solid" borderRadius="10px" margin="10px" justifyContent="left">
                        <Typography variant="h5" style={{padding: 15, color:"black"}}>Equipment Available:</Typography>
                        {gymInfo.equipment.map( equip => <Typography variant="h5" style={{padding: 15, color:"black"}}>{equipmentMap.get(equip.equipmentId)} {equip.details}</Typography>)}
                    </Box>
                <ViewConfirmation gymInfo={gymInfo} date={date} userId={props.userId}/>
            </Box>
        }           
    </div> )
}