// Libraries.

import React, { Component } from "react";

import "./Style.css"

import CssBuilder from "../CssBuilder";

class Configurator extends Component {
    constructor(props) {
        super(props);

        let config = JSON.parse(this.props.parent.config)[this.props.childName] || {overideState:false};
        
        this.state = {
            override: config.overideState
        }
    }

    toggelOverride(){
        this.setState({
            override: !this.state.override
        })

        this.props.onChange({
            override: !this.state.override,
            childName: this.props.childName,
            parentName: this.props.parent.name
        });
    }

    render() {

        return (
            <div className="configurator">
                <h5>Child Configurator</h5>
                <label>
                    <input type="checkbox" onChange={this.toggelOverride.bind(this)} checked={this.state.override ? "checked" : ""} />
                    Override child state
                </label>
                <CssBuilder />
            </div>
        );
    }
}

export default Configurator;
