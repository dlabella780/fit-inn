import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography, } from "@material-ui/core";
import { auth, signInWithGoogle} from "../../services/firebase.js";
import GoogleButton from 'react-google-button';
import {
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import { withRouter } from "react-router";
import { Link, NavLink, useHistory } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const loginWithGoogle = async () => {
  signInWithGoogle();
}
const Login = (props) =>{
  return(
  <div> 
<Box className="login-form" >
      <FormGroup>
        <Typography variant="h4">Login</Typography>
        <Box className="login-fields">
          <Stack direction="column" spacing={1}>
          <NavLink to="/"><GoogleButton onClick={loginWithGoogle}/></NavLink>
          </Stack>
        </Box>
      </FormGroup>
    </Box>
  </div>
  );
};export default withRouter(Login);