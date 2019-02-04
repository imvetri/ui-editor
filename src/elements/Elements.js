import React, { Component } from 'react';

// Styles.

import style from "./Style.css";



// Components.

import PopupMarkupEditor from "popup-markup-editor";
import StateReducerViewer from "state-reducer-viewer";
import Events from "../Events/Events";

// Reducers.

import {save, close, updateName, updateMarkup} from "../PopupMarkupEditor/Reducer"
import {addEvent, updateSelectedElementIndex, saveElement, toggleEditor, setEditMode} from "./Reducer"

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

        this.addEvent = addEvent.bind(this);
        this.updateSelectedElementIndex = updateSelectedElementIndex.bind(this)
        this.saveElement = saveElement.bind(this);
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
                    {this.state.elements[this.state.selectedElementIndex]? 
                    <Events 
                        events = {this.state.elements[this.state.selectedElementIndex].events}
                        addEvent={this.addEvent}
                        />: ""}
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
