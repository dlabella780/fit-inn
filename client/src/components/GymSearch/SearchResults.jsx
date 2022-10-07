import * as React from 'react';
import { Box } from '@mui/system';
import { Stack, Typography, Grid } from '@mui/material';
import { useState } from 'react';

export default function SearchResults({searchType}) {
	var prompt;
	const testGyms = useState([
		{"id" : 1, 
		"name": "GymA", 
		"address": "a", 
		"hourlyRate": 20,
		"rating" : 4},

		{"id" : 2, 
		"name": "GymB", 
		"address": "b", 
		"hourlyRate": 21,
		"rating" : 3},

		{"id" : 3, 
		"name": "GymC", 
		"address": "c", 
		"hourlyRate": 19,
		"rating" : 5},
	]) 

	switch(searchType) {
		case "distance":
			prompt = "Sorting by distance!"
			break;

		case "price":
			prompt = "Sorting by price!"
			break;

		case "rating":
			prompt = "Sorting by rating!"
			break;

		default:
			prompt = "Default"
			break;
	}

	return (
        <div>
			{prompt}
			<Box sx={{ '& .MuiTextField-root': { m: 1 }}}>
				<br></br>
			</Box>
		</div>
	);
}

/* 
{testGyms.map(gym => {
	return(
		<Stack direction="row" spacing={16}>
			{gym}
		</Stack>
	)
})}
*/