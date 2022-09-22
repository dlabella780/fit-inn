import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CancelReservation(){
  return(
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField fullWidth id="ReservationName" label="Reservation Name" variant="standard" />
          <Button variant="contained">Cancel Reservation</Button>
      </Box>
  )
}
