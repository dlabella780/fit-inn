import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export default function Name(){
  return(
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <DriveFileRenameOutlineIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
          <TextField required id="outlined-basic" label="First Name" variant="standard" />
          <DriveFileRenameOutlineIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
          <TextField required id="outlined-basic" label="Last Name" variant="standard" />
        </Box>
      </Box>
  )
}