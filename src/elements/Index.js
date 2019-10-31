import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Editor from "../Editor";
import Events from "../Events";
import Element from "../Element";

// Reducers.

import {updateEvent, updateselectedIndex, saveElement,toggleEditor, setEditMode, onDelete, updateConfig} from "./Reducer"

// Events.

import {publishDetails, onExport} from "./Events";


class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: {
                name: "",
                markup:"",
                style: "",
                state: "{ }",
                events: []
            },
            elements: JSON.parse(localStorage.getItem("ui-editor")) || [],
            selectedState: [],
            editMode: false,
            selectedIndex: -1
        };

        this.onDelete = onDelete.bind(this);
        this.updateEvent = updateEvent.bind(this);
        this.updateselectedIndex = updateselectedIndex.bind(this)
        this.saveElement = saveElement.bind(this);
        this.toggleEditor = toggleEditor.bind(this);
        this.setEditMode = setEditMode.bind(this);
        this.updateConfig = updateConfig.bind(this);
    }



    render() {

        const elementList = this.state.elements.map((element, index) => 
            <Element 
                key = {index} 
                index = {index}
                selectedIndex = {this.state.selectedIndex}
                element = {element}
                onSelectionChange = {this.updateselectedIndex.bind(this)}
                onPreview = {publishDetails.bind(this)} 
                onExport = {onExport.bind(this)}
                onDelete = {this.onDelete.bind(this)}/>
        );

    
        const selectedElement = this.state.elements[this.state.selectedIndex] || this.state.element;

        
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
                <div className="events-tab">
                    <Events 
                        key={this.state.selectedIndex}
                        element = {selectedElement}
                        elements = {this.state.elements}
                        onEventsUpdate ={this.updateEvent}
                        onConfigUpdate={this.updateConfig}/>
                </div>
                <div className="editor-tab">
                    <Editor
                        key = {Math.ceil(Math.random()*1000)}
                        element = {selectedElement}
                        name = {selectedElement.name}
                        markup = {selectedElement.markup}
                        style = {selectedElement.style}
                        state = {selectedElement.state}
                        onSave = {this.saveElement}
                        />
                </div>
            </div>
        );
    }
}

export default Elements;
