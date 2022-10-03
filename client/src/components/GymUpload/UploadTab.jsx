import * as React from 'react';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FormControlLabel from '@mui/material/FormControlLabel';
import DateTime2 from "./DateTime2";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Axios from 'axios';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return ( <Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`action-tabpanel-${index}`}
		aria-labelledby={`action-tab-${index}`}
		{...other}>
		{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
	</Typography>);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `action-tab-${index}`,
		'aria-controls': `action-tabpanel-${index}`,
	};
}

function Item(props) {return null;}
Item.propTypes = {children: PropTypes.node};


function UploadTab() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => { setValue(newValue); };
	const handleChangeIndex = (index) => { setValue(index); };

    useEffect(() => {
		Axios.get('http://localhost:3001/api/listEquipment').then((response) => {
		for (let i =0; i < response.data.list_EquipmentItems._EquipmentItems.length; i++) 
			equipMap.set(response.data.list_EquipmentItems._EquipmentItems[i]._id, response.data.list_EquipmentItems._EquipmentItems[i].name);
		setEquipmentMap(equipMap);
		console.log(equipmentMap)
	})},[]);
	
	const SelectEquipment = () => {
        const [equip, setEquip] = useState('');
        const [equipDets, setEquipDets] = useState('');
        const equipmentObj = []

		equipmentMap.forEach((value, key) => equipmentObj.push({key: key, value: value}));

        function setEquipmentInfo() {
            if(equip !== '') {
                setEquipment(prevState => [...prevState, equip]);
                setEquipmentDetails(prevState => [...prevState, equipDets]);
            }
            else alert('Please Select a Piece of Equipment');
        }

        return ( <>
			<FormControl sx={{ m: 0.5, minWidth: 250 }}>
				<InputLabel>-- SELECT EQUIPMENT --</InputLabel>
				<Select
					id="Equipment" 
					label="Equipment"
					variant="outlined"
					value={equip}
					onChange={(e) => setEquip(e.target.value)}
				>
					{equipmentObj.map((val) => 
						<MenuItem value={val.key}>
							{val.value}
						</MenuItem>)}
				</Select>
			</FormControl>
			<FormControl sx={{ m: 0.5, minWidth: 250 }}>
				<TextField
					required
					id="equip-details"
					label="Equipment Details"
					variant="outlined"
					defaultValue="Description"
					value={equipDets} 
					onChange={(e) => setEquipDets(e.target.value)}
					helperText={equipDets === "" ? 'Please enter equipment details.' : ' '}
				/>
			</FormControl>
			<Button 
				variant="contained" 
				onClick={() => setEquipmentInfo()}
				size="large"
				style={{top: "12px"}}
			>
				ADD
			</Button>
			<br></br>
		</>);
    }

    const SubmitGym = (e) => {
        e.preventDefault();

        if (title === '') {
            alert('Please Set a Gym Name');
            return;
        }
        if (description === '') {
            alert('Please Set a Description');
            return;
        }
		if (numGuestsAllowed === '' || numGuestsAllowed <= 0 || isNaN(numGuestsAllowed)) {
            alert('Number of Guests must be greater than 0.');
            return;
        }
		if (accessInformation === '') {
            alert('Please Give Access Information');
            return;
        }
        if (street === '') {
            alert('Please Set a Street');
            return;
        }
        if (city === '' || !isNaN(city)) {
            alert('Please Set a City');
            return;
        }
        if (state === '' || !isNaN(state)) {
            alert('Please Set a State');
            return;
        }
        if (zip === '' || isNaN(zip)) {
            alert('Please Set a Zip');
            return;
        }
        if (equipment.length < 1) {
            alert('Please Select at Least One Piece of Equipment');
            return;
        }
		if (cost <= 0 || cost > 100 || isNaN(cost)) {
			alert('Hourly rate must be a number from 1-100.');
            return;
		}
        
        const equipmentObj = []

        for (let i = 0; i < equipment.length; i++) 
            equipmentObj.push({"details": equipmentDetails[i], "equipmentId": equipment[i]});

		const address = street + '$$' + city + '$$' + state + '$$' + zip;
		var isHostHomeB = false;
        var hasWifiB = false;
        var hasSpeakersB = false;
        var hasBathroomB = false;
        if (isHostHome === 'true') isHostHomeB = true;
        if (hasWifi === 'true') hasWifiB = true;
        if (hasSpeakers === 'true') hasSpeakersB = true;
        if (hasBathroom === 'true') hasBathroomB = true;

        setGymSubmit('Loading...');
        
		Axios.post('http://localhost:3001/api/uploadgym', {
			accessInformation: accessInformation, 
			address: address, 
			availability: availability, 
			bookingNotice: Number(bookingNotice), 
			cancelationWarning: Number(cancelationWarning), 
			cost: Number(cost), 
			description: description, 
			hasBathroom: hasBathroomB, 
			hasSpeakers: hasSpeakersB, 
			isActive: isActive, 
			hasWifi: hasWifiB, 
			isHostHome: isHostHomeB, 
			numGuestsAllowed: Number(numGuestsAllowed), 
			ownerId: ownerId, 
			photos: photos, 
			title: title, 
			tvType: tvType, 
			equipment: equipmentObj}).then((data, loading, error) => {    
			if(error) 
				console.log(error);
			else {
				alert('Gym Submitted');
				setGymSubmit('Submit');
			}
        })
    }

	const DeleteEquip = (index) => {
        const reducedEquip = [...equipment];
        const reducedEquipDetails = [...equipmentDetails];

        reducedEquip.splice(index, 1);
        reducedEquipDetails.splice(index,1);
        setEquipment(reducedEquip);
        setEquipmentDetails(reducedEquipDetails);
    }

	const GetEquip = () => {
		var equip = [];

		for (let i = 0; i < equipment.length; i++) {
			equip.push((<div>
				{equipmentMap.get(equipment[i])} : {equipmentDetails[i]}
				<Button 
					variant="contained" 
					onClick={() => DeleteEquip(i)}
					size="small"
					style={{left: "10px"}}
				>
					REMOVE
				</Button>
			</div>));
		}
		return (equip);
	}

    const [isActive, setIsActive] = useState(false);
    const [ownerId, setOwnerId] = useState("018054b3-f513-06be-ba11-5726fa2b1052");
    const [title, setTitle] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [description, setDescription] = useState("");
    const [accessInformation, setAccessInformation] = useState("");
    const [isHostHome, setIsHostHome] = useState('false');
    const [numGuestsAllowed, setNumGuestsAllowed] = useState("1");
    const [photos, setPhotos] = useState(['https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']);
    const [equipment, setEquipment] = useState([]);
    const [equipmentDetails, setEquipmentDetails] = useState([]);
    const [hasBathroom, setHasBathroom] = useState('false');
    const [hasWifi, setHasWifi] = useState('false');
    const [hasSpeakers, setHasSpeakers] = useState('false');
    const [tvType, setTvType] = useState("None");
    const [cost, setCost] = useState(20);
    const [bookingNotice, setBookingNotice] = useState(3);
    const [cancelationWarning, setCancelationWarning] = useState(24);
    const [availability, setAvailability] = useState(['1', '2', '3']);
    const [gymSubmit, setGymSubmit] = useState('Submit');
	const [equipmentMap, setEquipmentMap] = useState(new Map());
	const equipMap = new Map();

	const ReviewDialog = styled(Dialog)(({ theme }) => ({
		'& .MuiDialogContent-root': {padding: theme.spacing(2),},
		'& .MuiDialogActions-root': {padding: theme.spacing(1),},
	}));
	  
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
	  
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {setOpen(true);};
	const handleClose = () => {setOpen(false);};

	return ( 
	<div className='UploadTab'>
		<Box sx={{bgcolor: 'background.paper',}}>
		<AppBar position="static" color="default">
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				variant="fullWidth"
			>
				<Tab label="General Info" {...a11yProps(0)} />
				<Tab label="Equipment" {...a11yProps(1)} />
                <Tab label="Amenitites" {...a11yProps(2)} />
                <Tab label="Pricing and Availability" {...a11yProps(3)} />
			</Tabs>
		</AppBar>
		<SwipeableViews
			axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
			index={value}
			onChangeIndex={handleChangeIndex}>
			<TabPanel value={value} index={0} dir={theme.direction}>
				<Box sx={{ '& .MuiTextField-root': { m: 0.5, width: '30ch' }}}><div>
					<TextField
						required
						id="name"
						label="Gym Name"
						variant="outlined"
						defaultValue="Gym Name"
						value={title} 
						onChange={(e) => setTitle(e.target.value)}
						helperText={title === "" ? 'Please enter a gym name.' : ' '}
					/>
					<TextField
						required
						id="description"
						label="Description"
						variant="outlined"
						defaultValue="Description"
						value={description} 
						onChange={(e) => setDescription(e.target.value)}
						helperText={description === "" ? 'Please enter a description.' : ' '}
					/>
					<TextField
						required
						id="max-guests"
						label="Maximum number of guests?"
						type="number"
						variant="outlined"
						placeholder={'1-100'}
						InputProps={{inputProps: { min: 1 }}}
						value={numGuestsAllowed} 
						onChange={(e) => setNumGuestsAllowed(e.target.value)}
						helperText={numGuestsAllowed === "" || numGuestsAllowed <= 0 ? 'Please enter a number greater than 0' : ' '}
						error={numGuestsAllowed <= 0 || isNaN(numGuestsAllowed)}
					/>
					<TextField
						required
						id="notes"
						label="Access Instructions"
						variant="outlined"
						defaultValue="How to access?"
						value={accessInformation} 
						onChange={(e) => setAccessInformation(e.target.value)}
						helperText={accessInformation === "" ? 'Please enter any access instructions.' : ' '}
					/>
				</div><div>
					<TextField
						required
						id="location-street"
						label="Street"
						variant="outlined"
						defaultValue="Street"
						value={street} 
						onChange={(e) => setStreet(e.target.value)}
						helperText={street === "" ? 'Please enter your street.' : ' '}
					/>
					<TextField
						required
						id="location-city"
						label="City"
						variant="outlined"
						defaultValue="City"
						value={city} 
						onChange={(e) => setCity(e.target.value)}
						helperText={
							city === "" ? 'Please enter your city.' : ' ' &&
							!isNaN(city) ? 'Not a city.' : ' ' 
						}
						error={!isNaN(city) && city !== ""}
					/>
					<TextField
						required
						id="location-state"
						label="State"
						variant="outlined"
						defaultValue="State"
						value={state} 
						onChange={(e) => setState(e.target.value)}
						helperText={
							state === "" ? 'Please enter your state.' : ' ' &&
							!isNaN(state) ? 'Not a state.' : ' ' 
						}
						error={!isNaN(state) && state !== ""}
					/>
					<TextField
						required
						id="location-zip"
						label="Zip"
						variant="outlined"
						defaultValue="Zip"
						value={zip} 
						onChange={(e) => setZip(e.target.value)}
						helperText={
							zip === "" ? 'Please enter your zip.' : ' ' &&
							isNaN(zip) ? 'Not a zip.' : ' ' 
						}
						error={isNaN(zip)}
					/>
				</div><div>
					<RadioGroup 
						row 
						value={isHostHome}
						onChange={(e) => setIsHostHome(e.target.value)}
					>
						Will You Be At Home? 
						<FormControlLabel value="true" control={<Radio />} label="YES" />
						<FormControlLabel value="false" control={<Radio />} label="NO" />
					</RadioGroup>
				</div><div>
					<Button variant="contained" component="label" startIcon={<PhotoCamera/>}>
						Upload<input hidden accept="image/*" multiple type="file" />
					</Button>
				</div></Box>
			</TabPanel>
			<TabPanel value={value} index={1} dir={theme.direction}>
				<SelectEquipment/>
				<h3>--Added Equipment--</h3>
				{GetEquip()}
			</TabPanel>
			<TabPanel value={value} index={2} dir={theme.direction}>
				<Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
					Wifi Access? 
					<RadioGroup 
						row 
						value={hasWifi}
						onChange={(e) => setHasWifi(e.target.value)}
					>
						<FormControlLabel value="true" control={<Radio />} label="YES" />
						<FormControlLabel value="false" control={<Radio />} label="NO" />
					</RadioGroup>
					Bathroom Access?
					<RadioGroup 
						row 
						value={hasBathroom}
						onChange={(e) => setHasBathroom(e.target.value)}
					>
						<FormControlLabel value="true" control={<Radio />} label="YES" />
						<FormControlLabel value="false" control={<Radio />} label="NO" />
					</RadioGroup>
					Speaker Access?
					<RadioGroup 
						row 
						value={hasSpeakers}
						onChange={(e) => setHasSpeakers(e.target.value)}
					>
						<FormControlLabel value="true" control={<Radio />} label="YES" />
						<FormControlLabel value="false" control={<Radio />} label="NO" />
					</RadioGroup>
				</Box>
				<Box sx={{ minWidth: 120 }}>
					What Kind of Television Does Your Gym Have?
					<FormControl><InputLabel>TV</InputLabel>
						<Select
							value={tvType}
							label="TV"
							onChange={(e) => setTvType(e.target.value)}
						>
							<MenuItem value={"None"}>None</MenuItem>
							<MenuItem value={"Traditional"}>Traditional</MenuItem>
							<MenuItem value={"Smart"}>Smart</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</TabPanel>
			<TabPanel value={value} index={3} dir={theme.direction}>
				<TextField
					id="hourly-rate"
					label="Hourly Rate?"
					type="number"
					variant="outlined"
					placeholder={'1-100'}
					InputProps={{inputProps: { min: 1, max: 100}}}
					value={cost} 
					onChange={(e) => setCost(e.target.value)}
					helperText={cost === "" || cost <= 0 || cost > 100 ? 'Please enter a number from 1-100' : ' '}
					error={cost <= 0 || cost > 100 || isNaN(cost)}
				/>
				<DateTime2 startTime endTime/>
				<div>
					<TextField
						required
						id="booking-notice"
						label="Booking Notice? (In hours)"
						variant="outlined"
						value={bookingNotice} 
						onChange={(e) => setBookingNotice(e.target.value)}
						helperText={bookingNotice === "" ? 'Please enter any booking requirements.' : ' '}
					/>
					<TextField
						required
						id="cancel-notice"
						label="Cancelation Notice? (In hours)"
						variant="outlined"
						value={cancelationWarning} 
						onChange={(e) => setCancelationWarning(e.target.value)}
						helperText={cancelationWarning === "" ? 'Please enter any cancelation requirements.' : ' '}
					/>
				</div>
			</TabPanel>
		</SwipeableViews>
		<Button variant="contained" onClick={handleOpen}>
			REVIEW GYM
		</Button>
		<ReviewDialog onClose={handleClose} open={open}>
			<ReviewDialogTitle onClose={handleClose}>
				Confirm Gym Submission
			</ReviewDialogTitle>
			<DialogContent dividers>
				--General Info--
				<Typography gutterBottom>
					Gym Name: {title}<br/>
					Description: {description}<br/>
					Max Number of Guests Allowed: {numGuestsAllowed}<br/>
					Access Instructions: {accessInformation}<br/>
					Address: {street} {city} {state} {zip}<br/>
					Gym Owner At Home: {isHostHome === "false" ? "No" : "Yes"}<br/>
				</Typography>
			</DialogContent>
			<DialogContent dividers>
				--Equipment--
				{GetEquip()}
			</DialogContent>
			<DialogContent dividers>
				--Amenities--
				<Typography gutterBottom>
					Wifi: {hasWifi === "false" ? "No" : "Yes"}<br/>
					Bathrooms: {hasBathroom === "false" ? "No" : "Yes"}<br/>
					Speakers: {hasSpeakers === "false" ? "No" : "Yes"}<br/>
					TV Type: {tvType}<br/>
				</Typography>
			</DialogContent>
				<DialogContent dividers>
				--Pricing and Availability--
				<Typography gutterBottom>
					Hourly Rate: ${cost}/hour<br/>
					Starting Availability: AddStartDateTimeHere<br/>
					Ending Availability: AddEndDateTimeHere<br/>
					Booking Notice: {bookingNotice} hours<br/>
					Cancelation Notice: {cancelationWarning} hours<br/>
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button variant="contained" onClick={handleClose}>
					GO BACK
				</Button>
				<Button className="review-submit"
						variant="contained" 
						value={gymSubmit} 
						onClick={(e) => SubmitGym(e)}
				>
					SUBMIT GYM
				</Button>
			</DialogActions>
		</ReviewDialog>
	</Box>
	</div>);
}

export default UploadTab;