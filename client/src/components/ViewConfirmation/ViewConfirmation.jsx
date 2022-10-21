import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { purple, yellow } from "@mui/material/colors";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export default function ViewConfirmation(props){
  
  // console.log(props);
  const[modal, setModal] = useState(false);
  const toggleModal = () => {
      setModal(!modal)
  }

  if(modal){
      document.body.classList.add('active-modal')
  }else{
      document.body.classList.remove('active-modal')
  }

  const ReviewDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
};
  
  return(
  
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button variant="contained" onClick={toggleModal}>View Confirmation</Button>
          
          
          {modal && (
          <div className="modal">
            <div 
            onClick={toggleModal} 
            className="overlay"></div>
            <div className="modal-content">
                {/* <ReviewDialogTitle onClose={toggleModal}>
                    Review Gym Reservation
                </ReviewDialogTitle>
                <DialogContent dividers>
                    --General Info--
                    <Typography gutterBottom>
                        Gym Name: {props.gymInfo.title}<br/>
                        Description: {props.gymInfo.description}<br/>
                        Rate per hours: ${props.gymInfo.cost}<br/>
                        Access Instructions: {props.gymInfo.accessInformation}<br/>
                        Address: {props.gymInfo.address.street1}-{props.gymInfo.address.stree2} {props.gymInfo.address.City}, {props.gymInfo.address.State}-{props.gymInfo.address.zipcode}
                        <br/>
                        
                    </Typography>
                </DialogContent> */}

                 <div className="confirm-title">
                    <h1>${props.gymInfo.cost}/hr <StarIcon sx={{ color: yellow[800] }}/>{props.gymInfo.rating}</h1>
                </div>
                
                <h2>When are you coming?</h2>
                <button
                  className="close-modal"
                  onClick={toggleModal}
                >Close</button>
                <Box sx={{ '& .MuiTextField-root': { m: 1, width: '40ch'}}}>
                  <TextField
                      id="search-bar"
                      className="text"
                      label="Gym Name"
                      defaultValue={props.gymInfo.description}
                      InputProps={{
                        readOnly: true,
                      }}
                  />
                    <TextField
                      id="search-bar"
                      className="text"
                      label="Address"
                      defaultValue={props.gymInfo.address.street1 + 
                        " " + props.gymInfo.address.City +
                        " " + props.gymInfo.address.State +
                        " " + props.gymInfo.address.zipcode}
                      InputProps={{
                        readOnly: true,
                      }}
                  />
                  <TextField
                      id="search-bar"
                      className="text"
                      // Let blank and change it later
                      label="Add date"
                      variant="outlined"
                      placeholder="MM/DD/YYYY"
                      size="large"
                  />
                  <TextField
                      id="max-guests"
                      label="# of guests?"
                      type="number"
                      variant="outlined"
                      defaultValue={props.gymInfo.numGuestsAllowed}
                      InputProps={{inputProps: { min: 1 , max: props.gymInfo.numGuestsAllowed}}}
                  />
                  <TextField
                      id="search-bar"
                      className="text"
                      label="Booking Number"
                      defaultValue={props.gymInfo.bookingNotice}
                      InputProps={{
                        readOnly: true,
                      }}
                  />
                  <Button component={Link} to="/Payment" variant="contained">Continue</Button>
                  <p>You won't be charged yet</p>
              </Box>
            </div> 
          </div>
          )}
      </Box>
  )
}

      
      