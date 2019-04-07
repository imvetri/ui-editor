// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.

import Nodes from "../Nodes/Nodes";
import Event from "./Event";

import { transpileJSX } from "../common/js/jsxTranspiler";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    updateEvent(event){
        let element = JSON.parse(JSON.stringify(this.state.element))

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
        e.currentTarget.value
    }
    render() {
        const element = this.props.element;
        const events = element.events.map((event,index)=><Event key={index} index={index} event={event} onSave={this.updateEvent.bind(this)}/>)
        var newElement = transpileJSX(element.markup, element.style, element.state, element.events);

        return (
            <div>
                Select a tag below to bind the events to.
                <Nodes node={newElement} onSelectedElementChanged={this.selectedElement.bind(this)}/>
                <span>Write only the function definition, you have access to state, event variables only</span>
                {events}
                <Event key={element.events.length} onSave={this.updateEvent.bind(this)}/>
            </div>
        );
    }
}

export default Events;
