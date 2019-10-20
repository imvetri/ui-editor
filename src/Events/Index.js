// Libraries.

import React, { Component } from "react";

// Dependencies.
import { saveComponentsToWindow, getNestedComponents } from "../utilities/nestedComponentSetup";
import Configurator from "../Configurator";
import style from "./Style.css";
import {updateEvent, selectedTagChanged, deleteEvent, updateConfiguration} from "./Reducer";

/**
 * What Events do?
 * Events render events of an element.
 * 
 * What it provides?
 * Events provide option to choose target tag to bind event
 * Events provide option to write a event and a callback
 * 
 * What does it publish? - onEventsUpdate
 * 
 * When is it called ? - onClick of save button
 * 
 * What data does onEventsUpdate publish ? - New details of the events.
 **/


/* HOW IT WORKS
 * It provides option to choose target tag to bind event. This is populated using element.markup details. 
 * markup is a string type which is passed to getNodeTree that returns react render tree that contains nodes of the tree.
 * 
 * It returns an object containing result and error. # Dev comment - Always check for error before using result.
 */
import { getNodeTree } from "../utilities/get-node-tree.js";

// nodetree is passed to <Nodes /> which takes care of rendering it. <Nodes /> also publishes selected node/teg whenever it is changed.

import Nodes from "../Nodes";

/*
 * How it provides option to write event and callback? 
 * Elements object contains details about event in event property. Each event has name, callback/reducer function, id. It is rendered using <Event />
 */
import Event from "../Event";

import getMessages from "./Messages";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {
        const element = this.props.element;

        // Report if no component is created.
        if (this.state.elements.length == 0) {
            return (
                <div className={style.events}>
                    <h4>Events, Actions, Reducers</h4>
                    <p>Looks like you do not have any Web component created. Type some "html" on the right "Editor" tab</p>
                </div>
            );
        }

        // Report if no component is selected.
        if (element.name === undefined && this.state.elements.length != 0) {
            return (
                <div className={style.events}>
                    <h4>Events, Actions, Reducers</h4>
                    <p>Looks like you have not selected any component. Click on any of the component in the left pane.</p>
                </div>
            )
        }

        let nestedComponents = getNestedComponents(element);

        // Check if the component has nested components, make it available globally for preview.
        if (nestedComponents.length > 0) {
            saveComponentsToWindow(nestedComponents);

            // Render nestedComponent in nodes.
            // If selected, show in a drop down list of published events.
        }

        let nodeTree = getNodeTree(element.markup, element.style, JSON.parse(element.state), element.events);

        // Report error.
        if (nodeTree.error !== undefined) {
            return getMessages(nodeTree.error);
        }

        // Report error if component is not 
        if (nodeTree.result === undefined && this.state.elements.length != 0) {
            return (
                <div className={style.events}>
                    <h4>Events, Actions, Reducers</h4>
                    <p>Current component does not have a valid markup or no element is selected</p>
                </div>
            );
        }

        const selectedTag = this.state.selectedTag || "";
        let eventsOfSelectedTag, configurator;
        // Check if it is a child component
        if (selectedTag.includes("child-component-")) {
            // Get list of components.
            let components= JSON.parse(localStorage.getItem("ui-editor"));

            // Get child component name from the selected tag.
            let childComponentName = selectedTag.split("child-component-")[1];

            // Find the child component from the list of components.
            let childComponent = components.find(component=>component.name === childComponentName);

            // Find events that are publishable from the child component.
            let eventNames = childComponent.events.filter(event=>event.publishable===true).map(publishableEvent=>publishableEvent.publishName);

            // Create event view for list of all events
            const events = element.events.map((event, index) => <Event key={index} index={index} event={event} selectedTagID={selectedTag} eventNames={eventNames} onSave={updateEvent.bind(this)} deleteEvent={deleteEvent.bind(this)} />);

            // Filter out events that are not part of selectedTag
            eventsOfSelectedTag = selectedTag ? events.filter(event => selectedTag.includes(event.props.event.id)) : null;

            configurator = <Configurator onChange={updateConfiguration.bind(this)} childName={childComponentName} parentName={element.name}/>;
        }
        else {
            const events = element.events
                .map((event, index) => <Event key={index} index={index} event={event} selectedTagID={selectedTag} eventNames={[]} onSave={updateEvent.bind(this)} deleteEvent={deleteEvent.bind(this)} />);
            eventsOfSelectedTag = selectedTag ? events.filter(event => selectedTag.includes(event.props.event.id)) : null;
        }

        return (
            <div className={style.events}>
                <h4>Events, Actions, Reducers</h4>
                <p>Select a tag below to show/add the events.</p>
                <div className={style.tags}>
                    <Nodes node={nodeTree.result} onSelectedTagChanged={selectedTagChanged.bind(this)} />
                </div>
                {configurator}
                <div className={style.eventBlock}>
                    <h5>Existing Events</h5>
                    {eventsOfSelectedTag}
                </div>
                <div className={style.eventBlock}>
                    <h5>New Event</h5>
                    <Event key={element.events.length} eventNames={[]} selectedTagID={selectedTag} onSave={updateEvent.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Events;
