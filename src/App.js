import React, { Component } from 'react';
import './App.css';
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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "4px",
      cursor: "pointer"
    }

    let persons = null;

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
    }

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>I am React App</p>
        <button onClick={this.togglePersonsHandler}
                style={style}>Switch name</button>
        {persons}   
      </div>
    );
  }
} 

export default App;
