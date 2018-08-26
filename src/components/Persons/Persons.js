import React, { Component } from "react";
import Person from "./Person/Person.js";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary"

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] constructor ", props)
  }

  componentWillMount = () => {
    console.log("[Persons.js] componentWillMount()")
  }

  componentDidMount = () => {
    console.log("[Persons.js] componentDidMount()")
  }

  componentWillReceiveProps(nexProps) {
    console.log("UPDATE [Persons.js] componentWillReceiveProps()", nexProps);    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("UPDATE [Persons.js] shouldComponentUpdate()", nextProps, nextState)
    return nextProps.persons !== this.props.persons ||
          nextProps.changed !== this.props.changed || 
          nextProps.clicked !== this.props.clicked

  }

  componentWillUpdate(nextProps, nextState) { 
    console.log("UPDATE [Persons.js] componentWillUpdate()", nextProps, nextState)
  }

  componentDidUpdate() {
    console.log("UPDATE [Persons.js] componentDidUpdate()")
  }

  render() {
    console.log("[Persons.js] render()")

    return this.props.persons.map((person, index) => {

      return <ErrorBoundary key={person.id}>
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)} />
      </ErrorBoundary>
    })
  }
}

export default Persons;