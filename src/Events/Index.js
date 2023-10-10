// Libraries.

import React, { Component } from "react";

// Dependencies.


// Components. 
import Tags from "./Tags"
import Window from "../Window";



// Reducers.

import { selectedTagChanged, updateSelectedEvent } from "./Reducer";



class Events extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
        this.state.selectedTag = this.props.selectedTag;
        this.state.selectedEventName = "";
        this.state.selectedEvent = {
            name: "",
            reducer: {
                reducer: "",
                publishes: [],
                index: this.props.component.events.length
            }
        }
        this.state.eventID = "";
    }

    publishEvent(reducer) {
        this.setState({
            selectedEvent: {
                name: this.state.selectedEventName,
                reducer: {
                    reducer: reducer.reducer,
                    publishes: reducer.publishes
                }
            }
        })
    }


    render() {
        const component = this.props.component;

        // Report if no component is created.
        if (this.state.components.length == 0) {
            return null;
        }

        // Report if no component is selected.
        if (component.name === undefined && this.state.components.length != 0) {
            return null;
        }

        const selectedTag = this.state.selectedTag || "";
        let configurator, eventNames = [];

        // Check if it is a child component
        if (selectedTag.includes("child-component-")) {

            // Get child component name from the selected tag.
            let childComponentName = selectedTag.split("child-component-")[1];


            // Find the child component from the list of components.
            let childComponent = components.find(component => component.name === childComponentName);

            // Find events that are publishable from the child component to show in drop down.
            eventNames = []

            childComponent.events.forEach(event=>{
                event.reducer.publishes.forEach(publish=>{
                        if(publish.publishable){
                            eventNames.push(publish.publishName)
                        }
                })
            })

        }
        else {
            eventNames = component.events.filter(e => e.id === selectedTag.split("-")[1]).map(e => e.name);
        }



            return (
                <Window>
                <ul className="container events-tab">
                    <Tags component={component} onSelectedTagChanged={selectedTagChanged.bind(this)} />
                    <div className="title">
                        Event
                    </div>
                    <div>
                        <div class="spacing">
                            <label>Event name</label>
                            <input list="eventNames" type="text" onChange={updateSelectedEvent.bind(this)} value={this.state.selectedEventName} title="Event Name" />
                            <datalist id="eventNames">
                                {eventNames.map(eventName => <option value={eventName}></option>)}
                            </datalist>
                        </div>
                    </div>
                    <div className="event">
                        <div className="reducers">
                            <div className="title">
                                Reducer
                            </div>
                            <div>
                                <Reducer key={Math.ceil(Math.random() * 1000)} reducer={this.state.selectedEvent.reducer} onChange={this.publishEvent.bind(this)} />
                            </div>
                        </div>
                    </div>
                </ul>
                </Window>
            );
    }
}

export default Events;
