import React, { useState } from "react";
import "../../pages/GymUploadPage.css"

const SelectEquipment = () => {
    return (
        <><select name="Equipment">
            <option disabled selected value> -- select equipment -- </option>
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
        </select>Details:<input type="text" placeholder="Weight, Size, etc."/><br></br></>
    );
}

function UploadForm () {
    const [components, setComponents] = useState(["gymEquip"]);
    function addComponent() {
        setComponents([...components,"gymEquip"])
    }

    const [ufView, toggleUfView] = useState("general");

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
            Enter a Title For Your Gym:<br></br> <input type="text" placeholder="John's Gym"/><br></br>
            Enter a Description:<br></br><textarea placeholder="Basic Gym with Cardio and Strength Training." rows="3" cols="60"></textarea><br></br>
            Enter a Location: <br></br>
            <div className="uf-address">
            <input type="text" placeholder="Street"/><br></br>
            <input type="text" placeholder="City"/><br></br>
            <input type="text" placeholder="State"/><br></br>
            </div>
            <input type="text" placeholder="Zip"/><br></br>
            Upload Pictures: <br></br><input type="file" /><br></br>
            Will a Host Be Home During Guest's Workouts? 
            <br></br><label><input type="radio" name="uf-host"/>Yes</label><label><input type="radio" name="uf-host"/>No</label><br></br>
            How Will Guests Access Your Gym?<br></br> <textarea placeholder="Enter through side gate, code is 1234." rows="1" cols="60"></textarea><br></br>
            Number of Guests Allowed at a Time: <br></br><input type="number" defaultValue="2"/><br></br>
            <h3></h3>
            <button className = "uf-section-button-next" onClick={() => toggleUfView("equipment")}>Next</button>
            </> 
            : ufView === "equipment" ? 
            <>
            Equipment: <br></br>
            {components.map(() => (<SelectEquipment />))}
            <input type="button" value="Add More" onClick={addComponent}/><br></br>
            <button className = "uf-section-button-back" onClick={() => toggleUfView("general")}>Back</button>
            <button className = "uf-section-button-next" onClick={() => toggleUfView("amenities")}>Next</button>
            </> 
            : ufView === "amenities" ?  
            <>
            <></>
            Does Your Gym Have a Bathroom?
            <br></br><label><input type="radio" name="uf-bath"/>Yes</label><label><input type="radio" name="uf-bath"/>No</label><br></br>
            Does Your Gym Have WiFi?
            <br></br><label><input type="radio" name="uf-wifi"/>Yes</label><label><input type="radio" name="uf-wifi"/>No</label><br></br>
            Does Your Gym Have Speakers Guests Can Connect To?
            <br></br><label><input type="radio" name="uf-speakers"/>Yes</label><label><input type="radio" name="uf-speakers"/>No</label><br></br>
            What Kind of Television Does Your Gym Have?<br></br> <select name="uf-television">
                <option>None</option>
                <option>Traditional</option>
                <option>Smart</option>
            </select><br></br><br></br>
            <button className = "uf-section-button-back" onClick={() => toggleUfView("equipment")}>Back</button>
            <button className = "uf-section-button-next" onClick={() => toggleUfView("pricing")}>Next</button>
            </> 
            : ufView === "pricing" ? 
            <>
            Hourly Rate: <br></br>$<input type="number" defaultValue="20"/><br></br>
            Availability: <br></br><input type="datetime-local"/><br></br>
            How Much Notice is Needed Before a Booking?<br></br> <select name="uf-booking">
                <option>1 Hour</option>
                <option>3 Hours</option>
                <option>6 Hours</option>
                <option>12 Hours</option>
                <option>24 Hours</option>
            </select><br></br><br></br>
            How Much Warning is Needed Before a Cancelation?<br></br> <select name="uf-cancelation">
                <option>12 Hours</option>
                <option>24 Hours</option>
                <option>48 Hours</option>
                <option>72 Hours</option>
            </select><br></br><br></br>
            <button className = "uf-section-button-back" onClick={() => toggleUfView("amenities")}>Back</button>
            <button className = "uf-section-button-next" onClick={() => toggleUfView("review")}>Review</button>
            </>: 
            <>
            <input type="submit" value="Submit" />
            </>}
        </div>
        </form>
    </div>
    )
}

export default UploadForm;