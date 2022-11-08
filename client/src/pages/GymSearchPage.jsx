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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function GymSearchPage() {
  const [gymData, setGymData] = useState([]);
  const [gymDataLoading, setgymDataLoading] = useState(false);
  const [searchZip, setSearchZip] = useState('');
  const [searchAvailability, setSearchAvailability] = useState('');
  const [updateSearch, setUpdateSearch] = useState(0);
  const [filterMaxPrice, setFilterMaxPrice] = useState('');
  const [filterEquip, setFilterEquip] = useState('Any');
  const [dateTime, setDateTime] = useState(null);

	function searchForGym() {
    Axios.get('http://localhost:3001/api/gymSearch', {
      params: {zipcode: searchZip, avail: searchAvailability}})
        .then((response) => { 
          setGymData(response.data); 
          setgymDataLoading(true);
    });
    if (dateTime !== null) setSearchAvailability(dateTime.toJSON());
  }
  useEffect(() => {searchForGym()}, [updateSearch]);

  function calcTime(e) {
    let offset = new Date().getTimezoneOffset()/60;
    setDateTime(e);
    dateTime.$H += offset;
  }

  return ( <Fragment>
    <div className="gym-searchbar">
      <Box sx={{display: 'flex', '& > *': {m: 1,}, height: 'flex', width: 'flex'}}>
        <Stack direction='column'>
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
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="What time?"
                value={dateTime}
                minutesStep={60}
                onChange={(e) => {calcTime(e)}}
              />
            </LocalizationProvider>
          </Stack>
          <Stack direction="row" spacing={1}>
            <TextField
              id="max-price"
              label="Maximum Hourly Rate"
              type="number"
              variant="outlined"
              placeholder={"$1-$100, or 0 for no max"}
              InputProps={{inputProps: { min: 1, max: 100}}}
              value={filterMaxPrice} 
              onChange={(e) => setFilterMaxPrice(e.target.value)}
              //helperText={filterMaxPrice < 0 || filterMaxPrice > 100 ? 'Please enter a number from 1-100' : ' '}
					    error={filterMaxPrice < 0 || filterMaxPrice > 100 || isNaN(filterMaxPrice)}
            />
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel>Equipment</InputLabel>
              <Select
                id="filter-equip" 
                label="Equipment"
                variant="outlined"
                value={filterEquip}
                onChange={(e) => setFilterEquip(e.target.value)}
              >
                <MenuItem value={"Any"}>Any</MenuItem>
                <MenuItem value={"0183a535-9d09-3f43-1df7-32a86713e03f"}>Wahoo Trainer</MenuItem>
                <MenuItem value={"0183a535-c37c-4853-491d-7d93354e3852"}>Yoga Mat</MenuItem>
                <MenuItem value={"0183a535-d802-4844-dffe-73516837ab65"}>Safety Straps</MenuItem>
                <MenuItem value={"0183a535-fe85-a5db-fd29-e194fdb6893b"}>Landmine</MenuItem>
                <MenuItem value={"0183a536-1908-f2cc-6b35-bbbbf1920859"}>Dip Bar</MenuItem>
                <MenuItem value={"0183a536-327e-8f92-4a3e-f10704ca6ce3"}>Bench</MenuItem>
                <MenuItem value={"0183a536-4af4-2ac0-7201-38b46bf3b43d"}>Power Rack</MenuItem>
                <MenuItem value={"0183a536-66da-27b7-1022-c7a98e580a73"}>Dumbbells</MenuItem>
                <MenuItem value={"0183a536-85c8-ac9b-4c5f-c0ad4cd25232"}>Pullup Bar</MenuItem>
                <MenuItem value={"0183a536-9e7f-79f2-3c2a-67e0a38907ed"}>Iron Plates</MenuItem>
                <MenuItem value={"0183a536-b898-d087-da21-4e948ea65140"}>Rubber Plates</MenuItem>
                <MenuItem value={"0183a536-cf77-81d0-263f-35e62a3f18ac"}>Curl Bar</MenuItem>
                <MenuItem value={"0183a536-e562-66c8-6da7-4e844b391060"}>Barbell</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              onClick={(e) => {setUpdateSearch(updateSearch + e)}}
              style={{height: '7.1ch'}}
            > LETS GO! 
            </Button>
          </Stack>
        </Stack>
      </Box>
    </div>
    <div className="gym-thumbnails">
      <GymThumbnail 
        gymData={gymData} 
        loading={gymDataLoading} 
        filterMaxPrice={filterMaxPrice}
        filterEquipment={filterEquip}
      />
    </div>
  </Fragment> );
}

export default GymSearchPage;