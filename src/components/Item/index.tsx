import React from "react";
import IItem from "../../models/item";

const Item: React.FC<IItem> = (props) => {
  const { id, title, image_url, handleClick, className } = props;

  return (
    <li className={className} onClick={() => handleClick(id)}>
      <img src={image_url} alt={title} />
      <span>{title}</span>
    </li>
  );
};

export default Item;
