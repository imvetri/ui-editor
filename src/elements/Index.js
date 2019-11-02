import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Element from "../Element";

// Reducers.

import {toggleEditor, setEditMode, onDelete} from "./Reducer"

// Events.

import {publishDetails, onExport} from "./Events";


class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.elements,
            editMode: false
        };

        this.onDelete = onDelete.bind(this);
        this.toggleEditor = toggleEditor.bind(this);
        this.setEditMode = setEditMode.bind(this);
    }



    render() {

        const elementList = this.state.elements.map((element, index) => 
            <Element 
                key = {index} 
                index = {index}
                selectedIndex = {this.state.selectedIndex}
                element = {element}
                onSelectionChange = {this.props.onSelection}
                onPreview = {publishDetails.bind(this)} 
                onExport = {onExport.bind(this)}
                onDelete = {this.onDelete.bind(this)}/>
        );

        
        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Components
                    </div>
                    <ul>
                        {elementList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Elements;
