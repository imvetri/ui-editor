// Libraries.

import React, { Component } from "react";

import "./Style.css";

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {
        return (
            <span>
                {this.props.name}
            </span>
        );
    }
}

export default Selector;
