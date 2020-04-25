// Libraries.

import React, { Component } from "react";

import "./style.css";

class ContextMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    closeContextMenu(){
        this.props.onMessage("HIDE");
    }

    render() {

        return (
            <div className="ContextMenu" style={this.props.position}>
                {this.props.children}
            </div>
        );
    }

}

export default ContextMenu;