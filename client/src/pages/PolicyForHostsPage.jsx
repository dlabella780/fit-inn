import { Typography, Box } from "@material-ui/core";
import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

class PolicyForHostsPage extends Component {
    render() { return (
        <Box>
            <div className="policy-page-items">
                <Typography variant="h3">Policy for Hosts</Typography>
                <Typography className = "policy-page-update" variant="h5">Last Update: 9/30/2022</Typography>

                <span className="terms-page-links">
                    <Typography variant="h6"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Policy for Gym Users</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ContactInfo" style={{ textDecoration: 'none' }}>How can I contact Fit-Inn?</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ProtectionAndInsurance" style={{ textDecoration: 'none' }}>Host Liability Insurance/Protection</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>Community Guidelines</NavLink></Typography>
                </span>

                <Typography className="terms-contents" variant="h5">1. What Information Does The Platform Collect?</Typography>
            </div>
        </Box>
    );}
}
export default PolicyForHostsPage;