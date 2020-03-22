
// Libraries.

import React, { Component } from 'react';

import "./Style.css";

import {readComponent} from "../utilities/Storage";

import {UnControlled as CodeMirror} from 'react-codemirror2';

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

    saveElement () {
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
                    <input type="text" placeholder="Enter element name" value={name} onChange={(e)=>{
                        this.setState({
                            name: event.currentTarget.value
                        })
                    }} id="elementName"/>
                    <button onClick={this.saveElement.bind(this)} id="save"><i className="fas fa-save"></i>Save & close</button>    
                </div>
                
                <div className="">
                    <div className="title">Component Markup</div>
                    <CodeMirror
                        value={markup}
                        options={{
                            lineNumbers: false,
                            mode: "text/javascript",
                            theme: "darcula",
                            indentWithTabs: false,
                            smartIndent: true,
                            lineWrapping: true
                        }}
                        onChange={(editor, data, markup) => {
                            this.setState({
                                markup: markup
                            })
                        }}
                    />
                </div>
                

                <div className="">
                    <div className="title">Component CSS</div>
                    <CodeMirror
                        value={style}
                        options={{
                            lineNumbers: false,
                            mode: "text/javascript",
                            theme: "darcula",
                            indentWithTabs: false,
                            smartIndent: true,
                            lineWrapping: true
                        }}
                        onChange={(editor, data, style) => {
                            this.setState({
                                style: style
                            })
                        }}
                    />
                </div>

                <div className="">
                    <div className="title">Component State</div>
                    <CodeMirror
                        value={state}
                        options={{
                            lineNumbers: false,
                            mode: "text/javascript",
                            theme: "darcula",
                            indentWithTabs: false,
                            smartIndent: true,
                            lineWrapping: true
                        }}
                        onChange={(editor, data, state) => {
                            this.setState({
                                state: state
                            })
                        }}
                    />
                </div>

            </div>
        );
    }
}

export default Editor;
