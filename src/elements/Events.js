// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Reducers.

import { updateEventName, updateReducer, addEvent} from "./reducers/Events";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                name: "",
                reducer: ""
            }
        }
        this.updateEventName = updateEventName.bind(this);
        this.updateReducer = updateReducer.bind(this);
    }

    render() {
        const events = this.props.events.map((event, index) =>
            <li key={index}>
                <input type="text" value={event.name} />
                <textarea value={event.reducer} />
            </li>
        );
        return (

            <div>
                <ul>
                    {events}
                    <li>
                        <input type="text" onChange={this.updateEventName} value={this.state.event.name} />
                        <textarea onChange={this.updateReducer} value={this.state.event.reducer} />
                        <button onClick={this.addEvent.bind(this)}>Add</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Events;
