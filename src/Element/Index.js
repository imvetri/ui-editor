import React, { Component } from 'react';

// Styles.

import style from "./Style.css";

// Dependencies.

import {updateselectedIndex} from "./Reducer";

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    selectionChanged(e) {
        this.props.onSelectionChange(e);
    }

    previewElement(e) {
        this.props.onPreview(e);
    }

    render() {
        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
            <li 
                className = {this.props.selectedIndex === this.props.index ? style.selected : ""}
                onClick = {this.selectionChanged.bind(this)}
                index = {this.props.index}>
                {this.props.element.name}
                <button 
                    index = {this.props.index} 
                    onClick={this.previewElement.bind(this)} className="preview">Preview</button>
                <button 
                    index = {this.props.index}
                    onClick={this.props.onExport}>Export</button>
                <button disabled={this.props.selectedIndex === this.props.index ? "" : "disabled"}>{this.props.selectedIndex === this.props.index ? "Active" : "Inactive"}</button>
            </li>
        );
    }
}

export default Element;
