import "../styles/journey.css";

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function formatDistance(distance: number) {
  if (distance <= 1000) {
    return distance + " m";
  } else {
    var newDistance = distance / 1000;
    return newDistance.toFixed(2).toString().replace(".", ",") + " km";
  }
}

function formatTime(time: number) {
  var minutes: number = time / 60;
  return minutes.toFixed(0) + " minuuttia";
}

var bicycleImage = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path d="M194-160q-81 0-137.5-57T0-355q0-81 57.038-137.5Q114.075-549 195-549q71 0 124.5 45.5T384-388h51l-82-232h-73v-60h188v60h-52l26 71h222l-71-191H488v-60h99q24 0 40.5 11t24.5 33l76 207h38q80.51 0 137.255 56.234Q960-436.532 960-356.746 960-276 903.74-218 847.48-160 766-160q-71.602 0-125.801-48T574-328H384q-11 72-64.5 120T194-160Zm0-60q48 0 83.5-31t47.5-77H206v-60h119q-12-45-48-73t-82-28q-56 0-95.5 39T60-355q0 56.25 39 95.625T194-220Zm305-168h76q4-23 15.5-51t31.5-50H463l36 101Zm267 168q56 0 95-39.375T900-355q0-56-39-95t-95-39h-16l39 113-56 19-43-112q-29 17-43.5 48T632-355q0 56.25 39 95.625T766-220ZM193-355Zm573 0Z" />
  </svg>
);

const Journey = (props: any) => {
  return (
    <div key={props.journey.id} className="journeyContainer">
      <p>{props.journey.id}</p>
      <div className="journeySubContainer">
        <p>Lähtö: {formatDate(props.journey.departure)}</p>
        <p>Lopetus: {formatDate(props.journey.return)}</p>
      </div>
      <div className="journeySubContainer">
        <p className="station">{props.journey.departureStationId}</p>
        <p>{props.journey.departureStationName}</p>
      </div>

      <div className="bicycle">{bicycleImage}</div>
      <div className="journeySubContainer">
        <p className="station">{props.journey.returnStationId}</p>
        <p>{props.journey.returnStationName}</p>
      </div>
      <div className="journeySubContainer">
        <p>Matkan pituus: {formatDistance(props.journey.distance)}</p>
        <p>Matkan kesto: {formatTime(props.journey.duration)}</p>
      </div>
    </div>
  );
};

export default Journey;
