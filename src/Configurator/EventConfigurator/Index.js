// Libraries.

import React, { Component } from "react";

import {updateReducer, reset} from "./Reducer";

import style from "./Style.css"
class EventConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishName: this.props.event.publishName ? this.props.event.publishName : "",
            reducer: this.props.event.reducer ? this.props.event.reducer : ""
        }
    }

    publishEvent() {
        this.props.onSave({
            publishName: this.state.publishName,
            reducer: this.state.reducer,
            index: this.props.index
        })
    }

    render() {

        return (
            <div className={style.event}>
                <div className={style.disableEditOverlay}>
                    <div>
                        <h5>Child Events - Reference</h5>
                        <input type="text" value={this.state.publishName} disabled title="Event published from child. Read only"/>
                        <textarea value={this.props.event.previousReducer} disabled/>   
                    </div>
                </div>
                <textarea onChange={updateReducer.bind(this)} value={this.state.reducer} placeholder="Enter state reducer" title="Variables allowed to access - childState, state. Please do not ask for event object here. Have your child state any data related to child"/>
                <div>
                    <button onClick={reset.bind(this)} title="Resets the code to empty">Reset</button>
                    <button onClick={this.publishEvent.bind(this)} id="saveEvent">Save</button>
                </div>
            </div>
        );
    }
}

export default EventConfigurator;
