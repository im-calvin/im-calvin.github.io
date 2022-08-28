import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  </React.StrictMode>
);

export default class Header extends Component {
  render() {
    return (
      <header className="header flex">
        <nav className="nav-bar">
          <div className="flex-header">
            <div className="banner-content">
              <button className="banner-button">
                <a href="/html/home.html" className="nav-item button logo">Home</a>
              </button>
            </div>
            <div className="flex-grow" />
            <div className="banner-content">
              <button className="banner-button">
                <a href="/html/about.html" className="nav-item button">About</a>
              </button>
              <button className="banner-button">
                <a href="/html/projects.html" className="nav-item button">Projects</a>
              </button>
              <button className="banner-button icon-button git-button">
                <img className="icon-img" type="image" src="/GitHub-Mark/PNG/Github-Mark-Light-32px.png" onclick="window.open('https://github.com/im-calvin', '_blank')" />
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
