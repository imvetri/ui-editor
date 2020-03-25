// Libraries.

import React, { Component } from "react";

import "./style.css";

class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="right">
                {this.props.children}
            </div>
        );
    }

}

export default Right;