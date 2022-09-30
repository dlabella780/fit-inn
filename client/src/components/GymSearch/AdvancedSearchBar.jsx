import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SortingButtons from "./SortingButtons";
import DateTime from "./DateTime";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const AdvancedSearchBar = (props) => {
  
  return (
    <Box sx={{ '& .MuiTextField-root': { m: 0.5, width: '30ch' }}}>
      {console.log(props)}
      <TextField
        id="search-bar"
        className="text"
        label="Find a gym near you!"
        variant="outlined"
        placeholder="You'll be sure to fit-inn!"
        size="large"
      />
      <TextField
        id="max-guests"
        label="# of guests?"
        type="number"
        variant="outlined"
        placeholder={'1-100'}
        InputProps={{inputProps: { min: 1 }}}
		  />
      <div>
        <DateTime/>
      </div>
      <SortingButtons setResults={props.setResults}/>
    </Box>
  );
}

export default AdvancedSearchBar;