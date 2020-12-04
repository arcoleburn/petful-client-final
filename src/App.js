import React, { Component } from "react";
import HomePage from "./Components/HomePage/HomePage";
import AdoptionPage from "./Components/AdoptionPage/AdoptionPage";
import Cats from "./Components/AdoptionPage/Cats";
import Dogs from "./Components/AdoptionPage/Dogs";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={HomePage} />
        <Route path="/adoption" component={AdoptionPage} />
        <Route path="/dog" component={Dogs} />
        <Route path="/cat" component={Cats} />
      </div>
    );
  }
}

export default App;
