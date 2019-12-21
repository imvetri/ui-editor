// Libraries.

import React, { Component } from "react";

import {createStylesheet} from "../utilities/jsxTranspiler/create-stylesheet";

import { getNestedComponents, saveComponentsToWindow } from "../utilities/nestedComponentSetup";
import { writeComponent } from "../utilities/localStorage";


import "./style.css";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component
        }
        
        createStylesheet(this.state.component.style);
    }

    render() {

        if(this.state.component.name===""){
            return (<div>No component selected.</div>)
        }
        let nestedComponents = getNestedComponents(this.state.component);
        if (nestedComponents.length > 0) {
            saveComponentsToWindow(nestedComponents);
        }

        if(!window[this.state.component.name]){
            return (<div>Component not rendered</div>)
        }

        return (
            <div {...this.props.events}>
                {React.createElement(window[this.state.component.name])}
            </div>
        );
    }

}

export default DynamicComponent;