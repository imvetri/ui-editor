
// Libraries.

import React, { Component } from 'react';

import "./Style.css";
import {updateName, updateMarkup, updateStyle, updateState} from "./Reducer";

import {readComponent} from "../../utilities/localStorage";

/**
 * Shows Configurator on select of valid child component name in the markup and mouseOut from markup
 * Hides Configurator on mouseLeave from the editor.
 */
class Editor extends Component {
    constructor(props) {
        super(props);
        var component = readComponent(this.props.name);

        this.state = {
            name: component? component.name : "",
            markup: component? component.markup : "",
            state: component? component.state : "",
            style: component? component.style : ""
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
            <div className="container editor-tab">
                <div className="title">Editor</div>

                <div className="">
                    <div className="title">Component Name</div>
                    <input type="text" placeholder="Enter element name" value={name} onChange={updateName.bind(this)} id="elementName"/>
                    <button onClick={this.publishElement.bind(this)} id="save"><i className="fas fa-save"></i>Save</button>    
                </div>
                
                <div className="">
                    <div className="title">Component Markup</div>
                    <textarea value={markup} onChange={updateMarkup.bind(this)} id="elementMarkup" title="ID is mandatory for events"/>
                </div>


                <div className="">
                    <div className="title">Component CSS</div>
                    <textarea value={style} onChange={updateStyle.bind(this)} />
                </div>

                <div className="">
                    <div className="title">Component State</div>
                    <textarea value={state} onChange={updateState.bind(this)} id="elementState"/>
                </div>

            </div>
        );
    }
}

export default Editor;
