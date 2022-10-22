import React, { Component, useState, useEffect } from "react";
import Axios from 'axios'

import Button from "@mui/material/Button";

// const GUEST_RESERVATIONS = [
//     {
//         id: 0,
//         name: "Arnold Schwarzenegger",
//         date: "January 1, 2023, 5:00pm",
//     },
//     {
//         id: 1,
//         name: "Dwayne Johnson",
//         date: "March 5, 2022, 8:00am",
//     },
//     {
//         id: 2,
//         name: "Michael Tyson",
//         date: "December 25, 2025, 9:30am",
//     },
//     {
//         id: 3,
//         name: "Alex Louis Armstrong",
//         date: "June 30, 2022, 12:00pm",
//     },

// ]

// const HOST_RESERVATIONS = [
//     {
//         id: 0,
//         name: "Average Joes",
//         date: "January 30, 2023, 5:00pm",
//     },
//     {
//         id: 1,
//         name: "Major Gains",
//         date: "October 5, 2022, 8:00am",
//     },
//     {
//         id: 2,
//         name: "Jims Gym",
//         date: "April 25, 2025, 9:30am",
//     },
//     {
//         id: 3,
//         name: "Heavy Iron",
//         date: "January 30, 2022, 12:00pm",
//     },
// ]

// function ReservationCard(props){
//     return <div>
//         <div className="ReservationCard">
//             <div className="ReserveComps">
//                 <h2>{props.name}</h2>
//                 <h2>{props.date}</h2>    
//             </div>
//             <div className="ReserveComps">
//                 <button className="Button">View Gym</button>
//                 <button className="Button">Directions</button>
//                 <button className="Button">Manage Reservation</button>
//             </div>
//         </div>
//     </div>
// }

// function ReservationList(props){
//     return <div>
//         {props.reserves.map(reserves =>(
//             <ReservationCard 
//             key={reserves.id}
//             name={reserves.name}
//             date={reserves.date}
//             />
//         ))}
//     </div>
// }


// function ReservationPanel(props){
//     return(
//     <div className="ReservationListPanel">  
//         <h1 className='CenterText'>{props.title}</h1>
//         <ReservationList reserves={props.reserves}/>
//     </div> 
//     )      
// }




const UserReservations = (props) => {
    
    const[guestReservations, setGuestReservations] = useState([]);
    const[hostReservations, setHostReservations] = useState([]);
    const[guestLoading, setGuestLoading] = useState(true);
    const[hostLoading, setHostLoading] = useState(true);

    useEffect(() => {
		let str = 'http://localhost:3001/api/getReservationUser/' + props.userId
        Axios.get(str).then((response) => {
            setGuestReservations(response.data.list_GymReservationItems._GymReservationItems);
            setGuestLoading(false);
        })
        for (let i=0; i<props.userGyms.list_GymItems._GymItems.length; i++) {
            let str = 'http://localhost:3001/api/getReservationGym/' + props.userGyms.list_GymItems._GymItems[i]._id
            Axios.get(str).then((response) => {
                for (let j=0; j<response.data.list_GymReservationItems._GymReservationItems.length; j++) {
                    setHostReservations(prevState => [...prevState, response.data.list_GymReservationItems._GymReservationItems[j]])
                }
                setHostLoading(false);
            })
        }

    },[]);
    
    return (
        // <div className="reservation-area">
        //     <ReservationPanel title='Guest Reservations' reserves={GUEST_RESERVATIONS}/>
        //     <ReservationPanel title='Host Reservations' reserves={HOST_RESERVATIONS}/>
        // </div>
        <div>{(!guestLoading && !hostLoading) ?
            <>
            <div>
                <b>These are reservations that you have booked as a guest</b><br></br>
                {guestReservations.map( gresv => <>{gresv.gymName} <br></br> {(new Date(gresv.timeSlot)).toLocaleString()} <br></br></>)}
            </div>
            <div>
                <b>These are the reservations that other guests have booked at your gyms</b><br></br>
                {hostReservations.map( hresv => <>{hresv.gymName} <br></br> {(new Date(hresv.timeSlot)).toLocaleString()} <br></br></>)}
            </div>
            </>
        : <>loading...</>}</div>
    )
}
export default UserReservations;
