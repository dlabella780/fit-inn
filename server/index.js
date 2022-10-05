import { request, GraphQLClient, gql } from 'graphql-request';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { query } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import Stripe from 'stripe';
const stripe = Stripe(process.env.STRIPE_SK);
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

const userQuery = gql`
	query MyQuery($id: ID = "0183a537-c25c-ea39-d099-993004c2dc6c") {
		get_User(id: $id) {
		email
		favoriteGymIds
		fname
		lname
		notificationSetting
		paymentapitoken
		phoneNumber
		profilePicture
		ssoapitoken
		address {
			City
			Country
			State
			stree2
			street1
			zipcode
		}
		}
	}
`;

const userGyms = gql`
query MyQuery($eq: String = "0183a537-c25c-ea39-d099-993004c2dc6c") {
	list_GymItems(filter: {ownerId: {eq: $eq}}) {
	  _GymItems {
		address {
		  City
		  Country
		  State
		  stree2
		  street1
		  zipcode
		}
		cost
		description
		title
		rating
	  }
	}
  }
`;

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

const gymQuery = gql`
	query MyQuery($id: ID = "") {
	get_Gym(id: $id) {
	  accessInformation
	  address {
		City
		Country
		State
		stree2
		street1
		zipcode
	  }
	  availability
	  bookingNotice
	  cancelationWarning
	  cost
	  description
	  equipment {
		details
		equipmentId
	  }
	  hasBathroom
	  hasSpeakers
	  hasWifi
	  isActive
	  isHostHome
	  numGuestsAllowed
	  photos
	  rating
	  title
	  tvType
	}
  }
`;

const userMutation = gql`
	mutation MyMutation($City: String = "", 
		$Country: String = "", 
		$State: String = "", 
		$stree2: String = "", 
		$street1: String = "", 
		$zipcode: String = "", 
		$email: String = "", 
		$favoriteGymIds: [String] = "", 
		$fname: String = "", 
		$lname: String = "", 
		$notificationSetting: Int = 10, 
		$paymentapitoken: String = "", 
		$phoneNumber: String = "", 
		$profilePicture: String = "", 
		$ssoapitoken: String = "",
		$id: ID = "") {
	update_User(
	  id: $id
	  input: {email: $email, favoriteGymIds: $favoriteGymIds, fname: $fname, lname: $lname, notificationSetting: $notificationSetting, paymentapitoken: $paymentapitoken, phoneNumber: $phoneNumber, profilePicture: $profilePicture, ssoapitoken: $ssoapitoken, address: {City: $City, Country: $Country, State: $State, stree2: $stree2, street1: $street1, zipcode: $zipcode}}
	) {
	  transaction {
		_id
	  }
	  result {
		_id
	  }
	}
  }
`;

const gymAddMutation = gql`
	mutation MyMutation($accessInformation: String = "", 
		$City: String = "", 
		$Country: String = "", 
		$State: String = "", 
		$stree2: String = "", 
		$street1: String = "", 
		$zipcode: String = "", 
		$availability: [String] = "", 
		$bookingNotice: Int = 10, 
		$cancelationWarning: Int = 10, 
		$cost: Int = 10, 
		$description: String = "", 
		$equipment: [Self_Gym_equipment_equipmentItem_UpdateInput_] = {}, 
		$hasBathroom: Boolean = false, 
		$hasSpeakers: Boolean = false, 
		$hasWifi: Boolean = false, 
		$isActive: Boolean = false, 
		$isHostHome: Boolean = false, 
		$numGuestsAllowed: Int = 10, 
		$photos: [String] = "", 
		$rating: Int = 10, 
		$tvType: String = "", 
		$title: String = "") {
	add_Gym(
	  input: {accessInformation: $accessInformation, address: {City: $City, Country: $Country, State: $State, stree2: $stree2, street1: $street1, zipcode: $zipcode}, availability: $availability, bookingNotice: $bookingNotice, cancelationWarning: $cancelationWarning, cost: $cost, description: $description, equipment: $equipment, hasBathroom: $hasBathroom, hasSpeakers: $hasSpeakers, hasWifi: $hasWifi, isHostHome: $isHostHome, numGuestsAllowed: $numGuestsAllowed, photos: $photos, rating: $rating, tvType: $tvType, title: $title}
	) {
	  result {
		_id
	  }
	  transaction {
		_id
	  }
	}
  }
`;

