import React from "react";

const Card = ({ name, age, city, active, img }) => {
  return (
    <div className="card">
      <img src={img} alt="img" />
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
      <p>{active}</p>
    </div>
  );
};

export default Card;
