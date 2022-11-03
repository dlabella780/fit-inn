import React from "react";
import { Typography, Box } from "@material-ui/core";
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import EditRoadSharpIcon from '@mui/icons-material/EditRoadSharp';
import LocationCitySharpIcon from '@mui/icons-material/LocationCitySharp';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';


function BasicInfo(props) {

    if (props.loading) return "Loading...";

    return (
        <div className="user-basic-info">
            <br/><img src={props.data.get_User.profilePicture} height="200" width="200" display="flex"/><br/>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <DriveFileRenameOutlineSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">Name: {props.data.get_User.fname} {props.data.get_User.lname}</Typography>
            </Box>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <ContactPhoneSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">Phone Number: {props.data.get_User.phoneNumber}</Typography>
            </Box>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AlternateEmailSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">Email: {props.data.get_User.email}</Typography>
            </Box>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EditRoadSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">Street 1: {props.data.get_User.address.street1}</Typography>
            </Box>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EditRoadSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">Street 2: {props.data.get_User.address.stree2}</Typography>
            </Box>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LocationCitySharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">City: {props.data.get_User.address.City}</Typography>
            </Box>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <BusinessSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">State: {props.data.get_User.address.State}</Typography>
            </Box>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LanguageSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">Country: {props.data.get_User.address.Country}</Typography>
            </Box>
            <Box className = "basic-info-text-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                <Typography variant="h6">Zipcode: {props.data.get_User.address.zipcode}</Typography>
            </Box>    
        </div>
    );
}
export default BasicInfo;