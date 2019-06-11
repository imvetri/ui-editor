// Libraries.

import React, { Component } from "react";

import style from "./style.css";
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
                <div>
                    {this.state.showMessage?"":<button onClick={open.bind(this)}>Info !</button>}
                </div>
                {this.state.showMessage? message: ""}
            </div>
        )
    }
}

export default HelpComponent;