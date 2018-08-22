import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person.js"

class App extends Component {
  state = {
    persons:  [
      { name: "Toni", age: 24 },
      { name: "Ivan", age: 27 }, 
      { name: "Marijana", age: 20 }
    ]
  }
   
  switchNameHandler = (newName) => {
    this.setState({
      persons:  [
        { name: newName, age: 24 },
        { name: "Ivan", age: 27 }, 
        { name: "Marijana", age: 20 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:  [
        { name: "Toni", age: 24 },
        { name: event.target.value, age: 27 }, 
        { name: "Marijana", age: 20 }
      ]
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

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>I am React App</p>
        <button onClick={() => this.switchNameHandler("Antony")}
                style={style}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Ton")}
          changed={this.nameChangedHandler}>My Hobby: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
} 

export default App;
