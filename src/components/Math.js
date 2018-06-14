import React from "react";

const Math = (num1, operator, num2) => {
    let result;
    switch (operator) {
        case "+":
            result = parseInt(num1) + parseInt(num2)
            break;
        case "-":
            result = parseInt(num1) - parseInt(num2)
            break;
        case "*":
            result = parseInt(num1) * parseInt(num2)
            break;
        case "/":
            result = parseInt(num1) / parseInt(num2)
            break;
        case "%":
            result = parseInt(num1) % parseInt(num2)
            break;
        default:
            result = NaN;
    }

    return <span>{result}</span>;
};

export default Math;
