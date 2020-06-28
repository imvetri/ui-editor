// Libraries.

import React, { Component } from "react";

// Components.

import { UnControlled as CodeMirror } from 'react-codemirror2';
import Publish from "../Publish";

// Events.

class Reducer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let reducer = this.props.reducer;

        return (
            <div>
                <div class="spacing">
                    <label>Reducer Definition</label>
                    <CodeMirror
                        value={reducer.reducer}
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
                {reducer.publishes.map(publish=><Publish publish={publish}/>)}
            </div>
        );
    }
}

export default Reducer;
