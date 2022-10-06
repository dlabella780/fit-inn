import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SummarizeIcon from '@mui/icons-material/Summarize';

export default function QuickSummary(){
  return(
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SummarizeIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
        <TextField fullWidth required id="outlined-basic" label="Quick Summary" variant="standard" />
    </Box>
  )
}