// Libraries.

import React, { Component } from "react";
// Runtime utilities.

import { getNestedComponents, saveComponentsToWindow } from "../utilities/Runtime"

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

        if(!window[this.props.component.name]){
            window.visited = {};
            let nestedComponents = getNestedComponents(this.props.component);
            if (nestedComponents.length > 0) {
                saveComponentsToWindow(nestedComponents);
            }
        }

        if(!window[this.props.component.name]){
            return null
        }
        return <div className="centerItem">{React.createElement( window[this.props.component.name] )}</div>
    }

}

export default DynamicComponent;