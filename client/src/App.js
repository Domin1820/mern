import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router';
import Welcome from './components/Landing.js';
import { NavBar, Cities } from './components/Landing.js';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/welcome' element={<Welcome/>} />
          </Routes>
          <Routes>
            <Route path='/cities' element={<Cities/>} />
          </Routes>

        </div>
      </BrowserRouter>
    );
  }
}


