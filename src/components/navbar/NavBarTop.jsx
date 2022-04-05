import { React, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import DrawerComponent from "./Drawer";
import "./NavBarTop.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountDropdown from "./AccountDropdown";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        textDecoration: "none",
        color: "white",
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: "yellow",
        },
    },
    linkActive: {
        textDecoration: "none",
        color: "slategray",
        fontSize: "20px",
        marginLeft: theme.spacing(10),
    }
}));


function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [accountDropDownUp, toggleAccountDropdown] = useState(false);

  return (
    <><AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
           <Link to="/" className={classes.logo}>FIT-INN</Link>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <NavLink to="/GymSearch" className={isActive => (isActive ? classes.linkActive : classes.link)}>Find a Gym</NavLink>
            <NavLink to="/GymUpload" className={isActive => (isActive ? classes.linkActive : classes.link)}>List a Gym</NavLink>
            <IconButton className={classes.link} onClick={() => toggleAccountDropdown(!accountDropDownUp)}>
              <AccountCircleIcon fontSize="large"/>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
    <div className="AccountDropdown">
        <div>{accountDropDownUp ? <AccountDropdown toggle={() => toggleAccountDropdown(!accountDropDownUp)} /> : null}</div>
    </div></>
  );
}
export default Navbar;