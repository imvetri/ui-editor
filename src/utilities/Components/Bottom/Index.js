// Libraries.

import React, { Component } from "react";

import "./style.css";

class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="Bottom">
                {this.props.children}
            </div>
        );
    }

}

export default Bottom;