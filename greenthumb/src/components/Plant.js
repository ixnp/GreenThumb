import React from "react";

const Plant = props => {
    const handleWater = () => {
        props.plant.last_watered = new Date()
        
        props.updatePlant(props.plant)
    }
  return (
    <div className="plant-container">
      <h4 className="plant-details">{props.plant.name}</h4>
      <img src={props.plant.img_url} width="100px" />
      <div>{props.calculateTime(props.plant)}</div>
      <button onClick={handleWater}>Water!</button>
    </div>
  );
};

export default Plant;
