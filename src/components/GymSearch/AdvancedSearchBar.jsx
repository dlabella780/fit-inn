import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SortingButtons from "./SortingButtons";
import DateTime from "./DateTime";
import NumberOfGuests from "./NumberOfGuests";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const AdvSearchBar = ({setSearchQuery}) => (
  <form>
    <Box sx={{display: 'flex', '& > *': {m: 1,},}}>
      <TextField
        id="search-bar"
        className="text"
        label="Find a gym near you!"
        variant="outlined"
        placeholder="You'll be sure to fit-inn!"
        size="large"
      />
      <DateTime/>
      <NumberOfGuests/>
    </Box>
    <SortingButtons/>
  </form>
  //# of people
);

export default function AdvancedSearchBar() {
  return (<AdvSearchBar/>);
}