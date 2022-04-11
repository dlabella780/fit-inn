import * as React from 'react';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createTheme } from '@mui/material/styles';
import "./NavBarBottom.css";
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

  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(5),
      display: "flex",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "15px",
      "&:hover": {
        color: "yellow",
        cursor: "pointer",
      },
     },
      linkActive: {
          textDecoration: "none",
          color: "slategray",
          fontSize: "15px"
     }
  }));

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static">
    <CssBaseline />
      <Toolbar>
          <Typography variant="h6" className={classes.navlinks}>
                  <NavLink to="/Help" className={isActive => (isActive ? classes.linkActive : classes.link)}>Help Center</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.navlinks}>
                  <NavLink to="/Terms" className={isActive => (isActive ? classes.linkActive : classes.link)}>Terms of Use</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.navlinks}>
                  <NavLink to="/Privacy" className={isActive => (isActive ? classes.linkActive : classes.link)}>Privacy Policy</NavLink>
          </Typography>

        <div className = "SocialMediaIcons">
                  <BottomNavigationAction className={classes.link} onClick={() => window.open("http://www.facebook.com", "_blank")}
                      label="Facebook" icon={<FacebookIcon style={{ fill: 'white' }} />} href="#" />
                  <BottomNavigationAction className={classes.link} onClick={() => window.open("http://www.twitter.com", "_blank")}
                      label="Twitter" icon={<TwitterIcon style={{ fill: 'white' }} />} href="#" />
                  <BottomNavigationAction className={classes.link} onClick={() => window.open("http://www.instagram.com", "_blank")} 
                      label = "Instagram" icon = {< InstagramIcon style = {{ fill: 'white' }} />} href="#"/>
        </div>
      </Toolbar>
    </AppBar>
  );
}
