import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import JourneysPage from "./pages/journeysPage";
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
      </Switch>
    </Router>
  );
}

export default App;
