import React from "react";

export default function Card(props) {
  return (
    <div className="card-cont">
      <div className="image-cont">
        <img className="image" src={props.image} alt="clothing" />
      </div>
      <p className="card-name">{props.name}</p>
      <p className="card-price">${props.price}</p>
    </div>
  );
}
