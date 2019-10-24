import React, { Component } from 'react';

// Styles.

import "./Style.lcss";

// Components.

import Editor from "../Editor";
import Events from "../Events";
import Element from "../Element";
import getMessages from "./Messages";

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

        let messagesComponent;
        if(this.state.selectedIndex === -1){
            messagesComponent = getMessages();
        }
        
        return (
            <div className="elements">
                <section className="element-list">
                    <div className="title">
                        <span>Components</span>
                    </div>
                    <ul>
                        {elementList}
                    </ul>
                    <button id="addElement" onClick={this.toggleEditor.bind(this)}>Add</button>
                </section>
                <section className="events-tab">
                    <Events 
                        key={this.state.selectedIndex}
                        element = {selectedElement}
                        elements = {this.state.elements}
                        onEventsUpdate ={this.updateEvent}
                        onConfigUpdate={this.updateConfig}/>
                </section>
                <Editor
                    key = {Math.ceil(Math.random()*1000)}
                    element = {selectedElement}
                    name = {selectedElement.name}
                    markup = {selectedElement.markup}
                    style = {selectedElement.style}
                    state = {selectedElement.state}
                    onSave = {this.saveElement}
                    />
                {messagesComponent}
            </div>
        );
    }
}

export default Elements;
