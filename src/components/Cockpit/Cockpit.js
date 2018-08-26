
import React from "react";
import classes from "./Cockpit.css"

const cockpit = (props) => {

  const assignedClasses = []
  let btnClass = "";

  if (props.showPerson) {
    btnClass = classes.Red
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Welcome to React</h1>
      <p>I am React App</p>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button onClick={props.clicked}
        className={btnClass}>Switch name</button>
    </div>
  )
}

export default cockpit;

