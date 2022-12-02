import React, { Component } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

class ContactInfoPage extends Component {
    render() { return (
        <Box>
          <div className="how-to-contact-us-page">
            <Typography variant="h3">How can I contact Fit-Inn?</Typography>

            <Typography className="terms-contents" variant="h5">1. Contact us through phone or mail!</Typography>
            <div className="terms-page-links">
                <Typography variant="h6">You can give us a phone call using the number (XXX) XXX XXXX.</Typography>
                <Typography variant="h6">You can mail us at the address of [placeholder]</Typography>
            </div>

            <Typography className="terms-contents" variant="h5">2. Live Chat</Typography>
            <div className="terms-page-links">
                <Typography variant="h6">In order to use our live chat, you need to navigate to the Home page.</Typography>
                <Typography variant="h6">You will see a blue bubble in the lower right-hand corner. Click on it to access the live chat.</Typography>
                <Typography variant="h6">Clicking the widget will open the chat.</Typography>
            </div>

            <Typography className="terms-contents" variant="h5">3. Webform</Typography>
            <div className="terms-page-links">
                <Typography variant="h6">The online form allows you to send us a message through the Fit-Inn website.</Typography>
                <Typography variant="h6">The Contact Us button will take you to the webform for you to fill out.</Typography>
            </div>
            
            <Box className="contact-us-button"><span><Button component={Link} to="/pages/ContactUs" variant="contained" color="primary">Contact Us</Button></span></Box>
          </div>
        </Box>
    );}
}
export default ContactInfoPage;