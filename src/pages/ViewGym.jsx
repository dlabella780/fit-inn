import React, { Component, Fragment } from "react";
import "./ViewGym.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, NavLink} from "react-router-dom";
import sampleImage from '../components/ViewGym/gym1.jpg';
import { GymA, GymB } from "./GymPages";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import { Typography } from "@material-ui/core";
import Slider from "./Slider.jsx";
import { StrictMode } from "react";
// import ViewGyms from "../components/ViewGym/ViewGyms.jsx"

export const ViewGyms = () => {
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
            {/* <Slider /> */}

            {/* <StrictMode>
                <Slider2 />
            </StrictMode> */}
        </div>
    );
}

// class ViewGym extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <ViewGyms />
                
//             </Fragment>
//         );
//     }
// }
// export default ViewGym;