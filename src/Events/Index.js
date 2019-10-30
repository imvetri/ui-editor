// Libraries.

import React, { Component } from "react";

// Dependencies.

import { saveComponentsToWindow, getNestedComponents } from "../utilities/nestedComponentSetup";

// Components. 

import Configurator from "../Configurator";
import Nodes from "../Nodes";
import Event from "../Event";
import getMessages from "./Messages";
import CssBuilder from "../CssBuilder";

// Styles.

import "./Style.lcss";

// Reducers.

import {updateEvent, selectedTagChanged, deleteEvent, updateConfiguration} from "./Reducer";


// Utils.

import { getNodeTree } from "../utilities/get-node-tree.js";

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
                <div className="container">
                    <div className="title">Settings</div>
                    <p>Looks like you do not have any Web component created. Type some "html" on the right "Editor" tab</p>
                </div>
            );
        }

        // Report if no component is selected.
        if (element.name === undefined && this.state.elements.length != 0) {
            return (
                <div className="container">
                    <div className="title">Settings</div>
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
                <div className="container">
                    <div className="title">Settings</div>
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

            configurator = <Configurator onChange={updateConfiguration.bind(this)} childName={childComponentName} parent={element}/>;
        }
        else {
            const events = element.events
                .map((event, index) => <Event key={index} index={index} event={event} selectedTagID={selectedTag} eventNames={[]} onSave={updateEvent.bind(this)} deleteEvent={deleteEvent.bind(this)} />);
            eventsOfSelectedTag = selectedTag ? events.filter(event => selectedTag.includes(event.props.event.id)) : null;
        }

        return (
            <div className="container">
                <div className="title">Settings</div>

                <div className="tags">
                    <Nodes node={nodeTree.result} onSelectedTagChanged={selectedTagChanged.bind(this)} />
                </div>
                {configurator}
                <div className="title">
                    Style editor
                </div>
                <CssBuilder />

                <div className="title">
                    Events
                    <ul>
                        <li>
                            <div className="title">
                                Existing
                                <div>
                                    {eventsOfSelectedTag}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="title">
                                New
                                <div>
                                    <Event key={element.events.length} eventNames={[]} selectedTagID={selectedTag} onSave={updateEvent.bind(this)} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Events;
