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

  componentDidMount() {
    // const props = this.state;
    setInterval(() => {
      console.log(this.context);
      if (this.context.people.length > 5) {
        const name =
          this.context.people[0].last.value || this.context.people[0];
        const nameData = {
          name: name,
        };
        this.context.deletePeople(name);
        return;
      }
      if (this.context.people.length < 5) {
        this.context.people.push("random name");
        return;
      }
      if (this.context.name == this.context.people[0]) {
        setTimeout(() => {
          this.context.setError("You are next in line!");
        }, 5000);
        this.props.history.push("/adopt");
        return;
      }
    }, 5000);
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
                {context.people.map((person, i) => {
                  if (typeof person === "object") {
                    console.log(person.last.value);
                    return <li key={i}>{person.last.value}</li>;
                  } else {
                    return <li key={i}>{person}</li>;
                  }
                })}
              </ol>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
