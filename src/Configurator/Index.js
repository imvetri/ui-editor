// Libraries.

import React, { Component } from "react";

import style from "./Style.css"

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
            <div className={style.configurator}>
                <h5>Child Configurator</h5>
                <label>
                    <input type="checkbox" onChange={this.toggelOverride.bind(this)} checked={this.state.override ? "checked" : ""} />
                    Override child state
                </label>
            </div>
        );
    }
}

export default Configurator;