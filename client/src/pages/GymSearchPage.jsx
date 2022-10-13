import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios';
import TextField from "@mui/material/TextField";
import GymThumbnail from "../components/GymSearch/GymThumbnail";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function GymSearchPage() {
  const [gymData, setGymData] = useState([]);
  const [gymDataLoading, setgymDataLoading] = useState(true);
  const [searchZip, setSearchZip] = useState('');
  const [searchAvailability, setSearchAvailability] = useState('');
  const [updateSearch, setupdateSearch] = useState(0);

	function searchForGym() {
    Axios.get('http://localhost:3001/api/gymSearch', 
			{params: {zipcode: searchZip, day: searchAvailability}}).then((response) => { 
        setGymData(response.data); 
        setgymDataLoading(false);}
    );
  }

  useEffect(() => {searchForGym()}, [updateSearch]);
  console.log(gymData);

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
            onClick={(e) => {setupdateSearch(updateSearch + e)}}
            style={{height: '7.1ch'}}
          >
            LETS GO!
          </Button>
        </Stack>
      </Box>
      <Stack direction="row" spacing={1.6}>
          <Button variant="contained" 
              onClick={(e) => {}}>
            Sort by Distance
          </Button>
          <Button variant="contained" 
              onClick={(e) => {}}>
            Sort by Price
          </Button>
          <Button variant="contained" 
              onClick={(e) => {}}>
            Sort by Availability
          </Button>
        </Stack>
    </div>
    <div className="gym-thumbnails">
        <GymThumbnail gymData={gymData} loading={gymDataLoading}/>
    </div>
  </Fragment> );
}
export default GymSearchPage;

//zipcode: '95818'