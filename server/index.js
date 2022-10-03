import { request, GraphQLClient, gql } from 'graphql-request';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { query } from 'express';
import * as dotenv from 'dotenv'
dotenv.config()

const stripe = require('stripe')(process.env.STRIPE_SK);
const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const calculateOrderAmount = (items) => {
	// TODO: extract price from gym listing
	return 1000;
};

const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
headers: {
    authorization: process.env.API_KEY,
},
});

const equipQuery = gql`
query equipQuery {
    list_EquipmentItems {
      _EquipmentItems {
        _id
        name
      }
    }
  }
`;

const gymMutation = gql`
		mutation gymMutation(
			$accessInformation: String = "", 
			$address: String = "", 
			$availability: [String] = "", 
			$bookingNotice: Int = 3, 
			$cancelationWarning: Int = 24, 
			$cost: Int = 20, 
			$description: String = "", 
			$tvType: String = "", 
			$rating: Int = 0, 
			$title: String = "", 
			$photos: [String] = "", 
			$ownerId: String = "", 
			$numGuestsAllowed: Int = 2, 
			$isHostHome: Boolean = false, 
			$isActive: Boolean = false, 
			$hasWifi: Boolean = false, 
			$hasSpeakers: Boolean = false, 
			$hasBathroom: Boolean = false,
			$equipment: [Self_Gym_equipment_equipmentItem_Input_] = {}
		){
		add_Gym(
		input: {
			accessInformation: $accessInformation, 
			address: $address, 
			availability: $availability, 
			bookingNotice: $bookingNotice, 
			cancelationWarning: $cancelationWarning, 
			cost: $cost, 
			description: $description, 
			hasBathroom: $hasBathroom, 
			hasSpeakers: $hasSpeakers, 
			isActive: $isActive, 
			hasWifi: $hasWifi, 
			isHostHome: $isHostHome, 
			numGuestsAllowed: $numGuestsAllowed, 
			ownerId: $ownerId, 
			photos: $photos, 
			rating: $rating, 
			title: $title, 
			tvType: $tvType, 
			equipment: $equipment}
		syncMode: NODE_LEDGERED
		) {
			transaction {
				_id
				submissionTime
			}
			result {
				_id
			}
    	}
	}`;



app.get('/api/listEquipment', async (req,res) => {
    if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
      const results = await graphQLClient.request(equipQuery);
      res.send(results);
    }
    else res.send('Access Denied.');
    
})

app.post('/api/uploadGym', async (req, res) => {

  if(req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
    const variables = {
      accessInformation: req.body.accessInformation, 
      address: req.body.address, 
      availability: req.body.availability, 
      bookingNotice: req.body.bookingNotice, 
      cancelationWarning: req.body.cancelationWarning, 
      cost: req.body.cost, 
      description: req.body.description, 
      hasBathroom: req.body.hasBathroom, 
      hasSpeakers: req.body.hasSpeakers, 
      isActive: req.body.isActive, 
      hasWifi: req.body.hasWifi, 
      isHostHome: req.body.isHostHome, 
      numGuestsAllowed: req.body.numGuestsAllowed, 
      ownerId: req.body.ownerId, 
      photos: req.body.photos, 
      rating: req.body.rating, 
      title: req.body.title, 
      tvType: req.body.tvType, 
      equipment: req.body.equipment
    }

    const data = await graphQLClient.request(gymMutation, variables)
      
  }
  else res.send('Access Denied.');
})

app.post('/create-payment-intent', async (req, res) => {
	const { items } = req.body;

	const paymentIntent = await stripe.paymentIntent.create({
		amount: calculateOrderAmount(items),
		currency: "usd",
		automatic_payment_methods: {
			enabled: true,
		},
	});

	res.send({
		clientSecret: paymentIntent.client_secret,
    })
});

app.listen(3001, () =>  {
    console.log(`Server running on port 3001`);
});