import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTime2() {
	const [startTime, setStartTime] = React.useState(new Date());

	// noinspection RequiredAttributes
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				renderInput={(params) => <TextField {...params} />}
				label="Starting day/time?"
				value={startTime}
				onChange={(newValue) => {setStartTime(newValue);}}
			/>
		</LocalizationProvider>
	);
}