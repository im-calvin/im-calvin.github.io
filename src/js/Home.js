import React, { Component } from "react";
import AnimatedPage from "./AnimatedPage";

export default class Home extends Component {
  render() {
    return (
      <AnimatedPage>
        <section className="text-body flex">
          <div className="text home">
            <h2>
              Hi, I am
              <span className="bold name-color">&nbsp;Kelvin Wong.</span>
            </h2>
          </div>
          <div className="text">
            <p>
              big fan. <br />
              here's some bio text if you wanted :D
            </p>
          </div>
          <div className="text skills">
            <h2>Skills</h2>
          </div>
        </section>
      </AnimatedPage>
    );
  }
}
