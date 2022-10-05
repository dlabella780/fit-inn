import * as React from 'react';
import { Box } from '@mui/system';
import { Stack, Typography, Grid } from '@mui/material';

export default function SearchResults({searchType}) {
	var prompt;
	var GymA = <div>
		Gym A<br/>
		Description<br/>
		Address<br/>
		Equipment<br/>
		Amenities<br/>
		Hourly Rate<br/>
		Availability<br/>
		Rating<br/>
	</div>
	var GymB = <div>
		Gym B<br/>
		Description<br/>
		Address<br/>
		Equipment<br/>
		Amenities<br/>
		Hourly Rate<br/>
		Availability<br/>
		Rating<br/>
	</div>
	var GymC = <div>
		Gym C<br/>
		Description<br/>
		Address<br/>
		Equipment<br/>
		Amenities<br/>
		Hourly Rate<br/>
		Availability<br/>
		Rating<br/>
	</div>
	var gymOrder = [];

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
				<Stack direction="row" spacing={16}>
					{GymA}
					{GymB}
					{GymC}
				</Stack>
			</Box>
		</div>
	);
}