import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";


function App() {
const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};

return (
	<div style={{ width: "300px", margin: "auto" }}>
	<MultiRangeSlider
	  baseClassName="multi-range-slider-black"
	  min={0}
	  max={100}
	  step={5}
	  ruler={true}
	  label={true}
	  preventWheel={false}
	  minValue={minValue}
	  maxValue={maxValue}
	  onInput={(e) => {
		handleInput(e);
	  }}
	/>
  </div>
	);
}

export default App;