import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm.jsx";


const PUBLIC_KEY = "sk_test_51LjZ0MHSMtfvYBv6qgdxNEbqdRje9c0c8ttFqJdbhIBWDrXf5NDB2swPwjf7Mdb8PjCkGNAjSCXWPjn7vVwrNoUV00tSQFXs8j";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}