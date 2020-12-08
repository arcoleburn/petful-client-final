import React from "react";
import { Link } from "react-router-dom";

export default function AdoptionPage() {
  return (
    <div>
      <h1>Pick your fury friend!</h1>
      <Link to={{ pathname: "/dog" }}>
        <button>Dogs</button>
      </Link>{" "}
      <Link to={{ pathname: "/cat" }}>
        <button>Cats</button>
      </Link>
    </div>
  );
}
