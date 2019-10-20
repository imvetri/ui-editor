// Libraries.

import React, { Component } from "react";

import style from "./Style.css"

class Configurator extends Component {
    constructor(props) {
        super(props);

        let child = this.props.parent[this.props.childName];
        
        this.state = {
            override: child && child.config && child.config.override
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
