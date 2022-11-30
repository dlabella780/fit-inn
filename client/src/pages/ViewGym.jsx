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
import Swal from 'sweetalert2';

export const ViewGyms = (props) => {
  const history = useHistory();
  const [gymInfo, setGymInfo] = useState([]);
  const [notActive, setNotActive] = useState(false);
  const equipMap = new Map();
  const [equipmentMap, setEquipmentMap] = useState(new Map());
  const [reservDate, setReservDate] = useState(null);
  const location = useLocation();
  const [numGests, setNumGuests] = useState(1);
  const usr = props.userId;
  const searchAvail = props.props.location.avail;
  let maxGuests = 1;
  if (!location.state) 
    maxGuests = props.props.location.props.numGuestsAllowed

  //-------------------------------------------------------------------------------
  // Allows redirect from GymThumbnail, Reservations, Updating, and Submiting a Gym
  let gymID = '';
  if (location.state) 
    gymID = location.state.gymId;
  else if (props.props.location.props) 
    gymID = props.props.location.props._id || props.props.location.props;
  else if (props.props.location.state.props)
    gymID = props.props.location.state.props;
  //-------------------------------------------------------------------------------

  useEffect(() => {
    Swal.showLoading();
    let gym = 'http://localhost:3001/api/getGym/' + gymID;
    try {
      Axios.get(gym).then((response) => {setGymInfo(response.data.get_Gym);})
      Axios.get('http://localhost:3001/api/listEquipment').then((response) => {
      Swal.close();
      for (let i =0; i < response.data.list_EquipmentItems._EquipmentItems.length; i++) 
        equipMap.set(response.data.list_EquipmentItems._EquipmentItems[i]._id, response.data.list_EquipmentItems._EquipmentItems[i].name);
        setEquipmentMap(equipMap);
      })
      if (location.state) if (!location.state.isActive) setNotActive(true);
      if (searchAvail !== null) setReservDate(searchAvail);
    } catch (error) { console.log(error); alert("Error on Page");}
  },[]);

  const submitGym = () => { try {
    Swal.showLoading();
    Axios.post('http://localhost:3001/api/showGym', {
        id: location.state.gymId
    }).then((response) => {    
      Swal.hideLoading();  
      Swal.fire({confirmButtonColor: '#3F51B5', title: response.data}).then(okay => {history.push('/', {})})
    })} catch (error) { console.log(error); alert("Error on Page");}
  }
  
  const AvailableTimes = (props) => {
    const [day, setDay] = useState(null);
    const [times, setTimes] = useState([]);
    const [formattedTimes, setFormattedTimes] = useState([]);

    const handleChange = (newValue) => {
      const swalDismiss = () => { Swal.fire('Reservation Process Canceled', '', 'warning') ; };
      const swalErr = () => { Swal.fire('Reservation Error', '', 'error'); };

      setDay(newValue);
      let d = new Date(newValue);
      for (let i=0; i<24; i++) {
        for (let j=0; j<props.times.length; j++) {
          if(props.times[j]===d.toJSON())  {
            times.push(props.times[j])
            formattedTimes.push((new Date(props.times[j])).toLocaleTimeString())
            break;
          }
        }
        d.setHours(d.getHours() + 1);
      }
      if (formattedTimes.length !== 0) {
        Swal.fire({
          confirmButtonColor: '#3F51B5', 
          title: 'Select a time!',
          input: 'select',
          inputOptions: { 'Time Slots Available!': formattedTimes },
          showCancelButton: true,
        }).then(res => {
          if (res.isConfirmed) {
            Swal.fire({
              confirmButtonColor: '#3F51B5',
              title: 'How many guests?',
              icon: 'question',
              input: 'range',
              inputAttributes: { min: 1, max: maxGuests, step: 1 },
              inputValue: 1
            }).then(res2 => {
              setNumGuests(res2.value)
              if (res2.isConfirmed) {
                Swal.fire({
                  confirmButtonColor: '#3F51B5',
                  title: '-Confirm Reservation-',
                  showDenyButton: true,
                  confirmButtonText: 'Confirm Reservation',
                  denyButtonText: `Cancel`,
                  html: (new Date(times[res.value])).toLocaleString() + '<br>Guests: ' + res2.value,
                }).then((res3) => {
                  if (res3.isConfirmed) {
                    Swal.fire({
                      confirmButtonColor: '#3F51B5',
                      title: 'Reservation Confirmed!',
                      icon: 'success'
                    }).then((res4) => {
                      setReservDate(times[res.value]);
                      Axios.post('http://localhost:3001/api/AddReservation', {
                        gymId: gymInfo._id,
                        gymName: gymInfo.title,
                        guestId: usr,
                        timeSlot: times[res.value],
                        duration: 60,
                        numGuests: parseInt(numGests)
                      })
                      .then((response) => { 
                        if(response.data) 
                          history.push('/Payments', 
                          { gymInfo: gymInfo, date: props.date, userId: props.userId, numGuests: numGests });
                      })
                    })
                  }
                  else if (res3.isDenied || res3.isDismissed) swalDismiss();
                  else swalErr();
                })
              }
              else if (res2.isDismissed) swalDismiss();
              else swalErr();
            })
          }
          else if (res.isDismissed) swalDismiss();
          else swalErr();
        })
      }
      else Swal.fire({confirmButtonColor: '#3F51B5', title: "No times available that day!"})
    };

    return ( <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Select a day"
          inputFormat="MM/DD/YYYY"
          value={day}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>);
  };

  return ( 
  <div className="view-gym">
    {gymInfo.length === 0 ? <></> :
      <Box sx={{ width: 1000, height: 'flex' }}>
        <Grid container direction="row" justifyContent="space-between" style={{padding: 2}} >
          <Grid item><Typography variant="h2" align="left">{gymInfo.title}</Typography></Grid>
            {notActive ? <>
              <Grid item>
                <Button variant="contained" onClick={() => submitGym()}>
                  <Typography variant="h5" align='center'>Submit Gym</Typography>
                </Button>
                <NavLink to={{pathname: '/GymUpload', state:{ gymId: location.state.gymId}}}>
                  <Typography variant="h5" align='center'>Go Back</Typography>
                </NavLink>
              </Grid>
              </> : <></>
            }
        </Grid>
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
          {gymInfo.photos.map((item, index) => (
            <ImageListItem key={index}><img src={item}/></ImageListItem>
          ))}
        </ImageList>
        <Grid container direction="row" justifyContent="space-between" style={{padding: 2}}>
          <Grid item>
            <Typography variant="h3" align="left">-{gymInfo.description}-</Typography>          
            <Grid container direction="column" style={{padding: 2}} alignItems="flex-start">
              <Grid item>
                <Typography variant="h5" align="left" style={{overflowWrap: 'break-word'}}>
                  Host: {gymInfo.isHostHome  !== true ? " Not " : " "}Home<br></br>
                  Bathroom: {gymInfo.hasBathroom  === true ? "Available" : "Unavailable"}<br></br>
                  Wifi: {gymInfo.hasWifi  === true ? "Available" : "Unavailable"}<br></br>
                  Speakers: {gymInfo.hasSpeakers  === true ? "Available" : "Unavailable"}<br></br>
                  TV: {gymInfo.tvType}<br></br>
                  {/* Notes: {gymInfo.accessInformation}<br></br> */}
                  Booking Notice: {gymInfo.bookingNotice} Hours<br></br>
                  Cancelation Notice: {gymInfo.cancelationWarning} Hours
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item><Typography variant="h3" align="center">-Equipment-</Typography>
              {gymInfo.equipment.map((equip, index) => 
                <Typography variant="h5" align="center" key={index}>
                  {equipmentMap.get(equip.equipmentId)}{' : '}{equip.details}
                </Typography>)}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" style={{padding: 2}} justifyContent="space-between" alignItems="flex-end" spacing={3}>
              <Grid item><Typography variant="h2" align="right">-${gymInfo.cost}/Hour-</Typography></Grid>
              <Grid item align="right">
                <Grid item>
                  <Typography variant="h4" align="center">-Reserve a Time!-</Typography>
                </Grid>
                <AvailableTimes date={reservDate} times={gymInfo.availability} searchAvail={props.props.location.avail}></AvailableTimes>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    }
  </div> )
}