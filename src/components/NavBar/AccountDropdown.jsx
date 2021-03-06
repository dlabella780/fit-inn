import React, { Component } from "react";
import "./NavBarTop.css";

export default class AccountDropdown extends Component {
    handleClick = () => {
        this.props.toggle();
    };
    createAccount = () => {
        document.location="/Register";
        this.props.toggle();
    }

    render() {
    return (
    <div className="accountDropdown">
        <span className="close" onClick={this.handleClick}>&times;</span>
        <div className="loginFitinn"><p>FIT-INN</p></div>
        <form>
        <div className="ad-input-container">
            <input type="text" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <input type="submit" value="Login"/>
        </div>
        </form>
        <button href="/Register" className="btn" onClick={this.createAccount}>Create Account</button>
    </div>
    );
    }
}