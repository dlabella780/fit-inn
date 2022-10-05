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
import { auth } from "../../services/firebase.js";
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


export default function CreateAccount(){
  const [Fname, setFirstName] = useState("");
  const [Lname, setLastName] = useState("");
  const [registerEmail, setEmail] = useState("");
  const [registerPassword, setPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return(
    <Box className="register-form">
      <FormGroup>
        <Typography variant="h4">Registation</Typography>
        <Box className="register-fields">
            <TextField 
              required id="outlined-basic" 
              label="First Name" 
              value={Fname} 
              onChange={(e) => setFirstName(e.target.value)}/>
            <TextField 
              required id="outlined-basic" 
              label="Last Name" 
              value={Lname} 
              onChange={(e) => setLastName(e.target.value)}/>
        </Box>
        <Box className="register-fields">
            <TextField 
              required id="outlined-basic" 
              label="Email"
              value={registerEmail}
              onChange={(e) => setEmail(e.target.value)}/>
            <TextField required id="outlined-basic" label="Verify email"/>
        </Box>
        <Box className="register-fields">
            <TextField 
              required id="outlined-password-input" 
                type="password" label="Password"
                value={registerPassword}
                onChange={(e) => setPassword(e.target.value)}/>
            <TextField required id="outlined-password-input" type="password" label="Confirm Password"/>
        </Box>
        <Box className="register-fields">
            <FormControlLabel control={<Checkbox default />} onclick="ageCheck()" label="Over 18?"/>
            <FormControlLabel control={<Checkbox default />} onclick="agreeTOS()" label="Agree to Terms and Services?"/>
        </Box>
        <Box className="register-fields">
            <Stack direction="row" spacing={12}>
                <Button variant="contained" onClick={register}>Create Account</Button>
                <Button variant="contained" href="/">Cancel</Button>
            </Stack>
        </Box>
      </FormGroup>
    </Box>
  )
}