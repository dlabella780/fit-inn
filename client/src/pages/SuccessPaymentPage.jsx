import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SuccessPaymentPage(props) {
    const location = useLocation();
    
    console.log(location.state.gymInfo) 
    console.log(props.userId)   
    return (
            <>
                {/* <p>If you're reading this then the payment succeeded.</p> */}
                <b>You've booked {location.state.gymInfo.title} at {new Date(location.state.date).toLocaleString()} </b>
            </>
        );
}