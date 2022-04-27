import React, { Component, Fragment } from "react";
import SearchBar from "../components/HelpPage/HelpSearchBar.jsx";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Typography, Button, Box } from "@material-ui/core";
import "./HelpPage.css";

class HelpPage extends Component {
    render() { return (
        <div>
            <div className = "Header"
                style={{
                }}>
            </div>
            <Typography variant="h4" style={{padding: 30, color:"white"}}>How can we help?</Typography>
            <span id = "search-Bar"><SearchBar /></span>
            <span id = "buttons">
                <Box display="flex" justifyContent="space-between">
                    <Button component={Link} to="/pages/Hosts" variant="contained" color="primary">Hosts</Button>
                    <Button component={Link} to="/pages/GymUsers" variant="contained" color="primary">Gym Users</Button>
                </Box>
            </span>
            <Typography variant="h5" style={{}}>Articles</Typography>
            <span id = "links">
                <Typography variant="h6"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>
                <Typography variant="h6"><NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Policy for Gym Users</NavLink></Typography>
                <Typography variant="h6"><NavLink to="/pages/ContactInfo" style={{ textDecoration: 'none' }}>How can I contact Fit-Inn?</NavLink></Typography>
                <Typography variant="h6"><NavLink to="/pages/ProtectionAndInsurance" style={{ textDecoration: 'none' }}>Host Liability Insurance/Protection</NavLink></Typography>
                <Typography variant="h6"><NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>Community Guidelines</NavLink></Typography>
            </span>
            <a href='https://www.freepik.com/vectors/gym-room'>Gym room vector image created by upklyak - www.freepik.com</a>
        </div>
    );}
}
export default HelpPage;