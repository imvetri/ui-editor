import React, { Component } from 'react';

import {selectionChanged, previewElement, handleDrag} from "./Events";

import DynamicComponent from "../DynamicComponent";

import  "./Style.css";

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let randomKey = this.props.element.id*(~~(Math.random()*10));

        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
            <div className="background" draggable="true" id={this.props.element.name} onDragStart={handleDrag.bind(this)}>
                <li 
                    className = {this.props.index===this.props.selectedIndex ? "selected component": "component"}
                    onClick = {selectionChanged.bind(this)}
                    index = {this.props.index}>
                    <span className="componentName">
                        {this.props.element.name}
                    </span>
                    <span>
                        <button 
                            index = {this.props.index} 
                            onClick={previewElement.bind(this)}><i className="fas fa-eye"></i>Preview</button>
                        <button 
                            index = {this.props.index}
                            onClick={this.props.onExport}><i className="fas fa-file-export"></i>Export</button>
                        <button 
                            index = {this.props.index}
                            onClick={this.props.onDelete}><i className="fa fa-trash"></i>Delete</button>
                    </span>
                </li>
                <DynamicComponent key={randomKey} component={this.props.element}/>
            </ div>
        );
    }
}

export default Element;
