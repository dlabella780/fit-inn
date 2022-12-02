import React, { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import './App.css'
import firebase from "./services/firebase.js";
import Axios from 'axios'
import {
  getAuth,
} from "firebase/auth";

export default function App() {

    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(user => {
      if(!user)
        setUserId('');
      else 
        GetUserId(user)
        
      console.log('Success!')
    }) 
      
  }, [])

  const GetUserId = (user) => {
    if (!loading) {
      setLoading(true);
      let str = 'http://localhost:3001/api/getUserId/' + user.uid;
      Axios.get(str).then((response) => {
        if (response.data.length === 0) {
          console.log(user)
          Axios.post('http://localhost:3001/api/AddUser', {
            uid: user.uid, photo: user.photoURL, email: user.email}).then((data, loading, error) => {    
            if(error) 
              console.log(error);
            else {
              setUserId(data.data.add_User.result._id);
            }
            setLoading(false);
          })
        }
        else {
          setUserId(response.data[0]._id);
          setLoading(false);
        }
      })
    }
  }

  return (
    <Router>
      <Switch>
        <Route path="/">
            <LandingPage userId={userId} user={user}/>
        </Route>
      </Switch>
    </Router>
  );
}