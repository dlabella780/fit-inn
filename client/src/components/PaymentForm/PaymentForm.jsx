import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from 'react';
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


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error){
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:3000/payments", {
                    amount: 1000,
                    id
                })

                if(response.data.success){
                    console.log("Payment successful")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        }else {
            console.log(error.message)
        }
    }

    return (
        <Stack className="payment-items"
        direction="column" spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}>
            <Typography variant="h3">Payment</Typography>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <Stack padding="5px" direction="row" spacing={25}>
            <Typography variant="h6">{gym}</Typography>
            <Typography variant="h6">{time}</Typography>
            </Stack>
            <Stack direction="row" spacing={45}>
                <Button variant="contained" color="primary" href="/">Cancel</Button>
                
                <Button variant="contained" color="primary">Pay {total}</Button>
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