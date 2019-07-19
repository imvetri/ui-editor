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
            renderList:""
        }
    }

    updateRenderList (e) {
        this.setState({
            renderList: e.currentTarget.value
        })
    }

    updateEvent (e) {
        this.setState({
            eventName: e.currentTarget.value
        })
    }

    getPropertyContainingProps(obj){
        // Fetch list of props from child.
        let props = [];
        let state;
        try{
            state = JSON.parse(obj.state);
        }
        catch(e){
            console.error("Error: Child state is an invalid json, try an online validator on below string")
            console.log(child.state);
        }
        for(let property in state){
            if(state[property].includes("prop")){
                props.push(property);
            }
        }
        return props;
    }

    render() {

        // Get the publishable events of selected child. child publishable events === parent subscribed events.
        debugger;
        let publishableEvents = this.props.parent.children.find(child=>child.name.includes(this.props.child.name)).subscribableEvents;

        let props = this.getPropertyContainingProps(this.props.child);

        return (
            <div>
                <h5>Configurator</h5>
                <section className="renderList">
                    <label>
                        Render List
                        <textarea type="text" value={this.state.renderList} onChange={this.updateRenderList.bind(this)}/>
                    </label>
                </section>
                <section>
                    <EventsConfigurator 
                        publishableEvents = {publishableEvents}
                        onEventsUpdate ={this.updateEvent}/>
                    <PropsConfigurator  
                        possibleProps = {props}
                        onPropsUpdate ={this.updateProps}/>
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
                    reducer: ""
                }
            }))
        }
    ]
}

export default Configurator;