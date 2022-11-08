import { gql } from 'graphql-request';
import VerifyRequest from '../VerifyRequest.js';

export default function Reservation(app, graphQLClient) {

    const queryReservatiosGym = gql`
	query MyQuery($eq: String = "") {
		list_GymReservationItems(filter: {gymId: {eq: $eq}}) {
			_GymReservationItems {
				_id
                gymId
				gymName
				guestId
				duration
				guestReview
				numGuests
				rating
				timeSlot
			}
		}
  	}`;

    app.get('/api/getReservationGym/:id', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                eq: req.params.id
            }
            const results = await graphQLClient.request(queryReservatiosGym, variables);
            res.send(results);
        }
        else res.send('Access Denied.');

    })

    const queryReservatiosUser = gql`
	query MyQuery($eq: String = "") {
		list_GymReservationItems(filter: {guestId: {eq: $eq}}) {
			_GymReservationItems {
				_id
                gymId
				gymName
				guestId
				duration
				guestReview
				numGuests
				rating
				timeSlot
			}
		}
	}`;

    app.get('/api/getReservationUser/:id', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                eq: req.params.id
            }
            const results = await graphQLClient.request(queryReservatiosUser, variables);
            res.send(results);
        }
        else res.send('Access Denied.');

    })

    const reservationAddMutation = gql`
	mutation MyMutation($duration: Int = 60,
        $guestId: String = "",
        $guestReview: String = "",
        $gymId: String = "",
        $gymName: String = "",
        $numGuests: Int = 10,
        $rating: Int = 10,
        $timeSlot: String = "") {
        add_GymReservation(
            input: { duration: $duration, guestId: $guestId, guestReview: $guestReview, gymId: $gymId, gymName: $gymName, numGuests: $numGuests, rating: $rating, timeSlot: $timeSlot }
        ) {
		result {
                _id
            }
		transaction {
                _id
            }
        }
    }`;

    const getGymTimes = gql`
	query MyQuery($id: ID = "") {
		get_Gym(id: $id) {
		availability
		}
	}`;

    const updateGymTimes = gql`
	mutation MyMutation($id: ID = "", $availability: [String] = "") {
		update_Gym(id: $id, input: {availability: $availability}) {
		result {
			_id
		}
		transaction {
			_id
		}
		}
	}`;

    app.post('/api/AddReservation', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                gymId: req.body.gymId,
                gymName: req.body.gymName,
                guestId: req.body.guestId,
                timeSlot: req.body.timeSlot,
                duration: req.body.duration,
                numGuests: req.body.numGuests,
                guestReview: "",
                rating: -1
            }
            const gymTimes = await graphQLClient.request(getGymTimes, { id: req.body.gymId })
            if (gymTimes) {
                var str = new Array();
                var timeRemoved = false;
                for (let i = 0; i < gymTimes.get_Gym.availability.length; i++) {
                    if (gymTimes.get_Gym.availability[i] !== req.body.timeSlot) {
                        str.push(gymTimes.get_Gym.availability[i]);
                    }
                    else {
                        timeRemoved = true;
                    }
                };

                const updateTimes = await graphQLClient.request(updateGymTimes, { id: req.body.gymId, availability: str })
                if (updateTimes && timeRemoved) {
                    const data = await graphQLClient.request(reservationAddMutation, variables);
                    res.send(data);
                }
                else console.log('time not removed')
            }
        }
        else res.send('Access Denied.');
    });

    const reservationReview = gql`
	mutation MyMutation($id: ID = "", 
            $guestReview: String = "",
			$rating: Int = 0) {
		update_GymReservation(
			id: $id
			input: {guestReview: $guestReview, rating: $rating}
		) {
		result {
			_id
		}
		transaction {
			_id
		}
		}
	}`;

    const getGymRating = gql`
    query MyQuery($id: ID = "") {
        get_Gym(id: $id) {
          numReviews
          rating
        }
    }`;

    const setGymRating = gql`
    mutation MyMutation($id: ID = "", $numReviews: Int = 10, $rating: Float = 1.5) {
        update_Gym(id: $id, input: {numReviews: $numReviews, rating: $rating}) {
          result {
            _id
          }
          transaction {
            _id
          }
        }
      }`;

    //need to pass the new guest review as guestReview, rating as rating, reservation id as id, and the gymId for the reservation as gymId
    app.post('/api/ReservationReview', async (req, res) => {
        if (VerifyRequest(req)) {
            const variables = {
                guestReview: req.body.guestReview,
                rating: req.body.rating,
                id: req.body.id
            }

            const gymInfo = await graphQLClient.request(getGymRating, {id: req.body.gymId})
            if (gymInfo) {
                var newRating;
                if (gymInfo.get_Gym.numReviews === 0) 
                    newRating = req.body.rating;
                else
                    newRating = ((gymInfo.get_Gym.rating * gymInfo.get_Gym.numReviews) + req.body.rating)/(gymInfo.get_Gym.numReviews + 1);

                const gymVariables = {
                    id: req.body.gymId,
                    numReviews: (gymInfo.get_Gym.numReviews + 1),
                    rating: newRating
                }
                const gymRating = await graphQLClient.request(setGymRating, gymVariables)
                if(gymRating) {
                    const gymReview = await graphQLClient.request(reservationReview, variables)
                }
            }

        }
        else res.send('Access Denied.');
    });

    const deleteReservation = gql`
        mutation MyMutation($id: ID = "") {
            remove_GymReservation(id: $id) {
            transaction {
                _id
            }
            }
        }`;

    const getCancelWarning = gql`
        query MyQuery($id: ID = "") {
            get_Gym(id: $id) {
            cancelationWarning
            availability
            }
        }`;

    const addReservationBack = gql`
    mutation MyMutation($id: ID = "", $availability: [String] = "") {
        update_Gym(id: $id, input: {availability: $availability}) {
          result {
            _id
          }
          transaction {
            _id
          }
        }
      }`;

    //need to pass the reservation id as id, the reservation time slot as timeSlot, and the gym id for the reservation as gymId
    app.post('/api/CancelReservation', async (req, res) => {
        if (VerifyRequest(req)) {
            
            const cancelWarning = await graphQLClient.request(getCancelWarning, {id: req.body.gymId})
            if (cancelWarning) {
                var d = new Date();
                d.setHours(d.getHours() + cancelWarning.get_Gym.cancelationWarning);
                if (d < (new Date(req.body.timeSlot))) {
                    const data = await graphQLClient.request(deleteReservation, {id: req.body.id})
                    if (data) {
                        var avail = cancelWarning.get_Gym.availability;
                        avail.push(req.body.timeSlot);
                        const addResv = await graphQLClient.request(addReservationBack, {id: req.body.gymId, availability: avail})
                    }
                }
                else {
                    res.send('You cannot cancel this close to the reservation.')
                }
            }

        }
        else res.send('Access Denied.');
    });

}