
// Libraries.

import React, { Component } from 'react';


import Window from "../Window";

import {readComponent} from "../utilities/Storage";

import {UnControlled as CodeMirror} from 'react-codemirror2';

class State extends Component {
    constructor(props) {
        super(props);
        var component = readComponent(this.props.name);
        this.state = {
            trueName: component? component.name: "",
            name: component? component.name : "",
            markup: component? component.markup : "",
            state: component? component.state : "",
            style: component? component.style : ""
        };
    }

    render() {
        let markup= this.state.markup;
        let style= this.state.style;
        let state = this.state.state;
        if(state!=="" && typeof JSON.parse(this.state.state) ==="object"){
            state= JSON.stringify(JSON.parse(this.state.state), null , '    ');
        }
        else {
            state = this.state.state
        }

        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <Window>
            <div className="container editor-tab">
                    <div className="editor state">
                        <div className="title">Component State</div>
                        <CodeMirror
                            autoCursor={false}
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
            </Window>
        );
    }
}

export default State;
