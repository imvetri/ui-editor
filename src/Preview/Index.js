// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "../DynamicComponent";
import {validate} from "./validate";

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        try{
            validate(this.props.component)
        }
        catch(e){
            console.error(e);
        }


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