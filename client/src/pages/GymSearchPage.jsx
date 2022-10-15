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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function GymSearchPage() {
  const [gymData, setGymData] = useState([]);
  const [gymDataLoading, setgymDataLoading] = useState(true);
  const [searchZip, setSearchZip] = useState('');
  const [searchAvailability, setSearchAvailability] = useState('');
  const [updateSearch, setUpdateSearch] = useState(0);
  const [filterMaxPrice, setFilterMaxPrice] = useState(0);
  const [time, setTime] = useState(null);
  
	function searchForGym() {
    if (time !== null) convertToVendiaTime();
    Axios.get('http://localhost:3001/api/gymSearch', {
        params: {zipcode: searchZip, day: searchAvailability}}).then((response) => { 
          setGymData(response.data); 
          setgymDataLoading(false);
    });
  }

  function convertToVendiaTime() {
    let year = time.$y;
    let day = time.$D;
    let month = time.$M + 1;
    let str = year+ "-" + day + "-" + month;
    setSearchAvailability('2022-11-01T1:00:00+01:00');
    //VENDIA AVAILABILITY FORMAT "2022-11-01T1:00:00+01:00"
  }

  useEffect(() => {searchForGym()}, [updateSearch]);
  //REMOVE WHEN NOT NEEDED
  //console.log(gymData);

  return ( <Fragment>
    <div className="gym-searchbar">
      <Box sx={{display: 'flex', '& > *': {m: 1,}, 
        height: 80, width: 600}}
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
            <DatePicker
              id="search-day"
              label="When?"
              variant="outlined"
              value={time}
              onChange={(e) => {setTime(e)}}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button 
            variant="contained" 
            onClick={(e) => {setUpdateSearch(updateSearch + e)}}
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