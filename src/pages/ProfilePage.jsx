import React, { Component, Fragment } from "react";
import { Switch, Route } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import ProfileButtons from "../components/ProfilePage/ProfileButtons";
import BasicInfo from "../components/ProfilePage/BasicInfo";
import UserListings from "../components/ProfilePage/UserListings";
import UserReservations from "../components/ProfilePage/UserReservations";
import UserPayment from "../components/ProfilePage/UserPayment";
import EditProfileInfo from "../components/ProfilePage/EditProfileInfo";

class ProfilePage extends Component {
    render() {
        return (
              <div>
                    <div>
                   <ProfileButtons />
                    </div>
                   <Switch>
                        <Route path="/Profile/Basic">
                            <BasicInfo />
                        </Route>
                        <Route path="/Profile/Listings">
                            <UserListings />
                        </Route>
                        <Route path="/Profile/Reservations">
                            <UserReservations />
                        </Route>
                        <Route path="/Profile/Payment">
                            <UserPayment />
                    </Route>
                    <Route path="/Profile/Edit">
                        <EditProfileInfo />
                        </Route>

                   </Switch>
              </div>
        );
    }
}
export default ProfilePage;