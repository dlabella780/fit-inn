import React, {useState} from "react";
import { gql, useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import GymUploadPage from "../../pages/GymUploadPage";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UserListings = (props) => {
    
    if (props.loading) return "Loading...";

    return (
        <div className="user-listings"> 

            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>                          
                            <TableCell>Gym Name</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Zipcode</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody>
                        {props.data.list_GymItems._GymItems.map((val) => (
                            <TableRow>
                                <TableCell>{val.title}</TableCell>
                                <TableCell>{val.cost}</TableCell>
                                <TableCell>{val.address.street1}</TableCell>
                                <TableCell>{val.address.City}</TableCell>
                                <TableCell>{val.address.State} </TableCell>
                                <TableCell>{val.address.Country}</TableCell>
                                <TableCell>{val.address.zipcode}</TableCell>
                                <TableCell>{val.rating} Stars</TableCell>
                                <TableCell><NavLink to={{pathname: '/GymUpload', state:{ gymId: val._id}}}>Update</NavLink></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> 
            </TableContainer>

            
        </div>
    );
}
export default UserListings;