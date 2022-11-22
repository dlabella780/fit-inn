import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import Axios from 'axios';
import { useLocation, NavLink, useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ViewConfirmation from "../components/ViewConfirmation/ViewConfirmation";
import { useEffect } from "react";
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { Checkbox } from "@material-ui/core";

export const ViewGyms = (props) => {
  const history = useHistory();
  const [gymInfo, setGymInfo] = useState([]);
  const [notActive, setNotActive] = useState(false);
  const equipMap = new Map();
  const [equipmentMap, setEquipmentMap] = useState(new Map());
  const [reservDate, setReservDate] = useState(null);
  const location = useLocation();

  // This allows a redirect from GymThubnail and Reservations 
  let gymID = '';
  if (location.state)
    gymID = location.state.gymId;
  
  else if (props.props.location.props) 
    gymID = props.props.location.props._id || props.props.location.props;
  
  // This allows a redirect from Updating/Submiting a Gym
  else if (props.props.location.state.props)
    gymID = props.props.location.state.props;

  useEffect(() => {
    let gym = 'http://localhost:3001/api/getGym/' + gymID;
    try {
      Axios.get(gym).then((response) => {setGymInfo(response.data.get_Gym);})
      Axios.get('http://localhost:3001/api/listEquipment').then((response) => {
      for (let i =0; i < response.data.list_EquipmentItems._EquipmentItems.length; i++) 
        equipMap.set(response.data.list_EquipmentItems._EquipmentItems[i]._id, response.data.list_EquipmentItems._EquipmentItems[i].name);
        setEquipmentMap(equipMap);
      })
      if (location.state) if (!location.state.isActive) setNotActive(true);
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
  
  const AvailableTimes = (props) => {
    const [day, setDay] = useState(null);
    const [times, setTimes] = useState([]);
    const handleDayChange = (newValue) => {
      setDay(newValue);
      let d = new Date(newValue);
      for (let i=0; i<24; i++) {
        for (let j=0; j<props.times.length; j++) {
          if(props.times[j]===d.toJSON())  {
            times.push(props.times[j])
            break;
          }
        }
        d.setHours(d.getHours() + 1);
      }
    };

    return ( <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Select a day"
          inputFormat="MM/DD/YYYY"
          value={day}
          onChange={handleDayChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      {times.map((t,index) => 
        <Typography key={index} variant="h5" align="right">
          <Checkbox onChange={() => setReservDate(t)}></Checkbox>
          {(new Date(t)).toLocaleTimeString()}
        </Typography>)
      } 
      <Typography variant="h5" align="right">
        {(reservDate === null) ? 'No time selected.' : 
        'Your reserved time: ' + (new Date(reservDate)).toLocaleTimeString()}
      </Typography>
    </>);
  };

  if (props.userId) { return ( 
  <div className="view-gym">
    {gymInfo.length === 0 ? 
      <Typography variant="h2" 
        align="left" 
        style={{padding: 15, margin: 10, color:"black"}}>
        Loading...
      </Typography>
      :
      <Box sx={{ width: 1000, height: 'flex' }}>
        {notActive ? <>
          <Button onClick={() => submitGym()}>Submit Gym</Button>
          <NavLink to={{pathname: '/GymUpload', state:{ gymId: location.state.gymId}}}>Go Back</NavLink>
        </> : <></>}
        <Typography variant="h2" align="left">{gymInfo.title}</Typography>
        <Grid container direction="row" spacing={2} style={{padding: 2}}>
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
        <ImageList variant="quilted" cols={2} rowHeight={400} columnWidth={400}>
          {gymInfo.photos.map((item) => (
            <ImageListItem key={item.img}><img src={item}/></ImageListItem>
          ))}
        </ImageList>
        <Grid container direction="row" justifyContent="space-between" style={{padding: 2}}>
          <Grid item>
            <Typography variant="h3" align="left">{gymInfo.description}</Typography>          
            <Grid container direction="column" style={{padding: 2}} alignItems="flex-start">
              <Grid item>
                <Typography variant="h4" align="left">-Details-</Typography>
              </Grid>
              <Grid item><Typography variant="h5">
                Host: {gymInfo.isHostHome !== 'false' ? " Not " : " "}Home
              </Typography></Grid>
              <Grid item><Typography variant="h5">
                Bathroom: {gymInfo.hasBathroom === 'true' ? "Available" : "Unavailable"}
              </Typography></Grid>
              <Grid item><Typography variant="h5">
                Wifi: {gymInfo.hasWifi === 'true' ? "Available" : "Unavailable"}
              </Typography></Grid>
              <Grid item><Typography variant="h5">
                Speakers: {gymInfo.hasSpeakers === 'true' ? "Available" : "Unavailable"}
              </Typography></Grid>
              <Grid item><Typography variant="h5">
                TV: {gymInfo.tvType}
              </Typography></Grid>
              <Grid item><Typography variant="h5">
                Access Notes: {gymInfo.accessInformation}
              </Typography></Grid>
              <Grid item><Typography variant="h4" align="left">-Equipment-</Typography>
                {gymInfo.equipment.map(equip => 
                  <Typography variant="h5" align="left">
                    {equipmentMap.get(equip.equipmentId)}{' : '}{equip.details}
                  </Typography>)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h2" align="right">${gymInfo.cost}/Hour</Typography>
            <Grid item>
              <Typography variant="h4" align="right">-Availability and Booking-</Typography>
            </Grid>
            <Grid container direction="column" style={{padding: 2}} justifyContent="space-between" alignItems="flex-end" spacing={3}>
              <Grid item><Typography variant="h5" align="right">
                Booking Notice: {gymInfo.bookingNotice} Hours<br></br>
                Cancelation Notice: {gymInfo.cancelationWarning} Hours
              </Typography></Grid>
              <Grid item align="right">
                <AvailableTimes date={reservDate} times={gymInfo.availability}></AvailableTimes>
              </Grid>
              <Grid item>
                <ViewConfirmation gymInfo={gymInfo} date={reservDate} userId={props.userId}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    }
  </div> )}
  else{ alert("Not Logged In"); return(<div></div>)}
}