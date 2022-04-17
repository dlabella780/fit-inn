import React,{useState,useEffect} from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import {
    Typography,
  } from "@material-ui/core";

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

export default function createAccount(){


    return(
        <div>
            <form>
                <Grid container columns={20} spacing={5}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={8}>
                    <Typography variant="h4">Register Account</Typography>
                        <TextField required id="outlined-basic" label="First Name"/>
                        <TextField required id="outlined-basic" label="Last Name"/>
                        <TextField required id="outlined-basic" label="email"/>
                        <TextField required id="outlined-basic" label="Verify email"/>
                        <TextField required id="outlined-password-input" type="password" label="Password"/>
                        <TextField required id="outlined-password-input" label="Confirm Password"/>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}