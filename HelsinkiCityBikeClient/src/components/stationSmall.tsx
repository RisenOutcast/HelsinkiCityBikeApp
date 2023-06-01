import "../styles/station.css";
import { stopsImage } from "../components/common";
import { useHistory } from "react-router-dom";

const StationSmall = (props: any) => {
    const history = useHistory();

    const stationHandler = () => {
        history.push("/station/" + props.station.stopId);
    }
  return (
    <div onClick={stationHandler} key={props.station.id} className="stationSmallContainer">
      <p>{stopsImage}</p>
      <p className="stationNumber">{props.station.stopId}</p>
      <h2>{props.station.nimi}</h2>
      <p>{props.station.osoite}</p>
      <p>{props.station.kaupunki}</p>
    </div>
  );
};

export default StationSmall;
