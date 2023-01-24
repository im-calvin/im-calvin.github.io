import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Stack from "@mui/material/Stack";
import React from "react";

import Header from "./js/components/Header";
import Home from "./js/Home";
import Projects from "./js/Projects";
import Sun from "./js/components/Sun";
import SimpleGrow from "./js/components/test";

export default function App() {
  const location = useLocation();
  // const ref = useRef();

  return (
    <Stack direction="row">
      <SimpleGrow />
      {/* <Sun /> */}
      {/* <Header /> */}
      <div classNames="main-body">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Stack>
  );
}
