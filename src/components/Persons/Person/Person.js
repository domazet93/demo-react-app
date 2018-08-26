import React, { Component } from "react";
import clasess from "./Person.css"


class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] constructor ", props)
  }

  componentWillMount = () => {
    console.log("[Person.js] componentWillMount()")
  }

  componentDidMount = () => {
    console.log("[Person.js] componentDidMount()")
  }
  render() {
    console.log("[Person.js] render()")

    return (
      <div className={clasess.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and I am  {this.props.age} years old.</p>
        <p>{this.props.children }</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
      </div>
    )
  }
}

export default Person;