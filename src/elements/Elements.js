import React, { Component } from 'react';

// Styles.

import style from "./Elements.css";



// Components.

import PopupMarkupEditor from "popup-markup-editor";
import StateReducerViewer from "state-reducer-viewer";

// Reducers.

import {save, close, updateName, updateMarkup} from "./reducers/PopupMarkupEditor"
import {updateEventName,updateReducer, addEvent, updateSelectedElementIndex, saveElement, saveEvent, toggleEditor, setEditMode} from "./reducers/Elements"

import dummyState from "../mock/dummyState.js";

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            show: false,
            elements: [],
            event: {
                name: "",
                reducer: ""
            },
            markup: "",
            showJsonEditor: false,
            selectedState: [],
            editMode: false,
            selectedElementIndex: -1
        };

        this.save = save.bind(this);
        this.close = close.bind(this);
        this.updateName = updateName.bind(this);
        this.updateMarkup = updateMarkup.bind(this);

        this.updateEventName = updateEventName.bind(this);
        this.addEvent = addEvent.bind(this);
        this.updateSelectedElementIndex = updateSelectedElementIndex.bind(this)
        this.saveElement = saveElement.bind(this);
        this.saveEvent = saveEvent.bind(this);
        this.updateReducer = updateReducer.bind(this);
        this.toggleEditor = toggleEditor.bind(this);
        this.setEditMode = setEditMode.bind(this);
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
            <li key={index}>
                <input type="text" value = {event.name}/>
                <textarea value = {event.reducer}/>
                <button onClick = {this.saveEvent.bind(this)}>Save</button>
            </li>
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
                            <input type="text" onChange = {this.updateEventName} value = {this.state.event.name}/>
                            <textarea onChange = {this.updateReducer} value = {this.state.event.reducer}/>
                            <button onClick={this.addEvent}>Add</button>
                        </li>
                    </ul>
                </section>
                <StateReducerViewer states={dummyState}/>
                <PopupMarkupEditor  
                    show = {this.state.show} 
                    name = {this.state.name} 
                    markup = {this.state.markup} 
                    save = {this.save} 
                    close = {this.close}
                    updateName = {this.updateName}
                    updateMarkup = {this.updateMarkup}
                    />
            </li>
        );
    }
}

export default Elements;
