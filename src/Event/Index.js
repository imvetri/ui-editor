// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./Style.css"
import getMessages from "./Messages";
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

    updatePublishName(e) {
        this.setState({
            publishName: e.target.value
        })
    }

    updateEventType(e){
        this.setState({
            publishable: e.currentTarget.checked
        })
    }

    publishEvent() {
        this.props.onSave({
            name: this.state.name,
            reducer: this.state.reducer,
            index: this.props.index,
            publishable: this.state.publishable,
            publishName: this.state.publishName
        })
    }

    deleteEvent(){
        this.props.deleteEvent(this.props.index);
    }

    render() {

        if (this.props.selectedTagID === undefined) {
            return getMessages();
        }

        let publishName = this.state.publishable? <input type="text" onChange={this.updatePublishName.bind(this)} value={this.state.publishName} placeholder="Enter event publish name for other components to subscribe to"/> : null;

        return (
            <div className={style.event}>
                <input type="text" onChange={this.updateEventName.bind(this)} value={this.state.name} placeholder="Enter event name" title="Event Name"/>
                <br/>
                <textarea onChange={this.updateReducer.bind(this)} value={this.state.reducer} placeholder="Enter state reducer" title="Reducer"/>
                <div>
                    <label>
                    <input type="checkbox" onChange={this.updateEventType.bind(this)} checked={this.state.publishable? "checked": ""}/>
                    Publishable
                    </label>
                    {publishName}
                    <button onClick={this.publishEvent.bind(this)} id="saveEvent">Save</button>
                    <button onClick={this.deleteEvent.bind(this)} id="deleteEvent">Delete</button>
                </div>
            </div>
        );
    }
}

export default Event;
