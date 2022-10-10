import React, { useState } from "react";
import Axios from 'axios';

function EditProfileInfo (props) {

    const SubmitUser = (e) => {
        e.preventDefault();
            Axios.post('http://localhost:3001/api/updateProfile', {
                street1: street1, 
                street2: street2,
                city: city,
                state: state,
                country: country,
                zipcode: zipcode,
                email: email, 
                fname: fname,
                lname: lname,  
                phoneNumber: phoneNumber,
                id: props.userId 
            }).then((data, loading, error) => {    
			if(error) 
				console.log(error);
			else {
				alert('Profile Updated');
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
                Street1: <input type="text" value={street1} onChange={(e) => setStreet1(e.target.value)} /><br />
                Street2: <input type="text" value={street2} onChange={(e) => setStreet2(e.target.value)} /><br />
                City: <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /><br />
                State: <input type="text" value={state} onChange={(e) => setState(e.target.value)} /><br />
                Country: <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} /><br />
                Zipcode: <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} /><br />
                Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                First Name: <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} /><br />
                Last Name: <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /><br />
                Phone Number: <input type="text" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} /><br />
                <input type="submit" value="Submit Changes" onClick={(e) => SubmitUser(e)}/>
            </form>
        </div>  
    );

}
export default EditProfileInfo;
