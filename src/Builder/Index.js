// Libraries.

import React, { Component } from "react";

// Components

import Div from "./Div";

// Styles.

import "./style.css";

class Builder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component
        }
        
    }

    render() {
        return (
        <div className="builder">
            <div className="toolBar">
                <button><i class="fas fa-pen"></i>Draw</button>
            </div>
            <Div></Div>
        </div>
        )
    }

}

export default Builder;