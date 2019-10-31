import React, { Component } from 'react';

import {selectionChanged, previewElement, deleteElement, handleDrag} from "./Events";
import  "./Style.css";

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
            <div className="background" draggable="true" id={this.props.element.name} onDragStart={handleDrag.bind(this)}>
                <li 
                    className = {this.props.selectedIndex === this.props.index ? "selected component" : "component"}
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
            </ div>
        );
    }
}

export default Element;
