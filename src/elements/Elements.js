
// Libraries.

import React, { Component } from 'react';

// Styles.


// Dependencies.

import PopupEditor from "./popup-editor";

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = { hideCodeEditor: true };
    }

    toggleEditor () {
        this.setState({
            hideCodeEditor: !this.state.hideCodeEditor
        });
    }

    updateCode (newCode) {
        console.log(newCode);
    }

    render() {
        const options = {
			lineNumbers: true,
        };
        
        return (
            <li className="elements">
                <header>Elements</header>
                <section className="element-list">
                    <ul>
                        <li>dummy element</li>
                    </ul>
                    <button onClick={this.toggleEditor.bind(this)}>Add</button>
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
                <PopupEditor hideCodeEditor={this.state.hideCodeEditor} onSave={this.updateCode}/>
            </li>
        );
    }
}

export default Elements;
