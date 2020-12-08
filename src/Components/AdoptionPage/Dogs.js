import React from "react";
import Context from "../Context/Context";

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
      context.addPeople(nameData);
      context.setName("");
      console.log(props);
      props.history.push("./confirmation");
    }
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
            </button>
            <button onClick={(e) => seeMoreDogs(e, context)}>
              More Dogs Options
            </button>
            <p>{context.error}</p>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
