import React, { Component } from "react";
import HomePage from "./Components/HomePage/HomePage";
import AdoptionPage from "./Components/AdoptionPage/AdoptionPage";
import Cats from "./Components/AdoptionPage/Cats";
import Dogs from "./Components/AdoptionPage/Dogs";
import Context from "./Components/Context/Context";
import { Route } from "react-router-dom";
import { API_ENDPOINT } from "./config";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    dogs: [],
    cats: [],
    people: [],
    dogNode: null,
    catNode: null,
    personNode: null,
    getCats: () => {
      fetch(`${API_ENDPOINT}/cat`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            cats: data,
            catNode: data[0],
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDogs: () => {
      fetch(`${API_ENDPOINT}/dog`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            dogs: data,
            dogNode: data[0],
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getPeople: () => {
      fetch(`${API_ENDPOINT}/people`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            people: data,
          });
        });
    },
    adoptCat: () => {
      fetch(`${API_ENDPOINT}/cat`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((data) => {
          this.setState({
            cats: data,
          });
        })
        .catch((e) => {
          throw new Error("cat wasnt adopted");
        });
    },
    adoptDog: () => {
      fetch(`${API_ENDPOINT}/dog`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((data) => {
          this.setState({
            dogs: data,
          });
        })
        .catch((e) => {
          throw new Error("dog adoption failed");
        });
    },
    setCatNode: (nextCat) => this.setState({ catNode: nextCat }),
    setDogNode: (nextDog) => this.setState({ dogNode: nextDog }),
    setPeopleNode: (nextPerson) => this.setState({ peopleNode: nextPerson }),
  };

  componentDidMount() {
    this.state.getCats();
    this.state.getDogs();
    this.state.getPeople();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <ErrorBoundary>
          <Route exact path="/" component={HomePage} />
          <Route path="/adoption" component={AdoptionPage} />
          <Route path="/dog" component={Dogs} />
          <Route path="/cat" component={Cats} />
        </ErrorBoundary>
      </Context.Provider>
    );
  }
}

export default App;
