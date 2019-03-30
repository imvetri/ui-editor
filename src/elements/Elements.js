import React, { Component } from 'react';

// Styles.

import style from "./Style.css";

// Components.

import PopupMarkupEditor from "popup-markup-editor";
import Events from "../Events/Events";

// Reducers.

import {updateEvent, updateSelectedElementIndex, saveElement, toggleEditor, setEditMode} from "./Reducer"

// Dependencies.

import prepareElement from "../common/js/prepareElement";

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: {
                name: "",
                markup:"",
                styleClass: "",
                style: "",
                state: "",
                event: {
                    name: "",
                    reducer: ""
                }
            },
            show: false,
            elements: JSON.parse(localStorage.getItem("ui-editor")) || [],
            selectedState: [],
            editMode: false,
            selectedElementIndex: -1
        };

        this.updateEvent = updateEvent.bind(this);
        this.updateSelectedElementIndex = updateSelectedElementIndex.bind(this)
        this.saveElement = saveElement.bind(this);
        this.toggleEditor = toggleEditor.bind(this);
        this.setEditMode = setEditMode.bind(this);
    }

    publishDetails() {
        
        // Warning: Object.assign doesnt dupe the original object. It overrides only the values.
        // May cause problem with reference types.
        let element = JSON.parse(JSON.stringify(this.state.elements[this.state.selectedElementIndex]));
        
        this.props.onPublish(prepareElement(element));
    }

    render() {

        const elementList = this.state.elements.map((element, index) => 
            <li 
                key = {index} 
                index = {index}
                className = {this.state.selectedElementIndex === index ? style.selected : ""} 
                onClick = {this.updateSelectedElementIndex.bind(this)}>
                {element.name}
                <button onClick={this.publishDetails.bind(this)}>Preview</button>
            </li>
        );

    
        const selectedElement = this.state.elements[this.state.selectedElementIndex] || this.state.element;
        
        return (
            <li className="elements">
                <header>Elements</header>
                <section className="element-list">
                    <ul>
                        {elementList}
                    </ul>
                    <button id="addElement" onClick={this.toggleEditor.bind(this)}>Add</button>
                </section>
                <section className="events-tab">
                    <header>Events</header>
                    {this.state.elements[this.state.selectedElementIndex]? 
                    <Events 
                        key={this.state.selectedElementIndex}
                        element = {selectedElement}
                        onEventsUpdate ={this.updateEvent}/>
                        : null }
                </section>
                {this.state.show ? <PopupMarkupEditor
                    key = {this.state.selectedElementIndex}
                    element = {selectedElement}
                    saveAndClose = {this.saveElement}
                    show = {this.state.show}
                    /> : null }
            </li>
        );
    }
}

export default Elements;
