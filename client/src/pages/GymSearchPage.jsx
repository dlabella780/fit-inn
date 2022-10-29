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
  const [filterMaxPrice, setFilterMaxPrice] = useState(0);
  const [filterEquip, setFilterEquip] = useState('');
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
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="What time?"
              value={dateTime}
              minutesStep="60"
              onChange={(e) => {setDateTime(e)}}
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
        <Stack direction="row" spacing={1}>
          <Stack direction="column" spacing={1} width="180px">
            <Typography variant="subtitle1">Maximum Hourly Rate</Typography>
            <Box sx={{ width: 165 }}>
              <Slider
                aria-label="max-price"
                defaultValue={0}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
                onChange={(e) => setFilterMaxPrice(e.target.value)}
                style={{left: '9px', bottom: '5px'}}
              />
            </Box>
          </Stack>
          <FormControl sx={{ m: 1, width: 202 }}>
            <InputLabel>Equipment</InputLabel>
            <Select
              id="filter-equip" 
              label="Equipment"
              variant="outlined"
              value={filterEquip}
              onChange={(e) => setFilterEquip(e.target.value)}
            >
              <MenuItem value={"Wahoo Trainer"}>Wahoo Trainer</MenuItem>
              <MenuItem value={"Yoga Mat"}>Yoga Mat</MenuItem>
              <MenuItem value={"Safety Straps"}>Safety Straps</MenuItem>
              <MenuItem value={"Landmine"}>Landmine</MenuItem>
              <MenuItem value={"Dip Bar"}>Dip Bar</MenuItem>
              <MenuItem value={"Bench"}>Bench</MenuItem>
              <MenuItem value={"Power Rack"}>Power Rack</MenuItem>
              <MenuItem value={"Dumbbells"}>Dumbbells</MenuItem>
              <MenuItem value={"Pullup Bar"}>Pullup Bar</MenuItem>
              <MenuItem value={"Iron Plates"}>Iron Plates</MenuItem>
              <MenuItem value={"Rubber Plates"}>Rubber Plates</MenuItem>
              <MenuItem value={"Curl Bar"}>Curl Bar</MenuItem>
              <MenuItem value={"Barbell"}>Barbell</MenuItem>
            </Select>
          </FormControl>
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