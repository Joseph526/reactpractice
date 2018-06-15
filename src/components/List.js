import React from "react";

const List = props => (
  <ul className="list-group">
    {props.groceries.map(listItem => {
      return <li className="list-group-item" key={listItem.id}>
        {listItem.name}
      </li>
    })}
  </ul>
);

export default List;
