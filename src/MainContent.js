import React from "react";

function MainContent() {

  const date = new Date();
  const hours = date.getHours();
  var timeOfDay;

  const styles = {
    fontSize: "40px"
  }

  if (hours < 12){
    timeOfDay = "morning"
    styles.color = "orange"
  }
  else if (hours >= 12 && hours < 17){
    timeOfDay = "afternoon"
    styles.color = "orange"
  } else {
    timeOfDay = "night"
    styles.color = "orange"
  }


    return (
      <div>
    <ul>
    <li>Boxing</li>
    <li>Music</li>
    <li>Camping</li>
    </ul>

    <h1 style={styles}>Good {timeOfDay}!</h1>
      </div>
    );
  }

  export default MainContent;