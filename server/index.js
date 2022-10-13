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

const getId = gql`
	query MyQuery($eq: String = "") {
		list_UserItems(filter: {ssoapitoken: {eq: $eq}}) {
		_UserItems {
			_id
		}
		}
	}  
`;

app.get('/api/getUserId/:id', async (req,res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			eq: req.params.id
		}
		const results = await graphQLClient.request(getId, variables)
		res.send(results.list_UserItems._UserItems);
	}
	else res.send('Access Denied.');
	
})

const userQuery = gql`
	query MyQuery($id: ID = "") {
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
query MyQuery($eq: String = "") {
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
		_id
	  }
	}
  }
`;

const gymSearchZipAvail = gql`
query MyQuery($eq: String = "", $contains: String = "") {
	list_GymItems(
	  filter: {address: {zipcode: {eq: $eq}}, availability: {contains: $contains}}
	) {
	  _GymItems {
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
  }
`;
const gymSearchAvail = gql`
query MyQuery($contains: String = "") {
	list_GymItems(
	  filter: {availability: {contains: $contains}}
	) {
	  _GymItems {
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
  }
`;
const gymSearchZip = gql`
query MyQuery($eq: String = "") {
	list_GymItems(
	  filter: {address: {zipcode: {eq: $eq}}}
	) {
	  _GymItems {
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

const userAddMutation = gql`
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
		$notificationSetting: Int = 0, 
		$paymentapitoken: String = "", 
		$phoneNumber: String = "", 
		$profilePicture: String = "", 
		$ssoapitoken: String = "") {
	add_User(
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

const userUpdateMutation = gql`
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
		$id: ID = "") {
	update_User(
	  id: $id
	  input: {email: $email, favoriteGymIds: $favoriteGymIds, fname: $fname, lname: $lname, notificationSetting: $notificationSetting, paymentapitoken: $paymentapitoken, phoneNumber: $phoneNumber, profilePicture: $profilePicture, address: {City: $City, Country: $Country, State: $State, stree2: $stree2, street1: $street1, zipcode: $zipcode}}
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
		$address: Self_Gym_address_Input_ = {},
		$availability: [String] = "", 
		$bookingNotice: Int = 10, 
		$cancelationWarning: Int = 10, 
		$cost: Int = 10, 
		$description: String = "", 
		$equipment: [Self_Gym_equipment_equipmentItem_Input_] = {}, 
		$hasBathroom: Boolean = false, 
		$hasSpeakers: Boolean = false, 
		$hasWifi: Boolean = false, 
		$isActive: Boolean = false, 
		$isHostHome: Boolean = false, 
		$numGuestsAllowed: Int = 10, 
		$ownerId: String = "",
		$photos: [String] = "", 
		$rating: Int = 10, 
		$tvType: String = "", 
		$title: String = "") {
	add_Gym(
	  input: {accessInformation: $accessInformation, address: $address, availability: $availability, bookingNotice: $bookingNotice, cancelationWarning: $cancelationWarning, cost: $cost, description: $description, equipment: $equipment, hasBathroom: $hasBathroom, hasSpeakers: $hasSpeakers, isActive: $isActive, hasWifi: $hasWifi, isHostHome: $isHostHome, numGuestsAllowed: $numGuestsAllowed, ownerId: $ownerId, photos: $photos, rating: $rating, tvType: $tvType, title: $title}
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
		$address: Self_Gym_address_UpdateInput_ = {},
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
	  input: {accessInformation: $accessInformation, address: $address, availability: $availability, bookingNotice: $bookingNotice, cancelationWarning: $cancelationWarning, cost: $cost, description: $description, equipment: $equipment, hasBathroom: $hasBathroom, hasSpeakers: $hasSpeakers, hasWifi: $hasWifi, isActive: $isActive, isHostHome: $isHostHome, numGuestsAllowed: $numGuestsAllowed, photos: $photos, rating: $rating, tvType: $tvType, title: $title}
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

const queryReservatiosGym = gql`
	query MyQuery($eq: String = "") {
		list_GymReservationItems(filter: {gymId: {eq: $eq}}) {
			_GymReservationItems {
				duration
				guestReview
				numGuests
				rating
				timeSlot
			}
		}
  	}
`;

const queryReservatiosUser = gql`
	query MyQuery($eq: String = "") {
		list_GymReservationItems(filter: {guestId: {eq: $eq}}) {
			_GymReservationItems {
				duration
				guestReview
				numGuests
				rating
				timeSlot
			}
		}
	}
`;

const reservationAddMutation = gql`
	mutation MyMutation($duration: Int = 10, 
			$guestId: String = "", 
			$guestReview: String = "", 
			$gymId: String = "", 
			$numGuests: Int = 10, 
			$rating: Int = 10, 
			$timeSlot: String = "") {
		add_GymReservation(
		input: {duration: $duration, guestId: $guestId, guestReview: $guestReview, gymId: $gymId, numGuests: $numGuests, rating: $rating, timeSlot: $timeSlot}
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

const reservationUpdateMutation = gql`
	mutation MyMutation($duration: Int = 10, 
			$guestReview: String = "", 
			$numGuests: Int = 10, 
			$rating: Int = 10, 
			$timeSlot: String = "") {
		update_GymReservation(
			id: $id
			input: {duration: $duration, guestReview: $guestReview, numGuests: $numGuests, rating: $rating, timeSlot: $timeSlot}
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

app.get('/api/getUser/:id', async (req,res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			id: req.params.id
		}
		const results = await graphQLClient.request(userQuery, variables);
		res.send(results);
	}
	else res.send('Access Denied.');
	
})

app.get('/api/getUserGyms/:id', async (req,res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			eq: req.params.id
		}
		const results = await graphQLClient.request(userGyms, variables);
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
    if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			id: req.params.id
		}
		const results = await graphQLClient.request(gymQuery, variables);
      res.send(results);
    }
    else res.send('Access Denied.');
    
})

app.get('/api/gymSearch', async (req,res) => {
    if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		if (req.query.zipcode != '' && req.query.day != '') {
			const variables = {
				eq: req.query.zipcode,
				contains: req.query.day
			}
			const results = await graphQLClient.request(gymSearchZipAvail, variables);
			res.send(results);
		} else if (req.query.zipcode != '') {
			const variables = {
				eq: req.query.zipcode
			}
			const results = await graphQLClient.request(gymSearchZip, variables);
			res.send(results);
		} else if (req.query.day != '') {
			const variables = {
				contains: req.query.day
			}
			const results = await graphQLClient.request(gymSearchAvail, variables);
			res.send(results);
		}
    }
    else res.send('Access Denied.');
    
})

app.get('/api/getReservationGym/:id', async (req,res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			eq: req.params.id
		}
		const results = await graphQLClient.request(queryReservatiosGym, variables);
      res.send(results);
    }
    else res.send('Access Denied.');
	
})

app.get('/api/getReservationUser/:id', async (req,res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			eq: req.params.id
		}
		const results = await graphQLClient.request(queryReservatiosUser, variables);
      res.send(results);
    }
    else res.send('Access Denied.');
	
})

app.get('/api/getUser', async (req,res) => {
	if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const results = await graphQLClient.request(userQuery);
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
    const data = await graphQLClient.request(gymAddMutation, variables)
      
  }
  else res.send('Access Denied.');
});

app.post('/api/updateGym', async (req, res) => {

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
		  equipment: req.body.equipment,
		  id: req.body.id
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
			id: req.body.id
		}
	
		const data = await graphQLClient.request(userUpdateMutation, variables)
		  
	  }
	  else res.send('Access Denied.');
});

app.post('/api/UpdateReservation', async (req, res) => {
	if(req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			timeSlot: req.body.timeSlot,
			duration: req.body.duration,
			numGuests: req.body.numGuests,
			guestReview: req.body.guestReview,
			rating: req.body.rating,
			id: req.body.id
		}
	
		const data = await graphQLClient.request(reservationUpdateMutation, variables)
		  
	  }
	  else res.send('Access Denied.');
});

app.post('/api/AddReservation', async (req, res) => {
	if(req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			gymId: req.body.gymId,
			guestId: req.body.guestID,
			timeSlot: req.body.timeSlot,
			duration: req.body.duration,
			numGuests: req.body.numGuests,
			guestReview: req.body.guestReview,
			rating: req.body.rating
		}
	
		const data = await graphQLClient.request(reservationAddMutation, variables)
		  
	  }
	  else res.send('Access Denied.');
});

app.post('/api/AddUser', async (req, res) => {
	if(req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE) {
		const variables = {
			ssoapitoken: req.body.uid,
		}
	
		const data = await graphQLClient.request(userAddMutation, variables)
		res.send(data)
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