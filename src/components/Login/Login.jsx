import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./Login.css";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography, } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Login(){
  return(
    <Box id="form" >
      <FormGroup>
        <Typography variant="h4">Login</Typography>
        <Box id="fields">
            <TextField required id="outlined-basic" label="email"/>
        </Box>
        <Box id="fields">
            <TextField required id="outlined-password-input" type="password" label="Password"/>
        </Box>
        <Box id="fields">
            <FormControlLabel control={<Checkbox default />} onclick="agreeTOS()" label="Stay Logged in"/>
        </Box>
        <Box id="fields">
            <Stack direction="row" spacing={6}>
                <Button variant="contained" href="/">Login</Button>
                <Button variant="contained" href="/Register">Create Account</Button>
            </Stack>
        </Box>
      </FormGroup>
    </Box>
  )
}