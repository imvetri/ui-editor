// Libraries.

import React, { Component } from "react";

import "./Style.css"

// Components.

import getMessages from "./Messages";
import {UnControlled as CodeMirror} from 'react-codemirror2';

// Reducers. 

import {updateEventName, updateEventType, updatePublishName} from "./Reducer";

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
            return getMessages();
        }

        let publishName = this.state.publishable? <input type="text" onChange={updatePublishName.bind(this)} value={this.state.publishName} placeholder="Enter event publish name for other components to subscribe to"/> : null;
        let eventNames = this.props.eventNames.map(eventName=><option value={eventName}></option>)

        return (
            <div className="event">
                <div class="spacing">
                    <label>Event name</label>
                    <input list="events" type="text" onChange={updateEventName.bind(this)} value={this.state.name} title="Event Name"/>
                    <datalist id="events">
                        {eventNames}
                    </datalist>
                </div>

                <div class="spacing">
                    <label>
                        Publishable
                    </label>
                    <input type="checkbox" onChange={updateEventType.bind(this)} checked={this.state.publishable? "checked": ""}/>

                    {publishName}
                </div>

                <div class="spacing">
                    <label>Event reducer</label>
                    <CodeMirror
                            value={this.state.reducer}
                            autoCursor={false}
                            options={{
                                lineNumbers: false,
                                mode: "text/javascript",
                                theme: "darcula",
                                indentWithTabs: false,
                                smartIndent: true
                            }}
                            onChange={(editor, data, reducer) => {
                                this.setState({
                                    reducer: reducer
                                })
                            }}
                        />
                </div>

                <div>
                    <button onClick={publishEvent.bind(this)} id="saveEvent"><i className="fas fa-save"></i>Save</button>
                    <button onClick={deleteEvent.bind(this)} id="deleteEvent"><i className="fas fa-trash"></i>Delete</button>
                </div>
            </div>
        );
    }
}

export default Event;
