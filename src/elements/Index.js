import React, { Component } from 'react';

// Styles.

import style from "./Style.css";

// Components.

import Editor from "../Editor";
import Events from "../Events";
import Element from "../Element";
import getMessages from "./Messages";

// Reducers.

import {updateEvent, updateselectedIndex, saveElement,toggleEditor, setEditMode, onDelete, updateConfig} from "./Reducer"

// Dependencies.

import { prepareElement } from "../utilities/codeGenerator/prepareElement";
import { getComponentString } from "../utilities/convert-to-react-component";
import { getNestedComponents } from "../utilities/nestedComponentSetup";

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

    publishDetails() {
        
        // Warning: Object.assign doesnt dupe the original object. It overrides only the values.
        // May cause problem with reference types.
        let element = JSON.parse(JSON.stringify(this.state.elements[this.state.selectedIndex]));

        this.props.onPreview(prepareElement(element, element.name));
    }

    onExport() {
        let nestedComponents = getNestedComponents(this.state.elements[this.state.selectedIndex]);

        console.log(nestedComponents.map(getComponentString).join(""));
    }

    render() {

        const elementList = this.state.elements.map((element, index) => 
            <Element 
                key = {index} 
                index = {index}
                selectedIndex = {this.state.selectedIndex}
                element = {element}
                onSelectionChange = {this.updateselectedIndex.bind(this)}
                onPreview = {this.publishDetails.bind(this)} 
                onExport = {this.onExport.bind(this)}
                onDelete = {this.onDelete.bind(this)}/>
        );

    
        const selectedElement = this.state.elements[this.state.selectedIndex] || this.state.element;

        let messagesComponent;
        if(this.state.selectedIndex === -1){
            messagesComponent = getMessages();
        }
        
        return (
            <div className={style.elements}>
                <section className="element-list">
                    <h4>Web Components</h4>
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
