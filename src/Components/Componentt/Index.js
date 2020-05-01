import React, { Component } from 'react';

// Events.

import {selectionChanged} from "./Events";

// Components.

import ThumbnailView from "./ThumbnailView";

// Styles.

import  "./Style.css";

class Componentt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedComponent: this.props.selectedComponent
        };
    }

    addComponentDetails(e){

        /** Pass details about component or folder in the drag event */
        
        let name = event.target.getAttribute("data-name")

        e.target.querySelector('.thumbnail').classList.remove("hidden");
        e.target.querySelector('.componentName').classList.add("hidden");
        console.log("SETTING DATA")

        e.dataTransfer.setData("component-name", name);
        e.dataTransfer.setData("parent-folder-name", e.currentTarget.parentElement.getAttribute("data-folder-name"))

        console.log(e.dataTransfer.getData("component-name"))
        e.stopPropagation();
    }

    render() {

        let props = this.props;
        let selectedComponent = props.selectedComponent;
        let component = props.component;
        
        return (
                <li 
                    className = {selectedComponent && props.component.name===selectedComponent.name ? "selected component background": "component background"}
                    onClick = {selectionChanged.bind(this,component.name)}
                    onContextMenu = {selectionChanged.bind(this,component.name)}
                    index = {props.index}
                    draggable="true" 
                    data-name={component.name}
                    onDragStart={this.addComponentDetails.bind(this)}>
                    <span className="componentName ">
                        {component.name}
                    </span>
                    <span className="hidden thumbnail">
                        <ThumbnailView component={component}/>
                    </span>
                </li>
        );
    }
}

export default Componentt;
