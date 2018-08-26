
import React from "react";
import classes from "./Cockpit.css"
import Aux from "../../hoc/Aux"

const cockpit = (props) => {

  const assignedClasses = []
  let btnClass = classes.Button;

  if (props.showPerson) {
    btnClass = [classes.Button, classes.Red].join(" ")
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>Welcome to React</h1>
      <p>I am React App</p>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button onClick={props.clicked}
        className={btnClass}>Switch name</button>
    </Aux>
  )
}

export default cockpit;

