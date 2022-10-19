import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm.jsx";


const PUBLIC_KEY = "pk_test_51LjZ0MHSMtfvYBv6DzWueAsBhltM9JDeLSZGfifoFVXTT5ugkU6fbMb0x4f4VVugcgJ9hh3P8EkTiJrvIi2EyRe1002tCfXrIL";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	const [stripePromise, setStripePromise] = useState(null);
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		fetch("http://localhost:3001/create-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ items: [{ id: "test-gym" }] }),
		})
			.then(async (res) => {
				var { clientSecret } = await res.json();
				console.log(clientSecret);
				setClientSecret(clientSecret);
			});
		setStripePromise(stripeTestPromise);
    }, [])

	return (
	<div>
		{(stripePromise) && (clientSecret) && (
		<Elements stripe={stripePromise} options={{ clientSecret }} key={clientSecret}>
			<PaymentForm />
		</Elements>
			)}
	</div>
	);
}