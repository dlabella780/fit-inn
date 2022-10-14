import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios';
import TextField from "@mui/material/TextField";
import GymThumbnail from "../components/GymSearch/GymThumbnail";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from '@mui/material/Slider';
import { Grid, Typography } from "@mui/material";

function GymSearchPage() {
  const [gymData, setGymData] = useState([]);
  const [gymDataLoading, setgymDataLoading] = useState(true);
  const [searchZip, setSearchZip] = useState('');
  const [searchAvailability, setSearchAvailability] = useState('');
  const [updateSearch, setUpdateSearch] = useState(0);
  const [filterMaxPrice, setFilterMaxPrice] = useState(0);

	function searchForGym() {
    Axios.get('http://localhost:3001/api/gymSearch', {
        params: {zipcode: searchZip, day: searchAvailability}}).then((response) => { 
          setGymData(response.data); 
          setgymDataLoading(false);
    });
  }

  useEffect(() => {searchForGym()}, [updateSearch]);
  //REMOVE WHEN NOT NEEDED
  //console.log(gymData);

  return ( <Fragment>
    <div className="gym-searchbar">
      <Box sx={{display: 'flex', '& > *': {m: 1,}, height: '10ch'}}>
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
          <TextField
            id="search-day"
            label="When?"
            variant="outlined"
            placeholder="Enter a day!"
            size="large"
          />
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