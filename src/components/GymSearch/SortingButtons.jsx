import React, { Component } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

export default class SortingButtons extends Component {
	render() { return (
		<div className="SortingButtons">
			<Box sx={{display: 'flex', '& > *': {m: 1,},}}>
				<ButtonGroup
					orientation="outlined"
					aria-label="outlined button group"
					variant="contained">
					<Button key="distance"onClick={() => {}}> Sort by Distance</Button>
					<Button key="availability" onClick={() => {}}> Sort by Availability</Button>
					<Button key="price" onClick={() => {}}> Sort by Price</Button>
					<Button key="rating" onClick={() => {}}> Sort by Rating</Button>
					<Button key="list" onClick={() => {}}> View as List</Button>
					<Button key="title" onClick={() => {}}> View as Tiles</Button>
					<Button key="search" onClick={() => {}}> GO!</Button>
				</ButtonGroup>
			</Box>
		</div>
	);}
}