import React, { Component } from 'react';

import classes from './App.css';
import Persons from "../components/Persons/Persons.js"
import Cockpit from "../components/Cockpit/Cockpit.js"
import Aux from "../hoc/Aux"
import withClass from "../hoc/withClass"

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor ", props)
  }

  componentWillMount = () => {
    console.log("[App.js] componentWillMount()")
  }

  componentDidMount = () => {
    console.log("[App.js] componentDidMount()")
  }

  state = {
    persons:  [
      { id: "34fe2", name: "Toni", age: 24 },
      { id: "34gff", name: "Ivan", age: 27 }, 
      { id: "6ewev", name: "Marijana", age: 20 }
    ],
    toggledClickCounter: 0
  }
   
  deletePersonHandler = ($index) => {
    this.setState({
      persons: this.state.persons.filter((person, $itemIndex) => $itemIndex !== $index)
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((e) => e.id === id)
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
    return {
      showPerson: !prevState.showPerson,
      toggledClickCounter: prevState.toggledClickCounter + 1
    }})
  }

  render() {
    console.log("[App.js] render() ")

    let persons = null;

    if(this.state.showPerson) {
      persons =  <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler} />
    }

    return (
      <Aux>
        <button onClick={ () => this.setState({showPerson: true })}>Show Persons</button>
        <Cockpit showPerson={this.state.showPerson} 
                persons={this.state.persons}
                clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
  }
} 

export default withClass(App, classes.App);
