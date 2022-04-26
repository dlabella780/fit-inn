import React, { useState } from "react";
import "../../pages/GymUploadPage.css"

function UploadForm () {
    const [ufView, toggleUfView] = useState("general");
    
    const SelectEquipment = () => {
        const [equip, setEquip] = useState('');
        const [equipDets, setEquipDets] = useState('');

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
                <option>Barbell</option>
                <option>Curl Bar</option>
                <option>Rubber Plates</option>
                <option>Iron Plates</option>
                <option>Pullup Bar</option>
                <option>Dumbbells</option>
                <option>Power Rack</option>
                <option>Bench</option>
                <option>Dip Bar</option>
                <option>Landmine</option>
                <option>Safety Straps</option>
                <option>Yoga Mat</option>
                <option>Wahoo Trainer</option>
            </select>Details:<input type="text" placeholder="Weight, Size, etc." value={equipDets} onChange={(e) => setEquipDets(e.target.value)}/>
            <button type='button' onClick={() => setEquipmentInfo()}>Add</button><br></br></>
        );
    }

    const deleteEquip = (index) => {
        const reducedEquip = [...equipment];
        const reducedEquipDetails = [...equipmentDetails];

        reducedEquip.splice(index, 1);
        reducedEquipDetails.splice(index,1);

        setEquipment(reducedEquip);
        setEquipmentDetails(reducedEquipDetails);
    }

    const [isActive, setIsActive] = useState(false);
    const [ownerId, setOwnerId] = useState("Test Owner");
    const [title, setTitle] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [description, setDescription] = useState("");
    const [accessInformation, setAccessInformation] = useState("");
    const [isHostHome, setIsHostHome] = useState(false);
    const [numGuestsAllowed, setNumGuestsAllowed] = useState(2);
    const [photos, setPhotos] = useState(['picture1', 'picture2']);
    const [equipment, setEquipment] = useState([]);
    const [equipmentDetails, setEquipmentDetails] = useState([]);
    const [hasBathroom, setHasBathroom] = useState(false);
    const [hasWifi, setHasWifi] = useState(false);
    const [hasSpeakers, setHasSpeakers] = useState(false);
    const [tvType, setTvType] = useState("None");
    const [cost, setCost] = useState(20);
    const [bookingNotice, setBookingNotice] = useState(3);
    const [cancelationWarning, setCancelationWarning] = useState(24);
    const [availability, setAvailability] = useState([1, 2, 3]);

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
            <div className="uf-input-equip">{equipment.map((val, index) => <><button type='button' onClick={() => deleteEquip(index)}><code>&#10006;</code></button> {val}: <br></br></>)}</div>
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
            <input type="button" value="Submit"/>
            </>}
        </div>
        </form>
    </div>
    )
}

export default UploadForm;