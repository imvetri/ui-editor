// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { transpileJSX } from "../jsxTranspiler";
import { codeModifier } from "../utilities/codeModifier";

import style from "./style.css";

import MessagesComponent from "../MessagesComponent";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);

        let component = this.props.component;	
        this.state = JSON.parse(component.state);
        this.markup = component.markup;	
        this.events = component.events;	
        this.style = component.style;	

        this.events.forEach(event=>{
            // Get the function name.
            let functionName = event.name;
            // Bind it to current instance and save it.
            this[functionName] = (new Function("e",codeModifier(event.reducer))).bind(this);
            // Also replace in the original events object.
            event.reducer = this[functionName];
        });
    }

    render() {

        let transpilationResult = transpileJSX(this.markup, this.style, this.state, this.events);
        if(transpilationResult.error !== undefined){
            let messages = [{
                type: "info",
                text: "INFO: Preview is not working because preview is not clicked. "
            }]
            return (
                <MessagesComponent messages={messages} />
            );
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