// Libraries.

import React, { Component } from "react";

import "./Style.css"


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

            <div className="option-group">
                <p className="option-group-label">
                    <span className="title">Child Configurations</span>
                    <span className="panel expanded"></span>
                </p>
                <div className="content">
                    <div className="option">
                        <label>Override child state</label>
                        <input type="checkbox" onChange={this.toggelOverride.bind(this)} checked={this.state.override ? "checked" : ""} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Configurator;
