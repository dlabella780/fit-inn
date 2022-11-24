import React,{ useState,useEffect } from'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from "@mui/material/colors";
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

export default function ViewConfirmation(props){
  const[modal, setModal] = useState(false);
  const[numGests, setNumGuests] = useState(1);
  const history = useHistory();
  const toggleModal = () => { setModal(!modal) }

  if(modal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')
  
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

  const addReservation = () => {
    Axios.post('http://localhost:3001/api/AddReservation', {
        gymId: props.gymInfo._id,
        gymName: props.gymInfo.title,
        guestId: props.userId,
        timeSlot: props.date,
        duration: 60,
        numGuests: numGests
      })
      .then((response) => {
        if(response.data) history.push('/PaymentSuccess',{gymInfo: props.gymInfo, date: props.date});
    })
  }

  const redirectToPayment = () => {
    history.push('/Payments', { gymInfo: props.gymInfo, date: props.date, userId: props.userId, numGuests: numGests });
  }
  
  return(
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button variant="contained" onClick={toggleModal} sx={{right:37}}>View Confirmation</Button>
      {modal && (
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
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
                label="Date"
                variant="outlined"
                placeholder="MM/DD/YYYY"
                size="large"
                value={new Date(props.date).toLocaleString()} 
                //onChange={(e) => setDate(e.target.value)}
            />
            <TextField
                id="max-guests"
                label="# of guests?"
                type="number"
                variant="outlined"
                value={numGests} 
                onChange={(e) => setNumGuests(e.target.value)}
                InputProps={{inputProps: { min: 1 , max: props.gymInfo.numGuestsAllowed}}}
            />
            <p>You won't be charged yet</p>
          </Box>
          <Button onClick={() => addReservation()} variant="contained">Continue</Button>
          <Button onClick={() => redirectToPayment()} variant="contained">(TESTING) GO TO PAYMENT</Button>
        </div> 
      </div>
      )}
    </Box>
  )
}