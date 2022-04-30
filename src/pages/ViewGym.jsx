import React, { Component, Fragment } from "react";
import "./ViewGym.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, NavLink} from "react-router-dom";
import sampleImage from '../components/ViewGym/gym1.jpg';
import sampleImage2 from '../components/ViewGym/gym2.jpeg';
import sampleImage3 from '../components/ViewGym/gym3.1.jpg';
import { GymA, GymB } from "./GymPages";
import { Typography } from "@material-ui/core";
import Slider from "./Slider.jsx";
import { StrictMode } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import AddMap from "../components/ViewGym/AddMap";
import SortingButtons from "../components/GymSearch/SortingButtons";

export const ViewGyms = () => {
    return (
        <div>
            {/* <form className="search-bar-form">        
            <input           
                type="text"          
                name='location'          
                placeholder='Locations'/>        
            <input           
                type="text"           
                name='day'          
                placeholder='When'/>        
            <input           
                type="text"           
                name='time'          
                placeholder='Time'/>
            <input type="text" name='guest' placeholder=''
            />
            </form> */}

            <SortingButtons />

            <div className="row-product">
                <div className="item1">
                    <div className="col-md-2">
                        <NavLink to="/gyma">
                        <img src={sampleImage} alt="Sample Img" height="150" />
                        </NavLink>
                    </div>
                    <div className="col-md-8 product-detail">
                        <Typography variant="h6">
                            <NavLink style={{ 
                                textDecoration: 'none', 
                                color: 'black',
                                fontWeight: 'bold' }} 
                            to="/gyma">Gym A</NavLink>
                        </Typography>
                        
                        <p>Description</p> 
                    </div>
                    <div className="col-md-2 product-price">
                        $19.99
                    </div>
                </div>
                
                <div className="item2">
                    <div className="col-md-2">
                        <img src={sampleImage2} alt="Sample Img" height="150" />
                    </div>
                    <div className="col-md-8 product-detail">
                        <h4 className="name-gym">Gym B</h4>
                        <p>Description</p>
                    </div>
                    <div className="col-md-2 product-price">
                        $20.99
                    </div>
                </div>

                <div className="item3">
                    <div className="col-md-2">
                        <img src={sampleImage3} alt="Sample Img" height="150" />
                    </div>
                    <div className="col-md-8 product-detail">
                        <h4 className="name-gym">Gym C</h4>
                        <p>Description</p>
                    </div>
                    <div className="col-md-2 product-price">
                        $30.99
                    </div>
                </div>

            </div>
            
            <AddMap />

        </div>
    );
}
