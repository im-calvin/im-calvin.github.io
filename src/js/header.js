import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header flex" onclick="document.body.classList.remove('active')">
        <div className="banner-content">
          <button className="banner-button">
            <Link to="/" className="nav-item button">
              HOME
            </Link>
          </button>
          <button className="banner-button">
            <Link to="/projects" className="nav-item button">
              PROJECTS
            </Link>
          </button>
        </div>
        <div className="flex-grow" />
        <div className="banner-content header-bottom">
          <span className="banner-button icon-button linkedin-button">
            <a href="https://www.linkedin.com/in/kelvinhkwong/">
              <i class="fa-brands fa-linkedin" />
            </a>
          </span>
          <button className="banner-button icon-button git-button">
            <a href="https://github.com/im-calvin">
              <i class="fa-brands fa-github" />
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
}
