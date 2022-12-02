import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import React, { Component } from "react";
import HowTo from "../components/Descriptions/HowTo";
import FitInnLogo from "../components/HomePage/fitinn-logo.png";
import FlairPic from "../components/HomePage/homepage-flair.png";

class HomePage extends Component {
    render() {
        return (
            <Box class="home-box" >
                <img src={FitInnLogo} alt="Fit-Inn Logo" id="logo-header" width="400px"/> <br />
                <Typography variant="h3" align="center">Are you ready to Fit-Inn?</Typography>
                <Typography variant="h6" align="center" marginBottom="0px">Find an available home gym near you for an easy, local workout by the hour.
                    Search for gym listings with the equipment you need at a time that works for you, and find the right gym
                    where you want, when you want. </Typography>
                <hr class="separator" />
                <img src={FlairPic} alt="Images of exercise equipment." height="150px" />
                <hr class="separator" />
                <HowTo />
            </Box>
    );}
}
export default HomePage;