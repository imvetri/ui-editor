import React, { Component } from 'react';

// Styles.

import style from "./element.css";

// Dependencies.

import PopupEditor from "./popup-editor";

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hideCodeEditor: true,
            list: [],
            selectedElement: "",
            eventName: ""
        };
    }

    toggleEditor () {
        this.setState({
            hideCodeEditor: !this.state.hideCodeEditor
        });
    }

    updateCode (newElement) {
        // Mutate the original array. Future, hide mutation behind.
        let newList = Array.from(this.state.list);
        newList.push(newElement);

        // Update the state with new values
        this.setState({
            list: newList
        })
        this.toggleEditor();
    }

    updateEventName (e) {
        this.setState({
            eventName: e.target.value
        })
    }

    addEvent () {
        // this seems wrong.
        let selectedElement = this.state.selectedElement;

        let newState = Object.assign({}, this.state);
        let elementToBeUpdated = newState.list.find(element=>element.name === selectedElement.name);

        selectedElement.events.push(this.state.eventName);
        this.setState(newState);
    }

    updateStateName (e) {
        this.setState({
            stateName: e.target.value
        })
    }

    addState () {
        // this seems wrong.
        let selectedElement = this.state.selectedElement;

        let newState = Object.assign({}, this.state);
        let elementToBeUpdated = newState.list.find(element=>element.name === selectedElement.name);

        selectedElement.states.push(this.state.stateName);
        this.setState(newState);
    }

    updateSelectedElement (e) {

        let selectedElement = this.state.list.find(element=>element.name === e.target.innerText)
        this.setState({
            selectedElement
        })

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
            <li key={index}>{state}</li>
        );

        return (
            <li className="elements">
                <header>Elements</header>
                <section className="element-list">
                    <ul>
                        {elementList}
                    </ul>
                    <button onClick={this.toggleEditor.bind(this)}>Add</button>
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
                <PopupEditor hideCodeEditor={this.state.hideCodeEditor} onSave={this.updateCode.bind(this)}/>
            </li>
        );
    }
}

export default Elements;
