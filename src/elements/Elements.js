
// Libraries.

import React, { Component } from 'react';

// Styles.

import utilStyle from "../utils/style.css";
import elementStyle from "./element.css";
import codemirrorCSS from "./codemirror/codemirror.css";

// Dependencies.

import CodeMirror from "react-codemirror";

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = { code: "// Code", hideCodeEditor: true };
    }

    updateCode (newCode) {
		this.setState({
			code: newCode,
        });
    }

    toggleEditor () {
        this.setState({
            hideCodeEditor: !this.state.hideCodeEditor
        });
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
                    <button id="addElement" onClick={this.toggleEditor.bind(this)}>Add</button>
                    <section className={elementStyle.override}>
                        <CodeMirror className={this.state.hideCodeEditor ? utilStyle.hidden : ''} value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
                    </section>
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
