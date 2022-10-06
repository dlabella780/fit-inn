import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';

export default function YourEmail(){
  return(
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
        <TextField fullWidth required id="outlined-basic" label="Email" variant="standard" />
    </Box>
  )
}