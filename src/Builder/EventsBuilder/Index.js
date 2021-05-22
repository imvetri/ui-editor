// Libraries.

import React, { Component } from "react";

// Styles.

import "./style.css";

class EventsBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.state || {
            "style": {
                "top": "100px",
                "left": "408px",
                "position": "absolute"
            },
            "textAreaStyle": {
                "position": "absolute",
                "top": "40px",
                "left": "0px",
                "width": "150px"
            },
            "eventName": "onClick",
            "eventReducer": "on",
            "events": {
                "onClick": "",
                "onMouseOut": "Click"
            }
        };
    }


    eventsonMouseMove(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation();
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    eventsonMouseDown(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation();
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    eventsonMouseOver(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation();
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    eventsonMouseUp(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation();
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    eventNameonChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.eventName = e.target.value;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    eventsonMouseOut(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        console.log("Mouse out");
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onSubmit ? this.props.onSubmit(e) : null;
        }
    }

    textAreaonChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.events[state.eventName] = e.currentTarget.value
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    render() {
        return (<div class="eventsBuilder" id="events" onMouseOut={this.eventsonMouseOut.bind(this)} onMouseUp={this.eventsonMouseUp.bind(this)} onMouseOver={this.eventsonMouseOver.bind(this)} onMouseDown={this.eventsonMouseDown.bind(this)} onMouseMove={this.eventsonMouseMove.bind(this)} style={this.state.style} id="EventsBuilder" onClick={(e) => { var state = JSON.parse(JSON.stringify(this.state)); }} onMouseOut={(e) => { var state = JSON.parse(JSON.stringify(this.state)); Click }}>{this.props.children}
            <select name="mode" value={this.state.eventName} id="eventName" onChange={this.eventNameonChange.bind(this)}>
                <optgroup label="Events">
                    {Object.keys(this.state.events).map(event => <option value={event}>{event}</option>)}
                </optgroup>
            </select>
            <textarea id="textArea" onChange={this.textAreaonChange.bind(this)} style={this.state.textAreaStyle} value={this.state.events[this.state.eventName]}></textarea>
        </div>)
    }
}


export default EventsBuilder;