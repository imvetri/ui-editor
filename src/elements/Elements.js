import React, { Component } from 'react';

// Styles.

import style from "./element.css";

// Dependencies.

import {extractJsxAttributes} from "../js-utils/extract-jsx-attributes";
import {convertToJson} from "../js-utils/convert-to-json";

// Components.

import PopupMarkupEditor from "./popup-markup-editor";
import PopupJsonEditor from "./popup-json-editor";

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            createMode: false,
            list: [],
            selectedElement: "",
            eventName: "",
            markup: "",
            editMode: false
        };
    }

    /**
     * Shows / hides the pop up editor.
     */
    toggleEditor () {
        this.setState({
            createMode: !this.state.createMode
        });
    }

    /**
     * Updates state with a new element / edited element.
     * @param {Object} newElement 
     * @property {String} name - The name of the element.
     * @property {String} markup - The markup of the element.
     * @property {Array} events - The events of the element. Defaults to [].
     * @property {Array} states - The states of the element. Defaults to [].
     */
    updateCode (newElement) {
        // Mutate the original array. Science fiction. hide mutation behind.
        let newList = Array.from(this.state.list);
        
        if(this.state.editMode){
            // Find the element.
            const elementUnderEdit = newList.find(item=> item.name === newElement.name || item.markup === newElement.markup);

            // Update the element with new markup.
            elementUnderEdit.markup = newElement.markup;

            // Get default state by parsing the markup.
            let defaultState = convertToJson(extractJsxAttributes(newElement.markup));

            // Add default state to element's states.
            elementUnderEdit.states.push( defaultState );

            // Update element name.
            elementUnderEdit.name = newElement.name;
        }
        else {
            newList.push(newElement);
        }

        // Update the state with new values.
        this.setState({
            list: newList
        });

        // hide the editor.
        this.toggleEditor();
    }

    /**
     * Stores the new event name created for the currently selected element.
     * @param {Object} e - Event carrying infor about the eventName input value.
     */
    updateEventName (e) {
        this.setState({
            eventName: e.target.value
        })
    }

    /**
     * Saves the event name which is created for the currently selected element.
     */
    addEvent () {
        // Get the selected element.
        let selectedElement = this.state.selectedElement;

        // Create new state.
        let newState = Object.assign({}, this.state);

        // Find the element to be updated from the new state.
        let elementToBeUpdated = newState.list.find(element=>element.name === selectedElement.name);

        // Update the event name to the selectedElement.
        selectedElement.events.push(this.state.eventName);

        // Set state to the new state.
        this.setState(newState);
    }

    /**
     * Stores the new state name for the currently selected element.
     * @param {Object} e - Event carrying info about the state input value.
     */
    updateStateName (e) {
        this.setState({
            stateName: e.target.value
        })
    }

    /**
     * Saves the stateName to the currently selected element.
     */
    addState () {
        // Get the selected element.
        let selectedElement = this.state.selectedElement;

        // Create new state.
        let newState = Object.assign({}, this.state);

        // Find the element to be updaated from the new state.
        let elementToBeUpdated = newState.list.find(element=>element.name === selectedElement.name);

        // Update the state name to list of existing states.
        selectedElement.states.push(this.state.stateName);
        
        // Set state to new state.
        this.setState(newState);
    }

    /**
     * Stores the current element that is selected.
     * @param {Object} e - Event carrying info about the currently selected element.
     */
    updateSelectedElement (e) {
        // Find the element from state that matches the currently selected element.
        let selectedElement = this.state.list.find(element=>element.name === e.target.innerText)

        // Update the state with selectedElement.
        this.setState({
            selectedElement
        })

    }

    /**
     * Shows pop up editor.
     */
    editElementMarkup () {
        this.setState({
            editMode: true
        })
        this.toggleEditor();
    }

    render() {
        const options = {
			lineNumbers: true,
        };

        // add class to currently selected element ignoring the rest. 
        // Why? Anyways we need to know which element is currently being edited/selected

        // className = this.state.selectedElement === element.name ? "selected" : ""
        // Other neat ways to iterate a markup and return a list?
        
        const elementList = this.state.list.map((element, index) => 
            <li key={index} className = {this.state.selectedElement.name === element.name ? style.selected : ""} onClick={this.updateSelectedElement.bind(this)}>{element.name}</li>
        );
        
        const eventList = this.state.selectedElement && this.state.selectedElement.events.map((event, index)=>
            <li key={index}>{event}</li>
        );

        const stateList = this.state.selectedElement && this.state.selectedElement.states.map((state, index)=>
            <li key={index}>{JSON.stringify(state)}</li>
        );

        const editMarkup = this.state.selectedElement ?  <button onClick={this.editElementMarkup.bind(this)} >Edit</button> : "";

        const object = {
            name: 1
        };

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
                <section className="states-tab">
                    <header>States</header>
                    <ul>
                        {stateList}
                        <li>
                            <input type="text" onChange={this.updateStateName.bind(this)}/>
                        </li>
                        <li>
                            <button id="addEvent" onClick={this.addState.bind(this)}>Add</button>
                        </li>
                    </ul>
                    <button id="addElementState">Add</button>
                </section>
                <PopupJsonEditor json={object}/>
                <PopupMarkupEditor createMode={this.state.createMode} markup={this.state.markup} onSave={this.updateCode.bind(this)}/>
            </li>
        );
    }
}

export default Elements;
