// Libraries.

import React, { Component } from "react";

import {close, open} from "./Reducer";
class HelpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false
        }
    }


    render() {

        let message =
            <div>
                <button onClick={close.bind(this)}>Close</button>
                <code>{this.props.text}</code>
            </div>;

        return (
            <div>
                                    <h5>Child Configurator</h5>
                    <label>
                        <input type="checkbox" onChange={updateEventType.bind(this)} checked={this.state.publishable? "checked": ""}/>
                        Override child state
                    </label>  
            </div>
        )
    }
}

export default HelpComponent;