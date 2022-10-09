import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const SortingButtons = () => {
	const [searchType, setSearchType] = useState("");

	return (
		<div className="SortingButtons">
			<Box sx={{display: 'flex', '& > *': {m: 1,},}}>
				<Stack direction="row" spacing={1.6}>
					<Button variant="contained" 
							onClick={(e) => setSearchType("distance")}> 
						Sort by Distance
					</Button>
					<Button variant="contained" 
							onClick={(e) => setSearchType("price")}> 
						Sort by Price
					</Button>
					<Button variant="contained" 
							onClick={(e) => setSearchType("availability")}>
						Sort by Availability
					</Button>
				</Stack>
			</Box>
			<br></br>
		</div>
	);
}

export default SortingButtons;