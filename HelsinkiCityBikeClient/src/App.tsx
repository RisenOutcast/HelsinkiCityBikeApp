import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import JourneysPage from "./pages/journeysPage";
import StationsPage from "./pages/stationsPage";
import SingleStationPage from "./pages/singleStationPage";
import Navbar from "./components/navbar";
import "./styles/common.css";
import "./App.css";

function App() {
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact>
          <JourneysPage />
        </Route>
        <Route path="/stations" exact>
          <StationsPage />
        </Route>
        <Route path="/station/:stationId" component={SingleStationPage} />
      </Switch>
    </Router>
  );
}

export default App;
