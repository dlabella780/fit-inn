import React from "react";
import { AppBar, Toolbar, IconButton, CssBaseline,
        Typography, makeStyles,
} from "@material-ui/core";
import { Link, NavLink, useHistory } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
  getAuth,
} from "firebase/auth";
import SiteLogo from "./fitinn-logo-white.png"

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
        alignItems: 'center',
        top:20,
        marginTop: '10px'
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


function Navbar(props) {
  const logout = () => {
    getAuth().signOut();
    history.push('/');
    handleCloseUserMenu();
  }
  
  const classes = useStyles();
  const history = useHistory();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
  const handleCloseUserMenu = () => {setAnchorElUser(null); };

  return ( <><AppBar position="sticky">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Link to="/" className={classes.logo}>
            <img src={SiteLogo} height="50px" alt="Fit-Inn Logo"/>
          </Link>
        </Typography> { !props.userId ? (
          <div className={classes.navlinks}>
          <NavLink to="/GymSearch" className={isActive => (isActive ? classes.linkActive : classes.link)}>Find a Gym</NavLink>
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
                  </Menu>
                </Box>
                </div>) : (
            <div className={classes.navlinks}>
              <NavLink to="/GymSearch" className={isActive => (isActive ? classes.linkActive : classes.link)}>Find a Gym</NavLink>
              {props.userId ? <NavLink to={{pathname: '/GymUpload', state:{ gymId: false}}} className={isActive => (isActive ? classes.linkActive : classes.link)}>List a Gym</NavLink> :
              <NavLink onClick={() => alert('Please Login to upload a Gym.')} to={{state:{ gymId: false}}} className={isActive => (isActive ? classes.linkActive : classes.link)}>List a Gym</NavLink> }<br/>
              <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 4 }}>
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
            <MenuItem onClick={logout}><NavLink to="/" className={classes.sublink}>Logout</NavLink></MenuItem>
            {props.userId ? <MenuItem onClick={handleCloseUserMenu}><NavLink to="/Profile" className={classes.sublink}>Profile</NavLink></MenuItem> : 
            <MenuItem onClick={() => alert('Please Login to View Profile')}>Profile</MenuItem>}
            {/* <MenuItem onClick={handleCloseUserMenu}><NavLink to="/" className={classes.sublink}>Gym Dashboard</NavLink></MenuItem> */}
          </Menu>
        </Box>
            </div>
        )}

      </Toolbar>
  </AppBar></>);}
export default Navbar;