import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

const GymThumbnail = (props) => {
    if (props.loading) return "Loading...";
    else return ( <div> 
        <Box sx={{ flexGrow: 1 }}>
            <Grid container 
                direction="row"
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent="space-between"
                alignItems="flex-start"
            >
                {props.gymData.list_GymItems._GymItems.map((val) => (
                <Grid item xs={"flexGrow"} key={val}>
                    <Item><Typography gutterBottom>
                    Title: {val.title}<br/>
                    Cost: {val.cost}<br/>
                    -Address- <br/>
                    Street1: {val.address.street1} <br/>
                    Street2: {val.address.stree2} <br/>
                    City: {val.address.City} <br/>
                    State: {val.address.State} <br/>
                    Country: {val.address.Country} <br/>
                    Zipcode: {val.address.zipcode} <br/>
                    Rating: {val.rating} Stars<br/> 
				    </Typography></Item>
                </Grid>
                ))}
            </Grid> 
        </Box>
    </div> );
}
export default GymThumbnail;


/*Gym Name: {title}<br/>
					Description: {description}<br/>
					Max Number of Guests Allowed: {numGuestsAllowed}<br/>
					Access Instructions: {accessInformation}<br/>
					Address: {street1} {city} {state} {zip}<br/>
					Gym Owner At Home: {isHostHome === "false" ? "No" : "Yes"}<br/>
				</Typography>
			</DialogContent>
			<DialogContent dividers>
				--Equipment--
				{GetEquip()}
			</DialogContent>
			<DialogContent dividers>
				--Amenities--
				<Typography gutterBottom>
					Wifi: {hasWifi === "false" ? "No" : "Yes"}<br/>
					Bathrooms: {hasBathroom === "false" ? "No" : "Yes"}<br/>
					Speakers: {hasSpeakers === "false" ? "No" : "Yes"}<br/>
					TV Type: {tvType}<br/>
				</Typography>
			</DialogContent>
				<DialogContent dividers>
				--Pricing and Availability--
				<Typography gutterBottom>
					Hourly Rate: ${cost}/hour<br/>
					Starting Availability: AddStartDateTimeHere<br/>
					Ending Availability: AddEndDateTimeHere<br/>
					Booking Notice: {bookingNotice} hours<br/>
					Cancelation Notice: {cancelationWarning} hours<br/>
*/