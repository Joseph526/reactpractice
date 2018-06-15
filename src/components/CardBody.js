import React from "react";

const CardBody = (props) => (
    <div className="card-body">
        <p className="card-text">Click Count: {props.count}</p>
        <button className="btn btn-primary" onClick={props.handleIncrement}>
            Increment
        </button>
        &nbsp;
        <button className="btn btn-primary" onClick={props.handleDecrement}>
            Decrement
        </button>
    </div>
);

export default CardBody;
