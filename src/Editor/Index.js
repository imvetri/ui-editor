
// Libraries.

import React, { Component } from 'react';

// Dependencies.
import NestedComponentConfigurator from "../NestedComponentConfigurator";

// Styles.

import style from "./Style.css";
import {updateName, updateMarkup, updateStyle, updateState} from "./Reducer";

/**
 * Shows nestedComponentConfigurator on select of valid child component name in the markup and mouseOut from markup
 * Hides nestedComponentConfigurator on mouseLeave from the editor.
 */
class Editor extends Component {
    constructor(props) {
        super(props);
        // this.state = {... this.props.element};
        this.state = Object.assign({}, this.props.element);
        this.state.openConfigurator = false;
    }

    publishElement () {
        this.props.onSave({
            name: this.state.name,
            markup: this.state.markup,
            style: this.state.style,
            state: this.state.state,
            events: [],
            children: {}
        });
    }

    openConfigurator () {
        // onMouseOut from markup.
        // Take the selected text.
        let selectedText = window.getSelection().toString();

        if(selectedText === "" ){
            return;
        }
        // Read components details
        let components = JSON.parse(localStorage.getItem("ui-editor"));

        // Find the component that matches selectedText
        let child = components.find(component=>component.name.includes(selectedText));

        // Find the parent from the local storage. Because that has  the updated details with child component config.
        let parent = components.find(component=>component.name.includes(this.state.name));
        
        // Check if selected text exist in any of component's name
        if(child){
            // this.openConfigurator
            this.setState({
                child: child
            })
        }
        // Open configurator if a valid nested component is selected.
    }

    hideConfigurator(){
        this.setState({
            child: false
        })
    }

    render() {

        let element = this.state;
        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <div className={style.editor+" editor"} onMouseLeave={this.hideConfigurator.bind(this)}>
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
                        {this.state.child ?<NestedComponentConfigurator child={this.state.child} parent={this.props.element}/> : null}
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
