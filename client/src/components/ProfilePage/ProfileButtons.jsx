import { React, Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from '@mui/material/Box';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    CssBaseline,
    makeStyles,
    useTheme,
    useMediaQuery,
    Link,
    Button,
  } from "@material-ui/core";

export default class ProfileButtons extends Component {
    render() {
        return(
            <div position="fixed" top="100px" className="SortingButtons">
			<Box sx={{display: 'flex', '& > *': {m: 1,},}}>
				 <Typography variant="h6">
                    <NavLink to="/Profile/Basic">Basic Info</NavLink>
                 </Typography>
                 <Typography variant="h6">
                    <NavLink to="/Profile/Listings">My Listings</NavLink>
                 </Typography>
                 <Typography variant="h6">
                    <NavLink to="/Profile/Reservations">My Reservations</NavLink>
                 </Typography>
                 <Typography variant="h6">
                    <NavLink to="/Profile/Payment">Payment Info</NavLink>
                 </Typography>
                 <Typography variant="h6">
                        <NavLink to="/Profile/Edit">Edit Information</NavLink>
                 </Typography>
			</Box>
		</div>
            
        )
    }
}