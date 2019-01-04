
// Libraries.

import React, { Component } from 'react';

// Styles.

import cssUtil from "../css-utils/style.css";
import elementStyle from "./element.css";

// Dependencies.

import CodeMirror from "react-codemirror";

class PopupEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            markup: this.props.markup || "<code />" , 
            createMode: this.props.createMode 
        };
    }

    updateMarkup (markup) {
		this.setState({
			markup: markup,
        });
    }

    updateName (event) {
        this.setState({
            name: event.currentTarget.value
        })
    }

    saveElementDetails () {
        this.props.onSave({
            name: this.state.name,
            markup: this.state.markup,
            events: [],
            states: []
        })
    }

    toggleEditor () {
        this.setState({
            createMode: !this.state.createMode
        });
    }

    render() {
        const options = {
			lineNumbers: true,
        };

        return (
            <div className={this.props.createMode || this.state.createMode ?  '' : cssUtil.hidden} >
                <section className={elementStyle.override}>
                    <input type="text" placeholder="Enter element name" onChange={this.updateName.bind(this)}/>
                    <button onClick={this.saveElementDetails.bind(this)}>Save</button>
                    <button onClick={this.toggleEditor.bind(this)}>Close</button>
                    <CodeMirror value={this.state.markup} onChange={this.updateMarkup.bind(this)} options={options} />
                </section>
            </div>
        );
    }
}

export default PopupEditor;
