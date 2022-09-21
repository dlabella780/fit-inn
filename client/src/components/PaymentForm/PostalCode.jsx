import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function PostalCode(){
  return(
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocalShippingIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField required id="outlined-basic" label="Postal Code" variant="standard" />
    </Box>
  )
}