
// Libraries.

import React, { Component } from 'react';

import style from "./Style.css";
import {updateName, updateMarkup, updateStyle, updateState} from "./Reducer";

/**
 * Shows Configurator on select of valid child component name in the markup and mouseOut from markup
 * Hides Configurator on mouseLeave from the editor.
 */
class Editor extends Component {
    constructor(props) {
        super(props);
        // this.state = {... this.props.element};
        this.state = {
            name: this.props.name,
            markup: this.props.markup,
            state: this.props.state,
            style: this.props.style,
        };
    }

    publishElement () {
        this.props.onSave({
            name: this.state.name,
            markup: this.state.markup,
            style: this.state.style,
            state: this.state.state
        });
    }

    render() {

        let name= this.state.name;
        let markup= this.state.markup;
        let style= this.state.style;
        let state= this.state.state;
        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <div className={style.editor+" editor"}>
                <section className={style.override}>  
                    <h4>Editor</h4>              
                    <div>
                        <h5>Component Name:</h5>
                        <input type="text" placeholder="Enter element name" value={name} onChange={updateName.bind(this)} id="elementName"/>
                        <button onClick={this.publishElement.bind(this)} id="save">Save</button>    
                    </div>
                    <div>
                        <h5>HTML: </h5><p>Tags should contain <code>id</code> attribute, if you would like to bind events to it.</p>
                        <textarea value={markup} onChange={updateMarkup.bind(this)} id="elementMarkup"/>
                    </div>
                    <div>
                        <h5>CSS:</h5><p>Add a <code>className</code> to the markup, write a class here</p>
                        <textarea value={style} onChange={updateStyle.bind(this)} />
                    </div>
                    <div>
                        <h5>Data:</h5>
                        <textarea value={state} onChange={updateState.bind(this)} id="elementState"/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Editor;
