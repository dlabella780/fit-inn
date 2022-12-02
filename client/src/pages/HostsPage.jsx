import React, { Component } from "react";
import { Typography, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";


class HostsPage extends Component {
    render() { return (
        <Box>
            <div className="host-resource-pages-items">
                <Typography variant="h3">Host</Typography>
                <Typography className = "terms-contents" variant="h5">Resources</Typography>
                
                <span className="terms-page-links">
                    <Typography variant="h6"><NavLink to="/pages/Hosts" style={{ textDecoration: 'none' }}>Placeholder Link 1</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/Hosts" style={{ textDecoration: 'none' }}>Placeholder Link 2</NavLink></Typography>
                    <Typography variant="h6"><NavLink to="/pages/Hosts" style={{ textDecoration: 'none' }}>Placeholder Link 3</NavLink></Typography>
                </span>
            </div>
        </Box>
    );}
}
export default HostsPage;