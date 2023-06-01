import "../styles/station.css";
import { stopsImage } from "../components/common";

const StationSmall = (props: any) => {
  return (
    <div key={props.station.id} className="stationSmallContainer">
      <p>{stopsImage}</p>
      <p className="stationNumber">{props.station.stopId}</p>
      <h2>{props.station.nimi}</h2>
      <p>{props.station.osoite}</p>
      <p>{props.station.kaupunki}</p>
    </div>
  );
};

export default StationSmall;
