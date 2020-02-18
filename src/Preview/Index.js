// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "./DynamicComponent";

// Utilities.

import { readComponent } from "../utilities/Storage";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component
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
            <div className="container preview">
                <div className="title">
                    Preview
                </div>
                <DynamicComponent key={randomKey} component={this.state.component}/>
            </div>
        );
    }

}

export default Preview;