import React, { Component } from 'react';

import {selectionChanged, previewElement, deleteElement, handleDrag} from "./Events";
import style from "./Style.css";

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
            <div className={style.background} draggable="true" id={this.props.element.name} onDragStart={handleDrag.bind(this)}>
                <li 
                    className = {this.props.selectedIndex === this.props.index ? style.selected : ""}
                    onClick = {selectionChanged.bind(this)}
                    index = {this.props.index}>
                    {this.props.element.name}
                    <button 
                        index = {this.props.index} 
                        onClick={previewElement.bind(this)}><i class="fas fa-eye"></i>Preview</button>
                    <button 
                        index = {this.props.index}
                        onClick={this.props.onExport}><i class="fas fa-file-export"></i>Export</button>
                    <button 
                        index = {this.props.index}
                        onClick={this.props.onDelete}><i class="fa fa-trash"></i>Delete</button>
                </li>
            </ div>
        );
    }
}

export default Element;
