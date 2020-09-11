import React, {useState, useEffect} from 'react';
import './App.css';
import {NavLink, Link} from 'react-router-dom';

function Nav() {
    return (
      <div className="App">
    
          <section className="title-section">
            <header>
            {/* <NavLink className="nav-link" to="/info" exact>Info</NavLink> */}
            <a className="nav-link" href="http://">Info</a>
            <a className="nav-link" href="http://">Yoga</a>
            <a className="nav-link" href="http://">Kids Skate</a>
            <span className="baby">
            Baby      
            </span>
            <span className="cobra">
            Cobra
            </span>
            <a className="nav-link" href="http://">FAQ</a>
            <a className="nav-link" href="http://">CONTACT</a>
            <a className="nav-link" href="http://">ETC</a>
            </header>
            </section>
      </div>
    );
  }
  
  export default Nav;