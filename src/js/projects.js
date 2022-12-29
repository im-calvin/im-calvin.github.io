import React, { Component } from "react";
import AnimatedPage from "./AnimatedPage";

export default class About extends Component {
  render() {
    return (
      <AnimatedPage>
        <section className="text-body flex">
          <div className="text">
            <select>
              <option>Project 1</option>
              <option>Project 2</option>
            </select>
          </div>
        </section>
      </AnimatedPage>
    );
  }
}
