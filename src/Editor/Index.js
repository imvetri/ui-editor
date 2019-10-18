
// Libraries.

import React, { Component } from 'react';

// Dependencies.
//
import ChildComponentReference from "../ChildComponentReference";
// Styles.

import style from "./Style.css";
import {updateName, updateMarkup, updateStyle, updateState, saveDetails} from "./Reducer";

import {getChildConfig} from "./Reducer";
/**
 * Shows Configurator on select of valid child component name in the markup and mouseOut from markup
 * Hides Configurator on mouseLeave from the editor.
 */
class Editor extends Component {
    constructor(props) {
        super(props);
        // this.state = {... this.props.element};
        this.state = Object.assign({}, this.props.element);
        this.state.parent = this.props.element;
    }

    publishElement () {
        this.props.onSave({
            name: this.state.name,
            markup: this.state.markup,
            style: this.state.style,
            state: this.state.state,
            events: this.state.events,
            children: []
        });
    }

    initChildDetails(parent, newKid) {
        let index = parent.children.findIndex(child=>child.name === newKid.name);
        
        // Create a child config if it doesnt exist.
        let childConfig = getChildConfig(newKid, parent);
        // Push it to parent.
        parent.children[index] = childConfig;
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
                        <textarea value={element.markup} onChange={updateMarkup.bind(this)} id="elementMarkup"/>
                        {this.state.child ? <ChildComponentReference element={this.state.child}/> :  null}
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
