// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "../DynamicComponent";

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        // Helps to rerender when changes to markup/events are made to the component and preview them.
        let randomKey = this.props.component.id*(~~(Math.random()*10));
        return (
            <div className="container preview">
                <div className="title">
                    Preview
                </div>
                <DynamicComponent key={randomKey} component={this.props.component}/>
            </div>
        );
    }

}

export default Preview;