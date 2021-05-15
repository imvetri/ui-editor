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
                <button><i class="fas fa-arrows-alt"></i>Move</button>
                <button><i class="fas fa-compress-arrows-alt"></i>Resize</button>
                <button><i class="fas fa-trash-alt"></i>Delete</button>
                <button><i class="fas fa-save"></i>Save</button>
                <button><i class="fas fa-edit"></i>Edit</button>
                <button><i class="fas fa-bolt"></i>Events</button>
                
            </div>
            <Div></Div>
        </div>
        )
    }

}

export default Builder;