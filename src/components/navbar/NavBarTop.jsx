import React from "react";
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
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DrawerComponent from "./Drawer";
import "./NavBarTop.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>

                <p>FIT-INN</p>
            
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
              <p className={classes.link}>Find a Gym</p>
              <p className={classes.link}>List a Gym</p>
              <IconButton className={classes.link}>
                  <AccountCircleIcon />
              </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;