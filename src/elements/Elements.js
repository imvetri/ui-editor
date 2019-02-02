import React, { Component } from 'react';

// Styles.

import style from "./Elements.css";

// Dependencies.

import {extractJsxAttributes} from "../common/js/extract-jsx-attributes";
import {convertToJson} from "../common/js/convert-to-json";

// Components.

import PopupMarkupEditor from "popup-markup-editor";
import StateReducerViewer from "state-reducer-viewer";

import dummyState from "../mock/dummyState.js";

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            show: false,
            elements: [],
            eventName: "",
            markup: "",
            showJsonEditor: false,
            selectedState: [],
            editMode: false,
            selectedElementIndex: -1
        };
    }

    toggleEditor () {
        this.setState({
            show: !this.state.show,
            name: "",
            markup: ""
        });
    }

    updateEventName (e) {
        this.setState({
            eventName: e.target.value
        })
    }

    addEvent () {
        // Get the selected element.
        let selectedElement = this.state.selectedElementIndex;

        // Create new state.
        let newState = Object.assign({}, this.state);

        // Find the element to be updated from the new state.
        let elementToBeUpdated = newState.elements.find(element=>element.name === selectedElement.name);

        // Update the event name to the selectedElement.
        selectedElement.events.push(this.state.eventName);

        // Set state to the new state.
        this.setState(newState);
    }

    updateSelectedElementIndex (e) {
        // Find the element from state that matches the currently selected element.
        let selectedElementIndex = Number(e.target.getAttribute("index"));

        // Update the state with selectedElement.
        this.setState({
            selectedElementIndex,
            name: this.state.elements[selectedElementIndex].name,
            markup: this.state.elements[selectedElementIndex].markup
        })

    }
    setEditMode () {
        this.setState({
            editMode: true,
            show: true
        })
    }

    saveElement () {
        // Mutate the original array. Science fiction. hide mutation behind.
        let newElements = Array.from(this.state.elements);
        
        if(this.state.editMode){
            // Find the element.
            const elementUnderEdit = newElements[this.state.selectedElementIndex];

            // Update the element with new markup.
            elementUnderEdit.markup = this.state.markup;

            // Get default state by parsing the markup.
            let defaultState = convertToJson(extractJsxAttributes(this.state.markup));

            // Add default state to element's states.
            elementUnderEdit.states.push( defaultState );

            // Update element name.
            elementUnderEdit.name = this.state.name;
        }
        else {
            let newElement = {
                name: this.state.name,
                markup: this.state.markup,
                states: [],
                events: []
            };

            newElements.push(newElement);
        }

        // Update the state with new values.
        this.setState({
            elements: newElements,
            editMode: false
        });

        // hide the editor.
        this.toggleEditor();
    }

    save () {
        if(this.validation()){
            this.saveElement();
        }
    }

    validation () {
        return this.state.markup && this.state.name;
    }

    close () {
        this.setState({
            show:false
        })
    }

    updateName (event) {
        this.setState({
            name: event.currentTarget.value
        })
    }

    updateMarkup (event) {
        this.setState({
            markup: event.currentTarget.value
        })
    }

    render() {

        const elementList = this.state.elements.map((element, index) => 
            <li 
                key = {index} 
                index = {index}
                className = {this.state.selectedElementIndex === index ? style.selected : ""} 
                onClick = {this.updateSelectedElementIndex.bind(this)}>
                {element.name}
            </li>
        );
        
        const eventList = this.state.selectedElementIndex>-1 && this.state.elements[this.state.selectedElementIndex].events.map((event, index)=>
            <li key={index}>{event}</li>
        );

        const editMarkup = <button onClick={this.setEditMode.bind(this)}>Edit</button>;

        const selectedElement = this.state.elements[this.state.selectedElementIndex] || {};
        return (
            <li className="elements">
                <header>Elements</header>
                <section className="element-list">
                    <ul>
                        {elementList}
                    </ul>
                    <button onClick={this.toggleEditor.bind(this)}>Add</button>
                    {editMarkup}
                </section>
                <section className="events-tab">
                    <header>Events</header>
                    <ul>
                        {eventList}
                        <li>
                            <input type="text" onChange={this.updateEventName.bind(this)}/>
                        </li>
                        <li>
                            <button id="addEvent" onClick={this.addEvent.bind(this)}>Add</button>
                        </li>
                    </ul>
                </section>
                <StateReducerViewer states={dummyState}/>
                <PopupMarkupEditor  
                    show = {this.state.show} 
                    name = {this.state.name} 
                    markup = {this.state.markup} 
                    save = {this.save.bind(this)} 
                    close = {this.close.bind(this)}
                    updateName = {this.updateName.bind(this)}
                    updateMarkup = {this.updateMarkup.bind(this)}
                    />
            </li>
        );
    }
}

export default Elements;
