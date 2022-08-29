import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <section className="big-text main-body">
        <h2>
          Hi, I am
          <span className="name-text">
            &nbsp;Calv.
          </span>
        </h2>
        <div className="bio-text">
          <p>
            big fan.
          </p>
        </div>
      </section>
    )
  }
}