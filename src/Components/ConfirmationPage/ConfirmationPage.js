import React, { Component } from "react";
import Context from "../Context/Context";

// * I can see a list of other people currently in line.
// * I can submit my name and be added to the end of the line.
// * When I am not at the beginning of the line, I cannot see an option to adopt a pet.
// * For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.
//     * Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.
//     * When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.
//adoptDog or adoptCat
export default class Confirmations extends Component {
  static contextType = Context;

  timeout = 0;
  componentDidMount() {
    // const props = this.state;
    this.timeout = setInterval(() => {
      if (this.context.people.length < 5) {
        this.context.addPeople({ name: "random name" });
        return;
      }
      if (this.context.people[0] !== this.context.name) {
        const name = this.context.people[0];
        this.context.deletePeople(name);
        return;
      }

      if (this.context.error === "You are next in line!") {
        this.context.setError(null);
        this.props.history.push("/adoption");
        return;
      }

      if (
        this.context.name === this.context.people[0] &&
        this.context.people.length === 5
      ) {
        this.context.setError("You are next in line!");
        return;
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return (
      <Context.Consumer>
        {(context) => {
          console.log(context);
          return (
            <div>
              <h1>Please Wait In Line</h1>
              <p className="error">{context.error}</p>
              <ol>
                {this.context.people.map((person, i) => {
                  return <li key={i}>{person}</li>;
                })}
              </ol>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
