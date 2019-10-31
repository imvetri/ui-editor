// Libraries.

import React, { Component } from "react";

import "./style.css";

class DraggableComponent extends Component {
    constructor(props) {
        super(props);
        this.component = this.props.component;
    }

    render() {

        return (
            <div className="draggableComponentDaw">
                {this.props.children}
            </div>
        );
    }

}

export default DraggableComponent;