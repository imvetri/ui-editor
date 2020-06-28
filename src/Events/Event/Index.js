// Libraries.

import React, { Component } from "react";

import "./Style.css"

// Components.

import Reducers from "./Reducers/Index";

// Reducers. 

import {updateEventName} from "./Reducer";

// Events.

import {publishEvent, deleteEvent} from './Events';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.event ? this.props.event.name : "",
            reducer: this.props.event ? this.props.event.reducer : "",
            publishable: this.props.event ? this.props.event.publishable : "",
            publishName: this.props.event ? this.props.event.publishName : "",
        }
    }

    render() {

        if (this.props.selectedTagID === undefined) {
            return "Select ID";
        }

        return (
            <div className="event">

                {this.props.event ? <Reducers event={this.props.event}/> : null}

                <div>
                    <button onClick={publishEvent.bind(this)} id="saveEvent"><i className="fas fa-save"></i>Save</button>
                    <button onClick={deleteEvent.bind(this)} id="deleteEvent"><i className="fas fa-trash"></i>Delete</button>
                </div>
            </div>
        );
    }
}

export default Event;
