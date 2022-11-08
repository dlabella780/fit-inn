import { GraphQLClient, gql } from 'graphql-request';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import Gym from './endpoints/Gym.js'
import User from './endpoints/User.js'
import Reservation from './endpoints/Reservation.js'
dotenv.config();
import Stripe from 'stripe';
const stripe = Stripe(process.env.STRIPE_SK);
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const calculateOrderAmount = (items) => { 
	if (items == undefined) console.log("it's not even passing the string!!!");
	if (items.cost !== undefined) {
		return (items.cost * 100); // This includes a conversion from dollars to cents!
	}
	else {
		console.log('ERROR: Gym listing is not passing its cost correctly!');
		return 404; // intended as $4.04 for easily recognizing an error
	}
};


const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
headers: {
    authorization: process.env.API_KEY,
},
});

Gym(app, graphQLClient);
User(app, graphQLClient);
Reservation(app, graphQLClient);

app.post('/create-payment-intent', async (req, res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const items = {
			id: req.body.id,
			cost: req.body.cost
		};
		console.log('Payment intent called!');

		try {
			const paymentIntent = await stripe.paymentIntents.create({
				amount: calculateOrderAmount(items),
				currency: "usd",
				automatic_payment_methods: {
					enabled: true,
				},
			});

			res.send({
				clientSecret: paymentIntent.client_secret,
			})
		} catch (e) {
			return res.status(400).send({
				error: {
					message: e.message,
				},
			});
		}
	}
	else res.send('Access Denied.');
});

app.listen(3001, () =>  {
    console.log(`Server running on port 3001`);
});