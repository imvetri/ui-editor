
// Libraries.

import React, { Component } from 'react';

// Dependencies.

// Styles.

import style from "./Style.css";
import {updateName, updateMarkup, updateStyle, updateState} from "./Reducer";


class Editor extends Component {
    constructor(props) {
        super(props);
        // this.state = {... this.props.element};
        this.state = Object.assign({}, this.props.element);
    }

    publishElement () {
        this.props.onSave({
            name: this.state.name,
            markup: this.state.markup,
            style: this.state.style,
            state: this.state.state,
            events: []
        });
    }

    openConfigurator () {
        
        // onMouseOut from markup.
        // Take the selected text.
        let selectedText = window.getSelection().toString();

        // Read components details
        let components = JSON.parse(localStorage.getItem("ui-editor"));

        // Find the component that matches selectedText
        let targetComponent = components.find(component=>component.name.includes(selectedText));

        // Check if selected text exist in any of component's name
        if(targetComponent){
            debugger;
            // this.openConfigurator
        }
        // Open configurator if a valid nested component is selected.
    }

    render() {

        let element = this.state;
        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <div className={style.editor+" editor"}>
                <section className={style.override}>  
                    <h4>Editor</h4>              
                    <div>
                        <h5>Component Name:</h5>
                        <input type="text" placeholder="Enter element name" value={element.name} onChange={updateName.bind(this)} id="elementName"/>
                        <button onClick={this.publishElement.bind(this)} id="save">Save</button>    
                    </div>
                    <div>
                        <h5>HTML: </h5><p>Tags should contain <code>id</code> attribute, if you would like to bind events to it.</p>
                        <textarea value={element.markup} onMouseOut={this.openConfigurator.bind(this)} onChange={updateMarkup.bind(this)} id="elementMarkup"/>
                    </div>
                    <div>
                        <h5>CSS:</h5><p>Add a <code>className</code> to the markup, write a class here</p>
                        <textarea value={element.style} onChange={updateStyle.bind(this)} />
                    </div>
                    <div>
                        <h5>Data:</h5>
                        <textarea value={element.state} onChange={updateState.bind(this)} id="elementState"/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Editor;
