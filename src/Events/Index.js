// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import { saveComponentsToWindow, getNestedComponents } from "../utilities/nestedComponentSetup";

import style from "./Style.css";
import getHelp from "./Help";

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

    updateEvent(event){
        let element = JSON.parse(JSON.stringify(this.state.element))
        event.id = this.state.selectedTag.split("-")[1];
        // Add 
        if(event.index===undefined){
            element.events.push(event);
        } else{
            // Edit
            element.events[event.index] = event;
        }

        this.props.onEventsUpdate(element.events);
    }

    selectedTagChanged(e){
        this.setState({
            selectedTag: e.currentTarget.value
        })
    }

    deleteEvent(index){

        // Get current component.
        let element = JSON.parse(JSON.stringify(this.state.element));

        // Remove the event to be deleted.
        element.events.splice(index,1);

        // Update elements with new events.
        this.props.onEventsUpdate(element.events);
    }
    render() {
        const element = this.props.element;

        // Report if no component is created.
        if(this.state.elements.length==0) {
            return (
                <div className={style.events}>
                    <h4>Events, Actions, Reducers</h4>
                    <p>Looks like you do not have any Web component created. Type some "html" on the right "Editor" tab</p>
                </div>
            );
        }

        // Report if no component is selected.
        if(element.name===undefined && this.state.elements.length!=0){
            return (
                <div className={style.events}>
                    <h4>Events, Actions, Reducers</h4>
                    <p>Looks like you have not selected any component. Click on any of the component in the left pane.</p>
                </div>
            )
        }

        let nestedComponents = getNestedComponents(element.markup);

        // Check if the component has nested components, make it available globally for preview.
        if(nestedComponents.length>0){
            saveComponentsToWindow(nestedComponents);

            // Render nestedComponent in nodes.
            // If selected, show in a drop down list of published events.
        }
        const selectedTag = this.state.selectedTag || "";

        const events = element.events
                                .map((event,index)=><Event key={index} index={index} event={event} selectedTagID={selectedTag} onSave={this.updateEvent.bind(this)} deleteEvent={this.deleteEvent.bind(this)}/>);
        const eventsOfSelectedTag = selectedTag? events.filter(event=>selectedTag.includes(event.props.event.id)): null;

        let nodeTree = getNodeTree(element.markup, element.style, element.state, element.events);

        // Report error.
        if(nodeTree.error !== undefined){
            return getMessages(nodeTree.error);
        }

        // Report error if component is not 
        if(nodeTree.result === undefined && this.state.elements.length!=0) {
            return (
                <div className={style.events}>
                    <h4>Events, Actions, Reducers</h4>
                    <p>Current component does not have a valid markup or no element is selected</p>
                </div>
            );
        }

        return (
            <div className={style.events}>
                <h4>Events, Actions, Reducers</h4>
                <p>Select a tag below to show/add the events.</p>
                <Nodes node={nodeTree.result} onSelectedTagChanged={this.selectedTagChanged.bind(this)}/>
                {getHelp()}
                <div className={style.existingEvents}>
                    <h5>Existing Events</h5>
                    {eventsOfSelectedTag}
                </div>
            </div>
        );
    }
}

export default Events;
