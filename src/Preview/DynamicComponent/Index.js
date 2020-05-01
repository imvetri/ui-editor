// Libraries.

import React, { Component } from "react";

// Utilities.

import { insertDirection } from "./Utility";

// Runtime utilities.

import { getNestedComponents, saveComponentsToWindow } from "../../utilities/Runtime";

// Styles.

import "./style.css";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component
        }
        
    }

    dragOverHandler(e){

        /** if it contains .content area hint it green else hint red*/
        let dropArea = e.target.querySelector(".content");
        if(dropArea){
            dropArea.classList.add("hint")
        }
        if(e.currentTarget.classList.contains("content")){
            e.currentTarget.classList.add("hintDragOver");
        }
    }

    render() {

        if(this.state.component.name===undefined){
            return (<p>No component selected.</p>)
        }
        let nestedComponents = getNestedComponents(this.state.component);
        if (nestedComponents.length > 0) {
            saveComponentsToWindow(nestedComponents);
        }

        if(!window[this.state.component.name]){
            return (<div></div>)
        }

        return (
            <div  
                onDragOver={this.dragOverHandler.bind(this)}>
                {React.createElement(window[this.state.component.name])}
            </div>
        );
    }

}

export default DynamicComponent;