import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <h1>Welcome To Petful</h1>
      <p>
        We are an animal shelter for cats and dogs. Adoption is on a first come
        first serve basis. If you are lucky, you may be first in line! If not,
        you will be put in a queue before you can take your new pet home.
      </p>
      <Link to={{ pathname: `/adoption` }}>
        <button>Start Your Search Now!</button>
      </Link>
    </div>
  );
}
