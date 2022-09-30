import React, { Component } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

const SortingButtons = (props) => {
	return (
		<div className="SortingButtons">
			<Box sx={{display: 'flex', '& > *': {m: 1,},}}>
				<ButtonGroup
					orientation="outlined"
					aria-label="outlined button group"
					variant="contained"
				>
					<Button key="distance"onClick={() => {}}> Sort by Distance</Button>
					<Button key="price" onClick={() => {}}> Sort by Price</Button>
					<Button key="rating" onClick={() => {}}> Sort by Rating</Button>
					<Button key="search" onClick={() => {}}> GO!</Button>
				</ButtonGroup>
			</Box>
		</div>
	);
}

export default SortingButtons;