import React, { Component, Fragment, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./GymSearchPage.css";
import AdvancedSearchBar from "../components/GymSearch/AdvancedSearchBar";
import {ViewGyms} from "./ViewGym";
import SortingButtons from "../components/GymSearch/SortingButtons";

const GET_GYMS = gql(`
  query ListGyms {
    list_GymsItems {
      nextToken
      _GymsItems {
        gymName
        gymAddress
        gymDescription
      }
    }
  }
`);

function GetGyms() {
  const { loading, error, data } = useQuery(GET_GYMS);
  const [gyms, getGyms] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) getGyms(data.list_GymsItems._GymsItems);
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      { gyms.map((val) => {
        return (
          <div>
            Gym Name : {val.gymName} <></>
            Gym Address : {val.gymAddress} <></>
            Gym Description : {val.gymDescription} <></>
          </div>
        )
      })}
    </div>
  )
}

class GymSearchPage extends Component {
    render() { return (
      <Fragment>
        <AdvancedSearchBar/>
      </Fragment>
    );}
}
export default GymSearchPage;
