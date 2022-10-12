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

export default function ViewConfirmation(props){
  
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
          <TextField fullWidth id="ReservationName" label="Reservation Name" variant="standard" />
          <Button variant="contained" onClick={toggleModal}>View Confirmation</Button>
          
          
          {modal && (
          <div className="modal">
            <div 
            onClick={toggleModal} 
            className="overlay"></div>
            <div className="modal-content">
                <ReviewDialogTitle onClose={toggleModal}>
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
                </DialogContent>
            </div>
          </div>
          )}
      </Box>
  )
}

      
      