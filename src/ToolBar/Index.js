// Libraries.

import React, { Component } from "react";

// Styles.

import "./style.css";

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component
        }
        
    }

    render() {
        return <div className="toolBar">
            <button><i class="fas fa-pen"></i>Draw</button>
        </div>
    }

}

export default ToolBar;