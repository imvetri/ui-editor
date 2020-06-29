// Libraries.

import React, { Component } from "react";

import "./Style.css"

// Components.

import Reducers from "./Reducers/Index";

// Reducers. 

import {updateEventName} from "./Reducer";

// Events.


class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        if (this.props.selectedTagID === undefined) {
            return "Select ID";
        }

        return (
            <div className="event">
                {this.props.event ? <Reducers event={this.props.event}/> : null}
            </div>
        );
    }
}

export default Event;
