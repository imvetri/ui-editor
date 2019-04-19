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

        return (
            <li 
                className = {this.props.selectedIndex === this.props.index ? style.selected : ""}
                onClick = {this.selectionChanged.bind(this)}>
                {this.props.element.name}
                <button onClick={this.previewElement.bind(this)}>Preview</button>
                <button onClick={this.props.onExport}>Export</button>
            </li>
        );
    }
}

export default Element;
