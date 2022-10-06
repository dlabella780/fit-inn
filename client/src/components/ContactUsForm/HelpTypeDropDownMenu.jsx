import React,{ useState,useEffect } from'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HelpIcon from '@mui/icons-material/Help';
import { Box } from "@material-ui/core";

export default function HelpTypeDropDownMenu(){
    const [help, setHelp] = React.useState('');

    const handleChange = (event) => {
        setHelp(event.target.value);
    };
    
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <HelpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="help-simple-select-standard-label">How can we help you?*</InputLabel>
                    <Select
                        labelId="help-simple-select-standard-label"
                        id="help-simple-select-standard"
                        value={help}
                        onChange={handleChange}
                        label="Help"
                        >
                        <MenuItem value={10}>I need help with booking a reservation.</MenuItem>
                        <MenuItem value={20}>I need help with altering a reservation.</MenuItem>
                        <MenuItem value={30}>I need help with canceling a reservation.</MenuItem>
                        <MenuItem value={40}>I need help with a refund.</MenuItem>
                        <MenuItem value={70}>I need help listing my photos.</MenuItem>
                        <MenuItem value={50}>I have a day reservation issue.</MenuItem>
                        <MenuItem value={60}>I have a feedback about the website.</MenuItem>
                        <MenuItem value={80}>I want to report a safety concern.</MenuItem>
                        <MenuItem value={90}>I want to report a suspicious activity.</MenuItem>
                        <MenuItem value={100}>I want to report a neighborhood disturbance.</MenuItem>
                        <MenuItem value={110}>I have a question about my account.</MenuItem>
                        <MenuItem value={120}>I have a question about payment or payout.</MenuItem>
                        <MenuItem value={130}>I have a question about verification.</MenuItem>
                        <MenuItem value={140}>I have a question about property or liability coverage.</MenuItem>
                        <MenuItem value={150}>I need help with an issue that is not listed here.</MenuItem>
                    </Select>
            </FormControl>
        </Box>
    )
}