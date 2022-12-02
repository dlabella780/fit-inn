import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm.jsx";
import Axios from "axios";


const PUBLIC_KEY = "pk_test_51LjZ0MHSMtfvYBv6DzWueAsBhltM9JDeLSZGfifoFVXTT5ugkU6fbMb0x4f4VVugcgJ9hh3P8EkTiJrvIi2EyRe1002tCfXrIL";

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer(props) {
	const location = useLocation();
	const [stripePromise, setStripePromise] = useState(null);
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => { try {
		Axios.post('http://localhost:3001/create-payment-intent', {
					id: "gym-reservation",
					cost: location.state.gymInfo.cost,
		}).then(async (res) => {
			var { clientSecret } = await res.data;
			setClientSecret(clientSecret);
		})
		setStripePromise(stripeTestPromise);
	} catch (error) { console.log(error); alert("No Gym Selected");}
	}, [])

	return (
	<div>
		{(stripePromise) && (clientSecret) && (
				<Elements stripe={stripePromise} options={{ clientSecret }} key={clientSecret}>
					<PaymentForm gymInfo={location.state.gymInfo} date={location.state.date} userId={location.state.userId} numGuests={location.state.numGuests} />
		</Elements>
			)}
	</div>
	);
}