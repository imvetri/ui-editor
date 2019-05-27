// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { transpileJSX } from "../utilities/jsxTranspiler";
import { codeModifier } from "../utilities/codeModifier";
import { prepareMarkup } from "../utilities/codeGenerator/prepareMarkup";

import style from "./style.css";
import getMessages from "./Messages";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);

        let component = this.props.component;
        this.component = component;
        this.state = JSON.parse(component.state);

        this.markup = prepareMarkup(component, component.name);
        this.events = component.events;	
        this.style = component.style;	
        this.events.forEach(event=>{
            /* Get the function name.*/
            let functionName = event.name;
            /* Bind it to current instance and save it.*/
            this[functionName] = (new Function("e",codeModifier(event.reducer))).bind(this);
            /* Also replace in the original events object. */
            event.reducer = this[functionName];
        });
    }

    render() {

        let transpilationResult = transpileJSX(this.markup, this.style, this.state, this.events, this.component.name);
        if(transpilationResult.error !== undefined){
            return (getMessages())
        }
        else {
            return (
                <div className={style.box}>
                    {transpilationResult.result}
                </div>
            );
        }
    }

}

export default DynamicComponent;