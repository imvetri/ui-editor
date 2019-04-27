// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { transpileJSX } from "../jsxTranspiler";
import { codeModifier } from "../common/js/codeModifier";

import style from "../Preview/Preview.css";

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

        let newElement = transpileJSX(this.markup, this.style, this.state, this.events);
        return (
            <div className={style.box}>
                {newElement}
            </div>
        );
    }

}

export default DynamicComponent;