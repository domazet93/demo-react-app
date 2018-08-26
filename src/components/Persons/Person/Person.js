import React, { Component } from "react";
import clasess from "./Person.css"
import Aux from "../../../hoc/Aux"
import withClass from "../../../hoc/withClass"

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
      <Aux>
        <p onClick={this.props.click}>I am {this.props.name} and I am  {this.props.age} years old.</p>
        <p>{this.props.children }</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
      </Aux>
    )
  }
}

export default withClass(Person, clasess.Person);