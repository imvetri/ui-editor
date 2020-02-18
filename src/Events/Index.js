// Libraries.

import React, { Component } from "react";

// Dependencies.


// Components. 

import Configurator from "./Configurator";
import Nodes from "../utilities/Components/Nodes";
import Event from "./Event";
import getMessages from "./Messages";

// Styles.

import "./Style.css";

// Reducers.

import { updateEvent, selectedTagChanged, deleteEvent, updateConfiguration } from "./Reducer";


// Utils.

import { getNodeTree } from "../utilities/get-node-tree.js";
import { readData } from "../utilities/Storage";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
        this.state.selectedTag = this.props.selectedTag;
    }

    render() {
        const component = this.props.component;

        // Report if no component is created.
        if (this.state.components.length == 0) {
            return (
                <div className="container events-tab">
                    <div className="title">Events</div>
                    <p>Looks like you do not have any Web component created. Type some "html" on the right "Editor" tab</p>
                </div>
            );
        }

        // Report if no component is selected.
        if (component.name === undefined && this.state.components.length != 0) {
            return (
                <div className="container events-tab">
                    <div className="title">Events</div>
                    <p>Looks like you have not selected any component. Click on any of the component in the left pane.</p>
                </div>
            )
        }


        let nodeTree = getNodeTree(component, component.markup, component.style, JSON.parse(component.state), component.events);

        // Report error.
        if (nodeTree.error !== undefined) {
            return getMessages(nodeTree.error);
        }

        // Report error if component is not 
        if (nodeTree.result === undefined && this.state.components.length != 0) {
            return (
                <div className="container events-tab">
                    <div className="title">Events</div>
                </div>
            );
        }

        const selectedTag = this.state.selectedTag || "";
        let eventsOfSelectedTag, configurator, eventNames = [];
        // Check if it is a child component
        if (selectedTag.includes("child-component-")) {
            // Get list of components.
            let components = readData("ui-editor");

            // Get child component name from the selected tag.
            let childComponentName = selectedTag.split("child-component-")[1];

            // Find the child component from the list of components.
            let childComponent = components.find(component => component.name === childComponentName);

            // Find events that are publishable from the child component.
            eventNames = childComponent.events.filter(event => event.publishable === true).map(publishableEvent => publishableEvent.publishName);
            
            // Create event view for list of all events
            let events = component.events.filter(event=>eventNames.find(eventName =>eventName  === event.name && event.id===childComponent.name))
            events = events.map((event, index) => <Event 
                                                        key={Math.ceil(Math.random() * 1000)} 
                                                        index={index} event={event} 
                                                        selectedTagID={selectedTag} 
                                                        eventNames={eventNames} 
                                                        onSave={updateEvent.bind(this)} 
                                                        deleteEvent={deleteEvent.bind(this)} />);

            // Filter out events that are not part of selectedTag
            eventsOfSelectedTag = selectedTag ? events : null;

            configurator = <Configurator
                                key={Math.ceil(Math.random() * 1000)} 
                                onChange={updateConfiguration.bind(this)} 
                                childName={childComponentName} 
                                parent={component} />;
        }
        else {
            const events = component.events
                .map((event, index) => <Event 
                                            key={Math.ceil(Math.random() * 1000)} 
                                            index={index} 
                                            event={event} 
                                            selectedTagID={selectedTag} 
                                            eventNames={eventNames} 
                                            onSave={updateEvent.bind(this)} 
                                            deleteEvent={deleteEvent.bind(this)} />);
            eventsOfSelectedTag = selectedTag ? events.filter(event => selectedTag.includes(event.props.event.id)) : null;
        }

        return (
            <div>
                <div className="container events-tab">
                    <div className="title">Events</div>

                    <div className="tags">
                        <Nodes node={nodeTree.result} onSelectedTagChanged={selectedTagChanged.bind(this)} />
                    </div>
                    {configurator}

                    <div className="title">
                        Events
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div className="title">
                                    Existing Events
                                    <div>
                                        {eventsOfSelectedTag}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="title">
                                    New Event
                                    <div>
                                        <Event 
                                            key={component.events.length} 
                                            eventNames={eventNames} 
                                            selectedTagID={selectedTag} 
                                            onSave={updateEvent.bind(this)} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
