import React, { useState } from "react";
import { gql, useMutation, useQuery} from "@apollo/client";
import "../../pages/GymUploadPage.css"

function UploadForm () {

    const GET_EQUIPMENT = gql`
        query MyQuery {
            list_EquipmentItems {
            _EquipmentItems {
                _id
                name
            }
            }
        }
    `;
    
    const ADD_GYM = gql`
    mutation gymMutation($accessInformation: String = "", $address: String = "", $availability: [String] = "", $bookingNotice: Int = 3, 
        $cancelationWarning: Int = 24, $cost: Int = 20, $description: String = "", $tvType: String = "", $rating: Int = 0, 
        $title: String = "", $photos: [String] = "", $ownerId: String = "", $numGuestsAllowed: Int = 2, $isHostHome: Boolean = false, 
        $isActive: Boolean = false, $hasWifi: Boolean = false, $hasSpeakers: Boolean = false, $hasBathroom: Boolean = false,
        $equipment: [Self_Gym_equipment_equipmentItem_Input_] = {}
        ) {
            add_Gym(
            input: {accessInformation: $accessInformation, address: $address, availability: $availability, bookingNotice: $bookingNotice, 
                cancelationWarning: $cancelationWarning, cost: $cost, description: $description, hasBathroom: $hasBathroom, 
                hasSpeakers: $hasSpeakers, isActive: $isActive, hasWifi: $hasWifi, isHostHome: $isHostHome, numGuestsAllowed: $numGuestsAllowed, 
                ownerId: $ownerId, photos: $photos, rating: $rating, title: $title, tvType: $tvType, equipment: $equipment}
            syncMode: NODE_LEDGERED
            ) {
                transaction {
                    _id
                    submissionTime
                }
                result {
                    _id
                }
        }
      }       
    `;

    
    const [ufView, toggleUfView] = useState("general");
    
    const SelectEquipment = () => {
        const [equip, setEquip] = useState('');
        const [equipDets, setEquipDets] = useState('');

        const equipmentObj = []
        equipMap.forEach((value, key) => equipmentObj.push({key: key, value: value}));


        function setEquipmentInfo() {
            if(equip !== '') {
                setEquipment(prevState => [...prevState, equip]);
                setEquipmentDetails(prevState => [...prevState, equipDets]);
            }
            else alert('Please Select a Piece of Equipment');
        }

        return (
            <><select name="Equipment" value={equip} onChange={(e) => setEquip(e.target.value)}>
                <option disabled value = ''> -- select equipment -- </option>
                {equipmentObj.map((val) => <option value={val.key}>{val.value}</option>)}
            </select>Details:<input type="text" placeholder="Weight, Size, etc." value={equipDets} onChange={(e) => setEquipDets(e.target.value)}/>
            <button type='button' onClick={() => setEquipmentInfo()}>Add</button><br></br></>
        );
    }

    const GetEquipment = () => {
        const { loading, error, data } = useQuery(GET_EQUIPMENT);

        if(data)
            for (let i =0; i < data.list_EquipmentItems._EquipmentItems.length; i++) {
                equipMap.set(data.list_EquipmentItems._EquipmentItems[i]._id, data.list_EquipmentItems._EquipmentItems[i].name);
            }
        
    }

    const DeleteEquip = (index) => {
        const reducedEquip = [...equipment];
        const reducedEquipDetails = [...equipmentDetails];

        reducedEquip.splice(index, 1);
        reducedEquipDetails.splice(index,1);

        setEquipment(reducedEquip);
        setEquipmentDetails(reducedEquipDetails);
    }

    const SubmitGym = (e) => {
        e.preventDefault();

        if (title === '') {
            toggleUfView('general')
            alert('Please Set a Title');
            return;
        }
        if (description === '') {
            toggleUfView('general')
            alert('Please Set a Description');
            return;
        }
        if (street === '') {
            toggleUfView('general')
            alert('Please Set a Street');
            return;
        }
        if (city === '') {
            toggleUfView('general')
            alert('Please Set a City');
            return;
        }
        if (state === '') {
            toggleUfView('general')
            alert('Please Set a State');
            return;
        }
        if (zip === '') {
            toggleUfView('general')
            alert('Please Set a Zip');
            return;
        }
        if (accessInformation === '') {
            toggleUfView('general')
            alert('Please Give Access Information');
            return;
        }

        if (equipment.length < 1) {
            toggleUfView('equipment')
            alert('Please Select at Least One Piece of Equipment');
            return;
        }
        
        const equipmentObj = []
        for (let i = 0; i < equipment.length; i++) {
            equipmentObj.push({"details": equipmentDetails[i], "equipmentId": equipment[i]});
        }

        const address = street + '$$' + city + '$$' + state + '$$' + zip;
        var isHostHomeB;
        var hasWifiB;
        var hasSpeakersB;
        var hasBathroomB;

        if (isHostHome === 'true') isHostHomeB = true;
        else isHostHomeB = false;
        if (hasWifi === 'true') hasWifiB = true;
        else hasWifiB = false;
        if (hasSpeakers === 'true') hasSpeakersB = true;
        else hasSpeakersB = false;
        if (hasBathroom === 'true') hasBathroomB = true;
        else hasBathroomB = false;

        addGym({variables: {accessInformation: accessInformation, address: address, availability: availability, bookingNotice: Number(bookingNotice), 
                cancelationWarning: Number(cancelationWarning), cost: Number(cost), description: description, hasBathroom: hasBathroomB, 
                hasSpeakers: hasSpeakersB, isActive: isActive, hasWifi: hasWifiB, isHostHome: isHostHomeB, numGuestsAllowed: Number(numGuestsAllowed), 
                ownerId: ownerId, photos: photos, title: title, tvType: tvType, equipment: equipmentObj}}).then((data, loading, error) => {
                    if(error) console.log(error);
                    else {
                        alert('Gym Submitted');
                    }
        })
            
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
    const [numGuestsAllowed, setNumGuestsAllowed] = useState(2);
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

    const [addGym, {data, loading, error}] = useMutation(ADD_GYM);

    const equipMap = new Map();
    GetEquipment();

    return (
    <div className="UploadForm">
        <div className="uf-sidebar">
            <ul>
                {ufView === "general" ? <button className = "uf-overall-button-selected" onClick={() => toggleUfView("general")}>General Info</button>
                : <button className = "uf-overall-button" onClick={() => toggleUfView("general")}>General Info</button>}
                {ufView === "equipment" ? <button className = "uf-overall-button-selected" onClick={() => toggleUfView("general")}>Equipment</button>
                : <button className = "uf-overall-button" onClick={() => toggleUfView("equipment")}>Equipment</button>}
                {ufView === "amenities" ? <button className = "uf-overall-button-selected" onClick={() => toggleUfView("general")}>Amenities</button>
                : <button className = "uf-overall-button" onClick={() => toggleUfView("amenities")}>Amenities</button>}
                {ufView === "pricing" ? <button className = "uf-overall-button-selected" onClick={() => toggleUfView("general")}>Pricing and Availibility</button>
                : <button className = "uf-overall-button" onClick={() => toggleUfView("pricing")}>Pricing and Availibility</button>}
            </ul>
        </div>
        <form>    
        <div className="uf-input-container"> {ufView === "general" ? 
            <>
            Enter a Title For Your Gym:<br></br> <input type="text" placeholder="John's Gym" value={title} onChange={(e) => setTitle(e.target.value)}/><br></br>
            Enter a Description:<br></br><textarea placeholder="Basic Gym with Cardio and Strength Training." rows="3" cols="60" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br></br>
            Enter a Location: <br></br>
            <div className="uf-address">
            <input type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)}/><br></br>
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/><br></br>
            <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)}/><br></br>
            <input type="text" placeholder="Zip" value={zip} onChange={(e) => setZip(e.target.value)}/><br></br>
            </div><br></br>
            Upload Pictures: <br></br><input type="file" /><br></br>
            Will a Host Be Home During Guest's Workouts? 
            <br></br><label><input type="radio" name="uf-host" checked={isHostHome === 'true'} value={true} onChange={(e) => setIsHostHome(e.target.value)}/>Yes</label>
            <label><input type="radio" name="uf-host" checked={isHostHome === 'false'} value={false} onChange={(e) => setIsHostHome(e.target.value)}/>No</label><br></br>
            How Will Guests Access Your Gym?<br></br> <textarea placeholder="Enter through side gate, code is 1234." rows="1" cols="60" value={accessInformation} onChange={(e) => setAccessInformation(e.target.value)}></textarea><br></br>
            Number of Guests Allowed at a Time: <br></br><input type="number" value={numGuestsAllowed} onChange={(e) => setNumGuestsAllowed(e.target.value)}/><br></br>
            <h3></h3>
            <button className = "uf-section-button-next" onClick={() => toggleUfView("equipment")}>Next</button>
            </> 
            : ufView === "equipment" ? 
            <>
            Equipment: <br></br>
            <SelectEquipment/>Your Equipment:<br></br>
            <div className="uf-input-equip">{equipment.map((val, index) => <><button type='button' onClick={() => DeleteEquip(index)}><code>&#10006;</code></button> {equipMap.get(val)}: <br></br></>)}</div>
            <div className="uf-input-equip-details">{equipmentDetails.map((val) => <>{val}<br></br></>)}</div><br></br>
            <button className = "uf-section-button-back" onClick={() => toggleUfView("general")}>Back</button>
            <button className = "uf-section-button-next" onClick={() => toggleUfView("amenities")}>Next</button>
            </> 
            : ufView === "amenities" ?  
            <>
            <></>
            Does Your Gym Have a Bathroom?
            <br></br><label><input type="radio" name="uf-bath" checked={hasBathroom === 'true'} value={true} onChange={(e) => setHasBathroom(e.target.value)}/>Yes</label>
            <label><input type="radio" name="uf-bath" checked={hasBathroom === 'false'} value={false} onChange={(e) => setHasBathroom(e.target.value)}/>No</label><br></br>
            Does Your Gym Have WiFi?
            <br></br><label><input type="radio" name="uf-wifi" checked={hasWifi === 'true'} value={true} onChange={(e) => setHasWifi(e.target.value)}/>Yes</label>
            <label><input type="radio" name="uf-wifi" checked={hasWifi === 'false'} value={false} onChange={(e) => setHasWifi(e.target.value)}/>No</label><br></br>
            Does Your Gym Have Speakers Guests Can Connect To?
            <br></br><label><input type="radio" name="uf-speakers" checked={hasSpeakers === 'true'} value={true} onChange={(e) => setHasSpeakers(e.target.value)}/>Yes</label>
            <label><input type="radio" name="uf-speakers" checked={hasSpeakers === 'false'} value={false} onChange={(e) => setHasSpeakers(e.target.value)}/>No</label><br></br>
            What Kind of Television Does Your Gym Have?<br></br> <select name="uf-television" value={tvType} onChange={(e) => setTvType(e.target.value)}>
                <option>None</option>
                <option>Traditional</option>
                <option>Smart</option>
            </select><br></br><br></br>
            <button className = "uf-section-button-back" onClick={() => toggleUfView("equipment")}>Back</button>
            <button className = "uf-section-button-next" onClick={() => toggleUfView("pricing")}>Next</button>
            </> 
            : ufView === "pricing" ? 
            <>
            Hourly Rate: <br></br>$<input type="number" value={cost} onChange={(e) => setCost(e.target.value)}/><br></br>
            Availability: <br></br><input type="datetime-local"/><br></br>
            How Much Notice is Needed Before a Booking?<br></br> <select name="uf-booking" value={bookingNotice} onChange={(e) => setBookingNotice(e.target.value)}>
                <option value={1}>1 Hour</option>
                <option value={3}>3 Hours</option>
                <option value={6}>6 Hours</option>
                <option value={12}>12 Hours</option>
                <option value={24}>24 Hours</option>
            </select><br></br><br></br>
            How Much Warning is Needed Before a Cancelation?<br></br> <select name="uf-cancelation" value={cancelationWarning} onChange={(e) => setCancelationWarning(e.target.value)}>
                <option value={12}>12 Hours</option>
                <option value={24}>24 Hours</option>
                <option value={48}>48 Hours</option>
                <option value={72}>72 Hours</option>
            </select><br></br><br></br>
            <button className = "uf-section-button-back" onClick={() => toggleUfView("amenities")}>Back</button>
            <button className = "uf-section-button-next" onClick={() => toggleUfView("review")}>Review</button>
            </>: 
            <>
            <input type="button" value="Submit" onClick={(e) => SubmitGym(e)}/>
            </>}
        </div>
        </form>
    </div>
    )
}

export default UploadForm;