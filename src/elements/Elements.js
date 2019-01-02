
// Libraries.

import React, { Component } from 'react';

// Styles.


// Dependencies.

import PopupEditor from "./popup-editor";

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hideCodeEditor: true,
            list: []
        };
    }

    toggleEditor () {
        this.setState({
            hideCodeEditor: !this.state.hideCodeEditor
        });
    }

    updateCode (newElement) {
        // Mutate the original array. Future, hide mutation behind.
        let newList = Array.from(this.state.list);
        newList.push(newElement);

        // Update the state with new values
        this.setState({
            list: newList
        })
        this.toggleEditor();
    }

    render() {
        const options = {
			lineNumbers: true,
        };


        // Other neat ways to iterate a markup and return a list?
        const elementList = this.state.list.map(element=> <li>{element.name}</li>)
        
        return (
            <li className="elements">
                <header>Elements</header>
                <section className="element-list">
                    <ul>
                        {elementList}
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
                <PopupEditor hideCodeEditor={this.state.hideCodeEditor} onSave={this.updateCode.bind(this)}/>
            </li>
        );
    }
}

export default Elements;
