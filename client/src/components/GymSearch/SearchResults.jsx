import React, { useState, useEffect } from "react";
import Axios from 'axios';
import GymThumbnail from "./GymThumbnail";

export default function SearchResults({searchType}) {
	const [gymData, setGymData] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:3001/api/gymSearch', 
			{params: {zipcode: '95818', day: ''}})
			.then((response) => { setGymData(response.data); })
	}, []);
	
	var prompt;
	switch(searchType) {
		case "distance":
			prompt = "Sorting by distance!"
			break;

		case "price":
			prompt = "Sorting by price!"
			break;

		case "availability":
			prompt = "Sorting by availability!"
			break;

		default:
			prompt = "default"
			break;
	}

	// TODO : GymThumbnail crashes since the gymData is not loaded? 
	// Props sometimes doesnt realize what the map val is.
	return ( 
	<div> 
		{console.log(gymData)}
		
    </div> );
}
//<GymThumbnail data={gymData}/>