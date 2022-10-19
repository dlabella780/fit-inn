import React, { Component, Fragment } from "react";
import SearchBar from "../components/HelpPage/HelpSearchBar.jsx";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Typography, Button, Box, Container } from "@material-ui/core";

class HelpPage extends Component {
    render() { return (
        <Box sx={{
          }}>
            <div className = "help-page-items"
                style={{
                }}>
                <Typography variant="h3" style={{padding: 15, color:"black"}}>How can we help?</Typography>
                {/* <span id = "search-Bar"><SearchBar /></span> */}
                <span id = "buttons">
                    <Box display="flex" justifyContent="space-between">
                        <Button component={Link} to="/pages/Hosts" variant="contained" color="primary">Hosts</Button>
                        <Button component={Link} to="/pages/GymUsers" variant="contained" color="primary">Gym Users</Button>
                    </Box>
                </span>
                <div className = "help-page-padding"><Typography variant="h4" style={{}}>Articles</Typography></div>
                <span className = "help-page-articles">
                    <Typography variant="h5"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>
                    <Typography variant="h5"><NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Policy for Gym Users</NavLink></Typography>
                    <Typography variant="h5"><NavLink to="/pages/ContactInfo" style={{ textDecoration: 'none' }}>How can I contact Fit-Inn?</NavLink></Typography>
                    <Typography variant="h5"><NavLink to="/pages/ProtectionAndInsurance" style={{ textDecoration: 'none' }}>Host Liability Insurance/Protection</NavLink></Typography>
                    <Typography variant="h5"><NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>Community Guidelines</NavLink></Typography>
                </span>
                <Box className = "help-page-padding" textAlign='center'><Button component={Link} to="/FAQ" variant="contained" color="primary">Search for a FAQ Here</Button></Box>
                <a href='https://www.freepik.com/vectors/gym-room' style={{ textDecoration: 'none' }}></a>
            </div>
        </Box>
    );}
}
export default HelpPage;

// Gym room vector image created by upklyak - www.freepik.com