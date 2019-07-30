// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { codeModifier } from "../utilities/codeModifier";
import {createStylesheet} from "../utilities/jsxTranspiler/create-stylesheet";
import {convertToReactcomponent} from "../utilities/convert-to-react-component";

import style from "./style.css";
import getMessages from "./Messages";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        let component = this.props.component;
        createStylesheet(this.style);
    }

    /**
     * 
     * @param {Object} component - containing details about a component
     * @property {String} component.name - Name of the component.
     * @property {String} component.markup - JSX of the component.
     * @property {String} component.style - css classes used by the component, like a stylesheet content.
     * @property {Array} component.events - Array of event objects. Each object contain event name, event id, event reducer function.
     * @property {String} component.children - List of child component configuration that are present. Configuration can be used to perform show/hide child component on a condition, render list of children using array.map function. 
     * @property {String} component.state - Default state of the component. This is required.
     */
    getComponentString(component){

        if(!component.markup[3]){
            return;
        }
        return convertToReactcomponent(component);
    }

    render() {

        let componentString = this.getComponentString(this.component);
        let result = eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"]  }).code)

        if(!result){
            return null;
        }
        let component = new result();
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