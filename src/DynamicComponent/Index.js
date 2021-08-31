// Libraries.

import React, { Component } from "react";
// Runtime utilities.

import {initialiseComponents} from "../utilities/Runtime";

// Styles.

import "./style.css";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component
        }
        
    }

    render() {

        initialiseComponents(this.props.component)

        if(!window[this.props.component.name]){
            return null
        }
        return <div className="centerItem">{React.createElement( window[this.props.component.name] )}</div>
    }

}

export default DynamicComponent;