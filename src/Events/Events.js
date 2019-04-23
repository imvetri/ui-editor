// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.

import Nodes from "../Nodes/Nodes";
import Event from "./Event";
import style from "./Events.css"

import { transpileJSX } from "../common/js/jsxTranspiler";

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
        
        var newElement = transpileJSX(element.markup, element.style, element.state, element.events);

        return (
            <div className={style.events}>
                <h4>Events</h4>
                <p>Select a tag below to bind the events to.</p>
                <Nodes node={newElement} onSelectedElementChanged={this.selectedElement.bind(this)}/>
                <p>Use argument[0] to access event object. write this.setState(Object) to update state</p>
                {events}
                <Event key={element.events.length} onSave={this.updateEvent.bind(this)}/>
            </div>
        );
    }
}

export default Events;
