import React from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";

export default function Dogs(props) {
  const handleClickAdopt = (e, context) => {
    console.log("adopt button was clicked!");
    //add adoptDog from context
    const name = context.name;
    console.log(name);
    const nameData = {
      name: name,
    };
    if (!name) {
      context.setError("Error: name is invalid");
      console.log(props);
    } else {
      context.dogs.pop();
      context.addPeople(nameData);
      console.log(props);
      props.history.push("./confirmation");
    }
  };

  const seeMoreDogs = (e, context) => {
    if (
      context.dogs.filter((dog, i) => {
        const current = dog.name === context.dogNode.name;
        if (current) {
          const nextIndex = i + 1;
          const nextDog = context.dogs[nextIndex];
          if (!nextDog) {
            context.setError("There are no more dogs in the database");
          } else {
            console.log(nextDog);
            context.setDogNode(nextDog);
            context.setError("");
            return;
          }
        }
      })
    )
      return;
  };

  const clearName = (e, context) => {
    console.log("clearing name from dog route");
    context.setName("");
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        if (context.dogs.length < 1) {
          return (
            <div>
              <h3>No Dogs in the Database</h3>
            </div>
          );
        }
        return (
          <div>
            <Link onClick={(e) => clearName(e, context)} to={{ pathname: "/" }}>
              <h1>Dogs</h1>
            </Link>
            <h2>{context.dogNode.name}</h2>
            <img
              src={context.dogNode.imageURL}
              alt={context.dogNode.imageDescription}
            />
            <h3>Descriptions:</h3>
            <p>
              <span className="bold">Story: </span>
              {context.dogNode.story}
            </p>
            <p>
              <span className="bold">Gender: </span>
              {context.dogNode.gender}
            </p>
            <p>
              {" "}
              <span className="bold">Age: </span> {context.dogNode.age}{" "}
            </p>
            <p>
              {" "}
              <span className="bold">Breed: </span> {context.dogNode.breed}{" "}
            </p>
            <button onClick={(e) => handleClickAdopt(e, context)}>
              Adopt Me
            </button>{" "}
            <button onClick={(e) => seeMoreDogs(e, context)}>
              More Dogs Options
            </button>
            <p className="error">{context.error}</p>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
