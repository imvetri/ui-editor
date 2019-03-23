import React, { Component } from 'react';

// Styles.

import style from "./Style.css";

// Components.

import PopupMarkupEditor from "popup-markup-editor";
import Events from "../Events/Events";

// Reducers.

import {addEvent, updateSelectedElementIndex, saveElement, toggleEditor, setEditMode} from "./Reducer"


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

        this.addEvent = addEvent.bind(this);
        this.updateSelectedElementIndex = updateSelectedElementIndex.bind(this)
        this.saveElement = saveElement.bind(this);
        this.toggleEditor = toggleEditor.bind(this);
        this.setEditMode = setEditMode.bind(this);
    }

    prepareMarkup (markup){
        if(!markup.includes("{...events}")){
            // For markups without closing.
            if(markup.includes("/>")){
                markup = markup.replace("/>"," {...events}/>")
            }
            // For elements with closing tags.
            else if(markup.indexOf(">")<markup.indexOf("</")){
                markup = markup.replace(">", " {...events}>")
            }
        }
        return markup;
    }

    prepareElement (element) {
        let state = {};

        try {
            Object.keys(element.states[0]).forEach((value)=>{
                state[value.split("state.")[1]]="dummy";
            });
        }
        catch(e) {
            console.log(e);
            console.info("You missed a Ritual. Select the element, then click on edit and save atleast once");
        }

        element.markup = this.prepareMarkup(element.markup);
        delete element.states;

        // Convert events array to object
        let events = {};
        element.events.forEach(event => {
            // Convert events prop values from string to function
            events[event.name]=  new Function(event.reducer);
        });

        element.events = events;

        let defaults = {
            state: state,
            children: [],
            style: {}        
        };
        return Object.assign(defaults, element);
    }

    publishDetails() {
        
        // Warning: Object.assign doesnt dupe the original object. It overrides only the values.
        // May cause problem with reference types.
        let element = JSON.parse(JSON.stringify(this.state.elements[this.state.selectedElementIndex]));
        
        this.props.onPublish(this.prepareElement(element));
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
                        markup = {selectedElement.markup}
                        state = {selectedElement.state}
                        events = {selectedElement.events}
                        style = {selectedElement.style}
                        addEvent ={this.addEvent}/>
                        : ""}
                </section>
                {this.state.show ? <PopupMarkupEditor   
                    element = {selectedElement}
                    saveAndClose = {this.saveElement}
                    show = {this.state.show}
                    /> : null }
            </li>
        );
    }
}

export default Elements;
