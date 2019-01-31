
// Libraries.

import React, { Component } from 'react';

// Dependencies.

import CodeMirror from "react-codemirror";

// Styles.

import style from "./PopupMarkupEditor.css";


class PopupMarkupEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            markup: this.props.markup || "<code />" , 
            createMode: this.props.createMode 
        };
    }

    /**
     * Constantly updates the state with new markup that is typed by the user.
     * @param {String} markup - Element markup that is input by user.
     */
    updateMarkup (markup) {
		this.setState({
			markup: markup,
        });
    }

    /**
     * Stores the element name input by the user.
     * @param {Object} event - Input element carrying info about the element name.
     */
    updateName (event) {
        this.setState({
            name: event.currentTarget.value
        })
    }

    /**
     * Saves the element details, and calles the onSave props method.
     */
    saveElementDetails () {
        this.props.onSave({
            name: this.state.name,
            markup: this.state.markup,
            events: [],
            states: []
        })
    }

    /**
     * Shows/Hides the editor.
     */
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
            <div className={this.props.createMode || this.state.createMode ?  '' : style.hidden} >
                <section className={style.override}>
                    <input type="text" placeholder="Enter element name" onChange={this.updateName.bind(this)}/>
                    <button onClick={this.saveElementDetails.bind(this)}>Save</button>
                    <button onClick={this.toggleEditor.bind(this)}>Close</button>
                    <CodeMirror value={this.state.markup} onChange={this.updateMarkup.bind(this)} options={options} />
                </section>
            </div>
        );
    }
}

export default PopupMarkupEditor;
