import React, { Component } from "react";

export default class AdvancedSearch extends Component {
    render() { return (
        <div className="AdvancedSearch">
            <form>
                <div>
                    <input type="text" placeholder="Location" />
                    <input type="text" placeholder="Time" />
                    <input type="submit" value="Search"/>
                </div>
            </form>
        </div>
        );
    }
}