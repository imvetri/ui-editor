// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { codeModifier } from "../utilities/codeModifier";
import {createStylesheet} from "../utilities/jsxTranspiler/create-stylesheet";
import {createComponent} from "../utilities/convert-to-react-component";
import { saveComponentsToWindow, getNestedComponents } from "../utilities/nestedComponentSetup";

import style from "./style.css";
import getMessages from "./Messages";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        this.component = this.props.component;
        createStylesheet(this.style);
    }

    render() {
        let result = createComponent(this.component)

        if(!result){
            return null;
        }        
        let nestedComponents = getNestedComponents(this.component.markup);
        // Check if the component has nested components, make it available globally for preview.
        if(nestedComponents.length>0){
            // Save to window.
            saveComponentsToWindow(nestedComponents);
            // Reload.
        }
        let createdComponent = React.createElement(result);

        return (
            <div className={style.box}>
                <h1>
                    {createdComponent}
                </h1>
            </div>
        );
    }

}

export default DynamicComponent;