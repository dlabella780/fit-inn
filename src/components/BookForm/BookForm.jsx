import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./BookForm.css";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography, } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1C2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function createAccount(){
  return(
    <Box id="form">
      <FormGroup>
        <Typography variant="h4">$19.99 /month</Typography>
        <Box id="fields">
            <TextField required id="outlined-basic" label="First Name"/>
            <TextField required id="outlined-basic" label="Last Name"/>
        </Box>
        <Box id="fields">
            <TextField required id="outlined-basic" label="Date Join"/>
            <TextField required id="outlined-basic" label="Duration"/>
        </Box>
        <Box id="fields">
            <TextField required id="outlined-password-input" type="password" label="Quantity"/>
            <TextField label="Promo Code"/>
        </Box>
        <Box id="fields">
            <FormControlLabel control={<Checkbox default />} onclick="ageCheck()" label="Over 18?"/>
            <FormControlLabel control={<Checkbox default />} onclick="agreeTOS()" label="Agree to Terms and Services?"/>
        </Box>
        <Box id="fields">
            <Stack direction="row" spacing={12}>
                <Button variant="contained" href='/confirmed'>Book</Button>
                <Button variant="contained" href="/">Cancel</Button>
            </Stack>
        </Box>
      </FormGroup>
    </Box>
  )
}