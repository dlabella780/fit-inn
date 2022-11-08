import { gql } from 'graphql-request';
import VerifyRequest from '../VerifyRequest.js';

export default function Gym(app, graphQLClient) {

    const equipQuery = gql`
        query equipQuery {
            list_EquipmentItems {
                _EquipmentItems {
                _id
                name
            }
        }
    }`;


    app.get('/api/listEquipment', async (req, res) => {
        if (VerifyRequest(req)) {
            const results = await graphQLClient.request(equipQuery);
            res.send(results);
        }
        else res.send('Access Denied.');

    })


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
	  _id
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
      numReviews
	}
    }`;

    app.get('/api/getGym/:id', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                id: req.params.id
            }
            const results = await graphQLClient.request(gymQuery, variables);
            res.send(results);
        }
        else res.send('Access Denied.');

    })

    const gymSearchZipAvail = gql`
    query MyQuery($eq: String = "", $contains: String = "") {
        list_GymItems(
        filter: {address: {zipcode: {eq: $eq}}, availability: {contains: $contains}}
        ) {
        _GymItems {
            _id
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
    }`;

    const gymSearchAvail = gql`
    query MyQuery($contains: String = "") {
        list_GymItems(
        filter: {availability: {contains: $contains}}
        ) {
        _GymItems {
            _id
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
    }`;

    const gymSearchZip = gql`
    query MyQuery($eq: String = "") {
        list_GymItems(
        filter: {address: {zipcode: {eq: $eq}}}
        ) {
        _GymItems {
            _id
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
    }`;

    app.get('/api/gymSearch', async (req, res) => {
        if (VerifyRequest(req)) {
            if (req.query.zipcode != '' && req.query.avail != '') {
                const variables = {
                    eq: req.query.zipcode,
                    contains: req.query.avail
                }
                const results = await graphQLClient.request(gymSearchZipAvail, variables);
                res.send(results);
            }
            else if (req.query.zipcode != '') {
                const variables = { eq: req.query.zipcode }
                const results = await graphQLClient.request(gymSearchZip, variables);
                res.send(results);
            }
            else if (req.query.avail != '') {
                const variables = { contains: req.query.avail }
                const results = await graphQLClient.request(gymSearchAvail, variables);
                res.send(results);
            }
        }
        else res.send('Access Denied.');
    })

    const gymAddMutation = gql`
	mutation MyMutation($accessInformation: String = "", 
		$address: Self_Gym_address_Input_ = {},
		$availability: [String] = "", 
		$bookingNotice: Int = 24, 
		$cancelationWarning: Int = 24, 
		$cost: Int = 10, 
		$description: String = "", 
		$equipment: [Self_Gym_equipment_equipmentItem_Input_] = {}, 
		$hasBathroom: Boolean = false, 
		$hasSpeakers: Boolean = false, 
		$hasWifi: Boolean = false, 
		$isActive: Boolean = false, 
		$isHostHome: Boolean = false, 
		$numGuestsAllowed: Int = 1, 
		$ownerId: String = "",
		$photos: [String] = "", 
		$rating: Float = -1, 
		$tvType: String = "", 
		$title: String = "",
		$numReviews: Int = 0) {
	add_Gym(
	  input: {accessInformation: $accessInformation, address: $address, availability: $availability, bookingNotice: $bookingNotice, cancelationWarning: $cancelationWarning, cost: $cost, description: $description, equipment: $equipment, hasBathroom: $hasBathroom, hasSpeakers: $hasSpeakers, isActive: $isActive, hasWifi: $hasWifi, isHostHome: $isHostHome, numGuestsAllowed: $numGuestsAllowed, ownerId: $ownerId, photos: $photos, rating: $rating, tvType: $tvType, title: $title, numReviews: $numReviews}
	) {
	  result {
		_id
	  }
	  transaction {
		_id
	  }
	}
    }`;

    app.post('/api/uploadGym', async (req, res) => {

        if (VerifyRequest(req)) {
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
                isActive: true,
                hasWifi: req.body.hasWifi,
                isHostHome: req.body.isHostHome,
                numGuestsAllowed: req.body.numGuestsAllowed,
                ownerId: req.body.ownerId,
                photos: req.body.photos,
                rating: -1,
                title: req.body.title,
                tvType: req.body.tvType,
                equipment: req.body.equipment,
                numReviews: 0
            }
            const data = await graphQLClient.request(gymAddMutation, variables)

        }
        else res.send('Access Denied.');
    });

    const gymUpdateMutation = gql`
	mutation MyMutation($id: ID = "", 
        $accessInformation: String = "", 
        $availability: [String] = "", 
        $bookingNotice: Int = 24, 
        $cancelationWarning: Int = 24, 
        $cost: Int = 10, 
        $description: String = "", 
        $equipment: [Self_Gym_equipment_equipmentItem_UpdateInput_] = {}, 
        $hasBathroom: Boolean = false, 
        $hasSpeakers: Boolean = false, 
        $hasWifi: Boolean = false, 
        $isHostHome: Boolean = false, 
        $numGuestsAllowed: Int = 1, 
        $photos: [String] = "", 
        $title: String = "", 
        $tvType: String = "") {
        update_Gym(
          id: $id
          input: {accessInformation: $accessInformation, availability: $availability, bookingNotice: $bookingNotice, cancelationWarning: $cancelationWarning, cost: $cost, description: $description, equipment: $equipment, hasBathroom: $hasBathroom, hasSpeakers: $hasSpeakers, hasWifi: $hasWifi, isHostHome: $isHostHome, numGuestsAllowed: $numGuestsAllowed, photos: $photos, title: $title, tvType: $tvType}
        ) {
          result {
            _id
          }
          transaction {
            _id
          }
        }
      }`;

    app.post('/api/updateGym', async (req, res) => {

        if (VerifyRequest(req)) {
            const variables = {
                accessInformation: req.body.accessInformation,
                availability: req.body.availability,
                bookingNotice: req.body.bookingNotice,
                cancelationWarning: req.body.cancelationWarning,
                cost: req.body.cost,
                description: req.body.description,
                hasBathroom: req.body.hasBathroom,
                hasSpeakers: req.body.hasSpeakers,
                hasWifi: req.body.hasWifi,
                isHostHome: req.body.isHostHome,
                numGuestsAllowed: req.body.numGuestsAllowed,
                ownerId: req.body.ownerId,
                photos: req.body.photos,
                title: req.body.title,
                tvType: req.body.tvType,
                equipment: req.body.equipment,
                id: req.body.id
            }

            const data = await graphQLClient.request(gymUpdateMutation, variables)

        }
        else res.send('Access Denied.');
    });

    const hideGym = gql`
    mutation MyMutation($id: ID = "") {
        update_Gym(id: $id, input: {isActive: false}) {
          result {
            _id
          }
          transaction {
            _id
          }
        }
      }`;

    //need to pass the gymId as id
    app.post('/api/deleteGym', async (req, res) => {

        if (VerifyRequest(req)) {

            const data = await graphQLClient.request(hideGym, {id: req.body.id})

        }
        else res.send('Access Denied.');
    });
}