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

        return (
        <div className="UploadForm">
            <h1>Please Enter Your Gym Details:</h1>
            <form>
            <div className="uf-input-container">
                Title: <input type="text" required/><br></br>
                Description: <input type="text" required/><br></br>
                Location: <input type="text"/><br></br>
                Pictures: <input type="file" /><br></br>
                Will Host be Present? <input type="checkbox"/><br></br>
                Guest Access: <input type="text"/><br></br>
                Number of Guests: <input type="number"/><br></br>
                Equipment: <br></br>
                {components.map(() => (<SelectEquipment />))}
                <input type="button" value="Add More" onClick={addComponent}/><br></br>
                Hourly Rate: <input type="number"/><br></br>
                Has Bathroom? <input type="checkbox"/><br></br>
                Internet? <input type="checkbox"/><br></br>
                Speakers? <input type="checkbox"/><br></br>
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
            </div>
            </form>
        </div>
    )
}

export default UploadForm;