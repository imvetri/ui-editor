// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.

import ComponentEvent from "./ComponentEvent";

import { transpileJSX } from "../common/js/jsxTranspiler";

class ComponentEvents extends Component {
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
        debugger;
        const element = this.props.element;
        const events = element.events
                                .map((event,index)=><ComponentEvent key={index} index={index} event={event} onSave={this.updateEvent.bind(this)}/>)
        const filteredEvents = events.filter(event=>event.props.event.id===this.state.selectedElement)
        
        return (
            <div>
                Component Events
                <span>You can subscribe to other component's events</span>
                {events}
                <ComponentEvent key={element.events.length} onSave={this.updateEvent.bind(this)}/>
            </div>
        );
    }
}

export default ComponentEvents;
