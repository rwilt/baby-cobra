import React from 'react';
import logo from './logo.svg';
import Skater from './photos/skateboy.jpg'
import Nav from './Nav.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
    <div className="yoga-intro">
      <h1>Private Yoga</h1>
    </div>
    <div className="skate-intro">
      <div className="skateboy-div">
        {/* <img src={Skater} className="skateboy" alt="Child skater"></img> */}
      </div>
      <h1>Kids skate lessons</h1>
    </div>
    </div>
  );
}

export default App;
