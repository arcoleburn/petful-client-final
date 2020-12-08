import React from "react";
import Context from "../Context/Context";

// * I can see a list of other people currently in line.
// * I can submit my name and be added to the end of the line.
// * When I am not at the beginning of the line, I cannot see an option to adopt a pet.
// * For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.
//     * Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.
//     * When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.
//adoptDog or adoptCat
export default function Confirmation() {
  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        return (
          <div>
            <h1>Confirmations</h1>
            <ol>
              {context.people.map((person, i) => (
                <li key={i}>{person}</li>
              ))}
            </ol>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
