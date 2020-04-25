// Libraries.

import React, { Component } from "react";

import "./style.css";

class ContextMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="ContextMenu">
                {this.props.children}
            </div>
        );
    }

}

export default ContextMenu;