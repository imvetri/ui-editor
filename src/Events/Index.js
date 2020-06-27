// Libraries.

import React, { Component } from "react";

// Dependencies.


// Components. 

import Configurator from "./Configurator";
import Nodes from "../utilities/Components/Nodes";
import Event from "./Event";

// Styles.

import "./Style.css";

// Reducers.

import { updateEvent, selectedTagChanged, deleteEvent, updateConfiguration, updateSelectedEvent } from "./Reducer";


// Utils.

import { getNodeTree } from "../utilities/get-node-tree.js";
import { readData } from "../utilities/Storage";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
        this.state.selectedTag = this.props.selectedTag;
        this.state.selectedEventName = "";
    }

    render() {
        const component = this.props.component;

        // Report if no component is created.
        if (this.state.components.length == 0) {
            return (
                <ul className="container events-tab">
                    <div className="title">Events</div>
                    <p>Looks like you do not have any Web component created. Type some "html" on the right "Editor" tab</p>
                </ul>
            );
        }

        // Report if no component is selected.
        if (component.name === undefined && this.state.components.length != 0) {
            return (
                <ul className="container events-tab">
                    <div className="title">Events</div>
                    <p>Looks like you have not selected any component. Click on any of the component in the left pane.</p>
                </ul>
            )
        }


        let nodeTree = getNodeTree(component, component.markup, component.style, JSON.parse(component.state), component.events);

        // Report error.
        if (nodeTree.error !== undefined) {
            return nodeTree.error;
        }

        // Report error if component is not 
        if (nodeTree.result === undefined && this.state.components.length != 0) {
            return (
                <ul className="container events-tab">
                    <div className="title">Events</div>
                </ul>
            );
        }

        const selectedTag = this.state.selectedTag || "";
        let eventsOfSelectedTag, configurator, eventNames = [];
        const selectedEvent = component.events.find(event => event.name === this.state.selectedEventName);

        // Check if it is a child component
        if (selectedTag.includes("child-component-")) {

            // Get child component name from the selected tag.
            let childComponentName = selectedTag.split("child-component-")[1];

            // Get list of components.
            let components = readData("ui-editor");

            // Find the child component from the list of components.
            let childComponent = components.find(component => component.name === childComponentName);

            // Find events that are publishable from the child component to show in drop down.
            eventNames = childComponent.events.filter(event => event.reducers[0].publishable === true).map(publishableEvent => publishableEvent.reducers[0].publishName);

            // Create view for config.
            configurator = <Configurator
                key={Math.ceil(Math.random() * 1000)}
                onChange={updateConfiguration.bind(this)}
                childName={childComponentName}
                parent={component} />;
        }
        else {

            // Find events that exists.
            eventNames = component.events.filter(e => e.id === selectedTag.split("-")[1]).map(e => e.name);
        }

        eventsOfSelectedTag = selectedTag && selectedEvent ? <Event
                                                                key={Math.ceil(Math.random() * 1000)}
                                                                index={index}
                                                                event={selectedEvent}
                                                                selectedTagID={selectedTag}
                                                                eventNames={eventNames}
                                                                onSave={updateEvent.bind(this)}
                                                                deleteEvent={deleteEvent.bind(this)} /> : null;

        return (
            <ul className="container events-tab">
                <div className="tags">
                    <Nodes node={nodeTree.result} onSelectedTagChanged={selectedTagChanged.bind(this)} />
                </div>
                {configurator}
                {selectedTag ?
                    <div><div className="title">Add Event
                    </div><Event
                            key={component.events.length}
                            eventNames={eventNames}
                            selectedTagID={selectedTag}
                            onSave={updateEvent.bind(this)} /></div>
                    :
                    null}
                {
                    eventNames && eventNames.length > 0
                        ?
                        <div>
                            <div className="title">
                                Existing Events
                            </div>
                            <input list="eventNames" type="text" onChange={updateSelectedEvent.bind(this)} value={this.state.selectedEventName} title="Event Name" />
                            <datalist id="eventNames">
                                {eventNames.map(eventName => <option value={eventName}></option>)}
                            </datalist>
                            {eventNames && eventNames.length > 0 ? eventsOfSelectedTag : null}
                        </div>
                        :
                        null
                }
            </ul>
        );
    }
}

export default Events;
