// Libraries.

import React, { Component } from "react";

// Components.

import { UnControlled as CodeMirror } from 'react-codemirror2';
import Publish from "../Publish";

// Events.

class Reducer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishes: this.props.reducer.publishes,
            reducer: this.props.reducer.reducer
        }
    }

    render() {

        let reducer = this.state.reducer;
        let publishes = this.state.publishes;

        return (
            // TODO: 1.check save and delete.
            <div>
                <div class="spacing">
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
                <button id ="addPublish" onClick={(e)=>{
                    this.setState({ publishes: (publishes.push({
                                    publishable: true,
                                    publishName: "",
                                    publishCondition: ""
                    }))})
                }}>Add publish</button>
                {publishes.map((publish, i)=><Publish 
                                                        index={i} 
                                                        key={Math.ceil(Math.random() * 1000)}
                                                        publish={publish} 
                                                        onSave={(data, i)=> this.setState({
                                                                                publishes: (publishes[i] = data, publishes) // update list of publishes and return it.
                                                                            })}
                                                        onDelete={(i)=> this.setState({
                                                                            publishes: (publishes.splice(i,1), publishes) // delete the publishes and return it.
                                                                            })}/>)}
            </div>
        );
    }
}

export default Reducer;