const gymUpdateMutation = gql`
	mutation MyMutation($accessInformation: String = "", 
		$City: String = "", 
		$Country: String = "", 
		$State: String = "", 
		$stree2: String = "", 
		$street1: String = "", 
		$zipcode: String = "", 
		$availability: [String] = "", 
		$bookingNotice: Int = 10, 
		$cancelationWarning: Int = 10, 
		$cost: Int = 10, 
		$description: String = "", 
		$equipment: [Self_Gym_equipment_equipmentItem_UpdateInput_] = {}, 
		$hasBathroom: Boolean = false, 
		$hasSpeakers: Boolean = false, 
		$hasWifi: Boolean = false, 
		$isActive: Boolean = false, 
		$isHostHome: Boolean = false, 
		$numGuestsAllowed: Int = 10, 
		$photos: [String] = "", 
		$rating: Int = 10, 
		$tvType: String = "", 
		$title: String = "",
		$id: ID = "") {
	update_Gym(
	  id: $id
	  input: {accessInformation: $accessInformation, address: {City: $City, Country: $Country, State: $State, stree2: $stree2, street1: $street1, zipcode: $zipcode}, availability: $availability, bookingNotice: $bookingNotice, cancelationWarning: $cancelationWarning, cost: $cost, description: $description, equipment: $equipment, hasBathroom: $hasBathroom, hasSpeakers: $hasSpeakers, hasWifi: $hasWifi, isHostHome: $isHostHome, numGuestsAllowed: $numGuestsAllowed, photos: $photos, rating: $rating, tvType: $tvType, title: $title}
	) {
	  result {
		_id
	  }
	  transaction {
		_id
	  }
	}
  }
`;



app.get('/api/getUser', async (req,res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const results = await graphQLClient.request(userQuery);
		res.send(results);
	}
	else res.send('Access Denied.');
	
})

app.get('/api/getUserGyms', async (req,res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const results = await graphQLClient.request(userGyms);
		res.send(results);
	}
	else res.send('Access Denied.');
	
})

	app.get('/api/listEquipment', async (req,res) => {
    if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
      const results = await graphQLClient.request(equipQuery);
      res.send(results);
    }
    else res.send('Access Denied.');
    
})

app.get('/api/getGym/:id', async (req,res) => {
    //if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			id: req.params.id
		}
		const results = await graphQLClient.request(gymQuery, variables);
      res.send(results);
    //}
    //else res.send('Access Denied.');
    
})

app.post('/api/uploadGym', async (req, res) => {

  if(req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
    const variables = {
		accessInformation: req.body.accessInformation, 
		Country: req.body.country, 
		State: req.body.state, 
		stree2: req.body.street2, 
		street1: req.body.street1, 
		zipcode: req.body.zipcode, 
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

    const data = await graphQLClient.request(gymAddMutation, variables)
      
  }
  else res.send('Access Denied.');
});

app.post('/api/updateGym', async (req, res) => {

	if(req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
	  const variables = {
		  accessInformation: req.body.accessInformation, 
		  Country: req.body.country, 
		  State: req.body.state, 
		  stree2: req.body.street2, 
		  street1: req.body.street1, 
		  zipcode: req.body.zipcode, 
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
		  equipment: req.body.equipment,
		  id: "0183a53e-399f-d6d0-7138-547fc0f424c6"
	  }
  
	  const data = await graphQLClient.request(gymUpdateMutation, variables)
		
	}
	else res.send('Access Denied.');
  });

app.post('/api/UpdateProfile', async (req, res) => {
	if(req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			City: req.body.city,
			Country: req.body.country, 
			State: req.body.state, 
			stree2: req.body.street2, 
			street1: req.body.street1, 
			zipcode: req.body.zipcode, 
			email: req.body.email, 
			//favoriteGymIds: req.body.favoriteGymIds, 
			favoriteGymIds: ["0183a53e-399f-d6d0-7138-547fc0f424c60"],
			fname: req.body.fname, 
			lname: req.body.lname, 
			//notificationSetting: req.body.notificationSetting, 
			notificationSetting: 0, 
			paymentapitoken: "striketoken", 
			phoneNumber: req.body.phoneNumber, 
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg", 
			ssoapitoken: "ssotoken",
			id: "0183a537-c25c-ea39-d099-993004c2dc6c"
		}
	
		const data = await graphQLClient.request(userMutation, variables)
		  
	  }
	  else res.send('Access Denied.');
});

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