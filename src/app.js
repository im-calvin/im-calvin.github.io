import { Routes, Route, useLocation } from 'react-router-dom';
import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';

import Header from './js/header';
import Home from './js/home';
import Projects from './js/projects';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;