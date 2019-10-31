// Libraries.

import React, { Component } from "react";

import {createStylesheet} from "../utilities/jsxTranspiler/create-stylesheet";
import {createComponent} from "../utilities/convert-to-react-component";

import "./style.css";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        this.component = this.props.component;
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