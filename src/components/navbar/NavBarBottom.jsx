import * as React from 'react';
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
import {
    AppBar,
    Toolbar,
    IconButton,
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

  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: 'white',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static">
    <CssBaseline />
      <Toolbar>
        <div className = "Links">
            <Button className = "HelpCenter" color='neutral' href="#" component={Link}> Help Center </Button>
            <Button className = "TermsOfUse" color='white' href="#" component={Link}> Terms of Use </Button>
            <Button className = "PrivacyPolicy" color='white' href="#" component={Link}> Privacy Policy </Button>
        </div>

        <div className = "SocialMediaIcons">
            <BottomNavigationAction className = "FacebookIcon" label="Facebook" icon={<FacebookIcon style={{ fill: 'white' }} href="#" component={Link}/>} />
            <BottomNavigationAction className = "TwitterIcon" label="Twitter" icon={<TwitterIcon style={{ fill: 'white' }} href="#" component={Link}/>} />
            <BottomNavigationAction className = "InstagramIcon" label="Instagram" icon={<InstagramIcon style={{ fill: 'white' }} href="#" component={Link}/>} />
        </div>
      </Toolbar>
    </AppBar>
  );
}
