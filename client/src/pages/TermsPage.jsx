import React, { Component, useState } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class TermsPage extends Component {
    render() { return (
        <Box>
            <div className="help-center-link-pages-items">
                <Typography variant="h3">Terms of Use and Service</Typography>
                <Typography className = "policy-page-update" variant="h5">Last Update: 9/30/2022</Typography>
                
                <span className="terms-page-links">
                    <Typography variant="h6"><NavLink to="/pages/PolicyForHosts" style={{ textDecoration: 'none' }}>Policy for Hosts</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/PolicyForGymUsers" style={{ textDecoration: 'none' }}>Policy for Gym Users</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ContactInfo" style={{ textDecoration: 'none' }}>How can I contact Fit-Inn?</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/ProtectionAndInsurance" style={{ textDecoration: 'none' }}>Host Liability Insurance/Protection</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/CommunityGuidelines" style={{ textDecoration: 'none' }}>Community Guidelines</NavLink></Typography>
                </span>

                <Typography className="terms-contents" variant="h5">1. Introduction</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">1.1 Intro content goes here.</Typography>
                </div>

                <Typography className="terms-contents" variant="h5">2. Fit-Inn Platform and Bookings</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">2.1 Platform and bookings content goes here.</Typography>
                </div>
                
                <Typography className="terms-contents" variant="h5">3. General Payment Terms</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">3.1 General payment terms content goes here.</Typography>
                </div>

                <Typography className="terms-contents" variant="h5">4. Bookings for Guest</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6">4.1 Booking for guests content goes here.</Typography>
                </div>

                <Typography className="terms-contents" variant="h5">Etc</Typography>
                <div className="terms-page-links">
                    <Typography variant="h6"></Typography>
                </div>
            </div>
        </Box>
    );}
}
export default TermsPage;