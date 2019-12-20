// Libraries.

import React, { Component } from "react";

import {createStylesheet} from "../utilities/jsxTranspiler/create-stylesheet";

import { getNestedComponents, saveComponentsToWindow } from "../utilities/nestedComponentSetup";
import { writeComponent } from "../utilities/localStorage";
import { wrapTool } from "../utilities/wrapTool";


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
        wrapTool(e)
        e.preventDefault();
    }

    onDrop(e){
        e.preventDefault();
        var child = e.dataTransfer.getData("component-name");
        /**
         * 1. Fetch the uuid of the drop target.
         * 2. Replace the child component name next to the uuid tag of the parent.idMarkup.
         */
        var uuid = e.target.getAttribute("data-uuid");
        var parent = this.state.component;
        parent.idMarkup = parent.idMarkup.replace(`"${uuid}">`,`"${uuid}"><${child}/>`)

        /**
         * before write, fetch idMakrup with child components into component.markujp.
         */
        writeComponent(parent, true);
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
            <div onDrop={this.onDrop.bind(this)} onDragOver={this.preventDefault.bind(this)} {...this.props.events}>
                {React.createElement(window[this.state.component.name])}
            </div>
        );
    }

}

export default DynamicComponent;