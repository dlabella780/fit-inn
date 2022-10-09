import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SortingButtons from "./SortingButtons";
import Box from "@mui/material/Box";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import GymThumbnail from "./GymThumbnail";

const AdvancedSearchBar = (props) => {
    const [startTime, setStartTime] = React.useState(new Date());

    return (
        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '33ch' }}}>
          <TextField
            id="search-bar"
            label="Find a gym near you!"
            variant="outlined"
            placeholder="Enter a zip code!"
            size="large"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              label="Starting day/time?"
              value={startTime}
              onChange={(newValue) => {setStartTime(newValue);}}
            />
          </LocalizationProvider>
          <SortingButtons/>
          <GymThumbnail gymData={props.gymData} loading={props.loading}/>
        </Box>
    );
}

export default AdvancedSearchBar;