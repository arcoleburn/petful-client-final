import React from "react";
import Context from "../Context/Context";

export default function Dogs() {
  const handleClickAdopt = () => {
    console.log("adopt button was clicked!");
  };

  const seeMoreDogs = (e, context) => {
    if (
      context.dogs.filter((dog, i) => {
        const current = dog.name === context.dogNode.name;
        if (current) {
          console.log(i + 1);
          const nextDog = context.dogs[i + 1];
          console.log(nextDog);
          context.setDogNode(nextDog);
          return;
        }
      })
    )
      return;
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
            <h1>Dogs</h1>
            <h2>{context.dogNode.name}</h2>
            <img
              src={context.dogNode.imageURL}
              alt={context.dogNode.imageDescription}
            />
            <h3>Descriptions:</h3>
            <p>{context.dogNode.story}</p>
            <button onClick={handleClickAdopt}>Adopt Me</button>
            <button onClick={(e) => seeMoreDogs(e, context)}>
              More Dogs Options
            </button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
