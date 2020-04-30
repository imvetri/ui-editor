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
                <div className="background" draggable="true" data-name={component.name} onDragStart={addComponentDetails.bind(this)}>
                    <li 
                        className = {selectedComponent && props.component.name===selectedComponent.name ? "selected component": "component"}
                        onClick = {selectionChanged.bind(this)}
                        onContextMenu = {selectionChanged.bind(this)}
                        index = {props.index}>
                        <span className="componentName">
                            {component.name}
                        </span>
                    </li>
                </ div>
            );
        }
        else {
            return (
                <div className="background" draggable="true" data-name={component.name} onDragStart={addComponentDetails.bind(this)}>
                    <li 
                        className = {selectedComponent && props.component.name===selectedComponent.name ? "selected component": "component"}
                        onClick = {selectionChanged.bind(this)}
                        onContextMenu = {selectionChanged.bind(this)}
                        index = {props.index}>
                            <ThumbnailView component={component}/>
                    </li>
                </ div>
            );
        }
    }
}

export default Componentt;
