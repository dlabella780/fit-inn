import React, { useEffect, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Stack from '@mui/material/Stack';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Axios from 'axios'

const AvailabilitySelector = (props) => {
    const [avail, setAvail] = useState([]);
    const [times, setTimes] = useState([]);
    const [takenTimes, setTakenTimes] = useState([]);
    const [timesLoaded, setTimesLoaded] = useState([]);
    
    const handleChange = (newValue) => {
        props.setStartingDate(newValue);
    };
    const handleDays = (event, newDays) => {
        props.setDays(newDays);
    };

    useEffect(() => {
        if (props.startingDate && props.startingHours && props.endingHours && props.days && timesLoaded)
            setA();
    }, [props.startingDate, props.startingHours, props.endingHours, props.days, timesLoaded]);

    useEffect(() => {
        if (props.gymId) {
            let str = 'http://localhost:3001/api/getTakenTimes/' + props.gymId;
            Axios.get(str).then((response) => {
                setTakenTimes(response.data.list_GymReservationItems._GymReservationItems)
                setTimesLoaded(true)
            })
        }
    }, []);

    const addTime = (time) => {
        let taken = false;

        for (let i = 0; i < takenTimes.length; i++) {
            if (takenTimes[i].timeSlot === time) {
                taken = true;
                break;
            }
        }
        if (!taken)
            avail.push(time);
    }

    const setA = () => {
        let d = new Date(props.startingDate);
        setTimes([]);
        setAvail([]);
        props.days.sort();
        for (let i = 0; i < props.days.length; i++) {
            if (props.days[0] < d.getDay()) {
                let temp = props.days.shift();
                props.days.push(temp);
            }
        }

        for (let i = 0; i < (props.endingHours.$H - props.startingHours.$H + 1); i++) {
            times.push(props.startingHours.$H + i);
        }

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < props.days.length; j++) {
                d.setDate(d.getDate() + (props.days[j] + 7 - d.getDay()) % 7);
                for (let k = 0; k <= times.length; k++) {
                    if (k === 0) d.setHours(times[0] - 1)
                    else {
                        d.setHours(d.getHours() + 1);
                        addTime(d.toJSON())
                    }
                }
                if (props.days.length === 1) d.setDate(d.getDate() + 7);
            }
        }
        props.setAvailability(avail);
    }

    return (
        <>
            <Stack spacing={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label="Starting Day"
                        inputFormat="MM/DD/YYYY"
                        value={props.startingDate}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <ToggleButtonGroup
                    value={props.days}
                    onChange={handleDays}
                    aria-label="text formatting"
                >
                    <ToggleButton value={0} aria-label="bold">
                        SUN
                    </ToggleButton>
                    <ToggleButton value={1} aria-label="bold">
                        MON
                    </ToggleButton>
                    <ToggleButton value={2} aria-label="bold">
                        TUE
                    </ToggleButton>
                    <ToggleButton value={3} aria-label="bold">
                        WED
                    </ToggleButton>
                    <ToggleButton value={4} aria-label="bold">
                        THU
                    </ToggleButton>
                    <ToggleButton value={5} aria-label="bold">
                        FRI
                    </ToggleButton>
                    <ToggleButton value={6} aria-label="bold">
                        SAT
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        views={['hours']}
                        label="Staring Time"
                        value={props.startingHours}
                        onChange={(newValue) => {
                            props.setStartingHours(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        views={['hours']}
                        label="Ending Time"
                        value={props.endingHours}
                        onChange={(newValue) => {
                            props.setEndingHours(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Stack>
        </>
    );
};
export default AvailabilitySelector;