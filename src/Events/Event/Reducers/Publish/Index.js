// Libraries.

import React, { Component } from "react";

// Events.

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishable: this.props.publish.publishable,
            publishName: this.props.publish.publishName,
            publishCondition: this.props.publish.publishCondition
        }
    }

    onButtonClickSave(){
        // Reminder - Never bind inline calls to button. Ruined my morning.
        this.props.onSave(this.state, this.props.index)
    }

    onButtonClickdelete(){
        this.props.onDelete(this.state, this.props.index)
    }

    render() {

        let state = this.state;

        return (
            <div>
                <div class="spacing">
                    <label>Publishable</label>
                    <input type="checkbox" onChange={(e)=>{this.setState({publishable: !state.publishable})}} checked={state.publishable ? "checked" : ""} />
                </div>
                {
                state.publishable ? 
                    <div>
                            
                        <div class="spacing">
                            <label>Publish Name</label>
                            <input type="text" onChange={(e)=>{this.setState({publishName: e.currentTarget.value})}} value={state.publishName}/>
                        </div>
                        <div class="spacing">
                            <label>Publish Condition</label>
                            <input type="text" onChange={(e)=>{this.setState({publishCondition: e.currentTarget.value})}} value={state.publishCondition}/>
                        </div>
                        <button onClick={this.onButtonClickSave.bind(this)}>Save</button> 
                        {/* Reminder - dont write inline code for event callback. Beautifully ruined my morning. */}
                        <button onClick={this.onButtonClickdelete.bind(this)}>Delete</button>
                    </div>
                : null}
            </div>
        );
    }
}

export default Publish;
