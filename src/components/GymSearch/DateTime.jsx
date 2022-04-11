import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimeValidation() {
	const [value, setValue] = React.useState(new Date());

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				renderInput={(params) => <TextField {...params} />}
				label="Starting day/time?"
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
			/>
			<DateTimePicker
				renderInput={(params) => <TextField {...params} />}
				label="Ending day/time?"
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
			/>
		</LocalizationProvider>
	);
}