import React, { Fragment } from "react";

const Plant = props => {

  return (
    <div className="plant-container">
      <h4 className="plant-details">{props.plant.name}</h4>
      <img src={props.plant.img_url} width="100px" />
      <div>{props.calculateTime(props.plant)}</div>
    </div>
  );
};

export default Plant;
