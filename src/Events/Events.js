// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nodes from "../NodesComponent/Nodes";

// Reducers.

import { addEvent } from "./Reducer";
import { updateEventName, updateReducer } from "./Reducer";
import { editEventName, editReducer } from "./Reducer";

import { transpileJSX } from "../common/js/jsxTranspiler";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                name: "",
                reducer: ""
            },
            name: "",
            reducer: "",
            currentIndex: -1
        }
        this.updateEventName = updateEventName.bind(this);
        this.updateReducer = updateReducer.bind(this);
        this.addEvent = addEvent.bind(this);
        this.editEventName = addEvent.bind(this);
        this.editReducer = addEvent.bind(this);
    }

    render() {
        const events = this.props.events.map((event, index) =>
            <li key={index}>
                <input type="text" value={event.name} index={index} onChange={this.editEventName}/>
                <textarea value={event.reducer} index={index} onChange={this.editReducer}/>
                <button onClick={this.updateEvent}>Edit</button>
            </li>
        );
        var newElement = transpileJSX(this.props.markup, this.props.style, this.props.state, this.props.events);
        if(!newElement){
            console.log("no element got transpiled");
        }
        return (

            <div>
                Select a tag below to bind the events to.
                <Nodes node={newElement}/>
                <span>Write only the function definition, you have access to state,event argument</span>
                <ul>
                    {events}
                    <li>
                        <input type="text" onChange={this.updateEventName} value={this.state.event.name} />
                        <textarea onChange={this.updateReducer} value={this.state.event.reducer} />
                        <button onClick={this.addEvent}>Add</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Events;
