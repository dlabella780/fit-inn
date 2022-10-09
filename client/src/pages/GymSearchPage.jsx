import React, { Fragment, useEffect, useState } from "react";
import AdvancedSearchBar from "../components/GymSearch/AdvancedSearchBar";
import Axios from 'axios';

function GymSearchPage() {
  const [gymData, setGymData] = useState([]);
  const [gymDataLoading, setgymDataLoading] = useState(true);

	useEffect(() => {
		Axios.get('http://localhost:3001/api/gymSearch', 
			{params: {zipcode: '95818', day: ''}}).then((response) => { 
        setGymData(response.data); 
        setgymDataLoading(false);}
    )}, []);

  return (
      <Fragment>
        <div className="gym-searchbar">
          <AdvancedSearchBar gymData={gymData} loading={gymDataLoading}/>
        </div>
      </Fragment>
    );
}
export default GymSearchPage;