import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import TemporaryDrawer from "./TemporaryDrawer";
import NavMenu from "./NavMenu";

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
    <header className="header flex">
      {/* <TemporaryDrawer /> */}
      <div className="flex-grow-small" />
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
  );
}
