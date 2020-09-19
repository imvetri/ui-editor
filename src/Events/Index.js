// Libraries.

import React, { Component } from "react";

// Dependencies.


// Components. 

import Configurator from "./Configurator";
import Tags from "./Tags";
import Reducer from  "./Event/Reducers/Reducer";


// Styles.

import "./Style.css";

// Reducers.

import { selectedTagChanged, deleteEvent, updateConfiguration, updateSelectedEvent } from "./Reducer";


// Utils.

import { readData } from "../utilities/Storage";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
        this.state.selectedTag = this.props.selectedTag;
        this.state.selectedEventName = "";
        this.state.selectedEvent = {
            name: "",
            reducers: [{
                reducer: "",
                publishes: [],
                index: this.props.component.events.length
            }]
        }
        this.state.eventID = "";
    }

    publishEvent(reducer) {
        this.setState({
            selectedEvent: {
                name: this.state.selectedEventName,
                reducers: [{
                    reducer: reducer.reducer,
                    publishes: reducer.publishes
                }]
            }
        })
    }

    saveEvent(){
        let events = Array.from(this.props.component.events);
        let changedEvent = events.find(event=>event.name===this.state.selectedEvent.name && this.state.eventID=== event.id);
        if(changedEvent){
            // its a existing event
            changedEvent.reducers = this.state.selectedEvent.reducers;
        }
        else{
            // its a new event
            events.push({
                id: this.state.eventID,
                index: events.length,
                name: this.state.selectedEvent.name,
                reducers: this.state.selectedEvent.reducers
            })
        }
        this.props.onEventsUpdate(events);
    }

    render() {
        const component = this.props.component;

        // Report if no component is created.
        if (this.state.components.length == 0) {
            return null;
        }

        // Report if no component is selected.
        if (component.name === undefined && this.state.components.length != 0) {
            return null;
        }

        const selectedTag = this.state.selectedTag || "";
        let configurator, eventNames = [];

        // Check if it is a child component
        if (selectedTag.includes("child-component-")) {

            // Get child component name from the selected tag.
            let childComponentName = selectedTag.split("child-component-")[1];

            // Get list of components.
            let components = readData("ui-editor");

            // Find the child component from the list of components.
            let childComponent = components.find(component => component.name === childComponentName);

            // Find events that are publishable from the child component to show in drop down.
            eventNames = []

            childComponent.events.forEach(event=>{
                event.reducers[0].publishes.forEach(publish=>{
                        if(publish.publishable){
                            eventNames.push(publish.publishName)
                        }
                })
            })
            // Create view for config.
            configurator = <Configurator
                key={Math.ceil(Math.random() * 1000)}
                onChange={updateConfiguration.bind(this)}
                childName={childComponentName}
                parent={component} />;
        }
        else {
            eventNames = component.events.filter(e => e.id === selectedTag.split("-")[1]).map(e => e.name);
        }

        // when tag is selected
        if (selectedTag) {

            return (
                <ul className="container events-tab">
                    <Tags component={component} onSelectedTagChanged={selectedTagChanged.bind(this)} />
                    {configurator}
                    <div className="title">
                        Event
                    </div>
                    <div>
                        <div class="spacing">
                            <label>Event name</label>
                            <input list="eventNames" type="text" onChange={updateSelectedEvent.bind(this)} value={this.state.selectedEventName} title="Event Name" />
                            <datalist id="eventNames">
                                {eventNames.map(eventName => <option value={eventName}></option>)}
                            </datalist>
                            <button onClick={this.saveEvent.bind(this)} id="saveEvent"><i className="fas fa-save"></i>Save Event</button>
                            <button onClick={deleteEvent.bind(this)} id="deleteEvent"><i className="fas fa-trash"></i>Delete Event</button>
                        </div>
                    </div>
                    <div className="event">
                        <div className="reducers">
                            <div className="title">
                                Reducers
                            </div>
                            <div>
                                {this.state.selectedEvent.reducers.map(reducer => <Reducer key={Math.ceil(Math.random() * 1000)} reducer={reducer} onChange={this.publishEvent.bind(this)} />)}
                            </div>
                        </div>
                    </div>
                </ul>
            );
        }

        else { // Tag is not selected
            return (
                <ul className="container events-tab">
                    <Tags component={component} onSelectedTagChanged={selectedTagChanged.bind(this)} />
                </ul>)
        }
    }
}

export default Events;
