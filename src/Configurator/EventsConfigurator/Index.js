// Libraries.

import React, { Component } from "react";

// Dependencies.

import style from "./Style.css";
import EventConfigurator from "../EventConfigurator";

class EventsConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    updateEvent(event){
        this.props.onEventsUpdate(event);
    }

    render() {
        let existingEvents = this.props.publishableEvents.map((event,index)=> <EventConfigurator event={event} onSave={this.updateEvent.bind(this)} key={index} index={index}/>);
        return (
            <div className={style.events}>
                <div className={style.existingEvents}>
                    <h6>Publishable Events (Event published from child)</h6>
                    {existingEvents}
                </div>
            </div>
        );
    }
}

export default EventsConfigurator;
