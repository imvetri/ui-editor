
// Libraries.

import React, { Component } from 'react';

import Window from "../Window";

import {readComponent} from "../utilities/Storage";

import {UnControlled as CodeMirror} from 'react-codemirror2';

class Style extends Component {
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
                    <div className="editor css">
                        <div className="title">Component CSS</div>
                        <CodeMirror
                            autoCursor={false}
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
            </div>
            </Window>
        );
    }
}

export default Style;
