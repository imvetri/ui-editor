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

        if(!window[this.state.component.name]){
            let nestedComponents = getNestedComponents(this.state.component);
            if (nestedComponents.length > 0) {
                saveComponentsToWindow(nestedComponents);
            }
        }

        if(!window[this.state.component.name]){
            return (<p>No component selected.</p>)
        }
        return React.createElement( window[this.state.component.name] );
    }

}

export default DynamicComponent;