import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import React, { useRef } from "react";
import React from "react";

import Header from "./js/header";
import Home from "./js/home";
import Projects from "./js/projects";

function App() {
  const location = useLocation();
  // const ref = useRef();

  return (
    <>
      <Header />
      <div classNames="main-body">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
