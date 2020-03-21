import React, { Component } from 'react';

import {selectionChanged, handleDrag} from "./Events";

import {onExport} from "../../Utilities/Export";

import  "./Style.css";

class Componentt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedComponent: this.props.selectedComponent
        };
    }

    restoreClass(event){
        event.target.classList.remove("hideAdditionals");
    }

    render() {

        let props = this.props;
        let selectedComponent = props.selectedComponent;
        let component = props.component;
        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
            <div className="background" draggable="true" data-name={component.name} onDragStart={handleDrag.bind(this)} onDragEnd={this.restoreClass}>
                <li 
                    className = {selectedComponent && props.component.name===selectedComponent.name ? "selected component": "component"}
                    onClick = {selectionChanged.bind(this)}
                    index = {props.index}>
                    <span className="componentName">
                        {component.name}
                    </span>
                    <span>
                        <button 
                            index = {props.index}
                            onClick={onExport.bind(null,component.name)}><i className="fas fa-file-export"></i>Export</button>
                        <button 
                            index = {props.index}
                            onClick={props.onDeleteComponent}><i className="fa fa-trash"></i>Delete</button>
                    </span>
                </li>
            </ div>
        );
    }
}

export default Componentt;
