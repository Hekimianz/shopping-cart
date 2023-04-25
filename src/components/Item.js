import React from "react";
import delIcon from "../assets/delete.svg";
export default function Item(props) {
  return (
    <div id={props.id} className="item-cont">
      <img className="item-img" src={props.image} alt="Product" />
      <h3 className="item-name">{props.name}</h3>
      <span className="item-price">{props.price}</span>
      <img
        onClick={(e) => props.handleDel(e)}
        className="item-del"
        src={delIcon}
        alt="delete item"
      />
    </div>
  );
}
