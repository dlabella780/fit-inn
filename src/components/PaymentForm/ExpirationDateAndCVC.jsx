import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function ExpirationDateAndCVC(){
  return(
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CalendarMonthIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="expiration-date" label="Expiration Date*" placeholder="MM/YY" multiline variant="standard" />
            <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="cvc" label="CVC*" variant="standard" />
        </Box>
      </Box>
  )
}