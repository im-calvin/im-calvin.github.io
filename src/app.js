import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Stack from "@mui/material/Stack";
import React from "react";

import Header from "./js/navbar/Header";
import Home from "./js/Home";
import Projects from "./js/projects/Projects";
import AnimateHeader from "./js/navbar/AnimateHeader";

export default function App() {
  const location = useLocation();
  // const ref = useRef();

  return (
    <Stack direction="row" sx={{ height: "100vh" }}>
      <AnimateHeader />
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
