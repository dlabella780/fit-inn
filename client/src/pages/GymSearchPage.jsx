import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios';
import TextField from "@mui/material/TextField";
import GymThumbnail from "../components/GymSearch/GymThumbnail";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

function GymSearchPage() {
  const [gymData, setGymData] = useState([]);
  const [gymDataLoading, setgymDataLoading] = useState(true);
  const [searchZip, setsearchZip] = useState('');

	useEffect(() => {
		Axios.get('http://localhost:3001/api/gymSearch', 
			{params: {zipcode: searchZip, day: ''}}).then((response) => { 
        setGymData(response.data); 
        setgymDataLoading(false);}
    )}, [searchZip]);
    
  return ( <Fragment>
      <div className="gym-searchbar">
          <TextField
            id="search-zip"
            label="Find a gym near you!"
            variant="outlined"
            placeholder="Enter a zip code!"
            size="large"
            value={searchZip} 
            onChange={(e) => setsearchZip(e.target.value)}
            helperText={isNaN(searchZip) ? 'Not a zip.' : ' '}
            error={isNaN(searchZip)}
          />
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