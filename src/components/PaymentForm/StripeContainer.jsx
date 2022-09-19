import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm.jsx";


const PUBLIC_KEY = "pk_test_51LjZ0MHSMtfvYBv6DzWueAsBhltM9JDeLSZGfifoFVXTT5ugkU6fbMb0x4f4VVugcgJ9hh3P8EkTiJrvIi2EyRe1002tCfXrIL";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}