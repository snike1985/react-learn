import React, { Component } from 'react';
import Person from './components/Person';
import PersonClass from './components/PersonClass';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: "Andrey", age: 32},
            {name: "Max", age: 25},
            {name: "Jim", age: 28},
            {name: "Bill", age: 34}
        ]
    };

    changeNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(item => {
            return item.id === id;
        });

        const curPerson = {
            ...this.state.persons[personIndex]
        };
        // const curPerson = Object.assign({}, this.state.persons); --- old method

        curPerson.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = curPerson;

        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    render() {
        const buttonStyle = {
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid #ccc',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={index}
                                change={(event) => this.changeNameHandler(event, person.id)}/>
                        );
                    })}
                </div>
            );

            buttonStyle.backgroundColor = 'green';
            buttonStyle[':hover'] = {
                backgroundColor: 'lightgreen',
                color: 'black',
            }
        }

        const classes = [];

        if (this.state.persons.length <=2) {
            classes.push('red');
        }

        if (this.state.persons.length <=1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className={classes.join(' ')}>It's working!!!</p>
                <button
                    style={buttonStyle}
                    onClick={() => this.togglePersonsHandler()}>{this.state.showPersons ? 'Hide' : 'Show'} Persons</button>
                {persons}
            </div>
        );
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React'));
    }
}

export default App;
