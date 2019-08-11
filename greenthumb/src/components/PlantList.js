import React, { Fragment } from "react";
import Plant from "./Plant";
//bugged 
const PlantList = props => {
  let calculateTime = props => {
    let days, hours, now;
    // Set the date we're counting down to
    let countDownDate = new Date();
    let duration = props.duration;
    countDownDate.setDate(countDownDate.getDate());

    //updates duration for watering
    let lastWatered = new Date(props.last_watered);
    if (lastWatered) {
      now = lastWatered.getTime() + duration;
    } else {
      now = new Date().getTime() + duration;
    }

    // Find the distance between duration and countdown
    let distance = countDownDate - now;
    
 
    console.log(lastWatered,countDownDate )
    // Time calculations for days, hours
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Handels for less then one day

    if (days < 1 && hours < 1) {
     
      return "Time to Water!";
    } else if (days < 1) {
      return `Hours: ${hours}`;
    } else {
      return `Days: ${days}`;
    }
  };
  


  return (
    <Fragment>
      <div>
        {props.plants
          ? props.plants.map(item => (
              <Plant plant={item} calculateTime={calculateTime} updatePlant={props.updatePlant}/>
            ))
          : null}
      </div>
    </Fragment>
  );
};

export default PlantList;
