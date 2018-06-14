import React from "react";
import Math from "./Math";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
const Calculator = () => (
  <div>
    <p>
      19 + 341 = {Math(19, "+", 341)}
    </p>
    <p>
      42 - 17 = {Math(42, "-", 17)}
    </p>
    <p>
      100 * 3 = {Math(100, "*", 3)}
    </p>
    <p>
      96 / 4 = {Math(96, "/", 4)}
    </p>
  </div>
);

export default Calculator;
