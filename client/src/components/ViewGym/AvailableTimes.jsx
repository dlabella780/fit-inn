import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Stack from '@mui/material/Stack';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import { Checkbox, Typography } from "@material-ui/core";


const AvailableTimes = (props) => {
  
    const [day, setDay] = useState(dayjs('2022-11-03'));
    const [times,setTimes] = useState([]);


    const handleChange = (newValue) => {
        setDay(newValue);
        let d = new Date(newValue);
        for (let i=0; i<24; i++) {
            for (let j=0; j<props.times.length; j++) {
                if(props.times[j]===d.toJSON())  {
                    times.push(props.times[j])
                    break;
                }
            }
            d.setHours(d.getHours() + 1);
        }
    };

    const ShowDays = () => {

        return (
        <>{ times.length > 0 ?    
        <>{
            times.map((t,index) => 
            <Typography key = {index} variant="h6">
                <Checkbox onChange={(e) => props.setDate(t)}></Checkbox>
                {(new Date(t)).toLocaleTimeString()}
            </Typography>)
        }</>
        : <Typography variant="h5" style={{padding: 15, color:"black"}}>
        Try a New Date!
        </Typography>}</>);
    }
 
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            label="Select a day"
            inputFormat="MM/DD/YYYY"
            value={day}
            onChange={handleChange}
            onOpen={() => setTimes([])}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <ShowDays></ShowDays>
        </>
    );
};
export default AvailableTimes;