// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "./DynamicComponent";

// Utilities.

/**
 *  <Preview
        key={Math.ceil(Math.random() * 1000)}
        component={selectedComponent}
        title="Preview"
        onSave={this.saveElement}
    >
    </Preview>
 */

import { readComponent } from "../utilities/Storage";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component,
            display: "mobile"
        }
    }

    refresh( ){
        this.setState({
            component: readComponent(this.state.component.name)
        })
    }


    render() {

        // Helps to rerender when changes to markup/events are made to the component and preview them.
        let randomKey = this.props.component.id*(~~(Math.random()*10));
        return (
            <div  className={`container preview ${this.state.display}`}>
                <div className="title">
                    Preview
                </div>
                <div className="dynamicComponent">
                    <DynamicComponent onSave={this.props.onSave} key={randomKey} component={this.state.component}/>
                </div>
            </div>
        );
    }

}

export default Preview;