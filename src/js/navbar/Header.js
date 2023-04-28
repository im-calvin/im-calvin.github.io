import { MotionConfig } from "framer-motion";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import AnimateHeader from "./AnimateHeader";
import NavMenu from "./NavMenu";
import {motion} from 'framer-motion';
import { MenuToggle } from "./MenuToggle";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function Header() {
  const [state, setState] = useState(false);
  const renderContent = () => {
    if (isMobile) {
      return; // animate for the whole page
    } else {
      return; // animate only for vertical
    }
  };
  return (
    <motion.div variants={variants}>
    <header className="header flex">
      <NavMenu />

      <div className="flex-grow" />
      <div className="banner-content header-bottom">
        <span className="banner-button icon-button linkedin-button">
          <a href="https://www.linkedin.com/in/kelvinhkwong/">
            <i className="fa-brands fa-linkedin" />
          </a>
        </span>
        <button className="banner-button icon-button git-button">
          <a href="https://github.com/im-calvin">
            <i className="fa-brands fa-github" />
          </a>
        </button>
        <span className="banner-button icon-button mail-button">
          <a href="mailto:work.kelvinwong@gmail.com">
            <i className="fa-solid fa-envelope icon-img" />
          </a>
        </span>
      </div>
    </header>
    </motion.div>
  );
}
