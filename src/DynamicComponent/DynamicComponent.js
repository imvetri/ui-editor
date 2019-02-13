// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { transpileJSX } from "../jsxTranspiler";

import style from "../Preview/Preview.css";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        let component = this.props.component;
        this.state = component.state;
        this.markup = component.markup;
        this.events = component.events;
        this.style = component.style;
        this.children = component.children;
        
        Object.keys(this.events).forEach(event=>{
            // Get the function name.
            let functionName = this.events[event].name;
            // Bind it to current instance and save it.
            this[functionName] = this.events[event].bind(this);
            // Also replace in the original events object.
            this.events[event] = this[functionName];
        });
    }

    render() {
        let newElement = transpileJSX(this.markup, this.style, this.state, this.events);
        return (
            <div className={style.box}>
                dei
                {newElement}
                {this.children.map(component=><DynamicComponent component={component}/>)}
            </div>
        );
    }

}

export default DynamicComponent;