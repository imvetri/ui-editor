// Libraries.

import React, { Component } from "react";

// Components.

import { UnControlled as CodeMirror } from 'react-codemirror2';
import Publishes from "./Publishes";

// Events.

class Reducer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishes: this.props.reducer.publishes,
            reducer: this.props.reducer.reducer
        }
    }

    addNewPublish(){
        this.setState({
            publishes: (this.state.publishes.push({
                publishable: true,
                publishName: "",
                publishCondition: ""
            }), this.state.publishes)
        })
    }

    syncChanges(){
        this.props.onChange({
            publishes: this.state.publishes,
            reducer: this.state.reducer
        })
    }

    render() {

        let reducer = this.state.reducer;
        let publishes = this.state.publishes;

        return (
            // TODO: 1.check save and delete.
            <div>
                <div class="spacing" onMouseLeave={this.syncChanges.bind(this)}>
                    <label>Reducer Definition</label>
                    <CodeMirror
                        value={reducer}
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
                <div className="title">
                    Publishes
                </div>
                <div>
                    {reducer!=="" ? <button id="addPublish" onClick={this.addNewPublish.bind(this)}>Add publish</button> : null }

                    {publishes.length>0? <Publishes publishes={publishes}/> : null }
                </div>
            </div>
        );
    }
}

export default Reducer;
