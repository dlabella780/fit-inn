import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SortingButtons from "./SortingButtons";

const AdvSearchBar = ({setSearchQuery}) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Find a gym!"
      variant="outlined"
      placeholder="You'll be sure to fit-inn!"
      size="large"
      fullWidth
    />
  </form>
);

const filterData = (query, data) => {
  if (!query) return data;
  else return data.filter((d) => d.toLowerCase().includes(query));
};

const data = [];

export default function HelpSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div>
      <AdvSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div>
        {dataFiltered.map((d) => (
          <div
            className="text"
            key={d.id}>{d}
          </div>
        ))}
      </div>
      <SortingButtons/>
    </div>
  );
}