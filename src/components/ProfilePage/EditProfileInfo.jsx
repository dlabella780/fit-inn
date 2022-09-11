import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";


function EditProfileInfo (props) {

    const UPDATE_USER = gql`
        mutation userUpdate($phoneNumber: String = "", $password: String = "", $lname: String = "", $fname: String = "", $email: String = "", $address: String = "") {
            update_User(
                id: "018054b3-f513-06be-ba11-5726fa2b1052"
            input: { address: $address, email: $email, fname: $fname, lname: $lname, password: $password, phoneNumber: $phoneNumber }
            syncMode: NODE_LEDGERED
            ) {
    transaction {
      _id
      submissionTime
    }
    result {
      _id
    }
  }
}
    `;

    const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);

    const SubmitUser = (e) => {
        e.preventDefault();

        if (password === confPassword) {
            updateUser({
                variables: {
                    address: address, email: email, fname: fname,
                    lname: lname,  password: password,
                    phoneNumber: phoneNumber
                }
            }).then((data, loading, error) => {
                if (loading) console.log(loading);
                if (error) console.log(error);
                else {
                    alert('User Updated');
                }
            });
        }
        else    
            alert('Passwords do not match.')
    }

    const [address, setAddress] = useState(props.data.get_User.address);
    const [email, setEmail] = useState(props.data.get_User.email);
    const [fname, setFname] = useState(props.data.get_User.fname);
    const [lname, setLname] = useState(props.data.get_User.lname);
    const [password, setPassword] = useState(props.data.get_User.password);
    const [confPassword, setConfPassword] = useState(props.data.get_User.password);
    const [phoneNumber, setPhone] = useState(props.data.get_User.phoneNumber);

    return (
        <div className="edit-profile">
            <form>
                Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                First Name: <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} /><br />
                Last Name: <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /><br />
                New Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                Confirm Password: <input type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} /><br />
                Phone Number: <input type="text" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} /><br />
                <input type="submit" value="Submit Changes" onClick={(e) => SubmitUser(e)}/>
            </form>
        </div>  
    );

}
export default EditProfileInfo;
