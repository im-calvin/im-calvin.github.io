import React, { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, useCycle } from "framer-motion";
import Header from "./Header";
import { MenuToggle } from "./MenuToggle";
import "./sun.css";
import './header.css'
import {useDimensions} from "./use-dimensions"
import { Navigation } from "./Navigation";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function AnimateHeader() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      // initial={false}
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      // custom={height}
      // ref={containerRef}
    >

    <motion.div className="header" variants={sidebar} /> 
    {/* <Navigation className="header" /> */}
    <Header />
    <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
    );
}
