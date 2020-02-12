// Libraries.

import React, { Component } from "react";

import "./Style.css"


class Configurator extends Component {
    constructor(props) {
        super(props);

        let config = JSON.parse(this.props.parent.config)[this.props.childName] || { override: false, showHideProp: ""}
        
        this.state = {
            override: config.override,
            showHideProp: config.showHideProp,
            renderListProp: config.renderListProp || ""
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

    renderListProp(e){
        this.setState({
            renderListProp: e.target.value
        })
    }

    saveConfig(){
        this.props.onChange({
            config: {
                showHideProp: this.state.showHideProp,
                override: this.state.override,
                renderListProp: this.state.renderListProp
            },
            childName: this.props.childName,
            parentName: this.props.parent.name
        });
    }

    render() {

        let state = JSON.parse(this.props.parent.state);
        let stateProps = Object.keys(state);

        let booleanProps = stateProps.filter(prop=>typeof state[prop] === "boolean").map((prop,i)=><option key={i} value={prop}></option>);
        let listProps = stateProps.filter(prop=>Array.isArray(state[prop])).map((prop,i)=><option key={i} value={prop}></option>);

        return (

            <div>
                <div className="title">Child Configurations</div>
                <ul>
                    <li>
                        <label>Override state</label>
                        <input type="checkbox" onChange={this.toggelOverride.bind(this)} checked={this.state.override ? "checked" : ""} />
                    </li>
                    <li>
                        <label>Choose Show/Hide - State property</label>
                        <input list="booleanProps" type="text" onChange={this.showHideProp.bind(this)} value={this.state.showHideProp} />
                        <button onClick={this.saveConfig.bind(this)}><i className="fas fa-save"></i></button>
                        <datalist id="booleanProps">
                            {booleanProps}
                        </datalist>
                    </li>
                    <li>
                        <label title="Description: The array item should reflect initial state of the component for it to render as expected.">Choose Array list - State property</label>
                        <input list="listProps" type="text" onChange={this.renderListProp.bind(this)} value={this.state.renderListProp} />
                        <button onClick={this.saveConfig.bind(this)}><i className="fas fa-save"></i></button>
                        <datalist id="listProps">
                            {listProps}
                        </datalist>
                    </li>
                </ul>
               
            </div>

        );
    }
}

export default Configurator;
