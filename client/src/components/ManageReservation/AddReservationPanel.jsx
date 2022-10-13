import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { purple, yellow } from "@mui/material/colors";


export default function AddReservation(props){
  
  const[modal, setModal] = useState(false);
  const toggleModal = () => {
      setModal(!modal)
  }

  if(modal){
      document.body.classList.add('active-modal')
  }else{
      document.body.classList.remove('active-modal')
  }
  
  return(
  
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField fullWidth id="ReservationName" label="Reservation Name" variant="standard" />
          <Button variant="contained" onClick={toggleModal}>Add Reservation</Button>
          
          
          {modal && (
          <div className="modal">
            <div 
            onClick={toggleModal} 
            className="overlay"></div>
            <div className="modal-content">
                <div className="confirm-title">
                    <h1>$25/hr <StarIcon sx={{ color: yellow[800] }}/>4.5</h1>
                </div>
                
                <h2>When are you comming?</h2>
                <button
                className="close-modal"
                onClick={toggleModal}
                >Close</button>
            <Box sx={{ '& .MuiTextField-root': { m: 1, width: '30ch'}}}>
                <TextField
                    id="search-bar"
                    className="text"
                    label="Gym name"
                    variant="outlined"
                    placeholder="Gym A"
                    size="large"
                />
                <TextField
                    id="search-bar"
                    className="text"
                    label="Add date"
                    variant="outlined"
                    placeholder="MM/DD/YYYY"
                    size="large"
                />
                <TextField
                    id="search-bar"
                    className="text"
                    label="Add time"
                    variant="outlined"
                    placeholder="AM-PM"
                    size="large"
                />
                <TextField
                    id="max-guests"
                    label="# of guests?"
                    type="number"
                    variant="outlined"
                    placeholder={'1-100'}
                    InputProps={{inputProps: { min: 1 }}}
                />
                <Button variant="contained">Continue</Button>
                <p>You won't be charged yet</p>
            </Box>
            </div>
          </div>
          )}
      </Box>
  )
}

      
      