
import React, { useEffect, useState } from "react";
import { journeyData } from "../components/interfaces";
import Journey from "../components/journey";
import { ENDPOINTS, API_URL } from "../api";
import "../styles/journey.css";
import "../styles/common.css";

const JourneysPage = () => {
    const [data, setData]: Array<any> = useState([]);
    const [startIndex, setStartIndex]: any = useState(0);
    const [maxAmount, setmaxAmount]: any = useState(25);
    const numberOfItems:number = 25;
    const [loadingState, setLoadingState]:any = useState(true);
    const [errorOccurred, setErrorOccurred]:any = useState(false);
  
    const fetchMaxAmount = async () => {
      var url =
        API_URL +
        ENDPOINTS.amount
        var data;
        try {
          const response = await fetch(url);
          data = await response.json();
          setErrorOccurred(false)
          setLoadingState(false)
        } catch (error) {
          setErrorOccurred(true)
          setLoadingState(false)
          console.log(error)
        }
  
      setmaxAmount(data);
    };
  
    const fetchData = async () => {
      var url =
        API_URL +
        ENDPOINTS.journeys +
        "?startIndex=" +
        startIndex +
        "&numberOfItems=" +
        numberOfItems;
  
        var data;
        try {
          const response = await fetch(url);
          data = await response.json();
          setErrorOccurred(false)
          setLoadingState(false)
        } catch (error) {
          setErrorOccurred(true)
          setLoadingState(false)
          console.log(error)
        }
  
      const fetchedData = [];
  
      for (const key in data) {
        fetchedData.push(data[key]);
      }
  
      setData(fetchedData);
    };
  
    useEffect(() => {
      fetchMaxAmount();
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startIndex]);
  
    const backButton = async (event: any) => {
      if (startIndex !== 0) {
        setStartIndex(startIndex - 25);
      }
    };
  
    const nextButton = async (event: any) => {
      if (startIndex <= maxAmount - 25){
        setStartIndex(startIndex + 25);
      }
    };
  
    const tryAgainButton = async (event: any) => {
      window.location.reload();
    };
  
    const errorOccurredText = 
    <div className="errorContainer">
      <p>Ongelmia yhteydessä.</p>
      <button onClick={tryAgainButton}>Yritä uudelleen</button>
      </div>
  
    const loader = <div className="loaderContainer"><div className="loader"></div></div>
  return (
    <div className="App">
      {data.map((wData: journeyData) => (
        <div key={wData.id}>
          <Journey journey={wData} />
        </div>
      ))}
      {loadingState && loader}
      {errorOccurred && errorOccurredText}
      <button onClick={backButton}>Edellinen</button>
      <button onClick={nextButton}>Seuraava</button>
    </div>
  )
};
export default JourneysPage;