import React, { useEffect, useState } from "react";
import { ENDPOINTS, API_URL } from "../api";
import {
  loader,
  errorOccurredText,
  notFoundText,
  stopsImage,
} from "../components/common";
import "../styles/station.css";
import "../styles/common.css";
import { useParams } from "react-router-dom";

const SingleStationPage = () => {
  const stationId: any = useParams();
  const [data, setData]: any = useState([]);
  const [departureAmount, setDepartureAmount]: any = useState([0]);
  const [returnAmount, setReturnAmount]: any = useState([0]);
  const [loadingState, setLoadingState]: any = useState(true);
  const [errorOccurred, setErrorOccurred]: any = useState(false);
  const [notFound, setNotFound]: any = useState(false);

  const fetchData = async () => {
    var url = API_URL + ENDPOINTS.singleStation + stationId["stationId"];
    var data;
    try {
      const response = await fetch(url);
      if (response.status === 404) {
        setNotFound(true);
        setLoadingState(false);
        return;
      }
      data = await response.json();
      setErrorOccurred(false);
      setLoadingState(false);
    } catch (error) {
      setErrorOccurred(true);
      setLoadingState(false);
      console.log(error);
    }

    setData(data);
  };

  const fetchAmountData = async (endpoint:string, departure:boolean) => {
    var url =
      API_URL +
      endpoint +
      "?stationId=" +
      stationId["stationId"];

    var data;
    try {
      const response = await fetch(url);
      data = await response.json();
      setErrorOccurred(false);
      setLoadingState(false);
    } catch (error) {
      setErrorOccurred(true);
      setLoadingState(false);
      console.log(error);
    }
    
    if(departure === true){
        setDepartureAmount(data);
    }
    else{
        setReturnAmount(data)
    }
  };

  useEffect(() => {
    fetchData();
    fetchAmountData(ENDPOINTS.journeysDepartureStation, true);
    fetchAmountData(ENDPOINTS.journeysReturnStation, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1 className="bigStationNumber">{stationId["stationId"]}</h1>
      <div className="stationContainer">
        <p>{stopsImage}</p>
      </div>
      {!loadingState && !errorOccurred && !notFound && (
        <div>
          <div className="stationTitleContainer">
            <p>Pysäkki:</p>
            <h2>{data.nimi}</h2>
            <h4>{data.namn}</h4>
          </div>
          <div>
            <div className="stationContainer">
              <div>
                <p>Osoite:</p>
                <p>{data.osoite}</p>
                <i>{data.adress}</i>
                <p>{data.kaupunki}</p>
              </div>
            </div>
            <div className="stationContainer">
              <div className="stationSubContainer">
                <div>
                  <p>Lähdöt:</p>
                  <p>{departureAmount}</p>
                </div>
                <div>
                  <p>Saapumiset:</p>
                  <p>{returnAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loadingState && loader}
      {errorOccurred && errorOccurredText}
      {notFound && notFoundText}
    </div>
  );
};
export default SingleStationPage;
