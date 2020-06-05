import React from "react";
import IItem from "../../models/item";

const Item: React.FC<IItem> = (props) => {
  return (
    <li>
      <img src={props.image_url} alt={props.title} />
      <span>{props.title}</span>
    </li>
  );
};

export default Item;
