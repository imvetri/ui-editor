
import React, { Component } from 'react';

class Components extends Component {
  render() {
    return (
        <li className="component">
            <header>Component</header>
            <section className="component-list">
                <ul>
                    <li>dummy component</li>
                </ul>
                <button id="addComponent">Add</button>
            </section>
            <section className="actions-tab">
                <header>Actions</header>
                <ul>
                    <li>dummy action</li>
                </ul>
                <button id="addAction">Add</button>
            </section>
            <section className="states-tab">
                <header>States</header>
                <ul>
                    <li>dummy state</li>
                </ul>
                <button id="addComponentState">Add</button>
            </section>
        </li>
    );
  }
}

export default Components;
