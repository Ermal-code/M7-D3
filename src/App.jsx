import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./components/Details";
import Favorites from "./components/Favorites";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route
            path="/details/:id"
            exact
            render={(props) => <Details {...props} />}
          />
          <Route
            path="/favorites"
            exact
            render={(props) => <Favorites {...props} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
