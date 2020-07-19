import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router"
import "./App.css";

//Pages
import Search from "./pages/Search";
import Saved from "./pages/SavedBooks";

//Components
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <>
        {/* Navigation Component */}
        <Navigation />
        <Router>
          <div>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
