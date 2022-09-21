import React, { Component } from "react";
import "../../pages/HomePage.css";

export default class SimpleSearch extends Component {
    render() { return (
        <div className="SimpleSearch">
            <form>
                <div>
                    <input type="text" placeholder="Location" />
                    <input type="text" placeholder="Time" />
                    <input type="submit" value="Search"/>
                </div>
            </form>
        </div>
    );}
}