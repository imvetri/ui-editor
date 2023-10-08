
// Libraries.

import React, { Component } from 'react';


import Window from "../Window";


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
                        <input
                            type="text"
                            value={state}
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
