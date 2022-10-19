import { PaymentElement, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

//Hold the total amount
let total = "$10.00"

//Hold Gym being rented
let gym = "Gary's Gym"

//Hold date and time for rental
let time = "Aug. 8 2022 5:30pm - 6:30pm"

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#fff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fff" },
			"::placeholder": { color: "#fff" }
		},
		invalid: {
			iconColor: "#fff",
			color: "#FF0000"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("payment submitted");

        if (!stripe || !elements) {
            //Stripe.js has not yet loaded.
            //Make sure to disable form submission until Stripe.js has loaded. 
            console.log("ERROR: stripe or elements is not loaded");
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/PaymentSuccess",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);

        };

    return (
        <Stack className="payment-items"
        direction="column" spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}>
            <Typography variant="h3">Payment</Typography>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <PaymentElement />
                </div>
            </fieldset>
            <Stack padding="5px" direction="row" spacing={25}>
            <Typography variant="h6">{gym}</Typography>
            <Typography variant="h6">{time}</Typography>
            </Stack>
            <Stack direction="row" spacing={45}>
                <Button variant="contained" color="primary" href="/">Cancel</Button>
                        <Button disabled={isLoading || !stripe || !elements} variant="contained" color="primary" onClick={handleSubmit}>
                            {isLoading ? <div>Loading...</div> : <div>Pay {total}</div>}
                        </Button>
                {message && <div>{message}</div>}
                </Stack>
        </form>
        :
       <div>
           <h2>Gym Rental Successful</h2>
       </div> 
        }
            
        </Stack>
    )
}