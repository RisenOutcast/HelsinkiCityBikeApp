import React, { useEffect, useState } from "react";
import { stationData } from "../components/interfaces";
import StationSmall from "../components/stationSmall";
import { ENDPOINTS, API_URL } from "../api";
import { loader, errorOccurredText } from "../components/common";
import "../styles/journey.css";
import "../styles/common.css";

const StationsPage = () => {
  const [data, setData]: Array<any> = useState([]);
  const [startIndex, setStartIndex]: any = useState(0);
  const [maxAmount, setmaxAmount]: any = useState(25);
  const numberOfItems: number = 25;
  const [loadingState, setLoadingState]: any = useState(true);
  const [errorOccurred, setErrorOccurred]: any = useState(false);

  const fetchMaxAmount = async () => {
    var url = API_URL + ENDPOINTS.stationsAmount;
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

    setmaxAmount(data);
  };

  const fetchData = async () => {
    var url =
      API_URL +
      ENDPOINTS.stations +
      "?startIndex=" +
      startIndex +
      "&numberOfItems=" +
      numberOfItems;

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
    if (startIndex <= maxAmount - 25) {
      setStartIndex(startIndex + 25);
    }
  };

  return (
    <div className="App">
      <h1>Pysäkit</h1>
      {!loadingState && (
        <p>
          Näytetään pysäkit {startIndex + 1} - {startIndex + numberOfItems} (yht.{" "}
          {maxAmount})
        </p>
      )}
      <button onClick={backButton}>Edellinen</button>
      <button onClick={nextButton}>Seuraava</button>
      {data.map((sData: stationData) => (
        <div key={sData.id}>
          <StationSmall station={sData} />
        </div>
      ))}
      {loadingState && loader}
      {errorOccurred && errorOccurredText}
      <button onClick={backButton}>Edellinen</button>
      <button onClick={nextButton}>Seuraava</button>
    </div>
  );
};
export default StationsPage;
