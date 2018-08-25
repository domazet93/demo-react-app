import React, { Component } from 'react';

import classes from './App.css';
import Person from "./Person/Person.js"

class App extends Component {
  state = {
    persons:  [
      { id: "34fe2", name: "Toni", age: 24 },
      { id: "34gff", name: "Ivan", age: 27 }, 
      { id: "6ewev", name: "Marijana", age: 20 }
    ]
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
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  render() {

    let persons = null;
    let btnClass = "";

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return  <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}      
        </div>)
        btnClass = classes.Red
    }

    const assignedClasses = []

    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);      
    }
    if(this.state.persons <= 1) {
      assignedClasses.push(classes.bold);      
    }
    return (
      <div className={classes.App}>
        <h1>Welcome to React</h1>
        <p>I am React App</p>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button onClick={this.togglePersonsHandler}
                className={btnClass}>Switch name</button>
        {persons}   
      </div>
    );
  }
} 

export default App;
