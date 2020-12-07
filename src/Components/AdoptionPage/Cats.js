import React from "react";
import Context from "../Context/Context";

export default function Cats() {
  const handleClickAdopt = () => {
    console.log("adopt button was clicked!");
  };

  const seeMoreCats = (e, context) => {
    if (
      context.cats.filter((cat, i) => {
        const current = cat.name === context.catNode.name;
        if (current) {
          console.log(i + 1);
          const nextCat = context.cats[i + 1];
          console.log(nextCat);
          context.setCatNode(nextCat);
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
        if (context.cats.length < 1) {
          return (
            <div>
              <h3>No Cats in the Database</h3>
            </div>
          );
        }
        return (
          <div>
            <h1>Cats</h1>
            <h2>{context.catNode.name}</h2>
            <img
              src={context.catNode.imageURL}
              alt={context.catNode.imageDescription}
            />
            <h3>Descriptions:</h3>
            <p>{context.catNode.story}</p>
            <button onClick={handleClickAdopt}>Adopt Me</button>
            <button onClick={(e) => seeMoreCats(e, context)}>
              More Cats Options
            </button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
