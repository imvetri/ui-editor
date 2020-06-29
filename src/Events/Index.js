// Libraries.

import React, { Component } from "react";

// Dependencies.


// Components. 

import Configurator from "./Configurator";
import Tags from "./Tags"
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
    }

    publishEvent() {
        let component = this.state.component;
        this.props.onEventsUpdate({
            name: this.state.selectedEventName,
            reducer: this.state.reducer,
            index: this.props.index,
            publishable: this.state.publishable,
            publishName: this.state.publishName
        })
    }

    onReducerChange(){
        debugger;
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
        debugger
        const selectedEvent = component.events.find(event => event.name === this.state.selectedEventName) || {
            name: this.state.selectedEventName,
            reducers: [{
                reducer: "",
                publishes: [],
                index: component.events.length
            }]
        };

        // Check if it is a child component
        if (selectedTag.includes("child-component-")) {

            // Get child component name from the selected tag.
            let childComponentName = selectedTag.split("child-component-")[1];

            // Get list of components.
            let components = readData("ui-editor");

            // Find the child component from the list of components.
            let childComponent = components.find(component => component.name === childComponentName);

            // Find events that are publishable from the child component to show in drop down.
            eventNames = childComponent.events.filter(event => event.reducers[0].publishes[0].publishable).map(publishableEvent => publishableEvent.reducers[0].publishes[0].publishName);

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
                            <button onClick={this.publishEvent.bind(this)} id="saveEvent"><i className="fas fa-save"></i>Save Event</button>
                            <button onClick={deleteEvent.bind(this)} id="deleteEvent"><i className="fas fa-trash"></i>Delete Event</button>
                        </div>
                    </div>
                    <div className="event">
                        <div className="reducers">
                            <div className="title">
                                Reducers
                            </div>
                            <div>
                                {selectedEvent.reducers.map(reducer => <Reducer key={Math.ceil(Math.random() * 1000)} reducer={reducer} onChange={this.onReducerChange.bind(this)} />)}
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
