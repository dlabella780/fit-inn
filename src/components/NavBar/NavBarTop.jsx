import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, CssBaseline,
        Typography, makeStyles, useTheme, useMediaQuery,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import DrawerComponent from "./Drawer";
import "./NavBarTop.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginRight: theme.spacing(0),
        display: "flex",
        alignItems: 'center',
    },
    logo: {
        textDecoration: "none",
        color: "white",
        flexGrow: "1",
        cursor: "pointer",
        marginTop: theme.spacing(1.5),
        alignItems: 'center',
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginRight: theme.spacing(3),
        "&:hover": {
            color: "black",
        },
    },
    sublink: {
      textDecoration: "none",
      color: "white",
      fontSize: "15px",
      marginRight: theme.spacing(3),
      "&:hover": {
          color: "black",
      },
  },
    linkActive: {
        textDecoration: "none",
        color: "black",
        background: "none",
        fontSize: "20px",
        marginRight: theme.spacing(3),
    },
    menu: {
      "& .MuiPaper-root": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  //const accountSettings = ['Account Settings', 'Profile', 'Gym Dashboard', 'Login/Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
  const handleCloseUserMenu = () => {setAnchorElUser(null); };

  return ( <><AppBar position="sticky">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
            <Link to="/" className={classes.logo}>FIT-INN</Link>
        </Typography> { isMobile ? (
          <DrawerComponent />) : (
            <div className={classes.navlinks}>
              <NavLink to="/GymSearch" className={isActive => (isActive ? classes.linkActive : classes.link)}>Find a Gym</NavLink>
              <NavLink to="/GymUpload" className={isActive => (isActive ? classes.linkActive : classes.link)}>List a Gym</NavLink>
            </div>
        )}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon fontSize="large"/>
            </IconButton>
          </Tooltip>
          <Menu
            className={classes.menu}
            sx={{ mt: '48px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}><NavLink to="/Login" className={classes.sublink}>Login</NavLink></MenuItem>
            <MenuItem onClick={handleCloseUserMenu}><NavLink to="/Register" className={classes.sublink}>Create Account</NavLink></MenuItem>
            <MenuItem onClick={handleCloseUserMenu}><NavLink to="/" className={classes.sublink}>Gym Dashboard</NavLink></MenuItem>
          </Menu>
        </Box>
      </Toolbar>
  </AppBar></>);}
export default Navbar;