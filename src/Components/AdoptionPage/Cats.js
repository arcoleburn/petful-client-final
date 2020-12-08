import React from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";

export default function Cats(props) {
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
      context.cats.pop();
      context.addPeople(nameData);
      console.log(props);
    }
  };

  const seeMoreCats = (e, context) => {
    if (
      context.cats.filter((cat, i) => {
        const current = cat.name === context.catNode.name;
        if (current) {
          console.log(i + 1);
          const nextCat = context.cats[i + 1];
          console.log(nextCat);
          if (!nextCat) {
            context.setError("There are no more cats in the database");
          } else {
            context.setCatNode(nextCat);
            context.setError("");
            return;
          }
        }
      })
    )
      return;
  };

  const clearName = (e, context) => {
    console.log("name will be cleared");
    context.setName("");
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        if (context.cats.length < 1) {
          return (
            <div>
              <h3>No Cats in the Database</h3>
            </div>
          );
        }
        return (
          <div>
            <Link onClick={(e) => clearName(e, context)} to={{ pathname: "/" }}>
              <h1>Cats</h1>
            </Link>
            <h2>{context.catNode.name}</h2>
            <img
              src={context.catNode.imageURL}
              alt={context.catNode.imageDescription}
            />
            <h3>Descriptions:</h3>
            <p>
              <span className="bold">Story: </span> {context.catNode.story}
            </p>
            <p>
              <span className="bold">Gender: </span>
              {context.catNode.gender}
            </p>
            <p>
              {" "}
              <span className="bold">Age: </span> {context.catNode.age}{" "}
            </p>
            <p>
              {" "}
              <span className="bold">Breed: </span> {context.catNode.breed}{" "}
            </p>
            <button onClick={(e) => handleClickAdopt(e, context)}>
              Adopt Me
            </button>{" "}
            <button onClick={(e) => seeMoreCats(e, context)}>
              More Cats Options
            </button>
            <p className="error">{context.error}</p>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
