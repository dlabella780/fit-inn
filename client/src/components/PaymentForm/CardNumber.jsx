import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PaymentIcon from '@mui/icons-material/Payment';

export default function CardNumber(){
  return(
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <PaymentIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
          <TextField fullWidth id="cardNumber" label="Card Number*" variant="standard" />
      </Box>
  )
}