import { gql } from 'graphql-request';
import VerifyRequest from '../VerifyRequest.js';

export default function User(app, graphQLClient) {

    const getId = gql`
	query MyQuery($eq: String = "") {
        list_UserItems(filter: { ssoapitoken: { eq: $eq } }) {
		_UserItems {
                _id
            }
        }
    }`;

    app.get('/api/getUserId/:id', async (req, res) => {
        if (VerifyRequest(req)) {
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
	}`;

    app.get('/api/getUser/:id', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                id: req.params.id
            }
            const results = await graphQLClient.request(userQuery, variables);
            res.send(results);
        }
        else res.send('Access Denied.');

    })

    app.get('/api/getUser/:email', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                email: req.params.email
            }
            const results = await graphQLClient.request(userQuery, variables);
            res.send(results);
        }
        else res.send('Access Denied.');
    })

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
    }`;

    app.get('/api/getUserGyms/:id', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                eq: req.params.id
            }
            const results = await graphQLClient.request(userGyms, variables);
            res.send(results);
        }
        else res.send('Access Denied.');

    })

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
  	}`;

    app.post('/api/AddUser', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                ssoapitoken: req.body.uid,
            }

            const data = await graphQLClient.request(userAddMutation, variables)
            res.send(data)
        }
        else res.send('Access Denied.');
    });

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
  }`;

    app.post('/api/UpdateProfile', async (req, res) => {
        if (VerifyRequest(req)) {
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
}