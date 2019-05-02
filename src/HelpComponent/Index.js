// Libraries.

import React, { Component } from "react";

import style from "./style.css";

class HelpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false
        }
    }

    close() {
        this.setState({ showMessage: false });
    }

    open() {
        this.setState({ showMessage: true });
    }

    render() {

        let message =
            <div>
                <button onClick={this.close.bind(this)}>X</button>
                <code>{this.props.text}</code>
            </div>;

        return (
            <div>
                <div>
                    {this.state.showMessage?"":<button onClick={this.open.bind(this)}>!</button>}
                </div>
                {this.state.showMessage? message: ""}
            </div>
        )
    }
}

export default HelpComponent;