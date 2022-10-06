import React, { Component, useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Typography, Box, Button } from "@material-ui/core";
import Name from "../components/PaymentForm/Name.jsx";
import CardNumber from "../components/PaymentForm/CardNumber.jsx";
import Email from "../components/PaymentForm/Email.jsx";
import CurrencyDropDownMenu from "../components/PaymentForm/CurrencyDropDownMenu.jsx";
import PaymentType from "../components/PaymentForm/PaymentType.jsx";
import ExpirationDateAndCVC from "../components/PaymentForm/ExpirationDateAndCVC.jsx";
import PostalCode from "../components/PaymentForm/PostalCode.jsx";

class HelpCenterSearchResultPage extends Component{
    render() { return (
        <Box>
            <div className = "payment-items">
                <Typography variant="h3">Payment</Typography>
                <Box className="payment-textfields"><span><Name /></span></Box>
                <Box className="payment-textfields"><span><Email /></span></Box>
                <Box className="payment-textfields"><span><CardNumber /></span></Box>
                <Box className="payment-textfields"><span><ExpirationDateAndCVC /></span></Box>
                <Box className="payment-textfields"><span><PostalCode /></span></Box>
                <Box className="payment-button"><span><Button variant="contained" color="primary">Proceed</Button></span></Box>
            </div>
        </Box>
    );}
}

export default HelpCenterSearchResultPage;