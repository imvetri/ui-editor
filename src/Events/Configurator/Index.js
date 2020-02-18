// Libraries.

import React, { Component } from "react";

import "./Style.css"


class Configurator extends Component {
    constructor(props) {
        super(props);

        let config = JSON.parse(this.props.parent.config)[this.props.childName] || { override: false}
        
        this.state = {
            override: config.override,
        }
    }

    toggelOverride(){
        this.setState({
            override: !this.state.override
        })

        this.props.onChange({
            config: {
                override: !this.state.override
            },
            childName: this.props.childName,
            parentName: this.props.parent.name
        });
    }

    saveConfig(){
        this.props.onChange({
            config: {
                override: this.state.override,
            },
            childName: this.props.childName,
            parentName: this.props.parent.name
        });
    }

    render() {

        return (

            <div>
                <div className="title">Child Configurations</div>
                <ul>
                    <li>
                        <label>Override state</label>
                        <input type="checkbox" onChange={this.toggelOverride.bind(this)} checked={this.state.override ? "checked" : ""} />
                    </li>
                </ul>
            </div>

        );
    }
}

export default Configurator;
