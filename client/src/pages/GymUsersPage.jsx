import React, { Component, useState } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class GymUsersPage extends Component {
  render() { return (
    <Box>
    <div className="host-resource-pages-items">
        <Typography variant="h3">Gym Users</Typography>
        <Typography className = "terms-contents" variant="h5">Resources</Typography>
        
        <span className="terms-page-links">
            <Typography variant="h6"><NavLink to="/pages/GymUsers" style={{ textDecoration: 'none' }}>Placeholder Link 1</NavLink></Typography>
            <Typography variant="h6"><NavLink to="/pages/GymUsers" style={{ textDecoration: 'none' }}>Placeholder Link 2</NavLink></Typography>
            <Typography variant="h6"><NavLink to="/pages/GymUsers" style={{ textDecoration: 'none' }}>Placeholder Link 3</NavLink></Typography>
        </span>
    </div>
</Box>
  );}
}
export default GymUsersPage;