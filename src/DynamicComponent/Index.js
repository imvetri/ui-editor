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

    preventDefault(e){
        let previousTarget = document.querySelectorAll(".droptarget.green");
        if(previousTarget[0]){
            previousTarget[0].classList.remove("droptarget")
            previousTarget[0].classList.remove("green")
            
        }
        e.target.classList.add("droptarget");
        e.target.classList.add("green");
        e.preventDefault();
    }

    onDrop(e){
        e.preventDefault();
        debugger;
        var child = e.dataTransfer.getData("component-name");
        
        // 1. Fetch the inner text of the target
        var text = e.target.innerText;

        // 2. Fetch the target component from the components list
        var parent = this.state.component;

        // 3. Update the markup with child.
        parent.markup = parent.markup.replace(text, `<${text}${child}/>`);
        // 4. Write data.
        writeComponent(parent);
        console.log("component name", child);
        console.log(e.target);
        // 5. Trigger reload.
        this.setState({
            component: parent
        })
    }


    render() {

        if(this.state.component.name===""){
            return (<div>Nothing created.</div>)
        }
        let nestedComponents = getNestedComponents(this.state.component);
        if (nestedComponents.length > 0) {
            saveComponentsToWindow(nestedComponents);
        }

        if(!window[this.state.component.name]){
            return (<div>Component not rendered</div>)
        }
        
        return (
            <div onDrop={this.onDrop.bind(this)} onDragOver={this.preventDefault.bind(this)}>
                {React.createElement(window[this.state.component.name])}
            </div>
        );
    }

}

export default DynamicComponent;