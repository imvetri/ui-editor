import React, { Component } from 'react';

// Events.

import {selectionChanged, addComponentDetails} from "./Events";

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


    render() {

        let props = this.props;
        let selectedComponent = props.selectedComponent;
        let component = props.component;
        let viewType = props.viewType;
        
        if(viewType==="LIST_VIEW") {
            return (
                    <li 
                        className = {selectedComponent && props.component.name===selectedComponent.name ? "selected component background": "component background"}
                        onClick = {selectionChanged.bind(this,component.name)}
                        onContextMenu = {selectionChanged.bind(this,component.name)}
                        index = {props.index}
                        draggable="true" 
                        data-name={component.name}
                        onDragStart={addComponentDetails.bind(this)}>
                        <span className="componentName">
                            {component.name}
                        </span>
                    </li>
            );
        }
        else {
            return (
                    <li 
                        className = {selectedComponent && props.component.name===selectedComponent.name ? "background selected component": "background component"}
                        onClick = {selectionChanged.bind(this,component.name)}
                        onContextMenu = {selectionChanged.bind(this,component.name)}
                        data-name={component.name} 
                        index = {props.index}
                        draggable="true"
                        onDragStart={addComponentDetails.bind(this)} >
                            <ThumbnailView component={component}/>
                    </li>
            );
        }
    }
}

export default Componentt;
