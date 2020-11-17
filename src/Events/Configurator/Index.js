// Libraries.

import React, { Component } from "react";

import "./Style.css"


class Configurator extends Component {
    constructor(props) {
        super(props);

        let config = JSON.parse(this.props.parent.config)[this.props.childName] || { override: false, overrideEvents: false}
        
        this.state = {
            override: config.override,
            overrideEvents: config.overrideEvents
        }
    }

    toggelOverride(){
        this.setState({
            override: !this.state.override
        })

        this.props.onChange({
            config: {
                override: !this.state.override,
                overrideEvents: this.state.overrideEvents
            },
            childName: this.props.childName,
            parentName: this.props.parent.name
        });
    }

    toggelOverrideEvents(){
        this.setState({
            overrideEvents: !this.state.overrideEvents
        })

        this.props.onChange({
            config: {
                override: this.state.override,
                overrideEvents: !this.state.overrideEvents
            },
            childName: this.props.childName,
            parentName: this.props.parent.name
        });
    }

    render() {

        return (

            <div>
                <div className="title">Child Configurations</div>
                <div className="spacing">
                    <label>Override state</label>
                    <input type="checkbox" onChange={this.toggelOverride.bind(this)} checked={this.state.override ? "checked" : ""} />
                </div>
                <div className="spacing">
                    <label>Override events</label>
                    <input type="checkbox" onChange={this.toggelOverrideEvents.bind(this)} checked={this.state.overrideEvents ? "checked" : ""} />
                </div>
            </div>

        );
    }
}

export default Configurator;
