
// Libraries.

import React, { Component } from 'react';


import Window from "../Window";

import {UnControlled as CodeMirror} from 'react-codemirror2';

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: this.props.state
        };
    }

    render() {
        let state = this.state.state;
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
