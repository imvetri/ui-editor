// Libraries.

import React, { Component } from "react";

import "./style.css";

class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="leftItem">
                {this.props.children}
            </div>
        );
    }

}

export default Left;