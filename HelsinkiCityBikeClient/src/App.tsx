import React, { useEffect, useState } from "react";
import { journeyData } from "./components/interfaces";
import Journey from "./components/journey";
import "./App.css";

import { ENDPOINTS, API_URL } from "./api";

function App() {
  const [data, setData]: Array<any> = useState([]);
  const [startIndex, setStartIndex]: any = useState(0);
  const [maxAmount, setmaxAmount]: any = useState(25);
  const numberOfItems:number = 25;

  const fetchMaxAmount = async () => {
    var url =
      API_URL +
      ENDPOINTS.amount
    const response = await fetch(url);
    const data = await response.json();

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
    const response = await fetch(url);
    const data = await response.json();

    const fetchedData = [];

    for (const key in data) {
      fetchedData.push(data[key]);
    }

    setData(fetchedData);
  };

  useEffect(() => {
    fetchMaxAmount();
    fetchData();
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
    console.log(maxAmount)
  };

  return (
    <div className="App">
      {data.map((wData: journeyData) => (
        <div key={wData.id}>
          <Journey journey={wData} />
        </div>
      ))}
      <button onClick={backButton}>Previous</button>
      <button onClick={nextButton}>Next</button>
    </div>
  );
}

export default App;
