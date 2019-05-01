// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.

import style from "./Style.css"

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
 */
import { getNodeTree } from "../utilities/compile-jsx";

// nodetree is passed to <Nodes /> which takes care of rendering it. <Nodes /> also publishes selected node/teg whenever it is changed.

import Nodes from "../Nodes";

/*
 * How it provides option to write event and callback? 
 * Elements object contains details about event in event property. Each event has name, callback/reducer function, id. It is rendered using <Event />
 */
import Event from "../Event";
/*
 * Tags allow us to bind events for components having more than one tag. It checkes tag is selected or not whenever user tries to save the changes.
 * 
 */
class Events extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    updateEvent(event){
        let element = JSON.parse(JSON.stringify(this.state.element))
        event.id = this.state.selectedElement;
        // Add 
        if(event.index===undefined){
            element.events.push(event);
        } else{
            // Edit
            element.events[event.index] = event;
        }

        this.props.onEventsUpdate(element.events);
    }

    selectedElement(e){
        this.setState({
            selectedElement: e.currentTarget.value
        })
    }
    render() {
        const element = this.props.element;
        const events = element.events
                                .map((event,index)=><Event key={index} index={index} event={event} onSave={this.updateEvent.bind(this)}/>)
                                .filter(event=>event.props.event.id===this.state.selectedElement)

        let nodeTree = getNodeTree(element.markup, element.style, element.state, element.events);

        if(!nodeTree){
            return (
                <div className={style.error}>
                    ERROR : newElement.
                    <code>developer log: look in console related to eval</code>
                </div>
            )
        }
        return (
            <div className={style.events}>
                <h4>Events</h4>
                <p>Select a tag below to bind the events to.</p>
                <Nodes node={nodeTree} onSelectedElementChanged={this.selectedElement.bind(this)}/>
                <p>Use argument[0] to access event object. write this.setState(Object) to update state</p>
                {events}
                <Event key={element.events.length} onSave={this.updateEvent.bind(this)}/>
            </div>
        );
    }
}

export default Events;
