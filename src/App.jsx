import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./components/Details";

class App extends React.Component {
  state = {
    job: {},
  };
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                addJob={(jobObj) => this.setState({ job: jobObj })}
              />
            )}
          />
          <Route
            path="/details/:id"
            exact
            render={(props) => <Details {...props} job={this.state.job} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
