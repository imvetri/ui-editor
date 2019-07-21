// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Components.
import EventsConfigurator from "./EventsConfigurator";
import PropsConfigurator from "./PropsConfigurator";

class Configurator extends Component {
    constructor(props) {
        super(props);
        this.state={
            publishableEvents : this.props.parent.children.find(child=>child.name.includes(this.props.child.name)).subscribableEvents,
            properties : this.props.parent.children.find(child=>child.name.includes(this.props.child.name)).properties
        }
    }

    updateEvent (publishableEvent) {
        let publishableEvents = this.state.publishableEvents;
        
        publishableEvents[publishableEvent.index].publishName = publishableEvent.publishName;
        publishableEvents[publishableEvent.index].reducer = publishableEvent.reducer;
        
        this.props.onChange({
            subscribableEvents: publishableEvents,
            properties: this.state.properties
        });

        this.setState({
            subscribableEvents: publishableEvents
        });
    }

    updateProps (property) {

        let properties = this.state.properties;
        
        properties[property.index].property = property.property;
        properties[property.index].value = property.value;
        
        this.props.onChange({
            subscribableEvents: this.state.publishableEvents,
            properties: properties
        });

        this.setState({
            properties
        });
    }

    render() {

        return (
            <div>
                <h5>Configurator</h5>
                <section>
                    <EventsConfigurator 
                        publishableEvents = {this.state.publishableEvents}
                        onEventsUpdate ={this.updateEvent.bind(this)}/>
                    <PropsConfigurator  
                        properties = {this.state.properties}
                        onPropsUpdate ={this.updateProps.bind(this)}/>
                </section>
            </div>
        );
    }
}

let child = {
    name: "HelloComponent",
    events: [
        {
            "publishable": true,
            "publishName": "onNewMessage",
        },
        {
            "publishable": true,
            "publishName": "onSubmission"
        }
    ],
    state: {
        content: "this.props.content || 'Hello'"
    }
}

let parent = {
    name: "ShowAndHideUtil",
    children: [
        {   
            name: "HelloComponent",
            subscribableEvents: child.events.map((event=>{
                return {
                    publishName: event.publishName,
                    reducer: "",
                    previousReducer: event.reducer
                }
            }))
        }
    ]
}

export default Configurator;