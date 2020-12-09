import React from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";

export default function Cats(props) {
  const handleClickAdopt = (e, context) => {
    const currentCat = context.cats[0];
    const name = context.name;
    console.log(currentCat);
    context.adoptCat(currentCat);
    context.deletePeople(name);
    context.setError("Congratulations! You are now a pet owner");
    context.setName("");
    context.setCatNode(context.cats[1]);
  };

  // const seeMoreCats = (e, context) => {
  //   if (
  //     context.cats.filter((cat, i) => {
  //       const current = cat.name === context.catNode.name;
  //       if (current) {
  //         console.log(i + 1);
  //         const nextCat = context.cats[i + 1];
  //         console.log(nextCat);
  //         if (!nextCat) {
  //           context.setError("There are no more cats in the database");
  //         } else {
  //           context.setCatNode(nextCat);
  //           context.setError("");
  //           return;
  //         }
  //       }
  //     })
  //   )
  //     return;
  // };

  const clearError = (e, context) => {
    context.setError("");
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
            <Link
              onClick={(e) => clearError(e, context)}
              to={{ pathname: "/" }}
            >
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
            {context.name.length > 1 && (
              <button onClick={(e) => handleClickAdopt(e, context)}>
                Adopt Me
              </button>
            )}
            <p className="error">{context.error}</p>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
