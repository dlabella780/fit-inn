import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SortingButtons from "./SortingButtons";
import DateTime from "./DateTime";
import NumberOfGuests from "./NumberOfGuests";

const AdvSearchBar = ({setSearchQuery}) => (
  <form>
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
  </form>

  //# of people
);

export default function AdvancedSearchBar() {
  return (
    <div>
      <AdvSearchBar/>
      <SortingButtons/>
    </div>
  );
}