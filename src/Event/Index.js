// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./Style.css"

import MessagesComponent from "../MessagesComponent";
class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.event ? this.props.event.name : "",
            reducer: this.props.event ? this.props.event.reducer : ""
        }
    }

    updateEventName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updateReducer(e) {
        this.setState({
            reducer: e.target.value
        })
    }

    publishEvent() {
        this.props.onSave({
            name: this.state.name,
            reducer: this.state.reducer,
            index: this.props.index
        })
    }

    render() {

        if (this.props.selectedTagID === undefined) {
            let messages = [{
                text:"INFO: Select any tag to bind events from the Events tab",
                type:"info"
            },
            {
                text:"INFO: Click 'Preview' to see the component rendered on right most pane(Preview pane)",
                type:"info"
            }]
            return (
                <div>
                    <MessagesComponent messages={messages}/>
                </div>            
            )
        }

        return (
            <div>
                <input type="text" onChange={this.updateEventName.bind(this)} value={this.state.name} />
                <textarea onChange={this.updateReducer.bind(this)} value={this.state.reducer} />
                <button onClick={this.publishEvent.bind(this)}>Save</button>
            </div>
        );
    }
}

export default Event;
