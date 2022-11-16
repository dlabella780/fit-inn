import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios';
import TextField from "@mui/material/TextField";
import GymThumbnail from "../components/GymSearch/GymThumbnail";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
        .then((response) => { setGymData(response.data) })
        .catch((error) => { console.log(error)} );
    if (dateTime !== null) setSearchAvailability(dateTime.toJSON());
  }
  useEffect(() => {searchForGym()}, [updateSearch]);

  function calcTime(e) {
    try {
      if (e !== null) {
        let offset = new Date().getTimezoneOffset()/60;
        setDateTime(e);
        dateTime.$H += offset;
        setSearchAvailability(dateTime.toJSON());
      }
      else setSearchAvailability('');
    } catch (error) {}
  }

  function handleSearchClick() {
    setUpdateSearch(updateSearch + 1)
    if (dateTime !== null) setSearchAvailability(dateTime.toJSON());
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
                defaultValue={null}
                renderInput={(props) => <TextField {...props} />}
                label="What time?"
                value={dateTime}
                views={['day','hours']}
                onChange={(e) => {calcTime(e)}}
                closeOnSelect
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
                <MenuItem value={"01845614-f1da-27e9-71b2-86150da41680"}>Wahoo Trainer</MenuItem>
                <MenuItem value={"01845614-dd50-c648-7e9d-6bbb0842c785"}>Yoga Mat</MenuItem>
                <MenuItem value={"01845614-afae-33b1-8692-8a1be1fb133a"}>Safety Straps</MenuItem>
                <MenuItem value={"01845614-98c1-3539-d192-3f3e358817da"}>Landmine</MenuItem>
                <MenuItem value={"01845614-7e1b-4cd3-3224-57845c82f200"}>Dip Bar</MenuItem>
                <MenuItem value={"01845614-6834-a256-37bc-5d8e65b9812c"}>Bench</MenuItem>
                <MenuItem value={"01845614-4a17-5bb2-6542-74d4a2aa0b48"}>Power Rack</MenuItem>
                <MenuItem value={"01845614-3271-abf9-3db8-9df6d8862fae"}>Dumbbells</MenuItem>
                <MenuItem value={"01845614-1a4d-04dd-d877-5f813aab03b4"}>Pullup Bar</MenuItem>
                <MenuItem value={"01845614-0408-8a6e-ff0f-dc092c925c8d"}>Iron Plates</MenuItem>
                <MenuItem value={"01845613-eaf8-866f-f4c8-be19fd516b53"}>Rubber Plates</MenuItem>
                <MenuItem value={"01845613-c2a2-8c88-a615-ac6bc2698fb2"}>Curl Bar</MenuItem>
                <MenuItem value={"01845613-9c5f-63d2-723a-28cd31d9eaca"}>Barbell</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              onClick={() => {handleSearchClick()}}
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