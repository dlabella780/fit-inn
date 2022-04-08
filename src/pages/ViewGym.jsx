import React, { Component, Fragment } from "react";
import "./viewgym.css";
//import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom'
import sampleImage from '../components/viewgym/gym1.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GymA, GymB } from "./GymPages";

const ViewGyms = () => {
    return (
        <div>
            <form className="search-bar-form">        
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
            </form> 

            <div className="row-product">
                <div className="item1">
                    <div className="col-md-2">
                        <img src={sampleImage} alt="Sample Img" height="150" />
                    </div>
                    <div className="col-md-8 product-detail">
                        {/* <Routes>
                        <Route path='/gyma' element={<GymA />}>Gym A</Route>
                        </Routes> */}
                        <h4 className="name-gym">Gym A</h4>
                        <p>Description</p> 
                    </div>
                    <div className="col-md-2 product-price">
                        $19.99
                    </div>
                </div>
                
                <div className="item2">
                    <div className="col-md-2">
                        <img src={sampleImage} alt="Sample Img" height="150" />
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
                        <img src={sampleImage} alt="Sample Img" height="150" />
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
        </div>
    );
};

class ViewGym extends Component {
    render() {
        return (
            <Fragment>
                <ViewGyms />
            </Fragment>
        );
    }
}
export default ViewGym;