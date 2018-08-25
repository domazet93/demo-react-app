import React from 'react';
import clasess from "./Person.css"

const person = (props) => {
  const rnd = Math.random();

  if(rnd < 0.7) {
    throw new Error("Something went wrong"); 
  }
  return (
    <div className={clasess.Person}>
      <p onClick={props.click}>I am {props.name} and I am  {props.age} years old.</p>
      <p>{props.children }</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
}

export default person;