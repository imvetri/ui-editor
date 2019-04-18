import React, { Component } from 'react';

// Styles.

import style from "./Style.css";

// Components.

import PopupMarkupEditor from "popup-markup-editor";
import Events from "../Events/Events";
import Element from "./Element";

// Reducers.

import {updateEvent, updateselectedIndex, saveElement, toggleEditor, setEditMode} from "./Reducer"

// Dependencies.

import {prepareElement} from "../common/js/prepareElement";

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
            selectedIndex: -1
        };

        this.updateEvent = updateEvent.bind(this);
        this.updateselectedIndex = updateselectedIndex.bind(this)
        this.saveElement = saveElement.bind(this);
        this.toggleEditor = toggleEditor.bind(this);
        this.setEditMode = setEditMode.bind(this);
    }

    publishDetails() {
        
        // Warning: Object.assign doesnt dupe the original object. It overrides only the values.
        // May cause problem with reference types.
        let element = JSON.parse(JSON.stringify(this.state.elements[this.state.selectedIndex]));

        this.props.onPreview(prepareElement(element));
    }

    render() {

        const elementList = this.state.elements.map((element, index) => 
            <Element 
                key = {index} 
                index = {index}
                selectedIndex = {this.state.selectedIndex}
                element = {element}
                onSelectionChange = {this.updateselectedIndex.bind(this)}
                onPreview = {this.publishDetails.bind(this)} />
        );

    
        const selectedElement = this.state.elements[this.state.selectedIndex] || this.state.element;
        
        return (
            <li className={style.elements}>
                <section className="element-list">
                    <header>Elements</header>
                    <ul>
                        {elementList}
                    </ul>
                    <button id="addElement" onClick={this.toggleEditor.bind(this)}>Add</button>
                </section>
                <section className="events-tab">
                    {this.state.elements[this.state.selectedIndex]? 
                    <Events 
                        key={this.state.selectedIndex}
                        element = {selectedElement}
                        onEventsUpdate ={this.updateEvent}/>
                        : null }
                </section>
                {this.state.show ? <PopupMarkupEditor
                    key = {this.state.selectedIndex}
                    element = {selectedElement}
                    saveAndClose = {this.saveElement}
                    show = {this.state.show}
                    /> : null }
            </li>
        );
    }
}

export default Elements;
