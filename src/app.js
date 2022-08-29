import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Header from './js/header';
import Home from './js/home';
import About from './js/about';
import Projects from './js/projects';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-body">
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/home' element={<Home />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </>
    )
  }
}