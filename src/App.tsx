import React, { Component } from 'react';
import technologies from "./images/Technologies.svg";
import './App.css';
// import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={technologies} alt='Technologies we are focused in, React, Node.Js, Angular' className='technologies' />
        </header>
      </div>
    );
  }
}

export default App;
