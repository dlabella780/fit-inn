import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function NumberOfGuests() {
	return (
		<TextField
			id="max-guests"
			label="# of guests?"
			type="number"
			variant="filled"
			style = {{width: 200}}
		/>
	);
}