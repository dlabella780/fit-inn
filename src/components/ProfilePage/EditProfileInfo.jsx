import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";


function EditProfileInfo() {

    const UPDATE_USER = gql`
        mutation userUpdate($profilePicture: String = "", $phoneNumber: String = "", $paymentMethod: String = "", $password: String = "", $notificationSetting: Int = 10, $lname: String = "", $fname: String = "", $email: String = "", $address: String = "") {
            update_User(
                id: "018054b3-f513-06be-ba11-5726fa2b1052"
            input: { address: $address, email: $email, fname: $fname, lname: $lname, notificationSetting: $notificationSetting, password: $password, paymentMethod: $paymentMethod, phoneNumber: $phoneNumber, profilePicture: $profilePicture }
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

        updateUser({
            variables: {
                address: address, email: email, fname: fname,
                lname: lname, notificationSetting: Number(notificationSetting), password: password,
                paymentMethod: paymentMethod, phoneNumber: phoneNumber, profilePicture: profilePicture
            }
        }).then((data, loading, error) => {
            if (loading) console.log(loading);
            if (error) console.log(error);
            else {
                alert('User Updated');
            }
        });
    }

    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [notificationSetting, setNotification] = useState("");
    const [password, setPassword] = useState("");
    const [paymentMethod, setPayment] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    return (
        <div>
            Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
            Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            First Name: <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} /><br />
            Last Name: <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /><br />
            Notifications: <input type="text" value={notificationSetting} onChange={(e) => setNotification(e.target.value)} /><br />
            New Password: <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            Payment Method: <input type="text" value={paymentMethod} onChange={(e) => setPayment(e.target.value)} /><br />
            Phone Number: <input type="text" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} /><br />
            Profile Picture (link): <input type="text" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} /><br />
            <input type="button" value="Submit" onClick={(e) => SubmitUser(e)} />
        </div>

        
    );

}
export default EditProfileInfo;
