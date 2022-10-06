import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BadgeIcon from '@mui/icons-material/Badge';

export default function OptionalBookingID(){
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <BadgeIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
            <TextField fullWidth required id="outlined-basic" label="Optional Booking ID" variant="standard" />
        </Box>
    )
}