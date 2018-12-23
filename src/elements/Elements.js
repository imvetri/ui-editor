
import React, { Component } from 'react';

class Elements extends Component {
  render() {
    return (
      <li className="elements">
          <header>Elements</header>
          <section className="element-list">
              <ul>
                  <li>dummy element</li>
              </ul>
              <button id="addElement">Add</button>
          </section>
          <section className="events-tab">
              <header>Events</header>
              <ul>
                  <li>dummy event</li>
              </ul>
              <button id="addEvent">Add</button>
          </section>
          <section className="states-tab">
              <header>States</header>
              <ul>
                  <li>dummy state</li>
              </ul>
              <button id="addElementState">Add</button>
          </section>
      </li>
    );
  }
}

export default Elements;
