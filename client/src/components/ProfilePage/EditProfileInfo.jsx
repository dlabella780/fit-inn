import React, { useState } from "react";
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import { Button, Box } from "@material-ui/core";
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import EditRoadSharpIcon from '@mui/icons-material/EditRoadSharp';
import LocationCitySharpIcon from '@mui/icons-material/LocationCitySharp';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import Swal from 'sweetalert2';

function EditProfileInfo (props) {

    const SubmitUser = () => {
        Swal.showLoading();    
        const line2 = city + ", " + state;
        const str = 'http://localhost:3001/api/verifyAddress/' + street1 + '/' + line2;
		Axios.get(str).then(response => {
			Swal.close();
			if (response.data.ErrorCode === 0) {
				const fullZip = response.data.Zip + '-' + response.data.Zip4;
                Axios.post('http://localhost:3001/api/updateProfile', {
                street1: response.data.AddressLine1, 
                city: response.data.City,
                state: response.data.State,
                country: "United States",
                zipcode: fullZip,
                email: email, 
                fname: fname,
                lname: lname,  
                phoneNumber: phoneNumber,
                id: props.userId 
                }).then((response) => {    
                    Swal.close();
                    Swal.fire({confirmButtonColor: '#3F51B5', title: response.data}).then(okay => {props.setValue(0); props.setProfileUpdated(props.profileUpdated+1)});
                })
            } else {
                Swal.fire({confirmButtonColor: '#3F51B5', title: response.data})
            }
        })    
    }

    const [street1, setStreet1] = useState(props.data.get_User.address.street1);
    const [street2, setStreet2] = useState(props.data.get_User.address.stree2);
    const [city, setCity] = useState(props.data.get_User.address.City);
    const [state, setState] = useState(props.data.get_User.address.State);
    const [country, setCountry] = useState(props.data.get_User.address.Country);
    const [zipcode, setZipcode] = useState(props.data.get_User.address.zipcode);
    const [email, setEmail] = useState(props.data.get_User.email);
    const [fname, setFname] = useState(props.data.get_User.fname);
    const [lname, setLname] = useState(props.data.get_User.lname);
    const [phoneNumber, setPhone] = useState(props.data.get_User.phoneNumber);

    return (
        <div className="edit-profile">
            <form>
                <Box className = "edit-profile-box-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EditRoadSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                    <TextField
                        value={street1}
                        onChange={(e) => setStreet1(e.target.value)}
                        label="Address"
                        variant="standard"
                        placeholder="Enter your new Street 1"
                        size="small"
                        style ={{width: '50%'}}
                    />
                </Box>

                <Box className = "edit-profile-box-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LocationCitySharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                    <TextField
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        label="City"
                        variant="standard"
                        placeholder="Enter your new city"
                        size="small"
                        style ={{width: '50%'}}
                    />
                </Box>

                <Box className = "edit-profile-box-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <BusinessSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                    <TextField
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        label="State"
                        variant="standard"
                        placeholder="Enter your new state"
                        size="small"
                        style ={{width: '50%'}}
                    />
                </Box>

                {/* <Box className = "edit-profile-box-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LanguageSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                    <TextField
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)}
                        label="Country"
                        variant="standard"
                        placeholder="Enter your new country"
                        size="small"
                        style ={{width: '50%'}}
                    />
                </Box> */}


                <Box className = "edit-profile-box-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AlternateEmailSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        variant="standard"
                        placeholder="Enter your new email"
                        size="small"
                        style ={{width: '50%'}}
                    />
                </Box>

                <Box className = "edit-profile-box-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <DriveFileRenameOutlineSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                    <TextField
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        label="First Name"
                        variant="standard"
                        placeholder="Enter your new first name"
                        size="small"
                        style ={{width: '50%'}}
                    />
                </Box>    

                <Box className = "edit-profile-box-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <DriveFileRenameOutlineSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                    <TextField
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        label="Last Name"
                        variant="standard"
                        placeholder="Enter your new last name"
                        size="small"
                        style ={{width: '50%'}}
                    />
                </Box>    

                <Box className = "edit-profile-box-padding" sx={{ display: 'flex', alignItems: 'flex-end' }}>    
                    <ContactPhoneSharpIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
                    <TextField
                        value={phoneNumber}
                        onChange={(e) => setPhone(e.target.value)}
                        label="Phone number"
                        variant="standard"
                        placeholder="Enter your new phone number"
                        size="small"
                        style ={{width: '50%'}}
                    />
                </Box>    

                <Button value="Submit Changes" onClick={SubmitUser} variant="contained" color="primary">Submit Changes</Button>
            </form>
        </div>  
    );

}
export default EditProfileInfo;
