import React from "react";

const name = "Joseph";
const numLetters = 6;
const reactThoughts = "is pretty cool so far.";

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {numLetters} letters</h2>
        <h2>I think React {reactThoughts}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
