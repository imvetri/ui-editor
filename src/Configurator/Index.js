// Libraries.

import React, { Component } from "react";

import "./Style.css"


class Configurator extends Component {
    constructor(props) {
        super(props);

        let config = JSON.parse(this.props.parent.config)[this.props.childName] || { override: false, showHideProp: ""}
        
        this.state = {
            override: config.override,
            showHideProp: config.showHideProp
        }
    }

    toggelOverride(){
        this.setState({
            override: !this.state.override
        })

        this.props.onChange({
            config: {
                showHideProp: this.state.showHideProp,
                override: !this.state.override
            },
            childName: this.props.childName,
            parentName: this.props.parent.name
        });
    }

    showHideProp(e){
        this.setState({
            showHideProp: e.target.value
        })
    }

    saveConfig(){
        this.props.onChange({
            config: {
                showHideProp: this.state.showHideProp,
                override: this.state.override
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
                    <li>
                        <label>Show/Hide State property</label>
                        <input type="text" onChange={this.showHideProp.bind(this)} value={this.state.showHideProp} />
                        <button onClick={this.saveConfig.bind(this)}><i className="fas fa-save"></i></button>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Configurator;
