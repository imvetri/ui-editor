// Libraries.

import React, { Component } from "react";

// Components.

import { UnControlled as CodeMirror } from 'react-codemirror2';

// Events.

class Reducer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let item = this.props.item;

        return (
            <div>
                <div class="spacing">
                    <label>
                        Apply Condition
                    </label>
                    <input type="text"  value={item.condition} />
                </div>
                <div class="spacing">
                    <label>Reducer</label>
                    <CodeMirror
                        value={item.reducer}
                        autoCursor={false}
                        options={{
                            lineNumbers: false,
                            mode: "text/javascript",
                            theme: "darcula",
                            indentWithTabs: false,
                            smartIndent: true
                        }}
                        onChange={(editor, data, reducer) => {
                            this.setState({
                                reducer: reducer
                            })
                        }}
                    />
                </div>
                <div class="spacing">
                    <label>
                        Publishable
                    </label>
                    <input type="checkbox" checked={item.publishable ? "checked" : ""} />
                    <input type="text" value={item.publishName}/>
                </div>
            </div>
        );
    }
}

export default Reducer;
