// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.

import ComponentEvent from "./ComponentEvent";

class ComponentEvents extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    updateEvent(event){
        let elements = JSON.parse(JSON.stringify(this.state.elements))

        this.props.onEventsUpdate(elements);
    }

    render() {
        
        return (
            <div>
                Component Events
                <span>You can subscribe to other component's events</span>
                <ComponentEvent key={this.state.elements.length} onSave={this.updateEvent.bind(this)}/>
            </div>
        );
    }
}

export default ComponentEvents;
