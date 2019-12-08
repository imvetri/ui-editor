// Libraries.

import React, { Component } from "react";

import {createStylesheet} from "../utilities/jsxTranspiler/create-stylesheet";
import {createComponent} from "../utilities/convert-to-react-component";

import "./style.css";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);

        // can we read from localstorage here? ok
        let thisComponent = this.props.component;
        // to fetch fresh data.
        this.component = JSON.parse(localStorage.getItem("ui-editor")).find(component=>component.name === thisComponent.name) ||this.props.component;
        
        createStylesheet(this.component.style);
    }

    render() {
        let result = createComponent(this.component)

        if(!result){
            return null;
        }        

        return (
            <div>
                {React.createElement(result)}
            </div>
        );
    }

}

export default DynamicComponent;