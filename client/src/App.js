import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import firebase from "./services/firebase.js";

//stripe test key
const stripePromise = loadStripe("pk_test_51LjZ0MHSMtfvYBv6DzWueAsBhltM9JDeLSZGfifoFVXTT5ugkU6fbMb0x4f4VVugcgJ9hh3P8EkTiJrvIi2EyRe1002tCfXrIL");

export default function App() {
    const [user, setUser] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

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
      setUser(user);
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}