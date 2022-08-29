import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Home from './home.js';
// import Projects from './projects.js';

export default class Header extends Component {
  render() {
    return (
      <header className="header flex">
        <nav className="nav-bar">
          <div className="flex-header">
            <div className="banner-content">
              <button className="banner-button">
                <Link to="/" className="nav-item button">Home</Link>
              </button>
            </div>
            <div className="flex-grow" />
            <div className="banner-content">
              {/* <button className="banner-button">
                <Link to="/about" className="nav-item button">About</Link>
              </button> */}
              <button className="banner-button">
                <Link to="/projects" className="nav-item button">Projects</Link>
              </button>
              <button className="banner-button icon-button git-button">
                <a href="https://github.com/im-calvin" target="_blank" rel="noreferrer">
                  <img className="icon-img" type="image" src="/GitHub-Mark/PNG/Github-Mark-Light-32px.png" alt='github logo' />
                </a>
              </button>
              <span className="banner-button icon-button mail-button">
                <a href="mailto:work.kelvinwong@gmail.com">
                  <i className="fa-solid fa-envelope icon-img" />
                </a>
              </span>
            </div>
          </div>
        </nav>
      </header>

    )
  }
};