import React, { Component, Fragment, useEffect, useState, useCallback } from "react";
import AdvancedSearchBar from "../components/GymSearch/AdvancedSearchBar";
import SortingButtons from "../components/GymSearch/SortingButtons";
import { Box, Stack, Typography, Grid } from '@mui/material';
import Axios from 'axios';


function GymSearchPage  () {

  useEffect(() => {
    Axios.get('http://localhost:3001/api/gymSearch', {params: {zipcode: '95818', day: ''}}).then((response) => {
      console.log(response)
	  })
  }, []);
  
  return (
      <Fragment>
        <div className="gym-searchbar">
          <AdvancedSearchBar/>
        </div>
      </Fragment>
    );
}
export default GymSearchPage;