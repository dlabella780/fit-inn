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
import { auth, signInWithGoogle } from "../../services/firebase.js";
import GoogleButton from 'react-google-button';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Login(){
  const [Fname, setFirstName] = useState("");
  const [Lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const auth = getAuth();
  // const user = auth.currentUser;
  return(
    <Box className="login-form" >
      <FormGroup>
        <Typography variant="h4">Login</Typography>
        <Box className="login-fields">
            <TextField 
            required id="outlined-basic" 
            label="email" 
            value={loginEmail} 
            onChange={(e) => setLoginEmail(e.target.value)}/>
        </Box>
        <Box className="login-fields">
            <TextField 
            required id="outlined-password-input" 
            type="password" 
            label="Password" 
            value={loginPassword} 
            onChange={(e) => setLoginPassword(e.target.value)}/>
        </Box>
        <Box className="login-fields">
            <FormControlLabel control={<Checkbox default />} /*onClick="agreeTOS()"*/ label="Stay Logged in"/>
        </Box>
        <Box className="login-fields">
          <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={6}>
                <Button variant="contained" href="/">Login</Button>
                <Button variant="contained" href="/Register">Create Account</Button>
            </Stack>
            <GoogleButton onClick={signInWithGoogle}/>
          </Stack>
        </Box>
      </FormGroup>
    </Box>
  )
}