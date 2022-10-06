import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Description(){
  return(
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <DescriptionIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
        <TextField fullWidth required id="outlined-basic" label="Description" variant="standard" />
    </Box>
  )
}