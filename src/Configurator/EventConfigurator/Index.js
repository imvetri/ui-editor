// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./Style.css"
class EventConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishName: this.props.event ? this.props.event.publishName : "",
            reducer: ""
        }
    }

    updateReducer(e) {
        this.setState({
            reducer: e.target.value
        })
    }

    publishEvent() {
        this.props.onSave({
            publishName: this.state.publishName,
            reducer: this.state.reducer,
            index: this.props.index
        })
    }

    reset(){
        this.setState({
            reducer: ""
        })
    }

    render() {

        return (
            <div className={style.event}>
                <input type="text" value={this.state.publishName} disabled title="Event published from child. Read only"/>
                <textarea onChange={this.updateReducer.bind(this)} value={this.state.reducer} placeholder="Enter state reducer" title="Variables allowed to access - childState, state. Please do not ask for event object here. Have your child state any data related to child"/>
                <div>
                    <button onClick={this.reset.bind(this)} title="Resets the code to empty">Reset</button>
                    <button onClick={this.publishEvent.bind(this)} id="saveEvent">Save</button>
                </div>
            </div>
        );
    }
}

export default EventConfigurator;
