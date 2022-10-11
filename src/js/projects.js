import React, { Component } from 'react';
import AnimatedPage from './AnimatedPage'

export default class About extends Component {
  render() {

    return (
      <AnimatedPage>
        <section className="text-body flex">
          <div className="text">
            <p>
              Projects :D big fan. here's some bio text if you wanted :D :DDDDDDDDDDDDDDDDDDD
            </p>
          </div>
          <div className='text'>
            <p>
              new para
            </p>
          </div>

        </section>
      </AnimatedPage>
    )
  }
}