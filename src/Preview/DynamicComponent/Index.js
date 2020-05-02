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
        let dropArea = e.currentTarget.querySelector(".content");
        if(!dropArea){
            e.target.classList.add("hintNoDrop");
        }
        if(e.target.classList.contains("content")){
            e.target.classList.add("hintDragOver");
            if(e.target.children.length>1){
                console.log("YES")
            }
        }

        e.stopPropagation();
        e.preventDefault();
    }

    dropComponent(e){
        let componentName = e.dataTransfer.getData("component-name");
        let parentComponent = this.state.component;
        let componentTag = `<${componentName}></${componentName}>`
        parentComponent.markup = parentComponent.markup.replace('content">','content">'+componentTag)
        this.props.onSave(parentComponent);
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
                onDragOver={ this.dragOverHandler.bind(this)}
                onDrop={this.dropComponent.bind(this)}>
                {React.createElement(window[this.state.component.name])}
            </div>
        );
    }

}

export default DynamicComponent;