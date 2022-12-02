import React, { Component } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import Description from "../components/ContactUsForm/Description.jsx";
import OptionalBookingID from "../components/ContactUsForm/OptionalBookingID.jsx";
import QuickSummary from "../components/ContactUsForm/QuickSummary.jsx";
import RoleDropDownMenu from "../components/ContactUsForm/RoleDropDownMenu.jsx";
import YourEmail from "../components/ContactUsForm/YourEmail.jsx";
import HelpTypeDropDownMenu from "../components/ContactUsForm/HelpTypeDropDownMenu.jsx";


class ContactUsPage extends Component{
    render() { return (
        <Box>
            <div className = "contact-us-items">
                <Typography variant="h3">Contact Us</Typography>
                <Box className="payment-textfields"><span><YourEmail /></span></Box>
                <Box className="payment-textfields"><span><OptionalBookingID /></span></Box>
                <Box className="payment-textfields"><span><RoleDropDownMenu /></span></Box>
                <Box className="payment-textfields"><span><QuickSummary /></span></Box>
                <Box className="payment-textfields"><span><Description /></span></Box>
                <Box className="payment-textfields"><span><HelpTypeDropDownMenu /></span></Box>
                <Box className="payment-button"><span><Button variant="contained" color="primary">SEND</Button></span></Box>
            </div>
        </Box>
    );}
}

export default ContactUsPage;