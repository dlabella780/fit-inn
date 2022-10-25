import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios';
import TextField from "@mui/material/TextField";
import GymThumbnail from "../components/GymSearch/GymThumbnail";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from '@mui/material/Slider';
import { Grid, Typography } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function GymSearchPage() {
  const [gymData, setGymData] = useState([]);
  const [gymDataLoading, setgymDataLoading] = useState(false);
  const [searchZip, setSearchZip] = useState('');
  const [searchAvailability, setSearchAvailability] = useState(null);
  const [updateSearch, setUpdateSearch] = useState(0);
  const [filterMaxPrice, setFilterMaxPrice] = useState(0);
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  
	function searchForGym() {
    Axios.get('http://localhost:3001/api/gymSearch', {
      params: {zipcode: searchZip, avail: ''}})
        .then((response) => { 
          setGymData(response.data); 
          setgymDataLoading(true);
    });
  }
  useEffect(() => {searchForGym()}, [updateSearch]);

  function handleClick(e) {
    setUpdateSearch(updateSearch + e);
    updateTime();
  }

  function updateTime() {
    var formatDay = day.$y + '-' + (day.$M + 1) + '-' + day.$D;
    var formatTime = 'T' + (time.$H < 10 ? ('0' + time.$H) : time.$H) + ':00:00Z';
    setSearchAvailability(formatDay + formatTime);
    console.log(searchAvailability);
  }

  return ( <Fragment>
    <div className="gym-searchbar">
      <Box sx={{display: 'flex', '& > *': {m: 1,}, 
        height: 80, width: 700}}
      >
        <Stack direction="row" spacing={1}>
          <TextField
            id="search-zip"
            label="Where?"
            variant="outlined"
            placeholder="Enter a zip code!"
            size="large"
            value={searchZip} 
            onChange={(e) => setSearchZip(e.target.value)}
            helperText={isNaN(searchZip) ? 'Not a zip.' : ' '}
            error={isNaN(searchZip)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              id="search-day"
              label="What day?"
              inputFormat="MM/DD/YYYY"
              value={day}
              onChange={(e) => {setDay(e)}}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              id="search-time"
              label="What time?"
              value={time}
              minutesStep="60"
              onChange={(e) => {setTime(e)}}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button 
            variant="contained" 
            onClick={(e) => {handleClick(e)}}
            style={{height: '7.1ch'}}
          >
            LETS GO!
          </Button>
        </Stack>
      </Box>
      <Box sx={{display: 'flex', '& > *': {m: 1,}, height: '9ch'}}>
        <Stack direction="column" spacing={1} width="180px">
          <Typography variant="subtitle1">Maximum Hourly Rate</Typography>
          <Slider
            aria-label="max-price"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={(e) => setFilterMaxPrice(e.target.value)}
            style={{left: '8px'}}
          />
        </Stack>
      </Box>
    </div>
    <div className="gym-thumbnails">
      <GymThumbnail 
        gymData={gymData} 
        loading={gymDataLoading} 
        filterMaxPrice={filterMaxPrice}
      />
    </div>
  </Fragment> );
}

export default GymSearchPage;