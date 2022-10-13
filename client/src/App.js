import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import firebase from "./services/firebase.js";
import Axios from 'axios'

//stripe test key
const stripePromise = loadStripe("pk_test_51LjZ0MHSMtfvYBv6DzWueAsBhltM9JDeLSZGfifoFVXTT5ugkU6fbMb0x4f4VVugcgJ9hh3P8EkTiJrvIi2EyRe1002tCfXrIL");

export default function App() {


    const [clientSecret, setClientSecret] = useState("");
    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Create Stripe PaymentIntent as soon as page loads
      fetch("/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "test-gym" }] }),
      })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
    
    firebase.auth().onAuthStateChanged(user => {
      console.log('auth called')
      if(!user)
        setUserId('');
      else 
        GetUserId(user)
    }) 
      
  }, [])

  const GetUserId = (user) => {
    if (!loading) {
      setLoading(true);
      let str = 'http://localhost:3001/api/getUserId/' + user.uid;
      Axios.get(str).then((response) => {
        if (response.data.length === 0) {
          Axios.post('http://localhost:3001/api/AddUser', {
            uid: user.uid}).then((data, loading, error) => {    
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
            <LandingPage userId={userId}/>
        </Route>
      </Switch>
    </Router>
  );
}