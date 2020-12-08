import React from "react";
import Context from "../Context/Context";

export default function HomePage(props) {
  const handleClick = (e, context) => {
    e.preventDefault();
    console.log("handle click on home page was clicked");
    const name = e.target.name.value;
    console.log(name);
    if (!name) {
      context.setError("Please Enter Valid Name");
      return;
    } else {
      context.setName(name);
      context.setError("");
      console.log(context.name);
      props.history.push("/adoption");
    }
  };
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <div className="home">
            <h1>Welcome To Petful</h1>
            <p>
              We are an animal shelter for cats and dogs. Adoption is on a first
              come first serve basis. If you are lucky, you may be first in
              line! If not, you will be put in a queue before you can take your
              new pet home.
            </p>
            <form
              onSubmit={(e) => {
                handleClick(e, context);
              }}
            >
              <p>
                <label>Enter your name here: </label>
              </p>
              <p>
                <input name="name" type="text" placeholder="John Smith" />
              </p>
              <p>{context.error}</p>
              <button type="submit">Start Your Search Now!</button>
            </form>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
