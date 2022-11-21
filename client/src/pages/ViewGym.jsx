import React, {Component,Fragment,useState} from "react";
import { Checkbox, Typography } from "@material-ui/core";
import Axios from 'axios';
import { useLocation, NavLink, useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ViewConfirmation from "../components/ViewConfirmation/ViewConfirmation";
import AvailableTimes from "../components/ViewGym/AvailableTimes";
import { useEffect } from "react";
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ViewGyms = (props) => {
    const history = useHistory();
    const [gymInfo, setGymInfo] = React.useState([]);
    const [notActive, setNotActive] = useState(false);
    const equipMap = new Map();
    const [equipmentMap, setEquipmentMap] = useState(new Map());
    const [date, setDate]=React.useState();
    const timezoneOffset = ((new Date()).getTimezoneOffset())/60;

    const location = useLocation();
    useEffect(() => {
      if (location.state) if (!location.state.isActive) setNotActive(true)
    })

    // This allows a redirect from GymThubnail and Reservations 
    let gymID = '';
    if (location.state)
      gymID = location.state.gymId
    
    else if (props.props.location.props) 
      gymID = props.props.location.props._id || props.props.location.props;
    
    // This allows a redirect from Updating/Submiting a Gym
    else if (props.props.location.state.props)
      gymID = props.props.location.state.props;

    React.useEffect(() => {
      let gym = 'http://localhost:3001/api/getGym/' + gymID;
      try {
        Axios.get(gym).then((response) => {setGymInfo(response.data.get_Gym);})
        Axios.get('http://localhost:3001/api/listEquipment').then((response) => {
        for (let i =0; i < response.data.list_EquipmentItems._EquipmentItems.length; i++) 
          equipMap.set(response.data.list_EquipmentItems._EquipmentItems[i]._id, response.data.list_EquipmentItems._EquipmentItems[i].name);
          setEquipmentMap(equipMap);
        })
      } catch (error) { console.log(error); alert("Error on Page");}
    },[]);

    const submitGym = () => { try {
      Axios.post('http://localhost:3001/api/showGym', {
        id: location.state.gymId
      }).then(   
        alert('Gym Submitted'),
        history.push('/', {})
      )} catch (error) { console.log(error); alert("Error on Page");}
    }
    
    if (props.userId) { return ( 
    <div className="row-product">
      {gymInfo.length === 0 ? 
        <Typography variant="h2" 
          align="left" 
          style={{padding: 15, margin: 10, color:"black"}}>
          Loading...
        </Typography>
        :
        <Box sx={{ width: 900, height: 800 }}>
{console.log(gymInfo)}
            {notActive ? <>
              <Button onClick={() => submitGym()}>Submit Gym</Button>
              <NavLink to={{pathname: '/GymUpload', state:{ gymId: location.state.gymId}}}>Go Back</NavLink>
            </> : <></>}
            <Typography variant="h3" align="left">{gymInfo.title}{' : '}{gymInfo.description}</Typography>
            <Grid container direction="row" 
              spacing={2} sx={{ width: 'flex', height: 'flex' }}
              style={{padding: 2}}>
              <Grid item><Rating name="gym-rating" value={gymInfo.rating} size="large" readOnly/><br/></Grid>
              <Grid item>
                <Grid container direction="row" spacing={.5} style={{padding: 2}}>
                  <Grid item><LocationOnIcon/></Grid>
                  <Grid item><Typography variant="h5"> 
                    {gymInfo.address.street1}
                    {gymInfo.address.street2}{' '}
                    {gymInfo.address.City}{', '}
                    {gymInfo.address.Country === "United States" ? 
                      gymInfo.address.State + ' ' + gymInfo.address.zipcode : 
                      gymInfo.address.Country
                    }
                  </Typography></Grid>
                </Grid>
                </Grid>
              <Grid item>
                <Grid container direction="row" spacing={1} style={{padding: 2}}>
                  <Grid item><PersonAddIcon/></Grid>
                  <Grid item><Typography variant="h5">
                    {'Up to '}{gymInfo.numGuestsAllowed}{' guests allowed!'}
                  </Typography></Grid>
                </Grid>
              </Grid>
            </Grid>

            <ImageList
              variant="quilted"
              cols={2}
              rowHeight={400}
              columnWidth={400}
            >
              {gymInfo.photos.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item}/>
                </ImageListItem>
              ))}
            </ImageList>
            

            <Typography variant="h5">This gym is {gymInfo.isActive === 'false' ? "not" : ""} active</Typography>
            <Typography variant="h5">Host will {gymInfo.isHostHome === 'false' ? "not" : ""} be home</Typography>
            <Typography variant="h5">Bathroom {gymInfo.hasBathroom === 'true' ? "Available" : "Unavailable"}</Typography>
            <Typography variant="h5">Wifi {gymInfo.hasWifi === 'true' ? "Available" : "Unavailable"}</Typography>
            <Typography variant="h5">Speakers {gymInfo.hasSpeakers === 'true' ? "Available" : "Unavailable"}</Typography>
            <Typography variant="h5">TV type available: {gymInfo.tvType}</Typography>
            <Typography variant="h5">${gymInfo.cost}/hr</Typography>
            <Typography variant="h5">Book {gymInfo.bookingNotice} hours in advance</Typography>
            <Typography variant="h5">Cancel {gymInfo.cancelationWarning} hours in advance</Typography>
            <Typography variant="h5">To access: {gymInfo.accessInformation}</Typography>
            <Typography variant="h5">Available Times:</Typography>
            <AvailableTimes setDate = {date} times={gymInfo.availability}></AvailableTimes>
            <Typography variant="h5">Equipment Available:</Typography>
            {gymInfo.equipment.map(equip => 
              <Typography variant="h5">{equipmentMap.get(equip.equipmentId)} {equip.details}</Typography>)}
            <ViewConfirmation gymInfo={gymInfo} date={date} userId={props.userId}/>
        </Box>
      }
    </div> )}
    else{ alert("Not Logged In"); return(<div></div>)}
}