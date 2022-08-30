import React, { Component } from 'react';
import AnimatedPage from './AnimatedPage'

export default class Home extends Component {
  render() {
    return (
      <AnimatedPage>
      <section className="text-body main-body">
        <h2>
          Hi, I am
          <span className="bold name-color">
            &nbsp;Calv.
          </span>
        </h2>
        <div className="small-text">
          <div className="text-box">
            <p>
              big fan. <br />
              here's some bio text if you wanted :D
            </p>
          </div>
        </div>
      </section>
      </AnimatedPage>
    )
  }
}