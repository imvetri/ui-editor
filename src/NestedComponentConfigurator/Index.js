// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./Style.css"

class NestedComponentConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // Get the config from local storage for the parent component.

        let parent = this.props.parent;
        let updatedParent = JSON.parse(localStorage.getItem("ui-editor")).find(component=>component.name.includes(this.props.parent.name));
        updatedParent.children[this.props.child.name] = updatedParent.children[this.props.child.name] || {};
        updatedParent.children[this.props.child.name].config = updatedParent.children[this.props.child.name].config || {};
        this.state.showCondition = updatedParent.children[this.props.child.name].config.showCondition;
        this.state.hideCondition = updatedParent.children[this.props.child.name].config.hideCondition;
    }

    updateShowCondition (event) {
        this.setState({
            showCondition: event.currentTarget.value
        })
    }

    updateHideCondition (event) {
        this.setState({
            hideCondition: event.currentTarget.value
        })
    }

    // Save the config details to the parent.children.childName.config
    saveDetails () {
        let config = {
            showCondition: this.state.showCondition,
            hideCondition: this.state.hideCondition
        }

        // Fetch child name and the parent from the props.
        let childName = this.props.child.name;
        let parent = this.props.parent;

        // Update the parent with child config.
        parent.children[childName] = parent.children[childName] || {};

        parent.children[childName].config = config;

        // Read parent compnent from loca storalge.
        let components = JSON.parse(localStorage.getItem("ui-editor"));

        let parentComponent = components.find(component=>component.name===parent.name);
        parentComponent.children = parent.children;

        // Write to local storage.
        localStorage.setItem("ui-editor", JSON.stringify(components));

        
    }

    render() {

        return (
            <div className={style.event}>
                {this.props.child.name}
                <section>
                    <div>
                        <label>
                        Show.
                        <textarea onChange={this.updateShowCondition.bind(this)} value={this.state.showCondition} placeholder="Enter show condition name" title="Ex: state.title==='hey'; expression should eval to boolean"/>
                        </label>
                    </div>

                    <div>                    
                        <label>
                            Hide.
                            <textarea onChange={this.updateHideCondition.bind(this)} value={this.state.hideCondition} placeholder="EnExisting Eventster hide condition name" title="Ex: state.title==='hello'; expression should eval to boolean"/>
                        </label>
                    </div>

                    <label>
                        List of publishable events of the component.
                        {this.props.child.events.filter(event=>event.publishable).map(event=><li>{event.publishName}</li>)}
                    </label>
                </section>
                <button onClick={this.saveDetails.bind(this)}>Save</button>
            </div>
        );
    }
}

export default NestedComponentConfigurator;
