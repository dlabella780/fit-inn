import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTime2() {
	const [startTime, setStartTime] = React.useState(new Date());
	const [endTime, setEndTime] = React.useState(new Date());

	// noinspection RequiredAttributes
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				renderInput={(params) => <TextField {...params} />}
				label="Starting day/time?"
				value={startTime}
				onChange={(newValue) => {setStartTime(newValue);}}
			/>
			<DateTimePicker
				renderInput={(params) => <TextField {...params} />}
				label="Ending day/time?"
				value={endTime}
				onChange={(newValue) => {setEndTime(newValue);}}
			/>
		</LocalizationProvider>
	);
}