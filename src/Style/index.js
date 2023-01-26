
// Libraries.

import React, { Component } from 'react';

import Window from "../Window";


import {UnControlled as CodeMirror} from 'react-codemirror2';

class Style extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style:  this.props.style
        };

    }

    render() {
        let style= this.state.style;

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
