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
            <div className="container">
                {this.props.name}
            </div>
        );
    }
}

export default Selector;
