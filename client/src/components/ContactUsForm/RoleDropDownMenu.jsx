import React,{ useState,useEffect } from'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from "@material-ui/core";

export default function RoleDropDownMenu(){
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircleIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="role-simple-select-standard-label">Are you a host, guest or other?*</InputLabel>
                    <Select
                        labelId="role-simple-select-standard-label"
                        id="role-simple-select-standard"
                        value={role}
                        onChange={handleChange}
                        label="Role"
                        >
                        <MenuItem value={10}>Gym User</MenuItem>
                        <MenuItem value={20}>Gym Host</MenuItem>
                        <MenuItem value={30}>Other</MenuItem>
                    </Select>
            </FormControl>
        </Box>
    )
}