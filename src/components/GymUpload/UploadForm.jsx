import React, { useState } from "react";
import "../../pages/GymUploadPage.css"

const SelectEquipment = () => {
    return (
        <><select name="Equipment">
            <option disabled selected value> -- select equipment -- </option>
            <option>Power Rack</option>
            <option>Barbell</option>
            <option>Curl Bar</option>
            <option>Pullup Bar</option>
            <option>Bench</option>
            <option>Yoga Mat</option>
        </select>Details:<input type="text"/><br></br></>
    );
}

function UploadForm () {
    const [components, setComponents] = useState(["Sample Component"]);
    function addComponent() {
        setComponents([...components,"SampleComponent"])
    }

    const [ufView, toggleUfView] = useState("general");

    return (
    <div className="UploadForm">
        <div className="uf-sidebar">
            <ul>
                <li><button className = "uf-overall-button" onClick={() => toggleUfView("general")}>General Info</button></li>
                <li><button className = "uf-overall-button" onClick={() => toggleUfView("equipment")}>Equipment</button></li>
                <li><button className = "uf-overall-button" onClick={() => toggleUfView("amenities")}>Amenities</button></li>
                <li><button className = "uf-overall-button" onClick={() => toggleUfView("pricing")}>Pricing and Availibility</button></li>
            </ul>
        </div>
        <form>
        <h1>Please Enter Your Gym Details:</h1>      
        <div className="uf-input-container"> {ufView === "general" ? 
            <>
            Title: <input type="text" /><br></br>
            Description: <input type="text" /><br></br>
            Location: <input type="text"/><br></br>
            Pictures: <input type="file" /><br></br>
            Will Host be Present? <input type="checkbox"/><br></br>
            Guest Access: <input type="text"/><br></br>
            Number of Guests: <input type="number"/><br></br>
            <button className = "uf-section-button" onClick={() => toggleUfView("equipment")}>Next</button>
            </> 
            : ufView === "equipment" ? 
            <>
            Equipment: <br></br>
            {components.map(() => (<SelectEquipment />))}
            <input type="button" value="Add More" onClick={addComponent}/><br></br>
            <button className = "uf-section-button" onClick={() => toggleUfView("general")}>Back</button>
            <button className = "uf-section-button" onClick={() => toggleUfView("amenities")}>Next</button>
            </> 
            : ufView === "amenities" ?  
            <>
            Has Bathroom? <input type="checkbox"/><br></br>
            Internet? <input type="checkbox"/><br></br>
            Speakers? <input type="checkbox"/><br></br>
            Television: <select name="television">
                <option>None</option>
                <option>Traditional</option>
                <option>Smart</option>
            </select><br></br>
            <button className = "uf-section-button" onClick={() => toggleUfView("equipment")}>Back</button>
            <button className = "uf-section-button" onClick={() => toggleUfView("pricing")}>Next</button>
            </> 
            : ufView === "pricing" ? 
            <>
            Hourly Rate: <input type="number"/><br></br>
            Availability: <input type="datetime-local"/><br></br>
            Booking Notice: <select name="Cancelations">
                <option>1 Hour</option>
                <option>3 Hours</option>
                <option>6 Hours</option>
                <option>12 Hours</option>
                <option>24 Hours</option>
            </select><br></br>
            Cancelation Warning: <select name="Cancelation">
                <option>12 Hours</option>
                <option>24 Hours</option>
                <option>48 Hours</option>
                <option>72 Hours</option>
            </select><br></br>
            <button className = "uf-section-button" onClick={() => toggleUfView("amenities")}>Back</button>
            <input type = "button" value = "Review" onClick={() => toggleUfView("review")} />
            </>: 
            <>
            </>}
        </div>
        </form>
    </div>
    )
}

export default UploadForm;